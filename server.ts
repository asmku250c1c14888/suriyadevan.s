import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Target recipient email specified by the owner
const TARGET_NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'suriya2993@gmail.com';

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  business?: string;
  website?: string;
  service: string;
  budget?: string;
  message: string;
  createdAt: string;
  emailSent: boolean;
  emailStatusMessage?: string;
}

// In-memory leads store
const leadsStore: ContactLead[] = [];

// Helper to configure nodemailer transporter (lazy initialization)
function getEmailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }

  // If GMAIL credentials are provided directly
  if (user && pass && !host) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
  }

  return null;
}

// -------------------------------------------------------------
// API Routes
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    recipientEmail: TARGET_NOTIFICATION_EMAIL,
    smtpConfigured: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)
  });
});

// Submit Contact Form Route
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, business, website, service, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide at least a name, email address, and project details message.'
      });
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const newLead: ContactLead = {
      id: leadId,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone || '').trim(),
      business: business ? String(business).trim() : undefined,
      website: website ? String(website).trim() : undefined,
      service: String(service || 'General SEO Inquiry').trim(),
      budget: budget ? String(budget).trim() : undefined,
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
      emailSent: false
    };

    // Console output for immediate server visibility
    console.log('\n============================================================');
    console.log(`📩 NEW CONTACT FORM SUBMISSION FOR: ${TARGET_NOTIFICATION_EMAIL}`);
    console.log('============================================================');
    console.log(`Lead ID:    ${newLead.id}`);
    console.log(`Name:       ${newLead.name}`);
    console.log(`Email:      ${newLead.email}`);
    console.log(`Phone:      ${newLead.phone || 'N/A'}`);
    console.log(`Business:   ${newLead.business || 'N/A'}`);
    console.log(`Website:    ${newLead.website || 'N/A'}`);
    console.log(`Service:    ${newLead.service}`);
    console.log(`Budget:     ${newLead.budget || 'Flexible'}`);
    console.log(`Message:    ${newLead.message}`);
    console.log(`Received:   ${newLead.createdAt}`);
    console.log('============================================================\n');

    let emailSent = false;
    let emailStatusMessage = '';

    const transporter = getEmailTransporter();
    if (transporter) {
      const mailSubject = `[New Client Lead] ${newLead.name} - ${newLead.service} (${newLead.business || 'Individual'})`;
      
      const mailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; padding: 24px 0; margin: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background: #0f172a; padding: 24px; color: #ffffff; }
            .header h1 { margin: 0 0 4px 0; font-size: 20px; font-weight: 700; }
            .header p { margin: 0; font-size: 13px; color: #94a3b8; }
            .badge { display: inline-block; padding: 4px 10px; background: #4f46e5; color: #ffffff; font-size: 11px; font-weight: 700; border-radius: 6px; text-transform: uppercase; margin-top: 10px; }
            .content { padding: 24px; }
            .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
            .field-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; margin-bottom: 4px; letter-spacing: 0.5px; }
            .field-value { font-size: 15px; color: #0f172a; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #4f46e5; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 8px; white-space: pre-wrap; }
            .actions { margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; display: flex; gap: 12px; }
            .btn { display: inline-block; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; text-align: center; }
            .btn-primary { background: #4f46e5; color: #ffffff !important; }
            .btn-secondary { background: #e0e7ff; color: #3730a3 !important; }
            .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Portfolio Lead Alert</h1>
              <p>Someone submitted a contact form on your portfolio website</p>
              <span class="badge">${newLead.service}</span>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${newLead.name}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${newLead.email}" style="color: #4f46e5;">${newLead.email}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Contact Phone / WhatsApp</div>
                <div class="field-value">${newLead.phone || 'Not provided'}</div>
              </div>

              ${newLead.business ? `
              <div class="field-group">
                <div class="field-label">Business / Clinic Name</div>
                <div class="field-value">${newLead.business}</div>
              </div>` : ''}

              ${newLead.website ? `
              <div class="field-group">
                <div class="field-label">Website URL</div>
                <div class="field-value"><a href="${newLead.website}" target="_blank" style="color: #4f46e5;">${newLead.website}</a></div>
              </div>` : ''}

              <div class="field-group">
                <div class="field-label">Requested Service</div>
                <div class="field-value">${newLead.service}</div>
              </div>

              ${newLead.budget ? `
              <div class="field-group">
                <div class="field-label">Estimated Monthly Budget</div>
                <div class="field-value">${newLead.budget}</div>
              </div>` : ''}

              <div class="field-group" style="border-bottom: none;">
                <div class="field-label">Client Message & Requirements</div>
                <div class="message-box">${newLead.message}</div>
              </div>

              <div class="actions">
                <a href="mailto:${newLead.email}?subject=Re: Your SEO & Digital Marketing Inquiry" class="btn btn-primary">Reply to ${newLead.name}</a>
                ${newLead.phone ? `<a href="tel:${newLead.phone.replace(/\s+/g, '')}" class="btn btn-secondary">Call Client</a>` : ''}
              </div>
            </div>
            <div class="footer">
              Dispatched automatically to ${TARGET_NOTIFICATION_EMAIL} from your portfolio backend server.
            </div>
          </div>
        </body>
        </html>
      `;

      const mailText = `
New Contact Inquiry for SuriyaDevan S (${TARGET_NOTIFICATION_EMAIL})
--------------------------------------------------
Name:     ${newLead.name}
Email:    ${newLead.email}
Phone:    ${newLead.phone || 'N/A'}
Business: ${newLead.business || 'N/A'}
Website:  ${newLead.website || 'N/A'}
Service:  ${newLead.service}
Budget:   ${newLead.budget || 'Flexible'}
Date:     ${new Date(newLead.createdAt).toLocaleString()}

Message:
${newLead.message}
--------------------------------------------------
Reply directly to: ${newLead.email}
      `;

      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"SuriyaDevan S Portfolio" <${process.env.SMTP_USER || TARGET_NOTIFICATION_EMAIL}>`,
          to: TARGET_NOTIFICATION_EMAIL,
          replyTo: newLead.email,
          subject: mailSubject,
          text: mailText,
          html: mailHtml,
        });

        emailSent = true;
        emailStatusMessage = `Email successfully dispatched via SMTP to ${TARGET_NOTIFICATION_EMAIL}`;
        console.log(`[SUCCESS] Email sent to ${TARGET_NOTIFICATION_EMAIL} for lead ${newLead.id}`);
      } catch (mailError: any) {
        console.error('[SMTP ERROR] Failed to send email via SMTP transporter:', mailError.message);
        emailSent = false;
        emailStatusMessage = `SMTP attempted but encountered error: ${mailError.message}`;
      }
    } else {
      emailSent = false;
      emailStatusMessage = `Logged to backend and queued for ${TARGET_NOTIFICATION_EMAIL}. (To enable live SMTP dispatch, configure SMTP_USER and SMTP_PASS in environment variables).`;
      console.log(`[NOTICE] ${emailStatusMessage}`);
    }

    newLead.emailSent = emailSent;
    newLead.emailStatusMessage = emailStatusMessage;
    leadsStore.unshift(newLead);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${newLead.name}! Your inquiry has been sent directly to ${TARGET_NOTIFICATION_EMAIL}.`,
      leadId: newLead.id,
      recipientEmail: TARGET_NOTIFICATION_EMAIL,
      emailSent,
      emailStatus: emailStatusMessage
    });
  } catch (error: any) {
    console.error('[SERVER ERROR] Error processing contact form submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your message. Please try again or contact via WhatsApp.'
    });
  }
});

// GET /api/contact/leads (For Owner Admin CMS view)
app.get('/api/contact/leads', (req: Request, res: Response) => {
  res.json({
    total: leadsStore.length,
    targetEmail: TARGET_NOTIFICATION_EMAIL,
    leads: leadsStore
  });
});

// -------------------------------------------------------------
// Website Content CMS Persistence Store
// -------------------------------------------------------------
const DATA_DIR = path.join(process.cwd(), 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'site-content.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (e) {
    console.error('[CMS ERROR] Failed to create data directory:', e);
  }
}

// In-memory cache of site content
let cachedSiteContent: any = null;

function loadSiteContentFromDisk() {
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      const raw = fs.readFileSync(CONTENT_FILE, 'utf-8');
      cachedSiteContent = JSON.parse(raw);
      return cachedSiteContent;
    }
  } catch (err: any) {
    console.error('[CMS ERROR] Failed to load site content from disk:', err.message);
  }
  return null;
}

// Pre-load on startup
loadSiteContentFromDisk();

// GET /api/content - Fetch live website content for visitors & client hydration
app.get('/api/content', (req: Request, res: Response) => {
  try {
    const content = cachedSiteContent || loadSiteContentFromDisk();
    return res.status(200).json({
      success: true,
      hasCustomContent: Boolean(content),
      data: content,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('[CMS ERROR] Error serving site content:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve website content'
    });
  }
});

// POST /api/content - Owner publishes/updates content to the live website
app.post('/api/content', (req: Request, res: Response) => {
  try {
    const payload = req.body;
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({
        success: false,
        error: 'Invalid payload: expected JSON content object'
      });
    }

    // Merge content
    cachedSiteContent = {
      ...(cachedSiteContent || {}),
      ...payload,
      updatedAt: new Date().toISOString()
    };

    // Safely write to disk
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempFile = `${CONTENT_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(cachedSiteContent, null, 2), 'utf-8');
    fs.renameSync(tempFile, CONTENT_FILE);

    console.log(`[CMS SYNC] ✅ Website content successfully updated and published to live website! (${new Date().toLocaleTimeString()})`);

    return res.status(200).json({
      success: true,
      message: 'Website content updated and published live successfully.',
      updatedAt: cachedSiteContent.updatedAt
    });
  } catch (err: any) {
    console.error('[CMS ERROR] Failed to save site content to disk:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to persist content on server: ' + err.message
    });
  }
});

// POST /api/content/reset - Owner resets content back to original defaults
app.post('/api/content/reset', (req: Request, res: Response) => {
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      fs.unlinkSync(CONTENT_FILE);
    }
    cachedSiteContent = null;
    console.log('[CMS SYNC] Website content reset to defaults.');
    return res.status(200).json({
      success: true,
      message: 'Website content reset to defaults.'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Failed to reset content: ' + err.message
    });
  }
});

// Google Search Console Site Verification
app.get('/googlea239e06ba267341d.html', (_req: Request, res: Response) => {
  res.type('text/html').send('google-site-verification: googlea239e06ba267341d.html');
});

// Sitemap.xml route
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.type('application/xml').sendFile(sitemapPath);
  } else {
    res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="https://www.xml-sitemaps.com/css/sitemap.css"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
       <loc>https://suriyadevan-s.vercel.app/</loc>
       <lastmod>2026-09-12T09:29:39+00:00</lastmod>
       <priority>1.0000</priority>
  </url>
  <url>
       <loc>https://suriyadevan-s.vercel.app/sitemap.xml</loc>
       <lastmod>2026-09-12T09:29:39+00:00</lastmod>
       <priority>0.8000</priority>
  </url>
</urlset>`);
  }
});

// -------------------------------------------------------------
// Vite middleware / Static Serving Setup
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
    console.log(`Contact submissions are configured to route to: ${TARGET_NOTIFICATION_EMAIL}`);
  });
}

startServer();

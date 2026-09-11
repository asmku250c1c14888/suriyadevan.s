import React from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { AdminAuthModal } from './components/common/AdminAuthModal';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { BlogView } from './components/views/BlogView';
import { ResumeView } from './components/views/ResumeView';
import { ContactView } from './components/views/ContactView';
import { AdminView } from './components/views/AdminView';
import { LegalView } from './components/views/LegalView';
import { NotFoundView } from './components/views/NotFoundView';

const MainContent: React.FC = () => {
  const { activePath } = useData();

  // Normalize path
  const path = activePath.split('?')[0] || '/';

  const renderCurrentView = () => {
    if (path === '/' || path === '') return <HomeView />;
    if (path === '/about') return <AboutView />;
    if (path.startsWith('/services')) return <ServicesView />;
    // Projects have been integrated into service pages per request
    if (path.startsWith('/projects')) return <ServicesView />;
    if (path.startsWith('/blog')) return <BlogView />;
    if (path === '/resume') return <ResumeView />;
    if (path === '/contact') return <ContactView />;
    if (path.startsWith('/admin')) return <AdminView />;
    if (path === '/privacy-policy') return <LegalView type="privacy" />;
    if (path === '/terms') return <LegalView type="terms" />;
    if (path === '/disclaimer') return <LegalView type="disclaimer" />;
    return <NotFoundView />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-grow">
        {renderCurrentView()}
      </main>
      <Footer />
      <WhatsAppButton />
      <AdminAuthModal />
    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <MainContent />
    </DataProvider>
  );
}

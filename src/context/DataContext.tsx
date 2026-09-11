import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Project,
  ServiceDetail,
  BlogPost,
  FAQItem,
  ExperienceItem,
  CertificationItem,
  SiteSettings,
  ConversionEvent,
  SocialMediaItem
} from '../types';
import {
  initialSiteSettings,
  initialProjects,
  initialServices,
  initialBlogPosts,
  initialFAQs,
  initialExperience,
  initialCertifications,
  initialEducation,
  initialSocialMediaItems
} from '../data/initialData';

interface DataContextType {
  siteSettings: SiteSettings;
  updateSiteSettings: (newSettings: Partial<SiteSettings>) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  services: ServiceDetail[];
  updateService: (id: string, updated: Partial<ServiceDetail>) => void;
  addService: (service: Omit<ServiceDetail, 'id'>) => void;
  deleteService: (id: string) => void;
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, updated: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  faqs: FAQItem[];
  addFAQ: (faq: Omit<FAQItem, 'id'>) => void;
  updateFAQ: (id: string, updated: Partial<FAQItem>) => void;
  deleteFAQ: (id: string) => void;
  socialMediaItems: SocialMediaItem[];
  addSocialMediaItem: (item: Omit<SocialMediaItem, 'id'>) => void;
  updateSocialMediaItem: (id: string, updated: Partial<SocialMediaItem>) => void;
  deleteSocialMediaItem: (id: string) => void;
  experience: ExperienceItem[];
  updateExperience: (exp: ExperienceItem[]) => void;
  certifications: CertificationItem[];
  education: typeof initialEducation;
  activePath: string;
  navigateTo: (path: string) => void;
  trackEvent: (eventType: ConversionEvent['eventType'], details?: string) => void;
  conversionEvents: ConversionEvent[];
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (jsonString: string) => boolean;
  isAdmin: boolean;
  adminLogin: (passcode: string) => boolean;
  adminLogout: () => void;
  updateAdminPasscode: (newPasscode: string) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('suriyadevan_settings');
    return saved ? JSON.parse(saved) : initialSiteSettings;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('suriyadevan_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [services, setServices] = useState<ServiceDetail[]>(() => {
    const saved = localStorage.getItem('suriyadevan_services');
    return saved ? JSON.parse(saved) : initialServices;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('suriyadevan_blogs');
    return saved ? JSON.parse(saved) : initialBlogPosts;
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem('suriyadevan_faqs');
    return saved ? JSON.parse(saved) : initialFAQs;
  });

  const [experience, setExperience] = useState<ExperienceItem[]>(() => {
    const saved = localStorage.getItem('suriyadevan_experience');
    return saved ? JSON.parse(saved) : initialExperience;
  });

  const [certifications] = useState<CertificationItem[]>(initialCertifications);
  const [education] = useState(initialEducation);

  const [conversionEvents, setConversionEvents] = useState<ConversionEvent[]>(() => {
    const saved = localStorage.getItem('suriyadevan_events');
    return saved ? JSON.parse(saved) : [];
  });

  // Admin authentication state
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('suriyadevan_admin_auth') === 'true';
  });

  const [adminPasscode, setAdminPasscode] = useState<string>(() => {
    return localStorage.getItem('suriyadevan_admin_passcode') || 'suriya2993';
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const adminLogin = (passcode: string): boolean => {
    const cleaned = passcode.trim();
    // Allow the configured passcode or default master passcodes for Suriya
    if (cleaned === adminPasscode || cleaned === 'suriya2993' || cleaned === '2993' || cleaned === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('suriyadevan_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('suriyadevan_admin_auth');
  };

  const updateAdminPasscode = (newPasscode: string) => {
    const cleaned = newPasscode.trim();
    if (cleaned.length >= 4) {
      setAdminPasscode(cleaned);
      localStorage.setItem('suriyadevan_admin_passcode', cleaned);
    }
  };

  // Routing state based on window hash or path
  const [activePath, setActivePath] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActivePath(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    setActivePath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('suriyadevan_settings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem('suriyadevan_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('suriyadevan_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('suriyadevan_blogs', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('suriyadevan_faqs', JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem('suriyadevan_experience', JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem('suriyadevan_events', JSON.stringify(conversionEvents));
  }, [conversionEvents]);

  const trackEvent = (eventType: ConversionEvent['eventType'], details?: string) => {
    const newEvent: ConversionEvent = {
      id: 'evt-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      eventType,
      details,
      timestamp: new Date().toISOString()
    };
    setConversionEvents(prev => [newEvent, ...prev].slice(0, 100));
    console.log(`[Event Tracked] ${eventType}:`, details);
  };

  const updateSiteSettings = (newSettings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: 'proj-' + Date.now()
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const duplicateProject = (id: string) => {
    const target = projects.find(p => p.id === id);
    if (!target) return;
    const duplicated: Project = {
      ...target,
      id: 'proj-' + Date.now(),
      name: `${target.name} (Copy)`,
      slug: `${target.slug}-copy`
    };
    setProjects(prev => [duplicated, ...prev]);
  };

  const addService = (serviceData: Omit<ServiceDetail, 'id'>) => {
    const newService: ServiceDetail = {
      ...serviceData,
      id: 'serv-' + Date.now()
    };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: string, updated: Partial<ServiceDetail>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const addBlogPost = (postData: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...postData,
      id: 'blog-' + Date.now()
    };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id: string, updated: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(b => b.id === id ? { ...b, ...updated } : b));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(b => b.id !== id));
  };

  const addFAQ = (faqData: Omit<FAQItem, 'id'>) => {
    const newFaq: FAQItem = {
      ...faqData,
      id: 'faq-' + Date.now()
    };
    setFaqs(prev => [...prev, newFaq]);
  };

  const updateFAQ = (id: string, updated: Partial<FAQItem>) => {
    setFaqs(prev => prev.map(f => f.id === id ? { ...f, ...updated } : f));
  };

  const deleteFAQ = (id: string) => {
    setFaqs(prev => prev.filter(f => f.id !== id));
  };

  const updateExperience = (newExp: ExperienceItem[]) => {
    setExperience(newExp);
  };

  const resetToDefaults = () => {
    setSiteSettings(initialSiteSettings);
    setProjects(initialProjects);
    setServices(initialServices);
    setBlogPosts(initialBlogPosts);
    setFaqs(initialFAQs);
    setExperience(initialExperience);
    localStorage.clear();
  };

  const exportJSON = () => {
    const exportData = {
      siteSettings,
      projects,
      services,
      blogPosts,
      faqs,
      experience
    };
    return JSON.stringify(exportData, null, 2);
  };

  const importJSON = (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      if (data.siteSettings) setSiteSettings(data.siteSettings);
      if (data.projects) setProjects(data.projects);
      if (data.services) setServices(data.services);
      if (data.blogPosts) setBlogPosts(data.blogPosts);
      if (data.faqs) setFaqs(data.faqs);
      if (data.experience) setExperience(data.experience);
      return true;
    } catch (e) {
      console.error('Failed to import JSON data:', e);
      return false;
    }
  };

  return (
    <DataContext.Provider
      value={{
        siteSettings,
        updateSiteSettings,
        projects,
        addProject,
        updateProject,
        deleteProject,
        duplicateProject,
        services,
        addService,
        updateService,
        deleteService,
        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        faqs,
        addFAQ,
        updateFAQ,
        deleteFAQ,
        experience,
        updateExperience,
        certifications,
        education,
        activePath,
        navigateTo,
        trackEvent,
        conversionEvents,
        resetToDefaults,
        exportJSON,
        importJSON,
        isAdmin,
        adminLogin,
        adminLogout,
        updateAdminPasscode,
        isLoginModalOpen,
        setIsLoginModalOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

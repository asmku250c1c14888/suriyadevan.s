import React from 'react';
import { useData } from '../../context/DataContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigateTo } = useData();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0 text-xs text-slate-500">
      <ol 
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center space-x-1.5 flex-wrap"
      >
        <li 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem" 
          className="inline-flex items-center"
        >
          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors focus:outline-none"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span itemProp="name">Home</span>
          </button>
          <meta itemProp="position" content="1" />
          <link itemProp="item" href={typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app'} />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;
          const fullUrl = item.path 
            ? (typeof window !== 'undefined' ? `${window.location.origin}${item.path}` : `https://suriyadevan-s.vercel.app${item.path}`)
            : undefined;

          return (
            <li 
              key={index} 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="inline-flex items-center space-x-1.5"
            >
              <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
              {isLast || !item.path ? (
                <span 
                  itemProp="name"
                  className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-xs" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigateTo(item.path!)}
                  className="text-slate-500 hover:text-indigo-600 transition-colors truncate max-w-[150px] focus:outline-none font-medium"
                >
                  <span itemProp="name">{item.label}</span>
                </button>
              )}
              <meta itemProp="position" content={String(position)} />
              {fullUrl && <link itemProp="item" href={fullUrl} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};


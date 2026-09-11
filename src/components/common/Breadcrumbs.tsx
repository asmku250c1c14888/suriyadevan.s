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
      <ol className="flex items-center space-x-1.5 flex-wrap">
        <li className="inline-flex items-center">
          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors focus:outline-none"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center space-x-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigateTo(item.path!)}
                  className="text-slate-500 hover:text-indigo-600 transition-colors truncate max-w-[150px] focus:outline-none font-medium"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

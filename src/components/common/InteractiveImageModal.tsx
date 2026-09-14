import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface InteractiveImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle?: string;
  badge?: string;
  metrics?: { label: string; value: string }[];
}

export const InteractiveImageModal: React.FC<InteractiveImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  badge = 'Palani SEO & Marketing Proof',
  metrics = []
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => setZoomLevel(1);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>{badge}</span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-xs sm:max-w-md">
              {title}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                type="button"
                onClick={handleZoomOut}
                aria-label="Zoom out image"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-300 px-2 select-none">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                aria-label="Zoom in image"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset zoom"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display Area with Pan/Zoom container */}
        <div className="relative overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/90 flex-1 min-h-[300px]">
          <div 
            className="transition-transform duration-200 ease-out origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={imageUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="max-h-[60vh] max-w-full rounded-xl object-contain shadow-2xl border border-slate-800"
            />
          </div>
        </div>

        {/* Footer with Subtitle & Interactive Metrics */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-300">
                {subtitle}
              </p>
            )}
            <p className="text-[11px] text-slate-500 mt-0.5">
              Verified implementation by SURIYADEVAN S — Digital Marketing Agency in Palani
            </p>
          </div>

          {metrics.length > 0 && (
            <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-end overflow-x-auto pb-1 sm:pb-0">
              {metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg text-center shrink-0">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{m.label}</div>
                  <div className="text-sm font-bold text-indigo-400">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

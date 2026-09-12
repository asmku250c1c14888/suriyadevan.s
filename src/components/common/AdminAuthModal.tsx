import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Lock, X, KeyRound, AlertCircle, CheckCircle2, Shield } from 'lucide-react';

export const AdminAuthModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, adminLogin, isAdmin, adminLogout, navigateTo } = useData();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isLoginModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!passcode.trim()) {
      setError('Please enter your passcode.');
      return;
    }

    const success = adminLogin(passcode);
    if (success) {
      setSuccessMessage('Owner authenticated successfully!');
      setTimeout(() => {
        setSuccessMessage(null);
        setPasscode('');
        setIsLoginModalOpen(false);
      }, 700);
    } else {
      setError('Incorrect passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    adminLogout();
    setIsLoginModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 bg-slate-900 text-white flex justify-between items-center">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-indigo-600 rounded-lg">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display">Owner Access Control</h3>
              <p className="text-[11px] text-slate-400">SURIYADEVAN S Portfolio CMS</p>
            </div>
          </div>
          <button
            onClick={() => {
              setError(null);
              setIsLoginModalOpen(false);
            }}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {isAdmin ? (
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">You are currently Logged In as Owner</h4>
                <p className="text-xs text-slate-500 mt-1">
                  All Add, Edit, and Delete controls are unlocked across the entire website.
                </p>
              </div>

              <div className="pt-2 flex justify-center space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsLoginModalOpen(false);
                    navigateTo('/admin');
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
                >
                  Go to CMS Dashboard
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-red-50 hover:text-red-700 hover:border-red-200 text-xs font-semibold rounded-lg transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-slate-600">
                  Enter your owner passcode to unlock and access all Add, Edit, and Delete tools.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {successMessage && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>Owner Passcode</span>
                  <span className="text-[11px] text-slate-400 font-normal">Default: suriya2993</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    autoFocus
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter passcode (e.g. suriya2993)"
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsLoginModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center space-x-1.5"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Unlock Admin Tools</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

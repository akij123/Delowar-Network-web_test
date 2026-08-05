import React, { useState } from 'react';
import { Wifi, PhoneCall, CreditCard, Menu, X, Globe, Sparkles, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenConnectionModal: (packageId?: string) => void;
  onOpenBillPayModal: () => void;
  onOpenSpeedTestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConnectionModal,
  onOpenBillPayModal,
  onOpenSpeedTestModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'প্যাকেজসমূহ', href: '#packages' },
    { name: 'ব্যান্ডউইথ ক্যালকুলেটর', href: '#calculator' },
    { name: 'কাভারেজ এরিয়া', href: '#coverage' },
    { name: 'আমাদের সেবাসমূহ', href: '#why-us' },
    { name: 'গ্রাহক মতামত', href: '#testimonials' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200/90 shadow-sm transition-all duration-300">
      {/* Top Hotline Bar */}
      <div className="bg-slate-900 text-xs text-slate-200 py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1.5 ml-1"></span>
              ২৪/৭ নেটওয়ার্ক স্ট্যাটাস: ১০০% সচল
            </span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-cyan-400" /> ১ Gbps গিগাবিট অপটিক্যাল ফাইবার নেটওয়ার্ক
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenSpeedTestModal}
              className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition-colors font-medium bg-slate-800 px-2 py-0.5 rounded border border-slate-700"
            >
              <Activity className="w-3 h-3 animate-pulse text-cyan-400" />
              লাইভ স্পিড টেস্ট
            </button>

            <a 
              href="tel:01761345480" 
              className="flex items-center gap-1 text-orange-400 hover:text-orange-300 font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce text-orange-400" />
              হটলাইন: ০১৭৬১৩৪৫৪৮০
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 border-2 border-orange-500 shadow-sm group-hover:scale-105 transition-all duration-300">
              <Wifi className="w-6 h-6 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-['Inter']">
                  DELOWAR <span className="text-orange-600">NETWORK</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold tracking-wide">
                দেলোয়ার নেটওয়ার্ক ডিজিটাল ইন্টারনেট
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1.5 rounded-lg border border-slate-200/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white rounded-md transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://portal.delowarnetwork.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-lg transition-all duration-200 shadow-xs hover:border-slate-300"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              বিল পে করুন
            </a>

            <button
              onClick={() => onOpenConnectionModal()}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-md shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-spin" />
              নতুন কানেকশন
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://portal.delowarnetwork.com/"
              target="_blank"
              rel="noreferrer"
              className="md:hidden p-2 text-xs text-slate-800 bg-slate-100 rounded-lg border border-slate-200"
              title="বিল পে (পোর্টাল)"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 bg-slate-100 rounded-lg border border-slate-200 focus:outline-none"
              aria-label="মোবাইল মেনু"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="grid grid-cols-1 gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpeedTestModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200"
            >
              <Activity className="w-4 h-4 text-cyan-600" />
              লাইভ স্পিড টেস্ট দেখুন
            </button>

            <a
              href="https://portal.delowarnetwork.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-white border-2 border-slate-200 shadow-xs"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              অনলাইন বিল পরিশোধ (পোর্টাল)
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnectionModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/20"
            >
              <Sparkles className="w-4 h-4" />
              নতুন ইন্টারনেট কানেকশন নিন
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

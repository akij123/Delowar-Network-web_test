import React from 'react';
import { WHY_CHOOSE_US_FEATURES } from '../data/ispData';
import { Headphones, Zap, PlayCircle, Gamepad2, CreditCard, ShieldCheck, CheckCircle, Flame, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConnectionModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConnectionModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones className="w-6 h-6 text-orange-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'PlayCircle': return <PlayCircle className="w-6 h-6 text-red-500" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-purple-400" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      default: return <Zap className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-b-2 border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3 border-2 border-slate-800 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            কেন আমরা সেরা?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            আমাদের সেবার অনন্য বৈশিষ্ট্যসমূহ
          </h2>
          <p className="mt-4 text-slate-600 font-medium text-sm sm:text-base">
            আপনার দৈনন্দিন অনলাইন জীবনের অভিজ্ঞতাকে সহজ ও স্বাচ্ছন্দ্যময় করতে আমরা দিচ্ছি গ্যারান্টেড উচ্চগতির ব্রডব্যান্ড সেবা।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="group relative bg-slate-50 p-7 rounded-2xl border-2 border-slate-200 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {getIcon(feat.icon)}
                </div>
                <span className="text-[11px] font-extrabold text-slate-900 bg-white px-3 py-1 rounded-lg border-2 border-slate-200 shadow-2xs font-mono">
                  {feat.highlightText}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-16 bg-slate-900 text-white p-8 rounded-2xl border-2 border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-orange-400 font-['Inter']">৮০০+</p>
              <p className="text-xs text-slate-300 font-extrabold">সক্রিয় গৃহস্থালি সংযোগ</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-emerald-400 font-['Inter']">৯৯.৯%</p>
              <p className="text-xs text-slate-300 font-extrabold">সার্ভার আপটাইম গ্যারান্টি</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-cyan-400 font-['Inter']">১০+ এলাকা</p>
              <p className="text-xs text-slate-300 font-extrabold">কভারেজ ও সার্ভিস পয়েন্ট</p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-amber-400 font-['Inter']">১৫ মিনিট</p>
              <p className="text-xs text-slate-300 font-extrabold">গড় অনসাইট রেসপন্স সময়</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

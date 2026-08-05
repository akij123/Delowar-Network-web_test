import React, { useState } from 'react';
import { Sliders, Monitor, Smartphone, Tv, Laptop, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { ISP_PACKAGES } from '../data/ispData';

interface PackageCalculatorProps {
  onSelectPackage: (packageId: string) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onSelectPackage }) => {
  const [deviceCount, setDeviceCount] = useState<number>(3);
  const [needs, setNeeds] = useState<{
    hdStreaming: boolean;
    fourKStreaming: boolean;
    gaming: boolean;
    freelancing: boolean;
    officeWork: boolean;
  }>({
    hdStreaming: true,
    fourKStreaming: false,
    gaming: false,
    freelancing: false,
    officeWork: false
  });

  const toggleNeed = (key: keyof typeof needs) => {
    setNeeds(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate required bandwidth in Mbps based on inputs
  const calculateRequiredMbps = (): number => {
    let base = deviceCount * 4; // 4 Mbps per device baseline
    if (needs.hdStreaming) base += 8;
    if (needs.fourKStreaming) base += 25;
    if (needs.gaming) base += 20;
    if (needs.freelancing) base += 20;
    if (needs.officeWork) base += 40;

    return Math.max(15, base);
  };

  const requiredMbps = calculateRequiredMbps();

  // Find best package for required Mbps
  const recommendedPackage = ISP_PACKAGES.find(pkg => pkg.speedMbps >= requiredMbps) || ISP_PACKAGES[ISP_PACKAGES.length - 1];

  return (
    <section id="calculator" className="py-16 bg-slate-100/80 border-b-2 border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-orange-500 text-white text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sliders className="w-3.5 h-3.5" />
            স্মার্ট ব্যান্ডউইথ ক্যালকুলেটর
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            আপনার প্রয়োজন অনুযায়ী সঠিক প্যাকেজ বেছে নিন
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
            আপনার ডিভাইস সংখ্যা ও ব্যবহারের ধরন সিলেক্ট করুন। আমাদের অ্যালগরিদম আপনাকে সবচেয়ে সাশ্রয়ী ও সঠিক স্পিড প্যাকেজ সাজেস্ট করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-sm space-y-8">
            
            {/* Step 1: Device Counter */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-orange-600" />
                  ১. মোট কতটি ডিভাইসে ইন্টারনেট ব্যবহার হবে?
                </label>
                <span className="text-sm font-black text-white bg-slate-900 px-3 py-1 rounded-lg font-mono">
                  {deviceCount} টি ডিভাইস
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="15"
                value={deviceCount}
                onChange={(e) => setDeviceCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />

              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono font-bold">
                <span>১টি ডিভাইস</span>
                <span>৫টি</span>
                <span>১০টি</span>
                <span>১৫+ ডিভাইস</span>
              </div>
            </div>

            {/* Step 2: Usage Type Checklist */}
            <div>
              <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                <Monitor className="w-4 h-4 text-orange-600" />
                ২. ইন্টারনেটে মূলত কি ধরনের কাজ করবেন? (একাধিক সিলেক্ট করা যাবে)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => toggleNeed('hdStreaming')}
                  className={`p-3.5 rounded-xl border-2 text-left text-xs font-bold transition-all flex items-center justify-between ${
                    needs.hdStreaming
                      ? 'bg-orange-50/80 border-orange-500 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-orange-600" />
                    ফুল এইচডি (1080p) ভিডিও স্ট্রিমিং
                  </span>
                  {needs.hdStreaming && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => toggleNeed('fourKStreaming')}
                  className={`p-3.5 rounded-xl border-2 text-left text-xs font-bold transition-all flex items-center justify-between ${
                    needs.fourKStreaming
                      ? 'bg-orange-50/80 border-orange-500 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-purple-600" />
                    ৪K আল্ট্রা এইচডি স্মার্ট টিভি স্ট্রিমিং
                  </span>
                  {needs.fourKStreaming && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => toggleNeed('gaming')}
                  className={`p-3.5 rounded-xl border-2 text-left text-xs font-bold transition-all flex items-center justify-between ${
                    needs.gaming
                      ? 'bg-orange-50/80 border-orange-500 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-emerald-600" />
                    অনলাইন গেমিং (Low Ping / Real IP)
                  </span>
                  {needs.gaming && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => toggleNeed('freelancing')}
                  className={`p-3.5 rounded-xl border-2 text-left text-xs font-bold transition-all flex items-center justify-between ${
                    needs.freelancing
                      ? 'bg-orange-50/80 border-orange-500 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-blue-600" />
                    ফ্রিল্যান্সিং, মিটিং ও হেভি ফাইল আপলোড
                  </span>
                  {needs.freelancing && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
                </button>
              </div>
            </div>

          </div>

          {/* Result Card Right Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border-2 border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-xl border-t-8 border-t-orange-500">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  সাজেস্টেড প্যাকেজ
                </span>
                <span className="text-xs font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 font-bold">
                  প্রয়োজন: {requiredMbps} Mbps
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {recommendedPackage.name}
              </h3>
              <p className="text-xs text-slate-300 mb-6 font-medium">
                {recommendedPackage.targetAudience}
              </p>

              <div className="bg-slate-950 p-5 rounded-xl border-2 border-slate-800 space-y-3 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-slate-400">মাসের প্যাকেজ মূল্য:</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-orange-400 font-['Inter']">
                      ৳{recommendedPackage.priceMonthly}
                    </span>
                    <span className="text-xs text-slate-400">/মাস</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold">স্পিড:</span>
                    <p className="font-extrabold text-emerald-400 font-mono">{recommendedPackage.speedMbps} Mbps</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold">BDIX ও FTP:</span>
                    <p className="font-extrabold text-cyan-400 font-mono">{recommendedPackage.bdixSpeedMbps} Mbps</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {recommendedPackage.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage(recommendedPackage.id)}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              এই প্যাকেজটি দিয়ে আবেদন করুন
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

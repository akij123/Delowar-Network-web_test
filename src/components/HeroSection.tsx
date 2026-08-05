import React, { useState } from 'react';
import { Wifi, Zap, ShieldCheck, Search, ArrowRight, Play, CheckCircle2, Sparkles, Activity, Server } from 'lucide-react';
import { COVERAGE_AREAS } from '../data/ispData';

interface HeroSectionProps {
  onOpenConnectionModal: () => void;
  onOpenSpeedTestModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConnectionModal,
  onOpenSpeedTestModal
}) => {
  const [searchArea, setSearchArea] = useState('');
  const [searchResult, setSearchResult] = useState<{ found: boolean; message: string; areaName?: string } | null>(null);

  const handleCheckArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchArea.trim()) return;

    const term = searchArea.toLowerCase().trim();
    const match = COVERAGE_AREAS.find(
      a => a.areaName.toLowerCase().includes(term) ||
           a.thana.toLowerCase().includes(term) ||
           a.district.toLowerCase().includes(term)
    );

    if (match) {
      if (match.status === 'available') {
        setSearchResult({
          found: true,
          message: `অভিনন্দন! ${match.areaName}-এ আমাদের ১০০% অপটিক্যাল ফাইবার নেটওয়ার্ক সচল আছে।`,
          areaName: match.areaName
        });
      } else {
        setSearchResult({
          found: true,
          message: `${match.areaName}-এ আমাদের কভারেজ সম্প্রসারণ এর কাজ চলছে। আবেদন করে রাখুন!`,
          areaName: match.areaName
        });
      }
    } else {
      setSearchResult({
        found: false,
        message: `আপনার এলাকায় ('${searchArea}') আমরা শীঘ্রই আসছি! এখনই অগ্রিম রেজিস্ট্রেশন করুন।`
      });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden py-12 lg:py-20 bg-slate-900 text-white bg-geometric-grid-dark border-b-2 border-slate-800">
      {/* Dynamic Background Glow & Grid Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950 border-2 border-slate-800 text-xs font-bold text-slate-200 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-orange-400 font-extrabold">৮০০+</span> সন্তুষ্ট গ্রাহকের প্রথম পছন্দ
              <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded font-black uppercase">
                GPON Fiber
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              উপভোগ করুন <br className="hidden sm:inline" />
              <span className="text-orange-500">
                নিরবচ্ছিন্ন ও সুপারফাস্ট
              </span> <br />
              ফাইবার ইন্টারনেট
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              বাংলাদেশের সেরা গিগাবিট ব্যাকবোন ফাইবার নেটওয়ার্ক। ৪K বাফারলেস ইউটিউব স্ট্রিমিং, জিরো-লেগ গেমিং ও ১ Gbps BDIX স্পিড নিয়ে অভিজ্ঞতা অর্জন করুন।
            </p>

            {/* Coverage Quick Checker Box */}
            <div className="bg-slate-950/90 p-4 sm:p-5 rounded-xl border-2 border-slate-800 shadow-xl max-w-xl mx-auto lg:mx-0">
              <p className="text-xs font-bold text-slate-200 mb-2.5 text-left flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-orange-400" />
                আপনার এলাকায় আমাদের ইন্টারনেট কাভারেজ আছে কিনা দেখুন:
              </p>
              
              <form onSubmit={handleCheckArea} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={searchArea}
                  onChange={(e) => setSearchArea(e.target.value)}
                  placeholder="যেমন: একদন্ত বাজার, আটঘরিয়া, পাবনা..."
                  className="flex-1 bg-slate-900 border-2 border-slate-700 focus:border-orange-500 text-slate-100 text-xs sm:text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500 font-medium"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  চেক করুন
                </button>
              </form>

              {searchResult && (
                <div className={`mt-3 p-3 rounded-lg text-xs font-semibold flex items-start gap-2 ${
                  searchResult.found 
                    ? 'bg-emerald-950/80 border-2 border-emerald-800 text-emerald-200' 
                    : 'bg-amber-950/80 border-2 border-amber-800 text-amber-200'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p>{searchResult.message}</p>
                    <button
                      onClick={onOpenConnectionModal}
                      className="mt-1.5 text-xs text-orange-400 font-black underline hover:text-orange-300"
                    >
                      এখনই কানেকশনের জন্য আবেদন করুন &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenConnectionModal}
                className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                নতুন কানেকশন নিন
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#packages"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-200 bg-slate-950 hover:bg-slate-800 border-2 border-slate-800 rounded-lg transition-all flex items-center gap-2"
              >
                প্যাকেজসমূহ দেখুন
              </a>

              <button
                onClick={onOpenSpeedTestModal}
                className="px-4 py-3.5 text-xs font-bold text-cyan-300 bg-slate-950 hover:bg-slate-800 border-2 border-slate-800 rounded-lg transition-all flex items-center gap-1.5"
              >
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                লাইভ টেস্ট
              </button>
            </div>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t-2 border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>১ Gbps BDIX</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>৯৯.৯% আপটাইম</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>ফ্রি কন্টেন্ট ক্যাশ</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs font-bold bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                <Wifi className="w-4 h-4 text-purple-400" />
                <span>ফ্রি ইনস্টলেশন</span>
              </div>
            </div>

          </div>

          {/* Right Column Interactive Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 bg-orange-500/30 rounded-2xl blur-lg opacity-40"></div>

              {/* Card Body */}
              <div className="relative rounded-xl bg-slate-950 border-2 border-slate-800 p-6 shadow-2xl">
                
                {/* Router Header Widget */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border-2 border-orange-500 flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white">Delowar Network GigaOptical</h3>
                      <p className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        অনলাইন - ফাইবার অপটিক ১ Gbps
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-orange-500 text-white font-black px-2 py-1 rounded">
                    GPON-ONT
                  </span>
                </div>

                {/* Animated Speed Meter Display */}
                <div className="my-6 p-5 rounded-lg bg-slate-900 border-2 border-slate-800 text-center space-y-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 font-mono">
                    <Activity className="w-3 h-3 animate-spin text-cyan-400" />
                    BDIX: 1000 Mbps
                  </div>

                  <p className="text-xs text-slate-400 uppercase tracking-wider font-mono font-bold">
                    কারেন্ট নেটওয়ার্ক স্পিড
                  </p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-orange-500 font-['Inter']">
                      100.0
                    </span>
                    <span className="text-lg font-bold text-slate-300">Mbps</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-xs">
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold">ডাউনলোড</p>
                      <p className="font-extrabold text-emerald-400 font-mono">১০০ Mbps</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold">আপলোড</p>
                      <p className="font-extrabold text-cyan-400 font-mono">১০০ Mbps</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold">পিং (Latency)</p>
                      <p className="font-extrabold text-orange-400 font-mono">২ ms</p>
                    </div>
                  </div>
                </div>

                {/* Content Caching Highlights */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <Play className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      ইউটিউব ৪K ক্যাশিং (YouTube)
                    </span>
                    <span className="text-emerald-400 font-bold">বাফারলেস</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-blue-400" />
                      ফেসবুক ও ইনস্টাগ্রাম ভিডিও
                    </span>
                    <span className="text-cyan-400 font-bold">ইনস্ট্যান্ট লোড</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-orange-400" />
                      বিডিআইএক্স ও লোকাল এফটিপি (BDIX FTP)
                    </span>
                    <span className="text-orange-400 font-bold">১ Gbps গিগাবিট</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t-2 border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    গ্যারান্টেড রিয়েল ব্যান্ডউইথ
                  </span>
                  <button
                    onClick={onOpenSpeedTestModal}
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline"
                  >
                    স্পিড টেস্ট টুল রান করুন &rarr;
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

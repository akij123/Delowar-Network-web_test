import React, { useState } from 'react';
import { ISP_PACKAGES } from '../data/ispData';
import { InternetPackage } from '../types';
import { Wifi, Check, Sparkles, Shield, Zap, ArrowRight, Layers, PlusCircle, X, Trash2 } from 'lucide-react';

interface PricingPackagesProps {
  onOpenConnectionModal: (packageId: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenConnectionModal }) => {
  const [packagesList, setPackagesList] = useState<InternetPackage[]>(ISP_PACKAGES);

  const handleDeletePackage = (idToDelete: string) => {
    setPackagesList(prev => prev.filter(pkg => pkg.id !== idToDelete));
  };
  const [activeTab, setActiveTab] = useState<'all' | 'home' | 'smart' | 'gaming' | 'corporate'>('all');
  const [isYearly, setIsYearly] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New package form state
  const [newPkgName, setNewPkgName] = useState('');
  const [newPkgCategory, setNewPkgCategory] = useState<'home' | 'smart' | 'corporate' | 'gaming'>('home');
  const [newPkgSpeed, setNewPkgSpeed] = useState<number>(45);
  const [newPkgPrice, setNewPkgPrice] = useState<number>(750);
  const [newPkgBadge, setNewPkgBadge] = useState('নতুন');
  const [newPkgAudience, setNewPkgAudience] = useState('ফ্যামিলি স্ট্রিমিং ও দৈনন্দিন ব্যবহারের জন্য');
  const [newPkgFeatures, setNewPkgFeatures] = useState('৪০ Mbps আল্ট্রাফাস্ট স্পিড,১০০ Mbps BDIX ও ক্যাশ,২৪/৭ টেক সাপোর্ট,জিরো ডেটা লিমিট');

  const filteredPackages = activeTab === 'all'
    ? packagesList
    : packagesList.filter(pkg => pkg.category === activeTab);

  const handleAddPackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPkgName || !newPkgSpeed || !newPkgPrice) return;

    const createdPkg: InternetPackage = {
      id: `pkg-custom-${Date.now()}`,
      name: newPkgName,
      category: newPkgCategory,
      speedMbps: Number(newPkgSpeed),
      uploadMbps: Number(newPkgSpeed),
      bdixSpeedMbps: 100,
      youtubeSpeedMbps: 100,
      ftpSpeedMbps: Number(newPkgSpeed) * 5,
      priceMonthly: Number(newPkgPrice),
      badge: newPkgBadge || 'কাস্টম',
      targetAudience: newPkgAudience || 'দৈনন্দিন ইন্টারনেট ব্যবহারের জন্য',
      features: newPkgFeatures.split(',').map(f => f.trim()).filter(Boolean),
      hasRealIP: false,
      freeInstallation: true
    };

    setPackagesList([createdPkg, ...packagesList]);
    setIsAddModalOpen(false);
    // Reset form
    setNewPkgName('');
  };

  return (
    <section id="packages" className="py-20 bg-slate-50 relative bg-geometric-grid border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3 border-2 border-slate-800 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            হাই-স্পিড ইন্টারনেট প্ল্যান
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            আমাদের সাশ্রয়ী ইন্টারনেট প্যাকেজসমূহ
          </h2>
          <p className="mt-4 text-slate-600 font-medium text-sm sm:text-base">
            আপনার বাসা, ফ্রিল্যান্সিং বা ব্যবসার প্রয়োজন অনুযায়ী সেরা স্পিড সিলেক্ট করুন। কোনো হিডেন চার্জ নেই!
          </p>

          {/* Yearly Discount Banner Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white p-1.5 rounded-xl border-2 border-slate-200 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
                !isYearly ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              মাসিক বিলিং
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                isYearly ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              বাৎসরিক সংযোগ
              <span className="bg-slate-900 text-orange-400 text-[10px] px-2 py-0.5 rounded uppercase font-black">
                ১ মাস ফ্রি!
              </span>
            </button>
          </div>
        </div>

        {/* Category Tabs & Add Package Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'all', label: 'সব প্যাকেজ' },
              { key: 'home', label: 'হোম ব্রডব্যান্ড' },
              { key: 'smart', label: 'স্মার্ট ও ফ্রিল্যান্সার' },
              { key: 'gaming', label: 'গেমার ও ক্রিয়েটর' },
              { key: 'corporate', label: 'কর্পোরেট ফাইবার' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === tab.key
                    ? 'bg-slate-900 text-white border-2 border-slate-900 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-2 border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            নতুন প্যাকেজ যোগ করুন
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            const finalPrice = isYearly ? Math.round(pkg.priceMonthly * 11 / 12) : pkg.priceMonthly;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${
                  pkg.popular
                    ? 'bg-white border-2 border-orange-500 shadow-xl border-t-8 border-t-orange-500'
                    : 'bg-white border-2 border-slate-200 hover:border-slate-400 shadow-sm'
                }`}
              >
                {/* Popular / Badge Flag */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md ${
                      pkg.popular
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-900 text-white border border-slate-800'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Delete Button */}
                <button
                  onClick={() => handleDeletePackage(pkg.id)}
                  title="প্যাকেজ ডিলিট করুন"
                  className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors z-10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <div>
                  {/* Package Title & Audience */}
                  <div className="text-center pt-2 pb-4 border-b-2 border-slate-100">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1">{pkg.name}</h3>
                    <p className="text-xs font-semibold text-slate-500">{pkg.targetAudience}</p>
                  </div>

                  {/* Mbps Big Display */}
                  <div className="my-6 text-center">
                    <div className="inline-flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-black text-slate-900 font-['Inter']">
                        {pkg.speedMbps}
                      </span>
                      <span className="text-lg font-bold text-orange-600">Mbps</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-mono font-bold">
                      ১০০% আনলিমিটেড ট্র্যাফিক (জিরো ডেটা লিমিট)
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="bg-slate-100 p-4 rounded-xl border-2 border-slate-200 text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-bold text-slate-600">৳</span>
                      <span className="text-3xl font-black text-slate-900 font-['Inter']">{finalPrice}</span>
                      <span className="text-xs text-slate-600 font-semibold">/মাস</span>
                    </div>

                    {isYearly && (
                      <p className="text-[11px] text-emerald-600 mt-1 font-bold">
                        বাৎসরিক পে-তে ১ মাস ফ্রি! (৳{pkg.priceMonthly * 11} /বছর)
                      </p>
                    )}
                  </div>

                  {/* Speed Specs Sub-Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6 text-center text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-slate-500 text-[10px] font-bold">BDIX স্পিড</p>
                      <p className="font-extrabold text-slate-900 font-mono">{pkg.bdixSpeedMbps} Mbps</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-slate-500 text-[10px] font-bold">ইউটিউব/এফটিপি</p>
                      <p className="font-extrabold text-emerald-600 font-mono">{pkg.youtubeSpeedMbps} Mbps</p>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Order CTA */}
                <div>
                  <button
                    onClick={() => onOpenConnectionModal(pkg.id)}
                    className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/25'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    কানেকশন বুক করুন
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-500 font-semibold mt-2.5">
                    বিনামূল্যে ফাইবার ক্যাবল ইনস্টলেশন সুবিধা
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Add Package Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-extrabold">নতুন ইন্টারনেট প্যাকেজ যোগ করুন</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddPackage} className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">প্যাকেজের নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: টার্বো ম্যাক্স (Turbo Max)"
                  value={newPkgName}
                  onChange={(e) => setNewPkgName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">ক্যাটাগরি</label>
                  <select
                    value={newPkgCategory}
                    onChange={(e) => setNewPkgCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium"
                  >
                    <option value="home">হোম ব্রডব্যান্ড</option>
                    <option value="smart">স্মার্ট ও ফ্রিল্যান্সার</option>
                    <option value="gaming">গেমার ও ক্রিয়েটর</option>
                    <option value="corporate">কর্পোরেট ফাইবার</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">ব্যাজ / ট্যাগ</label>
                  <input
                    type="text"
                    placeholder="যেমন: বিশেষ অফার"
                    value={newPkgBadge}
                    onChange={(e) => setNewPkgBadge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">স্পিড (Mbps) *</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={newPkgSpeed}
                    onChange={(e) => setNewPkgSpeed(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">মাসিক বিল (৳) *</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={newPkgPrice}
                    onChange={(e) => setNewPkgPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">টার্গেট ইউজার</label>
                <input
                  type="text"
                  placeholder="যেমন: ফ্যামিলি ও ওয়ার্ক ফ্রম হোম ইউজার"
                  value={newPkgAudience}
                  onChange={(e) => setNewPkgAudience(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ফিচারসমূহ (কমা দিয়ে আলাদা করুন)</label>
                <textarea
                  rows={3}
                  value={newPkgFeatures}
                  onChange={(e) => setNewPkgFeatures(e.target.value)}
                  placeholder="৪০ Mbps স্পিড, ২০০ Mbps BDIX, ৪K স্ট্রিমিং সাপোর্ট, ২৪/৭ সাপোর্ট"
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-xs font-medium"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold shadow-md flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4 text-emerald-400" />
                  প্যাকেজ সেভ করুন
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </section>
  );
};

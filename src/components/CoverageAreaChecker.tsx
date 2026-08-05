import React, { useState } from 'react';
import { COVERAGE_AREAS } from '../data/ispData';
import { MapPin, Search, CheckCircle2, Clock, PhoneCall, Radio, Sparkles, AlertCircle } from 'lucide-react';

interface CoverageAreaCheckerProps {
  onOpenConnectionModal: (areaName?: string) => void;
}

export const CoverageAreaChecker: React.FC<CoverageAreaCheckerProps> = ({ onOpenConnectionModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'expanding' | 'planned'>('all');

  const filteredAreas = COVERAGE_AREAS.filter(area => {
    const matchesSearch = area.areaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          area.thana.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          area.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || area.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <section id="coverage" className="py-20 bg-slate-50 relative bg-geometric-lines border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3 border-2 border-slate-800 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            নেটওয়ার্ক কাভারেজ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            আমাদের কাভারেজ এরিয়া ও সার্ভিস স্ট্যাটাস
          </h2>
          <p className="mt-4 text-slate-600 font-medium text-sm sm:text-base">
            আপনার এলাকা বেছে নিয়ে এখনই নেটওয়ার্ক স্ট্যাটাস চেক করুন। আপনার এলাকায় সরাসরি ফাইবার সংযোগ সচল আছে কিনা দেখুন।
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-slate-200 mb-10 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-2/3">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="এলাকা, থানা বা জেলার নাম লিখুন (যেমন: একদন্ত বাজার, আটঘরিয়া, পাবনা)..."
                className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Status Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                { key: 'all', label: 'সকল এলাকা' },
                { key: 'available', label: 'সক্রিয় নেটওয়ার্ক' },
                { key: 'expanding', label: 'কাজ চলছে' }
              ].map(chip => (
                <button
                  key={chip.key}
                  onClick={() => setStatusFilter(chip.key as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-extrabold transition-all ${
                    statusFilter === chip.key
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 border-2 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.length > 0 ? (
            filteredAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between shadow-2xs hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {area.district} &bull; {area.thana}
                    </span>

                    {area.status === 'available' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        কানেকশন খোলা
                      </span>
                    )}

                    {area.status === 'expanding' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                        <Clock className="w-3 h-3 text-amber-600" />
                        কাজ চলছে
                      </span>
                    )}

                    {area.status === 'planned' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-300">
                        <Radio className="w-3 h-3 text-blue-600" />
                        আসন্ন
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                    {area.areaName}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 mt-3 pt-3 border-t-2 border-slate-100 font-semibold">
                    <p className="flex items-center justify-between">
                      <span>নেটওয়ার্ক টাইপ:</span>
                      <span className="text-slate-900 font-extrabold">{area.fiberType}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span>গড় সংযোগ সময়:</span>
                      <span className="text-orange-600 font-extrabold font-mono">{area.estimatedSetupHours} ঘণ্টার মধ্যে</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t-2 border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${area.hotline}`}
                    className="text-xs font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                    {area.hotline}
                  </a>

                  <button
                    onClick={() => onOpenConnectionModal(area.areaName)}
                    className="px-3.5 py-2 text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-sm flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3 text-orange-400" />
                    আবেদন করুন
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full bg-white p-12 rounded-2xl border-2 border-slate-200 text-center shadow-xs">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="text-lg font-extrabold text-slate-900">দুঃখিত! কোনো এলাকা পাওয়া যায়নি</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto font-medium">
                আপনার কাঙ্ক্ষিত এলাকায় আমাদের সার্ভিস এখনও পৌঁছে না থাকলে, অগ্রিম আবেদনের মাধ্যমে আপনার নাম লিস্টে যুক্ত করুন।
              </p>
              <button
                onClick={() => onOpenConnectionModal(searchTerm)}
                className="mt-4 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs rounded-lg transition-all shadow-sm"
              >
                এলাকার জন্য অগ্রিম আবেদন করুন
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

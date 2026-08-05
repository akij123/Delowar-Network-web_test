import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/ispData';
import { Star, MessageSquare, ChevronDown, ChevronUp, HelpCircle, UserCheck } from 'lucide-react';

export const TestimonialsFAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<'all' | 'connection' | 'billing' | 'technical' | 'package'>('all');

  const filteredFaqs = faqCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === faqCategory);

  return (
    <section id="testimonials" className="py-20 bg-slate-100/70 border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Block */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3 border-2 border-slate-800 shadow-sm">
              <UserCheck className="w-3.5 h-3.5 text-orange-400" />
              গ্রাহক রিভিউ
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              আমাদের গ্রাহকরা কি বলছেন?
            </h2>
            <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
              হাজারো সন্তুষ্ট পরিবার, ফ্রিল্যান্সার ও গেমারদের বিশ্বাসে দেলোয়ার নেটওয়ার্ক তৈরি করেছে এক নতুন উচ্চতা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs hover:border-slate-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic mb-6">
                    "{item.review}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t-2 border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] font-semibold text-slate-500">
                      <span className="text-orange-600 font-extrabold">{item.packageUsed}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Block */}
        <div id="contact" className="pt-8 border-t-2 border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3 border-2 border-slate-800 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
              সাধারণ জিজ্ঞাসাবলী (FAQ)
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              আপনার মনে আসা সাধারণ প্রশ্নগুলোর উত্তর
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { key: 'all', label: 'সব প্রশ্ন' },
              { key: 'connection', label: 'সংযোগ সংক্রান্ত' },
              { key: 'billing', label: 'বিলিং ও পেমেন্ট' },
              { key: 'technical', label: 'টেকনিক্যাল সাপোর্ট' },
              { key: 'package', label: 'প্যাকেজ চেঞ্জ' }
            ].map(chip => (
              <button
                key={chip.key}
                onClick={() => setFaqCategory(chip.key as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                  faqCategory === chip.key
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm font-extrabold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-slate-700 font-medium border-t-2 border-slate-100 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

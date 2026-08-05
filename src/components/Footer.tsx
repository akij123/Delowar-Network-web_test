import React, { useState } from 'react';
import { Wifi, PhoneCall, Mail, MapPin, Send, MessageCircle, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [queryName, setQueryName] = useState('');
  const [queryPhone, setQueryPhone] = useState('');
  const [queryMsg, setQueryMsg] = useState('');
  const [querySent, setQuerySent] = useState(false);

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryName || !queryPhone) return;

    const messageText = `আসসালামু আলাইকুম,\nআমি ${queryName}\nমোবাইল: ${queryPhone}\nবার্তা: ${queryMsg || 'নতুন ইন্টারনেট সংযোগ / তথ্য প্রয়োজন'}`;
    const waUrl = `https://wa.me/8801761345480?text=${encodeURIComponent(messageText)}`;
    
    window.open(waUrl, '_blank');
    setQuerySent(true);
  };

  return (
    <footer className="bg-slate-900 border-t-2 border-slate-800 text-slate-300 relative pt-16 pb-12">
      
      {/* Top Contact Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-950 p-8 rounded-2xl border-2 border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-black text-orange-400 uppercase tracking-wider">
              ২৪/৭ কাস্টমার কেয়ার হেল্পলাইন
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              যেকোনো প্রয়োজনে আমাদের কল করুন বা মেসেজ দিন
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              আমাদের সাপোর্ট টিম সপ্তাহের ৭ দিন ২৪ ঘণ্টা আপনার যেকোনো ইন্টারনেট সংক্রান্ত সহায়তায় নিয়োজিত।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:01761345480"
                className="px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm rounded-lg transition-all flex items-center gap-2 shadow-md shadow-orange-500/20"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                হটলাইন: ০১৭৬১৩৪৫৪৮০
              </a>

              <a
                href="https://wa.me/8801761345480"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                হোয়াটসঅ্যাপ চ্যাট
              </a>
            </div>
          </div>

          {/* Quick Query Form */}
          <div className="lg:col-span-5 bg-slate-900 p-5 rounded-xl border-2 border-slate-800">
            {!querySent ? (
              <form onSubmit={handleQuerySubmit} className="space-y-3">
                <p className="text-xs font-extrabold text-white flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-orange-400" />
                  সরাসরি বার্তা পাঠান:
                </p>

                <input
                  type="text"
                  required
                  value={queryName}
                  onChange={(e) => setQueryName(e.target.value)}
                  placeholder="আপনার নাম"
                  className="w-full bg-slate-950 border-2 border-slate-800 text-slate-100 text-xs font-medium rounded-lg px-3.5 py-2 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="tel"
                  required
                  value={queryPhone}
                  onChange={(e) => setQueryPhone(e.target.value)}
                  placeholder="মোবাইল নম্বর"
                  className="w-full bg-slate-950 border-2 border-slate-800 text-slate-100 text-xs font-medium rounded-lg px-3.5 py-2 focus:outline-none focus:border-orange-500"
                />

                <textarea
                  rows={2}
                  value={queryMsg}
                  onChange={(e) => setQueryMsg(e.target.value)}
                  placeholder="আপনার বার্তা বা প্রশ্ন..."
                  className="w-full bg-slate-950 border-2 border-slate-800 text-slate-100 text-xs font-medium rounded-lg px-3.5 py-2 focus:outline-none focus:border-orange-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs rounded-lg transition-all shadow-sm"
                >
                  বার্তা পাঠান
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-xs font-extrabold text-white">বার্তা হোয়াটসঅ্যাপে পাঠানো হয়েছে!</p>
                <p className="text-[11px] text-slate-400 font-medium">আমাদের প্রতিনিধি দ্রুত আপনার সাথে যোগাযোগ করবেন।</p>
                <a
                  href={`https://wa.me/8801761345480?text=${encodeURIComponent(`নাম: ${queryName}\nমোবাইল: ${queryPhone}\nবার্তা: ${queryMsg || 'নতুন ইন্টারনেট সংযোগ'}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  হোয়াটসঅ্যাপে পুনরায় বার্তা খুলুন
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b-2 border-slate-800">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-950 border-2 border-orange-500 flex items-center justify-center">
              <Wifi className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <span className="text-xl font-black text-white font-['Inter']">
                DELOWAR <span className="text-orange-500">NETWORK</span>
              </span>
              <p className="text-[10px] text-slate-400 font-bold">ISP Broadband Services</p>
            </div>
          </a>

          <p className="text-xs text-slate-300 font-medium leading-relaxed pr-4">
            দেলোয়ার নেটওয়ার্ক বাংলাদেশ বিটিআরসি (BTRC) অনুমোদিত একটি ক্যাটাগরি 'এ' ইন্টারনেট সার্ভিস প্রোভাইডার। আমরা সর্বোচ্চ কোয়ালিটি ও বাফারলেস ব্রডব্যান্ড নেটওয়ার্ক নিশ্চিতে প্রতিশ্রুতিবদ্ধ।
          </p>

          <div className="space-y-2 text-xs text-slate-300 font-medium">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>অফিস ঠিকানা: একদন্ত বাজার, আটঘরিয়া, পাবনা</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>ইমেইল: support@delowarnetwork.com.bd</span>
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">কুইক লিংকস</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-semibold">
            <li><a href="#home" className="hover:text-orange-400 transition-colors">হোম পেজ</a></li>
            <li><a href="#packages" className="hover:text-orange-400 transition-colors">ইন্টারনেট প্যাকেজ</a></li>
            <li><a href="#calculator" className="hover:text-orange-400 transition-colors">ব্যান্ডউইথ ক্যালকুলেটর</a></li>
            <li><a href="#coverage" className="hover:text-orange-400 transition-colors">কাভারেজ এরিয়া</a></li>
            <li><a href="#why-us" className="hover:text-orange-400 transition-colors">আমাদের সেবাসমূহ</a></li>
          </ul>
        </div>

        {/* Col 3: Services & Legal */}
        <div>
          <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">সেবা ও নীতি</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-semibold">
            <li><a href="#packages" className="hover:text-orange-400 transition-colors">হোম ব্রডব্যান্ড</a></li>
            <li><a href="#packages" className="hover:text-orange-400 transition-colors">কর্পোরেট ফাইবার ইন্টারনেট</a></li>
            <li><a href="#packages" className="hover:text-orange-400 transition-colors">গেমার রিয়েল আইপি</a></li>
            <li><span className="hover:text-orange-400 cursor-pointer">টার্মস ও কন্ডিশনস</span></li>
            <li><span className="hover:text-orange-400 cursor-pointer">প্রাইভেসি পলিসি</span></li>
          </ul>
        </div>

        {/* Col 4: Payment Partners */}
        <div>
          <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">অনলাইন পেমেন্ট পার্টনার</h4>
          <p className="text-[11px] text-slate-400 mb-3 font-medium">
            সহজ ও নিরাপদ উপায়ে বিল পরিশোধ করুন:
          </p>
          <div className="flex flex-wrap gap-1.5 text-[10px] font-black">
            <span className="bg-slate-950 text-pink-400 border border-slate-800 px-2.5 py-1 rounded">bKash</span>
            <span className="bg-slate-950 text-orange-400 border border-slate-800 px-2.5 py-1 rounded">Nagad</span>
            <span className="bg-slate-950 text-purple-400 border border-slate-800 px-2.5 py-1 rounded">Rocket</span>
            <span className="bg-slate-950 text-blue-400 border border-slate-800 px-2.5 py-1 rounded">VISA</span>
            <span className="bg-slate-950 text-red-400 border border-slate-800 px-2.5 py-1 rounded">Mastercard</span>
          </div>
        </div>

      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-medium">
        <p>© 2026 Delowar Network ISP Ltd. সর্বস্বত্ব সংরক্ষিত। BTRC ক্যাটাগরি লাইসেন্স নং: ISP-2026-A99</p>
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>১০০% বিটিআরসি অনুমোদিত সেবামূলক প্রতিষ্ঠান</span>
        </div>
      </div>

    </footer>
  );
};

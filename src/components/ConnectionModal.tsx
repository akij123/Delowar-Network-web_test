import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Phone, MapPin, Package, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { ISP_PACKAGES } from '../data/ispData';

interface ConnectionModalProps {
  isOpen: boolean;
  preSelectedPackageId?: string;
  preSelectedArea?: string;
  onClose: () => void;
}

export const ConnectionModal: React.FC<ConnectionModalProps> = ({
  isOpen,
  preSelectedPackageId,
  preSelectedArea,
  onClose
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('ঢাকা');
  const [address, setAddress] = useState(preSelectedArea || '');
  const [selectedPkgId, setSelectedPkgId] = useState(preSelectedPackageId || 'pkg-standard-fiber');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  useEffect(() => {
    if (preSelectedPackageId) {
      setSelectedPkgId(preSelectedPackageId);
    }
    if (preSelectedArea) {
      setAddress(preSelectedArea);
    }
  }, [preSelectedPackageId, preSelectedArea]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) return;

    const generatedRef = 'SN-REQ-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedRef);

    const messageText = `নতুন সংযোগের আবেদন:\nট্র্যাকিং কোড: ${generatedRef}\nনাম: ${fullName}\nমোবাইল: ${phone}\nঠিকানা: ${address}\nপ্যাকেজ: ${currentPkg.name} (${currentPkg.speedMbps} Mbps)\nনোট: ${notes || 'নেই'}`;
    const waUrl = `https://wa.me/8801761345480?text=${encodeURIComponent(messageText)}`;
    
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    onClose();
  };

  const currentPkg = ISP_PACKAGES.find(p => p.id === selectedPkgId) || ISP_PACKAGES[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 border-2 border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-2 border-2 border-slate-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                ফ্রি ইনস্টলেশন অফার
              </div>
              <h3 className="text-xl font-black text-slate-900">নতুন সংযোগের জন্য আবেদন করুন</h3>
              <p className="text-xs text-slate-600 font-medium mt-1">
                ফর্মটি পূরণ করুন। আমাদের প্রতিনিধি ৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="যেমন: মোঃ তামিম ইকবাল"
                  className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">
                    মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="০১৭XXXXXXXX"
                    className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* District & Address */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1">
                  থানা, এলাকা ও বিস্তারিত ঠিকানা *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="যেমন: বাসা #৪, রোড #১২, ব্লক বি, মিরপুর ১০, ঢাকা"
                  className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              {/* Package Selection Dropdown */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1">
                  পছন্দের ইন্টারনেট প্যাকেজ *
                </label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => setSelectedPkgId(e.target.value)}
                  className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500 font-extrabold"
                >
                  {ISP_PACKAGES.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} ({pkg.speedMbps} Mbps) - ৳{pkg.priceMonthly}/মাস
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Package Specs Summary Box */}
              <div className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 text-xs flex justify-between items-center">
                <div>
                  <p className="font-extrabold text-slate-900">{currentPkg.name}</p>
                  <p className="text-[11px] font-semibold text-slate-600">স্পিড: {currentPkg.speedMbps} Mbps (BDIX: {currentPkg.bdixSpeedMbps} Mbps)</p>
                </div>
                <span className="font-black text-orange-600 text-sm font-['Inter']">
                  ৳{currentPkg.priceMonthly}/মাস
                </span>
              </div>

              {/* Extra Notes */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1">
                  বিশেষ কোনো মন্তব্য (ঐচ্ছিক)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="যেমন: দ্রুত সংযোগ প্রয়োজন বা নির্দিষ্ট সময়ে আসতে হবে..."
                  className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                আবেদন জমা দিন
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-xl font-black text-slate-900">আবেদন সফলভাবে গৃহীত হয়েছে!</h4>
            <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto">
              ধন্যবাদ <span className="font-extrabold text-slate-900">{fullName}</span>, আমাদের প্রতিনিধি দ্রুততম সময়ের মধ্যে <span className="font-black text-orange-600 font-mono">{phone}</span> নম্বরে কল করে ফ্রি ইনস্টলেশন কনফার্ম করবে।
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border-2 border-slate-200 text-xs text-left space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">আবেদন ট্র্যাকিং কোড:</span>
                <span className="text-orange-600 font-black">{refCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">প্যাকেজ:</span>
                <span className="text-slate-900 font-extrabold">{currentPkg.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">ঠিকানা:</span>
                <span className="text-slate-700 font-bold">{address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/8801761345480?text=${encodeURIComponent(`নতুন সংযোগের আবেদন:\nট্র্যাকিং কোড: ${refCode}\nনাম: ${fullName}\nমোবাইল: ${phone}\nঠিকানা: ${address}\nপ্যাকেজ: ${currentPkg.name}`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                হোয়াটসঅ্যাপে চ্যাট করুন
              </a>

              <button
                onClick={handleClose}
                className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl transition-all shadow-sm"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

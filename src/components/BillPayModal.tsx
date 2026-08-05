import React, { useState } from 'react';
import { X, CreditCard, CheckCircle2, ShieldCheck, ArrowRight, Wallet, Receipt } from 'lucide-react';

interface BillPayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BillPayModal: React.FC<BillPayModalProps> = ({ isOpen, onClose }) => {
  const [customerId, setCustomerId] = useState('');
  const [method, setMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'card'>('bkash');
  const [step, setStep] = useState<'lookup' | 'confirm' | 'success'>('lookup');
  const [trxId, setTrxId] = useState('');

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerId.trim()) return;
    setStep('confirm');
  };

  const handlePay = () => {
    const randomTrx = 'TXN' + Math.floor(10000000 + Math.random() * 90000000);
    setTrxId(randomTrx);
    setStep('success');
  };

  const handleReset = () => {
    setCustomerId('');
    setStep('lookup');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 border-2 border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-slate-800 flex items-center justify-center mx-auto mb-3 shadow-sm">
            <CreditCard className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-xl font-black text-slate-900">ইনস্ট্যান্ট অনলাইন বিল পে</h3>
          <p className="text-xs text-slate-600 font-medium mt-1">
            বিকাশ, নগদ, রকেট বা কার্ডের মাধ্যমে ২ মিনিটে বিল পে করুন
          </p>
        </div>

        {step === 'lookup' && (
          <form onSubmit={handleLookup} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-800 mb-2">
                গ্রাহক আইডি (Customer ID) অথবা ফোন নম্বর:
              </label>
              <input
                type="text"
                required
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="যেমন: SN-10294 অথবা ০১৭XXXXXXXX"
                className="w-full bg-slate-100 border-2 border-slate-200 focus:border-orange-500 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                বিল রিসিপ্ট অথবা রাউটার স্টিকারে আইডি পাবেন
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              বিল তথ্য দেখুন
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-2 text-[10px] text-slate-400 uppercase font-bold">অথবা</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <a
              href="https://portal.delowarnetwork.com/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
            >
              সরাসরি ক্লায়েন্ট পোর্টালে যান (portal.delowarnetwork.com)
            </a>
          </form>
        )}

        {step === 'confirm' && (
          <div className="space-y-5">
            <div className="p-4 bg-slate-50 rounded-xl border-2 border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600 font-semibold">গ্রাহক আইডি:</span>
                <span className="font-extrabold text-slate-900 font-mono">{customerId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-semibold">প্যাকেজ:</span>
                <span className="font-extrabold text-orange-600">স্মার্ট ফাইবার (২৫ Mbps)</span>
              </div>
              <div className="flex justify-between pt-2 border-t-2 border-slate-200">
                <span className="text-slate-900 font-extrabold">পরিশোধযোগ্য বিল:</span>
                <span className="font-black text-slate-900 text-base font-['Inter']">৳৭০০</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-800 mb-2">
                পেমেন্ট মেথড সিলেক্ট করুন:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'bkash', label: 'বিকাশ (bKash)' },
                  { key: 'nagad', label: 'নগদ (Nagad)' },
                  { key: 'rocket', label: 'রকেট (Rocket)' },
                  { key: 'card', label: 'কার্ড (Visa/Master)' }
                ].map(item => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setMethod(item.key as any)}
                    className={`p-3 rounded-xl border-2 text-xs font-extrabold text-center transition-all ${
                      method === item.key ? 'border-orange-500 bg-slate-900 text-white shadow-sm' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handlePay}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              এখনই ৳৭০০ পরিশোধ করুন
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-lg font-black text-slate-900">বিল পরিশোধ সফল হয়েছে!</h4>
            <p className="text-xs text-slate-600 font-medium">
              আপনার দেলোয়ার নেটওয়ার্ক অ্যাকাউন্ট বিল সফলভাবে আপডেট হয়েছে।
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border-2 border-slate-200 text-xs text-left space-y-1.5 font-mono">
              <p><span className="text-slate-500 font-semibold">ট্রানজেকশন আইডি:</span> <span className="text-orange-600 font-black">{trxId}</span></p>
              <p><span className="text-slate-500 font-semibold">গ্রাহক আইডি:</span> <span className="text-slate-900 font-bold">{customerId}</span></p>
              <p><span className="text-slate-500 font-semibold">পেমেন্ট মেথড:</span> <span className="text-slate-900 font-black uppercase">{method}</span></p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl transition-all shadow-sm"
            >
              বন্ধ করুন
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

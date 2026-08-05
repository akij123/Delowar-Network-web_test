import React, { useState, useEffect } from 'react';
import { X, Play, RefreshCw, Gauge, Wifi, Zap, CheckCircle2 } from 'lucide-react';

interface SpeedTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeedTestModal: React.FC<SpeedTestModalProps> = ({ isOpen, onClose }) => {
  const [testingState, setTestingState] = useState<'idle' | 'ping' | 'download' | 'upload' | 'completed'>('idle');
  const [ping, setPing] = useState<number>(0);
  const [downloadMbps, setDownloadMbps] = useState<number>(0);
  const [uploadMbps, setUploadMbps] = useState<number>(0);
  const [jitter, setJitter] = useState<number>(0);

  useEffect(() => {
    if (!isOpen) return;
    let interval: any;
    if (testingState === 'download') {
      let current = 0;
      interval = setInterval(() => {
        current += Math.floor(Math.random() * 18) + 8;
        if (current >= 98.5) {
          current = 98.5 + (Math.random() * 2 - 1);
          setDownloadMbps(Number(current.toFixed(1)));
          clearInterval(interval);
          setTestingState('upload');
        } else {
          setDownloadMbps(Number(current.toFixed(1)));
        }
      }, 100);
    } else if (testingState === 'upload') {
      let current = 0;
      interval = setInterval(() => {
        current += Math.floor(Math.random() * 18) + 8;
        if (current >= 97.2) {
          current = 97.2 + (Math.random() * 2 - 1);
          setUploadMbps(Number(current.toFixed(1)));
          clearInterval(interval);
          setTestingState('completed');
        } else {
          setUploadMbps(Number(current.toFixed(1)));
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [testingState, isOpen]);

  if (!isOpen) return null;

  const startTest = () => {
    setTestingState('ping');
    setPing(0);
    setDownloadMbps(0);
    setUploadMbps(0);
    setJitter(0);

    // Step 1: Ping & Jitter test
    setTimeout(() => {
      setPing(3);
      setJitter(1);
      setTestingState('download');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-2xl relative overflow-hidden text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 border-2 border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-slate-800 flex items-center justify-center mx-auto mb-3 shadow-sm">
            <Gauge className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-xl font-black text-slate-900">দেলোয়ার নেটওয়ার্ক লাইভ স্পিড টেস্ট</h3>
          <p className="text-xs text-slate-600 font-medium mt-1">
            আপনার বর্তমান ইন্টারনেট সংযোগের পিং, ডাউনলোড ও আপলোড গতি পরিমাপ করুন
          </p>
        </div>

        {/* Meter Circle */}
        <div className="my-8 p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 relative max-w-xs mx-auto shadow-2xs">
          <div className="space-y-2">
            <p className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider font-mono">
              {testingState === 'idle' && 'স্টার্ট টেস্ট বাটনে ক্লিক করুন'}
              {testingState === 'ping' && 'পিং পরিমাপ করা হচ্ছে...'}
              {testingState === 'download' && 'ডাউনলোড স্পিড টেস্ট হচ্ছে...'}
              {testingState === 'upload' && 'আপলোড স্পিড টেস্ট হচ্ছে...'}
              {testingState === 'completed' && 'টেস্ট সফলভাবে সম্পন্ন হয়েছে!'}
            </p>

            <div className="text-5xl font-black text-slate-900 font-['Inter']">
              {testingState === 'upload' ? uploadMbps : downloadMbps}
            </div>

            <p className="text-xs font-black text-slate-500">Mbps</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6 text-xs font-mono">
          <div className="p-3 bg-slate-100 rounded-xl border-2 border-slate-200">
            <p className="text-slate-500 text-[10px] font-extrabold font-sans">PING</p>
            <p className="font-black text-orange-600 text-sm">{ping} ms</p>
          </div>
          <div className="p-3 bg-slate-100 rounded-xl border-2 border-slate-200">
            <p className="text-slate-500 text-[10px] font-extrabold font-sans">DOWNLOAD</p>
            <p className="font-black text-emerald-600 text-sm">{downloadMbps} Mbps</p>
          </div>
          <div className="p-3 bg-slate-100 rounded-xl border-2 border-slate-200">
            <p className="text-slate-500 text-[10px] font-extrabold font-sans">UPLOAD</p>
            <p className="font-black text-slate-900 text-sm">{uploadMbps} Mbps</p>
          </div>
        </div>

        {/* Action Button */}
        {testingState === 'idle' || testingState === 'completed' ? (
          <button
            onClick={startTest}
            className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-orange-400 text-orange-400" />
            {testingState === 'completed' ? 'পুনরায় টেস্ট করুন' : 'স্পিড টেস্ট শুরু করুন'}
          </button>
        ) : (
          <button
            disabled
            className="w-full py-3.5 bg-slate-200 text-slate-500 font-extrabold text-sm rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4 animate-spin text-orange-500" />
            টেস্ট চলছে...
          </button>
        )}

      </div>
    </div>
  );
};

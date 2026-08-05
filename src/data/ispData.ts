import { InternetPackage, CoverageArea, FeatureItem, Testimonial, FAQItem } from '../types';

export const ISP_PACKAGES: InternetPackage[] = [
  {
    id: 'pkg-home-basic',
    name: 'হোম স্টার্টার (Home Starter)',
    category: 'home',
    speedMbps: 25,
    uploadMbps: 25,
    bdixSpeedMbps: 100,
    youtubeSpeedMbps: 100,
    ftpSpeedMbps: 100,
    priceMonthly: 500,
    badge: 'বাজেট ফ্রেন্ডলি',
    targetAudience: 'ছোট পরিবার, ব্রাউজিং ও সাধারণ ব্যবহারের জন্য',
    features: [
      '২৫ Mbps সিমেট্রিক্যাল ব্রডব্যান্ড',
      '১০০ Mbps BDIX ও ফেসবুক ক্যশ',
      '১০০ Mbps আল্ট্রাফাস্ট ইউটিউব স্ট্রিমিং',
      '২৪/৭ নিরবচ্ছিন্ন ফাইবার সংযোগ',
      'ফ্রি ওটিটি / আইপিটিভি চ্যানেল এক্সেস',
      'জিরো ক্যাপিং বা ডেটা লিমিট নেই'
    ],
    hasRealIP: false,
    freeInstallation: true
  },
  {
    id: 'pkg-standard-fiber',
    name: 'স্মার্ট ফাইবার (Smart Fiber)',
    category: 'home',
    speedMbps: 30,
    uploadMbps: 30,
    bdixSpeedMbps: 100,
    youtubeSpeedMbps: 100,
    ftpSpeedMbps: 100,
    priceMonthly: 600,
    badge: 'জনপ্রিয়',
    targetAudience: 'স্মার্ট পরিবার, এইচডি স্ট্রিমিং ও অনলাইন ক্লাসের জন্য',
    features: [
      '৩০ Mbps রিয়েল স্পিড ইন্টারনেট',
      '১০৮০p ফুল এইচডি বাফারলেস স্ট্রিমিং',
      '১০০ Mbps BDIX, FTP ও কন্টেন্ট ক্যাশ',
      'স্মার্ট রাউটার ফ্রি কনফিগারেশন',
      '২৪/৭ ডেডিকেটেড ফোন সাপোর্ট'
    ],
    hasRealIP: false,
    freeInstallation: true
  },
  {
    id: 'pkg-pro-gamer',
    name: 'আল্ট্রা গেমার ও ক্রিয়েটর (Ultra Gamer)',
    category: 'gaming',
    speedMbps: 50,
    uploadMbps: 50,
    bdixSpeedMbps: 100,
    youtubeSpeedMbps: 100,
    ftpSpeedMbps: 1000,
    priceMonthly: 800,
    badge: 'প্রো গেমার',
    targetAudience: 'অনলাইন গেমার, কন্টেন্ট ক্রিয়েটর ও আইটি ফার্মের জন্য',
    features: [
      '৫০ Mbps আল্ট্রাফাস্ট ফাইবার স্পিড',
      'ফ্রি রিয়েল স্ট্যাটিক আইপি (Public IP)',
      'গেম সার্ভারে সর্বনিম্ন ও স্টেবল পিং (Ping)',
      '১০০ Mbps ডেডিকেটেড BDIX ও FTP ব্যান্ডউইথ',
      '৪K আল্ট্রা এইচডি লাইভ স্ট্রিমিং সাপোর্ট',
      'ভিআইপি কাস্টমার অগ্রাধিকার সেবা'
    ],
    hasRealIP: true,
    freeInstallation: true
  },
  {
    id: 'pkg-power-user',
    name: 'পাওয়ার প্রো (Power Pro)',
    category: 'smart',
    speedMbps: 60,
    uploadMbps: 60,
    bdixSpeedMbps: 100,
    youtubeSpeedMbps: 100,
    ftpSpeedMbps: 500,
    priceMonthly: 1000,
    badge: 'হাই স্পিড',
    targetAudience: 'হেভি ইউজার, ৪K স্ট্রিমিং ও ফ্রিল্যান্সারদের জন্য',
    features: [
      '৬০ Mbps সুপারফাস্ট ফাইবার লাইন',
      '১০০ Mbps বিডিআইএক্স ও কন্টেন্ট ক্যাশ',
      '৪K ইউএইচডি ৪টি টিভিতে একই সাথে সাপোর্ট',
      'লো-লেটেন্সি ও দ্রুত রেসপন্স লাইন',
      '২৪/৭ অনসাইট টেক সাপোর্ট'
    ],
    hasRealIP: false,
    freeInstallation: true
  },
  {
    id: 'pkg-sme-business',
    name: 'এসএমই বিজনেস প্রিমিয়াম (SME Business)',
    category: 'corporate',
    speedMbps: 70,
    uploadMbps: 70,
    bdixSpeedMbps: 100,
    youtubeSpeedMbps: 100,
    ftpSpeedMbps: 1000,
    priceMonthly: 1200,
    badge: 'এন্টারপ্রাইজ',
    targetAudience: 'অফিস, শোরুম, এজেন্সি ও ছোট-মাঝারি প্রতিষ্ঠানের জন্য',
    features: [
      '৭০ Mbps ফুল ডেডিকেটেড ব্যান্ডউইথ',
      '১:১ আপলোড ও ডাউনলোড স্পিড রেশিও',
      '৯৯.৯% আপটাইম সার্ভিস লেভেল এগ্রিমেন্ট (SLA)',
      '২টি ফ্রি স্ট্যাটিক পাবলিক আইপি (Static IP)',
      'ডেডিকেটেড একাউন্ট ম্যানেজার ও ১ ঘণ্টার মধ্যে অনসাইট সাপোর্ট'
    ],
    hasRealIP: true,
    freeInstallation: true
  },
  {
    id: 'pkg-gigabit-max',
    name: 'সুপার গিগাবিট এক্সট্রিম (Gigabit Max)',
    category: 'gaming',
    speedMbps: 100,
    uploadMbps: 100,
    bdixSpeedMbps: 100,
    youtubeSpeedMbps: 100,
    ftpSpeedMbps: 1000,
    priceMonthly: 1500,
    popular: true,
    badge: 'আল্ট্রা স্পিড',
    targetAudience: 'হেভি ডাউনলোডার, প্রো প্রফেশনাল ও কর্পোরেট সার্ভারের জন্য',
    features: [
      '১০০ Mbps আল্ট্রাফাস্ট হাই-পারফরম্যান্স স্পিড',
      '১০০ Mbps ডেডিকেটেড BDIX ও FTP ব্যান্ডউইথ',
      '১টি ফ্রি রিয়েল স্ট্যাটিক আইপি (Public IP)',
      'জিরো লেটেন্সি ও আল্ট্রা-লো পিং গেমিং রউটিং',
      '২৪/৭ ডেডিকেটেড এক্সিকিউটিভ কেয়ার'
    ],
    hasRealIP: true,
    freeInstallation: true
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    id: 'cov-ekdanta',
    district: 'পাবনা (Pabna)',
    thana: 'আটঘরিয়া (Atgharia)',
    areaName: 'একদন্ত বাজার, আটঘরিয়া ও সংলগ্ন এলাকা',
    status: 'available',
    fiberType: '১০০% অপটিক্যাল ফাইবার নেটওয়ার্ক',
    hotline: '০১৭৬১৩৪৫৪৮০',
    estimatedSetupHours: 2
  }
];

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    id: 'feat-1',
    title: '২৪/৭ ইনস্ট্যান্ট কাস্টমার সাপোর্ট',
    description: 'যে কোনো সময় কারিগরি সহায়তা বা পরামর্শের জন্য আমাদের দক্ষ টেক সাপোর্ট টিম প্রস্তুত রয়েছে। ফোন, হোয়াটসঅ্যাপ ও লাইভ চ্যাট সুবিধা।',
    icon: 'Headphones',
    highlightText: '০১৭৬১৩৪৫৪৮০ হটলাইন'
  },
  {
    id: 'feat-2',
    title: '৯৯.৯% আপটাইম গ্যারান্টি',
    description: 'ডুয়াল ব্যাকবোন অপটিক্যাল ফাইবার সংযোগ ও লোড ব্যালেন্সিং সার্ভারের মাধ্যমে নিরবচ্ছিন্ন ও বাফারলেস ইন্টারনেট সেবা।',
    icon: 'Zap',
    highlightText: 'ডুয়াল ফাইবার লাইন'
  },
  {
    id: 'feat-3',
    title: '১ Gbps BDIX ও কন্টেন্ট ক্যাশ',
    description: 'ইউটিউব, ফেসবুক, বিডিআইএক্স টিভি ও লোকাল এফটিপি সার্ভার থেকে সুপারফাস্ট ডাউনলোডিং ও স্ট্রিমিং স্পিড।',
    icon: 'PlayCircle',
    highlightText: 'বাফারলেস স্ট্রিম'
  },
  {
    id: 'feat-4',
    title: 'গেমিং এর জন্য লো-পিং রউটিং',
    description: 'অনলাইন মাল্টিপ্লেয়ার গেমসের জন্য অপটিমাইজড রাউটিং, যার ফলে কোনো লেগ বা ফ্রেম ড্রপ ছাড়াই স্মুথ গেমপ্লে।',
    icon: 'Gamepad2',
    highlightText: 'স্মুথ পিং'
  },
  {
    id: 'feat-5',
    title: 'সহজ অনলাইন বিল পরিশোধ',
    description: 'বিকাশ, নগদ, রকেট, ডেবিট/ক্রেডিট কার্ডের মাধ্যমে এক ক্লিকে ঘরে বসেই বিল পরিশোধের আধুনিক সুবিধা।',
    icon: 'CreditCard',
    highlightText: 'ইনস্ট্যান্ট রসিদ'
  },
  {
    id: 'feat-6',
    title: 'ফ্রি অনসাইট টেকনিক্যাল সাপোর্ট',
    description: 'রাউটার কনফিগারেশন, অপটিক্যাল ফাইবার ক্যাবল চেক ও যেকোনো জটিলতায় দক্ষ টেকনিশিয়ানের বিনামূল্যে হোম সার্ভিস।',
    icon: 'ShieldCheck',
    highlightText: 'ফ্রি হোম সার্ভিস'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'আরিফুল ইসলাম',
    location: '',
    packageUsed: 'স্মার্ট ফাইবার (২৫ Mbps)',
    review: 'গত ২ বছর ধরে দেলোয়ার নেটওয়ার্ক ইন্টারনেট ব্যবহার করছি। বাফারিং শব্দটাই ভুলে গেছি। বৃষ্টি বা ঝড়েও কানেকশন ড্রপ করে না। কাস্টমার সার্ভিস চমৎকার!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'সাবরিনা আক্তার',
    location: '',
    packageUsed: 'পাওয়ার প্রো (৫০ Mbps)',
    review: 'আমি আপওয়ার্কে ফ্রিল্যান্সিং করি। সময়মত ফাইল আপলোড এবং জুম কলে কথা বলার জন্য ইন্টারনেট বিশ্বস্ত হওয়া জরুরী। দেলোয়ার নেটওয়ার্ক আমাকে ১০০% সন্তুষ্ট করেছে।',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'তানভীর আহমেদ (গেমার)',
    location: '',
    packageUsed: 'আল্ট্রা গেমার (১০০ Mbps)',
    review: 'ভ্যালোর্যান্টে সবসময় ২০-২৫ ms পিং পাই! রিয়েল আইপি ফ্রি পাওয়ায় সার্ভার হোস্ট করতে সুবিধা হয়। গেমারদের জন্য বেস্ট ISP!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'connection',
    question: 'নতুন ইন্টারনেট সংযোগ নিতে কত সময় লাগে?',
    answer: 'আমাদের কাভারেজ এরিয়ার ভেতরে আবেদন করার পর সর্বোচ্চ ৪ থেকে ২৪ ঘণ্টার মধ্যে সংযোগ সম্পূর্ণ চালু করে দেওয়া হয়।'
  },
  {
    id: 'faq-2',
    category: 'connection',
    question: 'কানেকশন নেওয়ার জন্য কি কি ডকুমেন্টস প্রয়োজন?',
    answer: 'আপনার জাতীয় পরিচয়পত্র (NID) অথবা জন্ম সনদের ফটোকপি এবং ১ কপি পাসপোর্ট সাইজ ছবি প্রয়োজন হবে।'
  },
  {
    id: 'faq-3',
    category: 'billing',
    question: 'বিল পরিশোধের শেষ তারিখ কবে এবং কীভাবে বিল দেব?',
    answer: 'প্রতি মাসের ১০ তারিখের মধ্যে বিল পরিশোধ করতে হয়। আমাদের ওয়েবসাইট, অ্যাপ অথবা বিকাশ/নগদ এর মাধ্যমে ঘরে বসেই বিল পরিশোধ করতে পারবেন।'
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: 'ইন্টারনেট স্পিড কমে গেলে বা সমস্যা হলে কি করব?',
    answer: 'প্রথমে আপনার রাউটারটি বন্ধ করে ১০ সেকেন্ড পর আবার চালু করুন। সমস্যা সমাধান না হলে আমাদের ০১৭৬১৩৪৫৪৮০ হটলাইনে অথবা ২৪/৭ হোয়াটসঅ্যাপে নক দিন।'
  },
  {
    id: 'faq-5',
    category: 'package',
    question: 'আমি কি চলন্ত মাসে প্যাকেজ চেঞ্জ করতে পারব?',
    answer: 'হ্যাঁ, যেকোনো সময় আমাদের পোর্টালে লগইন করে বা হটলাইনে কল করে ফ্রিতে প্যাকেজ আপগ্রেড বা ডাউনগ্রেড করতে পারবেন।'
  }
];

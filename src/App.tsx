/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PackageCalculator } from './components/PackageCalculator';
import { PricingPackages } from './components/PricingPackages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoverageAreaChecker } from './components/CoverageAreaChecker';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { Footer } from './components/Footer';
import { ConnectionModal } from './components/ConnectionModal';
import { BillPayModal } from './components/BillPayModal';
import { SpeedTestModal } from './components/SpeedTestModal';

export default function App() {
  const [connectionModalOpen, setConnectionModalOpen] = useState(false);
  const [preSelectedPkgId, setPreSelectedPkgId] = useState<string | undefined>(undefined);
  const [preSelectedArea, setPreSelectedArea] = useState<string | undefined>(undefined);

  const [billPayModalOpen, setBillPayModalOpen] = useState(false);
  const [speedTestModalOpen, setSpeedTestModalOpen] = useState(false);

  const handleOpenConnectionModal = (pkgId?: string, areaName?: string) => {
    setPreSelectedPkgId(pkgId);
    setPreSelectedArea(areaName);
    setConnectionModalOpen(true);
  };

  const handleSelectPackageFromCalculator = (pkgId: string) => {
    setPreSelectedPkgId(pkgId);
    setConnectionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Hind_Siliguri',sans-serif] selection:bg-orange-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenConnectionModal={(pkgId) => handleOpenConnectionModal(pkgId)}
        onOpenBillPayModal={() => setBillPayModalOpen(true)}
        onOpenSpeedTestModal={() => setSpeedTestModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenConnectionModal={() => handleOpenConnectionModal()}
        onOpenSpeedTestModal={() => setSpeedTestModalOpen(true)}
      />

      {/* Internet Pricing Packages (Pricing Cards) */}
      <PricingPackages
        onOpenConnectionModal={(pkgId) => handleOpenConnectionModal(pkgId)}
      />

      {/* Bandwidth Calculator / Package Recommender */}
      <PackageCalculator
        onSelectPackage={handleSelectPackageFromCalculator}
      />

      {/* Why Choose Us (সেবার বিশেষত্ব) */}
      <WhyChooseUs
        onOpenConnectionModal={() => handleOpenConnectionModal()}
      />

      {/* Coverage Area Checker (কাভারেজ এরিয়া) */}
      <CoverageAreaChecker
        onOpenConnectionModal={(areaName) => handleOpenConnectionModal(undefined, areaName)}
      />

      {/* Testimonials & FAQs */}
      <TestimonialsFAQ />

      {/* Contact & Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ConnectionModal
        isOpen={connectionModalOpen}
        preSelectedPackageId={preSelectedPkgId}
        preSelectedArea={preSelectedArea}
        onClose={() => setConnectionModalOpen(false)}
      />

      <BillPayModal
        isOpen={billPayModalOpen}
        onClose={() => setBillPayModalOpen(false)}
      />

      <SpeedTestModal
        isOpen={speedTestModalOpen}
        onClose={() => setSpeedTestModalOpen(false)}
      />
    </div>
  );
}

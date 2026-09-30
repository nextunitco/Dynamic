/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, ServiceItem, KnowledgeArticle } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ArticleModal } from './components/ArticleModal';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookServicePage } from './pages/BookServicePage';
import { LoyaltyPage } from './pages/LoyaltyPage';
import { KnowledgeHubPage } from './pages/KnowledgeHubPage';
import { ContactPage } from './pages/ContactPage';
import { PartnersPage } from './pages/PartnersPage';
import { DriverTrainingPage } from './pages/DriverTrainingPage';
import { FleetPage } from './pages/FleetPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<KnowledgeArticle | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [activeLegalModal, setActiveLegalModal] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    } else {
      setPrefilledService('');
    }
    setCurrentPage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookFromServiceModal = (serviceName: string) => {
    setSelectedService(null);
    handleOpenBooking(serviceName);
  };

  const handleBookFromArticleModal = () => {
    setSelectedArticle(null);
    handleOpenBooking('Diagnostics');
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans">
      
      {/* Navigation Top Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={setSelectedService}
            onSelectArticle={setSelectedArticle}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={setSelectedService}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'book' && (
          <BookServicePage
            initialService={prefilledService}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'loyalty' && (
          <LoyaltyPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'knowledge' && (
          <KnowledgeHubPage
            onNavigate={handleNavigate}
            onSelectArticle={setSelectedArticle}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'partners' && (
          <PartnersPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'driver-training' && (
          <DriverTrainingPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'fleet' && (
          <FleetPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenLegal={setActiveLegalModal}
      />

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookFromServiceModal}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookService={handleBookFromArticleModal}
      />

      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

    </div>
  );
}

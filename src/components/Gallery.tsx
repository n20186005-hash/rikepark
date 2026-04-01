'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// Generate 14 photos
const photos = Array.from({ length: 14 }, (_, i) => ({
  src: `/gallery/images (${i + 1}).jpg`,
  key: i,
}));

export default function Gallery() {
  const t = useTranslations('gallery');
  const captions = t.raw('photos') as Array<{ caption: string }>;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const currentPhotos = photos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % photos.length);
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        
        {/* Updated description */}
        <p className="mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
          {t('description')}
          <a
            href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-1"
          >
            Google Maps
          </a>
        </p>

        <div className="gallery-grid">
          {currentPhotos.map((photo, index) => {
            const globalIndex = currentPage * itemsPerPage + index;
            return (
              <div
                key={photo.key}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: index === 0 ? '16/10' : '4/3' }}
                onClick={() => openLightbox(globalIndex)}
              >
                <img
                  src={photo.src}
                  alt={captions[globalIndex]?.caption || `Image ${globalIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    {t('viewOriginal')}
                  </span>
                  {captions[globalIndex]?.caption && (
                    <p className="text-white/80 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 translate-y-4 group-hover:translate-y-0">
                      {captions[globalIndex].caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination controls */}
        <div className="flex flex-col items-center justify-center mt-12 gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={prevPage}
              className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Previous page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === i ? 'w-6 bg-[var(--accent)]' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Next page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Link arrow to all images */}
          <a
            href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            title={t('viewAllOnMaps')}
          >
            <span className="text-sm font-medium">{t('viewAllOnMaps')}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10 transition-colors bg-black/20 hover:bg-black/40 rounded-full"
            onClick={closeLightbox}
            aria-label="Close fullscreen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative w-full max-w-6xl h-full flex items-center justify-between">
            {/* Prev Button */}
            <button 
              className="p-4 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full mx-2 md:mx-4"
              onClick={prevLightboxImage}
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            {/* Current Image */}
            <div className="flex-1 h-full flex items-center justify-center relative">
              <img 
                src={photos[lightboxIndex].src} 
                alt={captions[lightboxIndex]?.caption || `Image ${lightboxIndex + 1}`} 
                className="max-w-full max-h-[85vh] object-contain select-none"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Caption overlay in lightbox */}
              {captions[lightboxIndex]?.caption && (
                <div 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  {captions[lightboxIndex].caption}
                </div>
              )}
            </div>
            
            {/* Next Button */}
            <button 
              className="p-4 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full mx-2 md:mx-4"
              onClick={nextLightboxImage}
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Lightbox Counter */}
          <div className="absolute top-6 left-6 text-white/70 font-medium text-sm bg-black/20 px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}

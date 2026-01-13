import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/plant-1.jpg',
    alt: 'Automated flour mill machinery with yellow hoppers',
    category: 'Production Floor',
    description: 'State-of-the-art automated flour processing equipment'
  },
  {
    id: 2,
    src: '/gallery/plant-2.jpg',
    alt: 'Industrial grain silos and dust collection system',
    category: 'Storage & Processing',
    description: 'Advanced dust collection and grain storage systems'
  },
  {
    id: 3,
    src: '/gallery/plant-3.jpg',
    alt: 'Multiple grinding units with yellow hoppers',
    category: 'Grinding Section',
    description: 'Multiple chakki grinding units in operation'
  },
  {
    id: 4,
    src: '/gallery/plant-4.jpg',
    alt: 'Complete view of automated production line',
    category: 'Production Floor',
    description: 'Comprehensive view of our 35,000 sqft facility'
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const showNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[previousIndex]);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Plant & Campus Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A visual tour of our state-of-the-art facility at Daulat Baug, 
              showcasing cutting-edge automation and modern infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === category
                    ? 'bg-brand-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Facility"
            title="Explore Daulat Baug"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryCard
                key={image.id}
                image={image}
                index={index}
                onClick={() => openLightbox(image)}
              />
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to See More?
              </h2>
              <p className="text-xl mb-8 text-brand-100">
                Schedule a visit to experience our facility firsthand and witness 
                innovation in action
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                Schedule Plant Visit
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryCard({ image, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center text-gray-500 p-6">
                <svg class="w-20 h-20 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p class="text-sm font-medium">${image.category}</p>
                <p class="text-xs text-center mt-2">${image.description}</p>
              </div>
            `;
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-block px-3 py-1 bg-brand-600 rounded-full text-xs font-semibold">
              {image.category}
            </span>
            <ZoomIn className="w-6 h-6" />
          </div>
          <p className="text-sm font-medium">{image.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ image, onClose, onNext, onPrevious }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image Container */}
      <div
        className="max-w-6xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain rounded-lg"
        />

        {/* Image Info */}
        <div className="mt-4 text-center">
          <span className="inline-block px-4 py-2 bg-brand-600 text-white rounded-full text-sm font-semibold mb-2">
            {image.category}
          </span>
          <p className="text-white text-lg">{image.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

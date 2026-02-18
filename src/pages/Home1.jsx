import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import attaChakkiImg from '../assets/atta-chakki.png';
import plantImg from '../assets/plant.png';
import productImg from '../assets/product.png';
import logoImg from '../assets/Shikharji- Full Logo.png';

const carouselData = [
  {
    id: 1,
    image: attaChakkiImg,
    title: "की पहचान",
    titleHindi: "शिखरजी",
    subtitle: "Premium Quality Since 2026",
    subtitleHindi: "स्वाद भी, सेहत भी",
    description: "First fully automated, IoT-enabled flour mill in Guna district. Experience the perfect blend of traditional chakki grinding and cutting-edge automation.",
    descriptionHindi: "गुना जिले की पहली पूर्ण स्वचालित, IoT-सक्षम आटा चक्की। पारंपरिक चक्की पीसने और अत्याधुनिक स्वचालन का सही मिश्रण अनुभव करें।",
    highlights: ["100% Natural", "Nutrient Rich", "Fresh Ground"],
    highlightsHindi: ["100% प्राकृतिक", "पोषक तत्वों से भरपूर", "ताज़ा पिसा हुआ"],
    isLogoSlide: false
  },
  {
    id: 2,
    image: plantImg,
    title: "Farm to Factory",
    titleHindi: "खेत से फैक्ट्री तक",
    subtitle: "Quality at Every Step",
    subtitleHindi: "हर कदम पर गुणवत्ता",
    description: "From carefully selected crops to premium processing, we ensure excellence throughout our production journey.",
    descriptionHindi: "सावधानीपूर्वक चयनित फसलों से लेकर उत्कृष्ट प्रसंस्करण तक, हम अपनी उत्पादन यात्रा में उत्कृष्टता सुनिश्चित करते हैं।",
    highlights: ["Sustainable", "Quality Assured", "Farm Fresh"],
    highlightsHindi: ["टिकाऊ", "गुणवत्ता आश्वासित", "खेत से ताज़ा"],
    isLogoSlide: false
  },
  {
    id: 3,
    image: productImg,
    title: "Premium Products",
    titleHindi: "प्रीमियम उत्पाद",
    subtitle: "Excellence in Every Pack",
    subtitleHindi: "हर पैक में उत्कृष्टता",
    description: "Discover our range of superior quality flour products, crafted with care and precision for your family's health.",
    descriptionHindi: "आपके परिवार के स्वास्थ्य के लिए देखभाल और सटीकता के साथ तैयार किए गए हमारे उच्च गुणवत्ता वाले आटे के उत्पादों की श्रृंखला खोजें।",
    highlights: ["Pure & Fresh", "Certified Quality", "Trusted Brand"],
    highlightsHindi: ["शुद्ध और ताज़ा", "प्रमाणित गुणवत्ता", "विश्वसनीय ब्रांड"],
    isLogoSlide: false
  },
  {
    id: 4,
    image: logoImg,
    title: "Our Brand",
    titleHindi: "हमारा ब्रांड",
    subtitle: "Dil Khush, Diet Fit",
    subtitleHindi: "दिल खुश, डाइट फिट",
    description: "Experience the perfect balance of taste and nutrition with Shikharji",
    descriptionHindi: "शिखरजी के साथ स्वाद और पोषण का सही संतुलन अनुभव करें",
    highlights: ["Heart Happy", "Diet Perfect", "Pure Goodness"],
    highlightsHindi: ["दिल खुश", "डाइट परफेक्ट", "शुद्ध अच्छाई"],
    isLogoSlide: true
  }
];

export default function Home1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: {
      opacity: 0
    },
    center: {
      zIndex: 1,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0
    }
  };

  return (
    <div>
      {/* Mobile-First Carousel Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white mt-4 sm:mt-8 md:mt-12 lg:mt-16">
        {/* Background decoration - only on larger screens */}
        <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block">
          <div
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.2) 0%, transparent 50%)
              `
            }}
          ></div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.3 }
            }}
            className="w-full"
          >
            <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="container-custom mx-auto">
                {/* Mobile & Tablet: Vertical Stack Layout */}
                <div className="lg:hidden">
                  <div className="space-y-4 sm:space-y-5 py-6 sm:py-8">
                    {/* Image Section */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex justify-center items-center w-full"
                    >
                      <div className="w-full max-w-sm">
                        <div className="relative bg-white rounded-xl shadow-lg border-2 border-brand-100 overflow-hidden">
                          <div className="aspect-square flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
                            <img
                              src={carouselData[currentSlide].image}
                              alt={carouselData[currentSlide].title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Text Content Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-3 sm:space-y-4 text-center sm:text-left"
                    >
                      {/* Tag */}
                      <span className="inline-block px-3 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs sm:text-sm font-semibold">
                        {carouselData[currentSlide].subtitleHindi} • {carouselData[currentSlide].subtitle}
                      </span>

                      {/* Title */}
                      <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                          {carouselData[currentSlide].titleHindi}
                        </h1>
                        <h2 className="text-base sm:text-lg font-semibold text-brand-600 leading-snug">
                          {carouselData[currentSlide].title}
                        </h2>
                      </div>

                      {/* Description */}
                      <div className="space-y-2 pt-1">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {carouselData[currentSlide].descriptionHindi}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {carouselData[currentSlide].description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {carouselData[currentSlide].highlightsHindi.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-start bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm border border-brand-100 flex-1 min-w-[120px] sm:min-w-[140px]"
                          >
                            <div className="flex items-center space-x-1.5 w-full mb-1">
                              <div className="w-1 h-1 bg-brand-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-800 font-semibold text-xs leading-tight line-clamp-1">{highlight}</span>
                            </div>
                            <span className="text-gray-600 text-xs ml-2 leading-tight line-clamp-1">{carouselData[currentSlide].highlights[index]}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop: Side-by-Side Layout */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-8 xl:gap-12 items-center py-8 xl:py-12">
                    {/* Left Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-5 order-2 lg:order-1"
                    >
                      {/* Tag */}
                      <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                        {carouselData[currentSlide].subtitleHindi} • {carouselData[currentSlide].subtitle}
                      </span>

                      {/* Title */}
                      <div>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                          {carouselData[currentSlide].titleHindi}
                        </h1>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-brand-600 leading-tight mt-1">
                          {carouselData[currentSlide].title}
                        </h2>
                      </div>

                      {/* Description */}
                      <div className="space-y-2 pt-2">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {carouselData[currentSlide].descriptionHindi}
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {carouselData[currentSlide].description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-3 pt-3">
                        {carouselData[currentSlide].highlightsHindi.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-start bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md border border-brand-100"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                              <span className="text-gray-800 font-semibold text-sm">{highlight}</span>
                            </div>
                            <span className="text-gray-600 text-sm ml-4">{carouselData[currentSlide].highlights[index]}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex justify-center items-center order-1 lg:order-2"
                    >
                      <div className="relative w-full max-w-md xl:max-w-lg aspect-square">
                        <div className="w-full h-full bg-white rounded-2xl shadow-2xl border-4 border-brand-100 overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                          <img
                            src={carouselData[currentSlide].image}
                            alt={carouselData[currentSlide].title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="relative flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden gap-2 w-full">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-md transition-all active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-md transition-all active:scale-95 ml-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 gap-4 pointer-events-none">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/90 hover:bg-white border-2 border-brand-100 text-gray-800 rounded-full shadow-lg transition-all hover:scale-110 pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white/90 hover:bg-white border-2 border-brand-100 text-gray-800 rounded-full shadow-lg transition-all hover:scale-110 pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 pb-4 sm:pb-6 lg:pb-8">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-10 lg:w-12 h-2.5 sm:h-3 bg-brand-600 shadow-md'
                  : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

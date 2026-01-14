import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import attaChakkiImg from '../assets/atta-chakki.png';
import plantImg from '../assets/plant.png';
import productImg from '../assets/product.png';

const carouselData = [
  {
    id: 1,
    image: attaChakkiImg,
    title: "की पहचान",
    titleHindi: "शिखरजी",
    subtitle: "Premium Quality Since 2003",
    subtitleHindi: "स्वाद भी, सेहत भी",
    description: "First fully automated, IoT-enabled flour mill in Guna district. Experience the perfect blend of traditional chakki grinding and cutting-edge automation.",
    descriptionHindi: "गुना जिले की पहली पूर्ण स्वचालित, IoT-सक्षम आटा चक्की। पारंपरिक चक्की पीसने और अत्याधुनिक स्वचालन का सही मिश्रण अनुभव करें।",
    highlights: ["100% Natural", "Nutrient Rich", "Fresh Ground"],
    highlightsHindi: ["100% प्राकृतिक", "पोषक तत्वों से भरपूर", "ताज़ा पिसा हुआ"]
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
    highlightsHindi: ["टिकाऊ", "गुणवत्ता आश्वासित", "खेत से ताज़ा"]
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
    highlightsHindi: ["शुद्ध और ताज़ा", "प्रमाणित गुणवत्ता", "विश्वसनीय ब्रांड"]
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
      {/* Carousel Section */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] lg:h-[55vh] overflow-hidden flex items-center mt-16 md:mt-20 pb-8 md:pb-12">
        {/* Agricultural Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(132, 204, 22, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>
        
        {/* Wheat Field Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        
        {/* Decorative Wheat and Farm Illustrations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left wheat stalks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMobile ? { opacity: 0, y: 50 } : { opacity: 0.15, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute -left-10 top-0 w-80 h-full"
          >
            <svg viewBox="0 0 200 800" className="w-full h-full text-amber-600" preserveAspectRatio="none">
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`translate(${20 + i * 25}, ${i * 100})`}>
                  <path d={`M0 0 L0 ${60 + i * 5} M-10 10 Q-5 8 0 10 M-10 20 Q-5 18 0 20 M-10 30 Q-5 28 0 30 M10 10 Q5 8 0 10 M10 20 Q5 18 0 20 M10 30 Q5 28 0 30`}
                    stroke="currentColor" strokeWidth="2" fill="none" opacity={0.6 - i * 0.05}/>
                </g>
              ))}
            </svg>
          </motion.div>
          
          {/* Right wheat stalks */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isMobile ? { opacity: 0, y: -50 } : { opacity: 0.12, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -right-10 top-0 w-80 h-full"
          >
            <svg viewBox="0 0 200 800" className="w-full h-full text-yellow-700" preserveAspectRatio="none">
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`translate(${180 - i * 25}, ${50 + i * 100})`}>
                  <path d={`M0 0 L0 ${60 + i * 5} M-10 10 Q-5 8 0 10 M-10 20 Q-5 18 0 20 M-10 30 Q-5 28 0 30 M10 10 Q5 8 0 10 M10 20 Q5 18 0 20 M10 30 Q5 28 0 30`}
                    stroke="currentColor" strokeWidth="2" fill="none" opacity={0.6 - i * 0.05}/>
                </g>
              ))}
            </svg>
          </motion.div>
          
          {/* Floating grain particles */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-40"
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-30"
          />
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-35"
          />
        </div>
        
        {/* Animated Gradient Orbs - Agricultural theme */}
        <motion.div
          animate={isMobile ? { scale: 1, opacity: 0 } : { scale: [1, 1.2, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-400 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={isMobile ? { scale: 1, opacity: 0 } : { scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-0 bottom-20 w-[400px] h-[400px] bg-yellow-300 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={isMobile ? { scale: 1, opacity: 0 } : { scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-1/3 bottom-1/4 w-[350px] h-[350px] bg-green-300 rounded-full blur-3xl"
        ></motion.div>

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
            className="w-full h-full"
          >
            <div className="h-full flex items-center">
              <div className="container-custom w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-3 lg:space-y-4 z-10 order-2 lg:order-1">
                  <div>
                    <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-xs md:text-sm font-semibold mb-2">
                      {carouselData[currentSlide].subtitleHindi} • {carouselData[currentSlide].subtitle}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-1.5">
                      {carouselData[currentSlide].titleHindi}
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-brand-600 leading-tight">
                      {carouselData[currentSlide].title}
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {carouselData[currentSlide].descriptionHindi}
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {carouselData[currentSlide].description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {carouselData[currentSlide].highlightsHindi.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-brand-100"
                      >
                        <div className="flex items-center space-x-2 mb-0.5">
                          <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                          <span className="text-gray-800 font-semibold text-xs md:text-sm">{highlight}</span>
                        </div>
                        <span className="text-gray-600 text-xs ml-4">{carouselData[currentSlide].highlights[index]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button className="px-6 py-3 lg:px-8 lg:py-4 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-all transform hover:scale-105 shadow-lg text-sm lg:text-base">
                      उत्पाद देखें • Explore Products
                    </button>
                    <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white/90 backdrop-blur-sm text-brand-600 border-2 border-brand-600 rounded-lg font-semibold hover:bg-brand-50 transition-all text-sm lg:text-base">
                      और जानें • Learn More
                    </button>
                  </div>
                </div>

                {/* Right Image with Curve Shape */}
                <motion.div
                  className="relative h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center order-1 lg:order-2"
                >
                  {/* Decorative Background Curve */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[420px] h-[420px] lg:w-[520px] lg:h-[520px]">
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full absolute inset-0"
                        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
                      >
                        <defs>
                          <linearGradient id={`gradient-${currentSlide}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.7 }} />
                            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
                            <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.7 }} />
                          </linearGradient>
                        </defs>
                        <path
                          d="M100,20 C140,20 170,40 180,80 C190,120 180,160 150,175 C120,190 80,190 50,175 C20,160 10,120 20,80 C30,40 60,20 100,20 Z"
                          fill={`url(#gradient-${currentSlide})`}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Image Container with rounded shape */}
                  <div className="relative z-10 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px]">
                    <div
                      className="w-full h-full rounded-[40%_60%_60%_40%/40%_50%_50%_60%] overflow-hidden shadow-2xl border-4 border-brand-100"
                    >
                      <img
                        src={carouselData[currentSlide].image}
                        alt={carouselData[currentSlide].title}
                        className="w-full h-full object-contain p-6 bg-gradient-to-br from-gray-50 to-gray-100"
                      />
                    </div>
                  </div>
                </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 hidden lg:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 hidden lg:flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? 'w-12 h-3 bg-brand-600'
                  : 'w-3 h-3 bg-white/60 hover:bg-white/80'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

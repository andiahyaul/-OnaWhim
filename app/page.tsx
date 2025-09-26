"use client"

import { useState, useEffect, FC } from 'react';
import { Button } from "@/components/ui/button";
import { TiltedCard } from "@/components/ui/tilted-card";
import { CTASection } from "@/components/ui/cta-section";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { Footer } from "@/components/ui/footer";
import { AboutSection } from "@/components/ui/about-section";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ProductModal } from "@/components/ui/product-modal";
import { InstagramFeed } from "@/components/ui/instagram-feed"; 


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const darkMode = mediaQuery.matches;
      setIsDarkMode(darkMode);
      document.documentElement.classList.toggle('dark', darkMode);
    };
    handleChange(); 
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const imageSrcValArr = [
    "/collection1.png",
    "/collection2.png",
    "/collection3.png",
    "/collection4.png"
  ];

  const imageSrcVal = "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58";
  const altTextVal = "";
  const captionTextVal = "";

  // Product data for modal
  const productData = [
    {
      imageSrc: '/collection1.png',
      title:'Onawhim Collection #1',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "/collection2.png",
      title:'Onawhim Collection #2',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "/collection3.png",
      title: 'Onawhim Collection #3',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "/collection4.png",
      title: 'Onawhim Collection #4',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    }
  ];

  const handleProductClick = (index: number) => {
    setSelectedProduct(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleModalNavigate = (direction: 'prev' | 'next') => {
    if (selectedProduct !== null) {
      if (direction === 'prev') {
        setSelectedProduct(selectedProduct === 0 ? productData.length - 1 : selectedProduct - 1);
      } else {
        setSelectedProduct(selectedProduct === productData.length - 1 ? 0 : selectedProduct + 1);
      }
    }
  };
  const containerHeightVal = "300px";
  const containerWidthVal = "100%";
  const imageHeightVal = "300px";
  const imageWidthVal = "100%";  
  const rotateAmplitudeVal = 12;
  const scaleOnHoverVal = 1.15; 
  const showMobileWarningVal = true; 
  const showTooltipVal = true;
  const displayOverlayContentVal = false;

  // Page uses Tailwind's dark: prefix directly
  const pageClasses = "bg-white text-black dark:bg-black dark:text-white";
  
  // Overlay theming using Tailwind's dark: prefix
  const overlayBgGradient = "from-neutral-200/80 to-transparent dark:from-black/80 dark:to-transparent";
  const overlayPrimaryTextColor = "text-black dark:text-white";
  const overlaySecondaryTextColor = 'text-neutral-700 dark:text-neutral-300';

  // Tooltip theming directly using Tailwind classes with dark: prefix
  // This will be passed to TiltedCard's tooltipClassName prop
  const tooltipThemeClassesForProp = "bg-white text-neutral-800 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700";

  const overlayContentJsx = (
    <div className={`absolute inset-0 flex flex-col justify-end p-4
                    bg-gradient-to-t ${overlayBgGradient}
                    rounded-b-[15px]`}>
      <p className={`text-lg font-semibold ${overlayPrimaryTextColor} drop-shadow-sm`}>
        {altTextVal}
      </p>
      <p className={`text-sm ${overlaySecondaryTextColor} drop-shadow-sm`}>
        {captionTextVal}
      </p>
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className="min-h-screen pt-20 pb-5 relative">
        {/* Hero section background - positioned to cover full viewport width */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 h-screen" style={{width: '100vw', backgroundColor: '#FCEFF1'}}></div>

        <div className="container mx-auto px-4 relative z-10">
          <section id="hero-section" className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-center w-full" style={{ marginTop: '-160px' }}>
              <img
                src="/Group 1.png"
                alt="Onawhim"
                className="max-w-4xl w-full h-auto"
                style={{ maxWidth: '600px' }}
              />
            </div>
          </section>
        </div>

        <div className="container mx-auto px-4">
        <AboutSection />
        
        <section id="product-showcase" className='w-full py-8 lg:py-16 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:justify-between w-full'>
              <div className='lg:w-1/3 flex flex-col space-y-4 lg:space-y-6'>
                <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold' style={{color: '#B5386F'}}>The Story Behind the Craft</h2>
                <p className='font-inter text-base md:text-lg leading-relaxed' style={{color: '#B5386F'}}>
                    Every piece is more than just an accessory it's a narrative woven with care, tradition, and creativity. Inspired by cultural motifs and handmade using time-honored techniques.


                </p>
              </div>
              <div className='w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-8'>
              {imageSrcValArr.map((imageUrl, index) => (
                <div key={index} onClick={() => handleProductClick(index)} className="cursor-pointer font-inter w-full max-w-[320px] lg:max-w-none mx-auto lg:mx-0 flex items-center justify-center">
                  <TiltedCard
                    imageSrc={imageUrl}
                    altText={altTextVal}
                    captionText={`${captionTextVal} - Click to view details`}
                    containerHeight={containerHeightVal}
                    containerWidth={containerWidthVal}
                    imageHeight={imageHeightVal} 
                    imageWidth={imageWidthVal}   
                    rotateAmplitude={rotateAmplitudeVal}
                    scaleOnHover={scaleOnHoverVal}
                    showMobileWarning={showMobileWarningVal}
                    showTooltip={showTooltipVal}
                    displayOverlayContent={displayOverlayContentVal}
                    overlayContent={overlayContentJsx}
                    tooltipClassName={tooltipThemeClassesForProp}
                  />
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <InstagramFeed />
        
        <div id="cta-section">
          <CTASection />
        </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />

      {/* Product Modal */}
      {selectedProduct !== null && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          product={productData[selectedProduct]}
          allProducts={productData}
          currentIndex={selectedProduct}
          onNavigate={handleModalNavigate}
        />
      )}
    </>
  );
}

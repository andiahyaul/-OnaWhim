interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export function AboutSection({
  title = "About Onawhim",
  subtitle = "",
  description = "Represents the perfect fusion of thoughtful design and spontaneous creativity. Our carefully curated collection of accessories embodies the spirit of living in the moment while maintaining an eye for timeless elegance.",
  features = [
    "Quality craftsmanship with attention to detail", 
    "Designs that inspire confidence and creativity",
    "Sustainable practices and ethical sourcing"
  ]
}: AboutSectionProps) {
  return (
    <section id="about-section" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold" style={{color: '#B5386F'}}>
                {title}
              </h2>
              <h3 className="text-xl md:text-2xl font-medium font-inter" style={{color: '#B5386F'}}>
                {subtitle}
              </h3>
            </div>
            
            <p className="text-lg leading-relaxed font-inter" style={{color: '#B5386F'}}>
              {description}
            </p>
          </div>
          
          {/* Visual Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/logo.png"
                alt="ONAWHIM logo"
                className="w-full h-full object-cover aspect-square"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-neutral-900/10 to-neutral-600/10 dark:from-neutral-100/10 dark:to-neutral-400/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-neutral-600/10 to-neutral-900/10 dark:from-neutral-400/10 dark:to-neutral-100/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
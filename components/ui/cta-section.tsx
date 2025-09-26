import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  linktreeUrl?: string;
}

export function CTASection({
  title = "Ready to Explore More?",
  description = "Discover our complete collection and connect with us across all platforms.",
  buttonText = "Our Linktree",
  linktreeUrl = "https://linktr.ee/onawhim._"
}: CTASectionProps) {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-12 shadow-xl" style={{backgroundColor: '#e8b4d1'}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg font-inter md:text-xl mb-8 max-w-2xl mx-auto text-white">
            {description}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r font-inter from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 dark:hover:from-neutral-200 dark:hover:to-neutral-400 text-white dark:text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open(linktreeUrl, '_blank')}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
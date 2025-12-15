import heroImage from "@/assets/hero-japan.jpg";
import { ChevronDown } from "lucide-react";
export function HeroSection() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 text-primary">
        <img src={heroImage} alt="Mount Fuji with cherry blossoms" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-dark/70 via-indigo-dark/50 to-indigo-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up opacity-0" style={{
        animationDelay: "0.2s",
        animationFillMode: "forwards"
      }}>
          <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-4">
            Digital Cultural e-Portfolio
          </p>
        </div>

        <h1 className="animate-fade-up opacity-0 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight" style={{
        animationDelay: "0.4s",
        animationFillMode: "forwards"
      }}>
          The Land of the
          <span className="block text-sakura">Rising Sun</span>
        </h1>

        <p className="animate-fade-up opacity-0 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" style={{
        animationDelay: "0.6s",
        animationFillMode: "forwards"
      }}>
          An exploration of Japan's rich cultural heritage, traditions, and its
          fascinating journey through globalization in the contemporary world.
        </p>

        <div className="animate-fade-up opacity-0 flex flex-col items-center gap-4" style={{
        animationDelay: "0.8s",
        animationFillMode: "forwards"
      }}>
          <div className="text-primary-foreground/60 text-sm font-medium">
            <span className="block">Presented by: Xavier & Friends</span>
            <span className="block">The Contemporary World | Section A</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#profile" className="animate-fade-up opacity-0 absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-sakura transition-colors" style={{
        animationDelay: "1s",
        animationFillMode: "forwards"
      }}>
          <ChevronDown className="animate-bounce" size={32} />
        </a>
      </div>
    </section>;
}
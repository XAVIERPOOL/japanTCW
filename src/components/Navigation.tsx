import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Culture", href: "#culture" },
  { label: "Global", href: "#global" },
  { label: "Issues", href: "#issues" },
  { label: "Reflection", href: "#reflection" },
  { label: "References", href: "#references" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveItem(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setActiveItem(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className={`font-serif text-xl font-semibold transition-colors ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}
        >
          日本 Japan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              } ${activeItem === item.href ? "text-sakura" : ""}`}
            >
              {(hoveredItem === item.href || activeItem === item.href) && (
                <motion.span
                  layoutId="navHover"
                  className={`absolute inset-0 rounded-full ${
                    isScrolled ? "bg-sakura/10" : "bg-primary-foreground/10"
                  }`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
              {activeItem === item.href && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sakura rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className={`ml-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeItem === item.href 
                    ? "bg-sakura/10 text-sakura" 
                    : "text-foreground hover:bg-muted hover:text-sakura"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

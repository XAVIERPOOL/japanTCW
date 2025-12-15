import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cuisineImage from "@/assets/japan-cuisine.jpg";
import fashionImage from "@/assets/japan-fashion.jpg";
import festivalImage from "@/assets/japan-festival.jpg";
import architectureImage from "@/assets/japan-architecture.jpg";
import artsImage from "@/assets/japan-arts.jpg";

const features = [
  {
    title: "Cuisine & Food Culture",
    shortTitle: "Cuisine",
    description:
      "Japanese cuisine emphasizes seasonal ingredients, beautiful presentation, and umami flavors. From sushi and ramen to kaiseki multi-course meals, food is an art form reflecting respect for nature.",
    image: cuisineImage,
    highlights: ["Sushi & Sashimi", "Ramen & Udon", "Kaiseki", "Wagashi sweets"],
  },
  {
    title: "Traditional Fashion",
    shortTitle: "Fashion",
    description:
      "The kimono remains Japan's most iconic garment, with different styles for seasons, occasions, and social status. The obi belt and accessories complete this elegant traditional attire.",
    image: fashionImage,
    highlights: ["Kimono", "Yukata", "Haori jackets", "Geta sandals"],
  },
  {
    title: "Festivals & Celebrations",
    shortTitle: "Festivals",
    description:
      "Matsuri (festivals) are central to Japanese community life, celebrating seasons, deities, and historical events with vibrant parades, traditional music, and spectacular fireworks.",
    image: festivalImage,
    highlights: ["Gion Matsuri", "Hanami", "Obon", "Shichi-Go-San"],
  },
  {
    title: "Architecture",
    shortTitle: "Architecture",
    description:
      "Japanese architecture harmonizes with nature through zen gardens, wooden temples, and the concept of 'Ma' (negative space). Ancient shrines coexist with modern architectural marvels.",
    image: architectureImage,
    highlights: ["Shinto shrines", "Buddhist temples", "Castle architecture", "Modern design"],
  },
  {
    title: "Arts & Traditions",
    shortTitle: "Arts",
    description:
      "From the meditative tea ceremony (chadō) to ikebana flower arranging, Japanese arts embody 'wabi-sabi' - finding beauty in imperfection and transience.",
    image: artsImage,
    highlights: ["Tea ceremony", "Ikebana", "Calligraphy", "Origami"],
  },
];

export function CulturalFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section id="culture" className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
            Cultural Heritage
          </p>
          <h2 className="section-title">Major Cultural Features</h2>
          <p className="section-subtitle mx-auto">
            Discover the rich traditions and customs that define Japanese
            culture and have captivated the world for centuries.
          </p>
          <div className="divider-sakura mt-8" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActiveIndex(index)}
              className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{feature.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Content Area with Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeFeature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeFeature.highlights.map((highlight, i) => (
                  <motion.span
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    className="px-3 py-1 bg-sakura/20 text-secondary-foreground text-sm rounded-full"
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to ${features[index].shortTitle}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

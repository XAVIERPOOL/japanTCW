import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const culturalCategories = [
  {
    id: "traditions",
    icon: "🎎",
    title: "Traditional Culture",
    subtitle: "Ancient arts and practices",
    content: `Japan's traditional culture encompasses centuries-old practices that continue to influence modern life. 
    
Key traditions include:
• **Tea Ceremony (茶道 Chadō)** - A meditative ritual emphasizing harmony, respect, purity, and tranquility
• **Flower Arrangement (生け花 Ikebana)** - The art of arranging flowers to express beauty and seasonality
• **Martial Arts (武道 Budō)** - Disciplines like Judo, Kendo, and Aikido that cultivate mind and body
• **Calligraphy (書道 Shodō)** - The artistic writing of Japanese characters

These traditions embody the Japanese concept of **"kata"** - forms that are perfected through repetitive practice and mindful dedication.`,
    tags: ["Chadō", "Ikebana", "Budō", "Shodō"],
  },
  {
    id: "pop-culture",
    icon: "🎮",
    title: "Pop Culture",
    subtitle: "Global entertainment influence",
    content: `Japan dominates global pop culture through various entertainment mediums that have captured hearts worldwide.

Cultural exports include:
• **Anime** - Japanese animation with distinct visual styles, from Studio Ghibli masterpieces to shonen action series
• **Manga** - Comic books and graphic novels that span every genre imaginable
• **J-Pop & J-Rock** - Music that blends Western influences with uniquely Japanese sensibilities
• **Video Games** - Nintendo, Sony, and countless developers have shaped gaming history

The "Cool Japan" initiative promotes this soft power, making Japanese culture accessible to global audiences and creating passionate international fan communities.`,
    tags: ["Anime", "Manga", "J-Pop", "Gaming"],
  },
  {
    id: "cuisine",
    icon: "🍱",
    title: "Cuisine",
    subtitle: "UNESCO-recognized culinary art",
    content: `Japanese cuisine (和食 Washoku) was designated a UNESCO Intangible Cultural Heritage in 2013, recognizing its cultural significance.

Culinary highlights:
• **Sushi & Sashimi** - Fresh seafood prepared with precision and artistry
• **Ramen** - Regional noodle soups that have become a global phenomenon
• **Kaiseki** - Multi-course haute cuisine that celebrates seasonality
• **Wagashi** - Traditional confections often paired with tea ceremony

The philosophy of "shun" (旬) emphasizes eating ingredients at their peak season, while "umami" - the fifth taste discovered in Japan - has revolutionized global culinary understanding.`,
    tags: ["Washoku", "Sushi", "Ramen", "Kaiseki"],
  },
  {
    id: "festivals",
    icon: "🏮",
    title: "Festivals & Celebrations",
    subtitle: "Matsuri and seasonal events",
    content: `Japanese festivals (祭り Matsuri) are vibrant celebrations that bring communities together throughout the year.

Major celebrations:
• **Hanami (花見)** - Cherry blossom viewing parties that celebrate spring's arrival
• **Gion Matsuri** - Kyoto's month-long festival featuring elaborate floats
• **Obon (お盆)** - Honoring ancestors with bon-odori dances and floating lanterns
• **Shichi-Go-San** - Celebrating children aged 3, 5, and 7 at shrines

These festivals blend Shinto and Buddhist traditions, creating occasions for communities to honor nature, ancestors, and the changing seasons together.`,
    tags: ["Hanami", "Gion Matsuri", "Obon", "Shinto"],
  },
  {
    id: "philosophy",
    icon: "🧘",
    title: "Philosophy & Values",
    subtitle: "Guiding life principles",
    content: `Japanese culture is guided by profound philosophical concepts that influence daily life and social interactions.

Core concepts:
• **Wabi-Sabi (侘寂)** - Finding beauty in imperfection and impermanence
• **Ikigai (生き甲斐)** - The reason for being; what gives life purpose and meaning
• **Kaizen (改善)** - Continuous improvement through small, consistent changes
• **Omotenashi (おもてなし)** - Wholehearted hospitality without expectation of return

These philosophies create a society that values harmony (和 wa), respect for others, and continuous self-improvement while maintaining deep appreciation for nature and transience.`,
    tags: ["Wabi-Sabi", "Ikigai", "Kaizen", "Omotenashi"],
  },
];

export function CulturalAccordion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Accordion type="single" collapsible className="w-full space-y-3">
        {culturalCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              value={category.id}
              className="border border-border/50 rounded-xl px-4 bg-card/50 hover:bg-card transition-colors data-[state=open]:bg-card"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground">
                      {category.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <div className="pl-14 space-y-4">
                  <div className="text-muted-foreground text-base leading-relaxed whitespace-pre-line max-w-none font-sans">
                    {category.content.split("**").map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="text-foreground font-semibold">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-sakura/20 text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}

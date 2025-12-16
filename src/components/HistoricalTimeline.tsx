import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineEvents = [
  {
    year: "660 BCE",
    event: "Legendary founding of Japan",
    description: "Emperor Jimmu establishes the imperial line, marking the mythical beginning of Japan.",
    category: "Origin",
  },
  {
    year: "794",
    event: "Heian Period Begins",
    description: "Golden age of classical Japanese culture, literature, and art flourishes in Kyoto.",
    category: "Cultural",
  },
  {
    year: "1603",
    event: "Edo Period",
    description: "Tokugawa shogunate brings 250 years of peace and isolation from the West.",
    category: "Political",
  },
  {
    year: "1868",
    event: "Meiji Restoration",
    description: "Japan rapidly modernizes, ending feudalism and opening to Western influence.",
    category: "Political",
  },
  {
    year: "1945",
    event: "End of World War II",
    description: "Japan adopts a new constitution, beginning its journey as a pacifist democracy.",
    category: "Historical",
  },
  {
    year: "1964",
    event: "Tokyo Olympics",
    description: "First Olympics in Asia showcases Japan's post-war recovery to the world.",
    category: "Cultural",
  },
  {
    year: "1989",
    event: "Heisei Era Begins",
    description: "Emperor Akihito ascends the throne, beginning a new era of peace and achievement.",
    category: "Political",
  },
  {
    year: "2011",
    event: "Fukushima Disaster",
    description: "Earthquake and tsunami lead to nuclear crisis, testing Japan's resilience.",
    category: "Contemporary",
  },
  {
    year: "2021",
    event: "Tokyo Olympics",
    description: "Despite pandemic challenges, Japan hosts the rescheduled Summer Olympics.",
    category: "Cultural",
  },
  {
    year: "Present",
    event: "Global Cultural Leader",
    description: "Japan stands as the world's 3rd largest economy and cultural powerhouse.",
    category: "Contemporary",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Political":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Cultural":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    case "Historical":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    case "Contemporary":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export function HistoricalTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sakura via-primary to-sakura transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {timelineEvents.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-sakura rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-lg" />

            {/* Content card */}
            <div
              className={`ml-12 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden group">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge
                      variant="outline"
                      className={`${getCategoryColor(item.category)} border-0`}
                    >
                      {item.category}
                    </Badge>
                    <span className="text-sakura font-bold text-lg font-serif">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.event}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

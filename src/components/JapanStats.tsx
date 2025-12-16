import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    label: "Population",
    value: "125.7M",
    trend: "-0.5%",
    trendType: "down",
    description: "Declining due to low birth rates",
  },
  {
    label: "GDP (USD)",
    value: "$4.2T",
    trend: "+1.2%",
    trendType: "up",
    description: "World's 3rd largest economy",
  },
  {
    label: "Life Expectancy",
    value: "84.3 yrs",
    trend: "+0.2",
    trendType: "up",
    description: "Highest in the world",
  },
  {
    label: "Literacy Rate",
    value: "99%",
    trend: "stable",
    trendType: "stable",
    description: "Near-universal education",
  },
  {
    label: "HDI Rank",
    value: "#19",
    trend: "+2",
    trendType: "up",
    description: "Very high human development",
  },
  {
    label: "Tourism",
    value: "32M+",
    trend: "+15%",
    trendType: "up",
    description: "Annual visitors (2023)",
  },
];

const TrendIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "up":
      return <TrendingUp className="w-3 h-3" />;
    case "down":
      return <TrendingDown className="w-3 h-3" />;
    default:
      return <Minus className="w-3 h-3" />;
  }
};

const getTrendColor = (type: string) => {
  switch (type) {
    case "up":
      return "text-green-600 dark:text-green-400";
    case "down":
      return "text-red-500 dark:text-red-400";
    default:
      return "text-muted-foreground";
  }
};

export function JapanStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xs text-muted-foreground uppercase tracking-wider font-sans font-medium">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-2xl md:text-3xl font-bold text-primary font-serif">
                {stat.value}
              </p>
              <div
                className={`flex items-center justify-center gap-1 mt-2 text-xs ${getTrendColor(
                  stat.trendType
                )}`}
              >
                <TrendIcon type={stat.trendType} />
                <span>{stat.trend}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-tight">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

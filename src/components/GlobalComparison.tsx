import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    metric: "GDP Rank",
    japan: "3rd",
    world: "—",
    philippines: "36th",
    japanHighlight: true,
  },
  {
    metric: "HDI Score",
    japan: "0.925",
    world: "0.732",
    philippines: "0.699",
    japanHighlight: true,
  },
  {
    metric: "Population",
    japan: "125.7M",
    world: "8B",
    philippines: "115.6M",
    japanHighlight: false,
  },
  {
    metric: "Life Expectancy",
    japan: "84.3 yrs",
    world: "73.4 yrs",
    philippines: "72.1 yrs",
    japanHighlight: true,
  },
  {
    metric: "Literacy Rate",
    japan: "99%",
    world: "87%",
    philippines: "96.3%",
    japanHighlight: true,
  },
  {
    metric: "CO2 Emissions Rank",
    japan: "5th",
    world: "—",
    philippines: "42nd",
    japanHighlight: false,
  },
  {
    metric: "Tech Innovation Index",
    japan: "13th",
    world: "—",
    philippines: "59th",
    japanHighlight: true,
  },
  {
    metric: "Tourism Arrivals",
    japan: "32M",
    world: "1.3B",
    philippines: "5.4M",
    japanHighlight: true,
  },
];

export function GlobalComparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-border/50">
        <CardHeader className="bg-muted/50 border-b border-border/50">
          <CardTitle className="font-serif text-2xl flex items-center gap-3">
            <span>🌏</span>
            Global Comparison
          </CardTitle>
          <CardDescription>
            How Japan compares with the Philippines and global averages in key metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="font-semibold">Metric</TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">🇯🇵</span>
                      <span>Japan</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">🌍</span>
                      <span>World</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">🇵🇭</span>
                      <span>Philippines</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.metric}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">
                      {row.metric}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.japanHighlight ? (
                        <Badge
                          variant="secondary"
                          className="bg-sakura/20 text-secondary-foreground hover:bg-sakura/30"
                        >
                          {row.japan}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground">{row.japan}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {row.world}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {row.philippines}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Sources: World Bank, UN Human Development Reports, World Tourism Organization (2023-2024 data)
      </p>
    </motion.div>
  );
}

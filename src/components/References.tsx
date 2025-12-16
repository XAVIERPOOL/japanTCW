import { BookOpen, ExternalLink, FileText, Globe, Video, BookMarked } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const references = [
  {
    type: "Book",
    icon: BookMarked,
    citation:
      'Bestor, T. C., Steinhoff, P. G., & Lyon-Bestor, V. (2003). "Doing Fieldwork in Japan." University of Hawaii Press.',
  },
  {
    type: "Article",
    icon: FileText,
    citation:
      'Iwabuchi, K. (2002). "Recentering Globalization: Popular Culture and Japanese Transnationalism." Duke University Press.',
  },
  {
    type: "Website",
    icon: Globe,
    citation: "Japan National Tourism Organization. (2024). Discover Japan.",
    url: "https://www.japan.travel/en/",
  },
  {
    type: "Article",
    icon: FileText,
    citation:
      'Leheny, D. (2006). "A Narrow Place to Cross Swords: Soft Power and the Politics of Japanese Popular Culture." NBR Analysis, 17(2), 5-26.',
  },
  {
    type: "Website",
    icon: Globe,
    citation: "Ministry of Foreign Affairs of Japan. (2024). About Japan.",
    url: "https://www.mofa.go.jp/",
  },
  {
    type: "Book",
    icon: BookMarked,
    citation:
      'Sugimoto, Y. (2014). "An Introduction to Japanese Society" (4th ed.). Cambridge University Press.',
  },
  {
    type: "Website",
    icon: Globe,
    citation: "Statistics Bureau of Japan. (2024). Statistical Handbook of Japan.",
    url: "https://www.stat.go.jp/english/",
  },
  {
    type: "Video",
    icon: Video,
    citation:
      "NHK World-Japan. (2023). Japan's Cultural Heritage [Documentary series]. NHK.",
    url: "https://www3.nhk.or.jp/nhkworld/",
  },
];

// Count sources by type
const sourceCounts = references.reduce((acc, ref) => {
  acc[ref.type] = (acc[ref.type] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const sourceStats = [
  { type: "Book", count: sourceCounts["Book"] || 0, icon: BookMarked },
  { type: "Article", count: sourceCounts["Article"] || 0, icon: FileText },
  { type: "Website", count: sourceCounts["Website"] || 0, icon: Globe },
  { type: "Video", count: sourceCounts["Video"] || 0, icon: Video },
];

export function References() {
  return (
    <section id="references" className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
            Sources
          </p>
          <h2 className="section-title">References</h2>
          <p className="section-subtitle mx-auto">
            A list of sources consulted for this cultural e-portfolio.
          </p>
          <div className="divider-sakura mt-8" />
        </div>

        {/* Source Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {sourceStats.map((stat, index) => (
            <motion.div
              key={stat.type}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 pb-4">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-sakura" />
                  <p className="text-3xl font-bold text-primary font-serif">{stat.count}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                    {stat.type}{stat.count !== 1 ? "s" : ""}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Total Sources Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 p-4 rounded-xl bg-gradient-to-r from-sakura/10 via-primary/5 to-sakura/10 border border-sakura/20"
        >
          <p className="text-lg text-foreground">
            <span className="font-bold text-primary text-2xl">{references.length}</span>
            <span className="text-muted-foreground ml-2">Total Academic Sources Referenced</span>
          </p>
        </motion.div>

        <div className="cultural-card">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Works Cited
            </h3>
          </div>

          <ul className="space-y-4">
            {references.map((ref, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-2 px-2 py-1 bg-sakura/20 text-secondary-foreground text-xs rounded uppercase tracking-wide flex-shrink-0 h-fit">
                  <ref.icon className="w-3 h-3" />
                  {ref.type}
                </div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  <span>{ref.citation}</span>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 ml-2 text-sakura hover:text-sakura/80 transition-colors"
                    >
                      {ref.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/general_format.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-sakura transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            APA Style Guide Reference
          </a>
        </div>
      </div>
    </section>
  );
}

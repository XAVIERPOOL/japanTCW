import { BookOpen, ExternalLink } from "lucide-react";

const references = [
  {
    type: "Book",
    citation:
      'Bestor, T. C., Steinhoff, P. G., & Lyon-Bestor, V. (2003). "Doing Fieldwork in Japan." University of Hawaii Press.',
  },
  {
    type: "Article",
    citation:
      'Iwabuchi, K. (2002). "Recentering Globalization: Popular Culture and Japanese Transnationalism." Duke University Press.',
  },
  {
    type: "Website",
    citation: "Japan National Tourism Organization. (2024). Discover Japan.",
    url: "https://www.japan.travel/en/",
  },
  {
    type: "Article",
    citation:
      'Leheny, D. (2006). "A Narrow Place to Cross Swords: Soft Power and the Politics of Japanese Popular Culture." NBR Analysis, 17(2), 5-26.',
  },
  {
    type: "Website",
    citation: "Ministry of Foreign Affairs of Japan. (2024). About Japan.",
    url: "https://www.mofa.go.jp/",
  },
  {
    type: "Book",
    citation:
      'Sugimoto, Y. (2014). "An Introduction to Japanese Society" (4th ed.). Cambridge University Press.',
  },
  {
    type: "Website",
    citation: "Statistics Bureau of Japan. (2024). Statistical Handbook of Japan.",
    url: "https://www.stat.go.jp/english/",
  },
  {
    type: "Video",
    citation:
      "NHK World-Japan. (2023). Japan's Cultural Heritage [Documentary series]. NHK.",
    url: "https://www3.nhk.or.jp/nhkworld/",
  },
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

        <div className="cultural-card">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Works Cited
            </h3>
          </div>

          <ul className="space-y-4">
            {references.map((ref, index) => (
              <li
                key={index}
                className="flex gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
              >
                <span className="px-2 py-1 bg-sakura/20 text-secondary-foreground text-xs rounded uppercase tracking-wide flex-shrink-0 h-fit">
                  {ref.type}
                </span>
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
              </li>
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

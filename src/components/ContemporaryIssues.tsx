import { AlertTriangle, TrendingDown, Scale, History } from "lucide-react";

const issues = [
  {
    icon: TrendingDown,
    title: "Aging Population & Declining Birthrate",
    description:
      "Japan faces one of the world's most severe demographic challenges. With over 28% of the population aged 65 or older and birth rates at historic lows, the country must balance traditional family values with modern work culture reforms.",
    impact:
      "This affects cultural preservation as fewer young people participate in traditional practices, and puts pressure on immigration policies that could alter Japan's cultural homogeneity.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Scale,
    title: "Tradition vs. Modernization",
    description:
      "The tension between preserving ancient traditions and embracing globalization creates cultural friction. Younger generations often favor Western lifestyles, while older generations worry about losing cultural identity.",
    impact:
      "Traditional crafts, regional dialects, and cultural practices face extinction as young people migrate to cities and adopt global consumer culture.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: History,
    title: "Historical Representation",
    description:
      "Japan's portrayal of its 20th-century history, particularly regarding World War II, remains contentious in East Asian relations. Textbook controversies and shrine visits affect diplomatic relationships.",
    impact:
      "These issues influence how Japan positions itself globally and affects cultural exchange programs with neighboring countries.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: AlertTriangle,
    title: "Work Culture & Mental Health",
    description:
      "The concept of 'karoshi' (death from overwork) and 'hikikomori' (social withdrawal) highlight serious societal pressures. Traditional expectations of dedication conflict with modern well-being needs.",
    impact:
      "Reform movements are challenging traditional values around work and success, potentially reshaping Japanese society and culture.",
    color: "bg-sakura/30 text-secondary-foreground",
  },
];

export function ContemporaryIssues() {
  return (
    <section id="issues" className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
            Challenges & Reflections
          </p>
          <h2 className="section-title">Contemporary Issues</h2>
          <p className="section-subtitle mx-auto">
            Understanding the challenges Japan faces in preserving its cultural
            identity while adapting to the modern globalized world.
          </p>
          <div className="divider-sakura mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue) => (
            <div key={issue.title} className="cultural-card">
              <div
                className={`w-12 h-12 rounded-full ${issue.color} flex items-center justify-center mb-4`}
              >
                <issue.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {issue.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {issue.description}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  Cultural Impact
                </p>
                <p className="text-foreground text-sm">{issue.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

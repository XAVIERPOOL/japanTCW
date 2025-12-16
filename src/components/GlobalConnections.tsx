import { Globe, Tv, Plane, Store, Users, Wifi } from "lucide-react";
import { GlobalComparison } from "@/components/GlobalComparison";

const connections = [
  {
    icon: Tv,
    title: "Pop Culture Influence",
    description:
      "Anime, manga, J-pop, and video games have created a global 'Cool Japan' phenomenon. Series like Pokémon and Studio Ghibli films have shaped entertainment worldwide.",
  },
  {
    icon: Store,
    title: "Economic Powerhouse",
    description:
      "As the world's 3rd largest economy, Japan leads in automotive (Toyota, Honda), electronics (Sony, Nintendo), and innovative technologies that shape global markets.",
  },
  {
    icon: Plane,
    title: "Tourism & Cultural Exchange",
    description:
      "With over 30 million annual visitors pre-pandemic, Japan shares its culture through tourism while embracing influences from its international guests.",
  },
  {
    icon: Users,
    title: "Diaspora Communities",
    description:
      "Japanese communities in Brazil, USA, and worldwide maintain cultural traditions while contributing to their adopted nations, creating unique cultural fusions.",
  },
  {
    icon: Globe,
    title: "Cultural Diffusion",
    description:
      "Japanese concepts like 'ikigai' (life purpose), 'wabi-sabi' (beauty in imperfection), and 'kaizen' (continuous improvement) are now globally recognized philosophies.",
  },
  {
    icon: Wifi,
    title: "Technology & Innovation",
    description:
      "From bullet trains to robotics, Japan's technological innovations continue to influence global infrastructure, manufacturing, and daily life.",
  },
];

export function GlobalConnections() {
  return (
    <section id="global" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
          The Contemporary World
        </p>
        <h2 className="section-title">Global Connections</h2>
        <p className="section-subtitle mx-auto">
          How Japan's culture influences and is influenced by the interconnected
          modern world through globalization.
        </p>
        <div className="divider-sakura mt-8" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {connections.map((connection) => (
          <div key={connection.title} className="cultural-card group">
            <div className="icon-circle mb-4 group-hover:scale-110 transition-transform">
              <connection.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              {connection.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {connection.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="mt-16 text-center">
        <blockquote className="cultural-card max-w-3xl mx-auto py-10">
          <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-4">
            "In Japanese culture, the quality of one's reception, the quality of
            interaction between host and guest, is paramount."
          </p>
          <cite className="text-muted-foreground text-sm not-italic">
            — Junichiro Tanizaki, Japanese Author
          </cite>
        </blockquote>
      </div>

      {/* Global Comparison Table */}
      <div className="mt-16">
        <GlobalComparison />
      </div>
    </section>
  );
}

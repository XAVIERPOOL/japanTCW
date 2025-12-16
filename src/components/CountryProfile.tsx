import { MapPin, Users, Calendar, Flag, Landmark, Languages } from "lucide-react";
import { JapanStats } from "@/components/JapanStats";
import { HistoricalTimeline } from "@/components/HistoricalTimeline";

const facts = [
  {
    icon: MapPin,
    label: "Capital",
    value: "Tokyo",
  },
  {
    icon: Users,
    label: "Population",
    value: "125.7 Million",
  },
  {
    icon: Languages,
    label: "Official Language",
    value: "Japanese",
  },
  {
    icon: Calendar,
    label: "National Day",
    value: "February 11",
  },
  {
    icon: Flag,
    label: "Government",
    value: "Constitutional Monarchy",
  },
  {
    icon: Landmark,
    label: "Currency",
    value: "Japanese Yen (¥)",
  },
];

export function CountryProfile() {
  return (
    <section id="profile" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
          Country Profile
        </p>
        <h2 className="section-title">Japan 日本</h2>
        <p className="section-subtitle mx-auto">
          An island nation in East Asia, renowned for its ancient traditions,
          cutting-edge technology, and unique cultural identity.
        </p>
        <div className="divider-sakura mt-8" />
      </div>

      {/* Japan Stats - Key Metrics */}
      <div className="mb-16">
        <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
          Key Statistics
        </h3>
        <JapanStats />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Map and Flag */}
        <div className="space-y-6">
          <div className="cultural-card overflow-hidden">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6658880.200295498!2d135.7681!3d36.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Japan"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Japan is an archipelago of 6,852 islands in the Pacific Ocean
            </p>
          </div>

          {/* Flag */}
          <div className="cultural-card flex items-center gap-6">
            <div className="w-32 h-20 bg-primary-foreground rounded-lg flex items-center justify-center shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-destructive" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-1">
                Nisshōki (日章旗)
              </h4>
              <p className="text-muted-foreground text-sm">
                The "Circle of the Sun" represents Japan as the "Land of the
                Rising Sun"
              </p>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="cultural-card">
                <div className="icon-circle mb-3">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {fact.label}
                </p>
                <p className="font-serif text-xl font-semibold text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Timeline - Full Width */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl font-semibold text-foreground mb-3">
            Historical Journey
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient mythology to modern powerhouse - explore the key moments that shaped Japan's rich history
          </p>
        </div>
        <HistoricalTimeline />
      </div>
    </section>
  );
}

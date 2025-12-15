import { MapPin, Users, Calendar, Flag } from "lucide-react";

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
    icon: Flag,
    label: "Official Language",
    value: "Japanese",
  },
  {
    icon: Calendar,
    label: "National Day",
    value: "February 11",
  },
];

const timeline = [
  { year: "660 BCE", event: "Legendary founding by Emperor Jimmu" },
  { year: "794", event: "Heian period begins, golden age of art" },
  { year: "1603", event: "Edo period - 250 years of peace" },
  { year: "1868", event: "Meiji Restoration - modernization begins" },
  { year: "1947", event: "Post-war constitution adopted" },
  { year: "Present", event: "World's 3rd largest economy" },
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

        {/* Facts and Timeline */}
        <div className="space-y-6">
          {/* Key Facts */}
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

          {/* Timeline */}
          <div className="cultural-card">
            <h4 className="font-serif text-xl font-semibold text-foreground mb-6">
              Historical Timeline
            </h4>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-sakura font-semibold text-sm">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 pb-4 border-b border-border last:border-0 last:pb-0">
                    <p className="text-foreground text-sm">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

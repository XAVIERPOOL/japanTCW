import { Quote } from "lucide-react";

export function PersonalReflection() {
  return (
    <section id="reflection" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
          Personal Growth
        </p>
        <h2 className="section-title">My Reflection</h2>
        <div className="divider-sakura mt-8" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="cultural-card relative">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-sakura/30" />
          
          <div className="pt-12 px-4 md:px-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Exploring Japanese culture has profoundly deepened my
                understanding of how tradition and modernity can coexist. The
                concept of <em className="text-foreground">wabi-sabi</em> —
                finding beauty in imperfection — has taught me to appreciate the
                transient nature of life and culture itself.
              </p>

              <p>
                Through this project, I've learned that globalization is not
                simply about cultural homogenization. Japan demonstrates how a
                nation can actively participate in the global community while
                maintaining its unique identity. Their approach of selective
                adaptation, taking what enhances their culture while preserving
                core values, offers a model for cultural resilience.
              </p>

              <p>
                Cultural awareness has become increasingly important in our
                interconnected world. Understanding different cultures helps us
                avoid stereotypes, appreciate diversity, and become better
                global citizens. Japan's struggles with demographic challenges
                and work-life balance also mirror issues many nations face,
                reminding us that we share common human experiences despite our
                differences.
              </p>

              <p>
                As a student, I will carry forward the Japanese value of{" "}
                <em className="text-foreground">kaizen</em> — continuous
                improvement — in my own life. I've also gained appreciation for
                respecting traditions while remaining open to change. These
                insights will help me navigate our diverse global community with
                greater empathy and understanding.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground font-medium">— Lagatic, Xavier Angelo James O.</p>
              <p className="text-muted-foreground text-sm">
                Student, The Contemporary World
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

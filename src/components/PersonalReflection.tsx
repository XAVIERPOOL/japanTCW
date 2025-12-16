import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import xavierImg from "@/assets/Xavier.jpg";
import johnJosephImg from "@/assets/John Joseph.jpg";

const reflections = [
  {
    name: "Lagatic, Xavier Angelo James",
    image: xavierImg,
    reflection: `Exploring Japanese culture has profoundly deepened my understanding of how tradition and modernity can coexist. The concept of wabi-sabi — finding beauty in imperfection — has taught me to appreciate the transient nature of life and culture itself. Through this project, I've learned that globalization is not simply about cultural homogenization. Japan demonstrates how a nation can actively participate in the global community while maintaining its unique identity.`,
  },
  {
    name: "Asoro, John Joseph",
    image: johnJosephImg,
    reflection: `Cultural awareness has become increasingly important in our interconnected world. Understanding different cultures helps us avoid stereotypes, appreciate diversity, and become better global citizens. Japan's struggles with demographic challenges and work-life balance also mirror issues many nations face, reminding us that we share common human experiences despite our differences.`,
  },
  {
    name: "Diana Jr, Emmanuel",
    reflection: `As a student, I will carry forward the Japanese value of kaizen — continuous improvement — in my own life. I've also gained appreciation for respecting traditions while remaining open to change. These insights will help me navigate our diverse global community with greater empathy and understanding. Japan's approach of selective adaptation offers a model for cultural resilience.`,
  },
  {
    name: "Mallari, Jaymyr",
    reflection: `The Japanese philosophy of ikigai — finding purpose in life — has resonated deeply with me. This project has shown me how cultural values shape not just traditions but also modern innovations. Japan's ability to honor its past while embracing the future is truly inspiring and offers valuable lessons for all of us navigating an ever-changing world.`,
  },
  {
    name: "Den Ver",
    reflection: `Studying Japan has opened my eyes to the importance of harmony and respect in society. The concept of wa — maintaining social harmony — teaches us the value of considering others in our actions. This project has reinforced my belief that understanding different cultures makes us more thoughtful and compassionate individuals in our global community.`,
  },
];

export function PersonalReflection() {
  return (
    <section id="reflection" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sakura font-medium tracking-widest uppercase text-sm mb-3">
          Personal Growth
        </p>
        <h2 className="section-title">Our Reflections</h2>
        <div className="divider-sakura mt-8" />
      </div>

      <div className="max-w-3xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {reflections.map((item, index) => (
              <CarouselItem key={index}>
                <div className="cultural-card relative">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-sakura/30" />
                  
                  <div className="pt-12 px-4 md:px-8">
                    <div className="space-y-6 text-muted-foreground leading-relaxed min-h-[200px]">
                      <p>{item.reflection}</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-sakura/30"
                        />
                      )}
                      <div>
                        <p className="text-foreground font-medium">— {item.name}</p>
                        <p className="text-muted-foreground text-sm">
                          Student, The Contemporary World
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
}

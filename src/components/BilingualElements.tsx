import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const bilingualTerms = [
  {
    japanese: "日本",
    romaji: "Nihon / Nippon",
    english: "Japan",
    meaning: "Origin of the Sun",
    category: "Country",
  },
  {
    japanese: "おもてなし",
    romaji: "Omotenashi",
    english: "Hospitality",
    meaning: "Wholehearted service without expectation of reward",
    category: "Philosophy",
  },
  {
    japanese: "侘寂",
    romaji: "Wabi-Sabi",
    english: "Beauty in Imperfection",
    meaning: "Finding beauty in impermanence and imperfection",
    category: "Philosophy",
  },
  {
    japanese: "生き甲斐",
    romaji: "Ikigai",
    english: "Reason for Being",
    meaning: "The intersection of passion, mission, vocation, and profession",
    category: "Philosophy",
  },
  {
    japanese: "改善",
    romaji: "Kaizen",
    english: "Continuous Improvement",
    meaning: "Philosophy of constant, incremental betterment",
    category: "Philosophy",
  },
  {
    japanese: "和",
    romaji: "Wa",
    english: "Harmony",
    meaning: "Peace, harmony, and balance in all things",
    category: "Philosophy",
  },
  {
    japanese: "桜",
    romaji: "Sakura",
    english: "Cherry Blossom",
    meaning: "Symbol of renewal, hope, and the fleeting nature of life",
    category: "Nature",
  },
  {
    japanese: "富士山",
    romaji: "Fuji-san",
    english: "Mount Fuji",
    meaning: "Japan's highest mountain and sacred symbol",
    category: "Nature",
  },
  {
    japanese: "茶道",
    romaji: "Sadō / Chadō",
    english: "Way of Tea",
    meaning: "The ceremonial preparation and presentation of matcha tea",
    category: "Tradition",
  },
  {
    japanese: "武士道",
    romaji: "Bushidō",
    english: "Way of the Warrior",
    meaning: "The moral code of the samurai emphasizing honor and loyalty",
    category: "Tradition",
  },
  {
    japanese: "先輩・後輩",
    romaji: "Senpai / Kōhai",
    english: "Senior / Junior",
    meaning: "Hierarchical relationship system in schools and workplaces",
    category: "Social",
  },
  {
    japanese: "頑張って",
    romaji: "Ganbatte",
    english: "Do your best!",
    meaning: "Common expression of encouragement and support",
    category: "Expression",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Philosophy":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "Nature":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Tradition":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
    case "Social":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Expression":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export function BilingualElements() {
  const speakJapanese = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
          🇯🇵 Japanese Language & Concepts
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Learn essential Japanese terms and philosophical concepts that define the culture
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bilingualTerms.map((term, index) => (
          <motion.div
            key={term.romaji}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 group overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className={`${getCategoryColor(term.category)} border-0 text-xs`}
                  >
                    {term.category}
                  </Badge>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => speakJapanese(term.japanese)}
                        className="p-1.5 rounded-full hover:bg-muted transition-colors opacity-60 hover:opacity-100"
                        aria-label={`Pronounce ${term.romaji}`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Listen to pronunciation</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-primary leading-tight">
                    {term.japanese}
                  </h4>
                  <p className="text-sm text-sakura font-medium italic">
                    {term.romaji}
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {term.english}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                    {term.meaning}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Fun Fact Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-sakura/10 via-primary/5 to-sakura/10 border border-sakura/20 text-center"
      >
        <p className="text-lg text-foreground">
          <span className="font-bold text-primary">💡 Did you know?</span>{" "}
          <span className="text-muted-foreground">
            Japanese has three writing systems: <strong className="text-foreground">Hiragana</strong> (ひらがな), <strong className="text-foreground">Katakana</strong> (カタカナ), and <strong className="text-foreground">Kanji</strong> (漢字) — each serving different purposes in written communication.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

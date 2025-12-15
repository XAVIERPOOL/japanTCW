import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold mb-2">
              日本 Japan
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              A Digital Cultural e-Portfolio
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">
              The Contemporary World | Final Project
            </p>
            <p className="text-sm text-primary-foreground/60 mt-1">
              Submitted: December 2024
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-2 text-sm text-primary-foreground/80">
              Made with <Heart className="w-4 h-4 text-sakura fill-sakura" />{" "}
              for learning
            </p>
            <p className="text-xs text-primary-foreground/50 mt-2">
              © 2024 All rights reserved
            </p>
          </div>
        </div>

        {/* Japanese aesthetic element */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-serif text-xl text-sakura">一期一会</p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            "Ichi-go ichi-e" — One time, one meeting. Treasure every encounter,
            for it will never recur.
          </p>
        </div>
      </div>
    </footer>
  );
}

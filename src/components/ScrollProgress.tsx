import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Progress
      value={progress}
      className="fixed top-0 left-0 right-0 h-1 z-[60] rounded-none bg-transparent [&>div]:bg-gradient-to-r [&>div]:from-sakura [&>div]:to-primary"
    />
  );
}

"use client";

import CountUp from "@/components/ui/count-up";
import { useLoading } from "@/components/loading/loading-context";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const { setIsLoading } = useLoading();
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(fadeTimer);
    }, 5000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="flex items-baseline justify-center gap-2">
          <CountUp
            to={100}
            from={0}
            delay={0}
            duration={1}
            separator=","
            direction="up"
            className="text-6xl font-bold text-foreground"
          />
        </div>
      </div>
    </div>
  );
}

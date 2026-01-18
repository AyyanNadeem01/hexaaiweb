import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number; // ms per char
  pause?: number; // pause at end before restarting
  className?: string;
};

const TypingText = ({
  text,
  speed = 85,
  pause = 900,
  className,
}: TypingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    let interval: number | undefined;
    let timeout: number | undefined;

    const run = () => {
      interval = window.setInterval(() => {
        setIndex((prev) => {
          if (!mounted) return prev;
          if (prev >= text.length) {
            // stop interval and schedule reset after pause
            if (interval) window.clearInterval(interval);
            timeout = window.setTimeout(() => {
              if (!mounted) return;
              setIndex(0);
              run();
            }, pause);
            return prev;
          }
          return prev + 1;
        });
      }, speed) as unknown as number;
    };

    // start typing
    setIndex(0);
    // small delay before first cycle so animation is visible on load
    timeout = window.setTimeout(() => run(), 120);

    return () => {
      mounted = false;
      if (interval) window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [text, speed, pause]);

  return (
    <span className={className} aria-hidden={false}>
      {text.slice(0, index)}
      <span className="inline-block w-1 h-6 align-middle ml-1 bg-foreground animate-pulse" />
    </span>
  );
};

export default TypingText;

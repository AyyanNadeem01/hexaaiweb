import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = { children: ReactNode };

const container = {
  hidden: { opacity: 0, x: 60, rotateX: 6 },
  enter: { opacity: 1, x: 0, rotateX: 0 },
  exit: { opacity: 0, x: -60, rotateX: -6 },
};

const curtain = {
  hidden: { x: "-100%", rotate: -8 },
  enter: { x: "120%", rotate: 10 },
};

const PageTransition = ({ children }: Props) => {
  const { pathname } = useLocation();

  // if not home, add top padding so fixed header does not overlap content
  // reduced padding to avoid a large visible gap under the header
  const extraTop = pathname === "/" ? "" : "pt-16";

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // reset entered when path changes so animations run again
    setEntered(false);

    // fallback: reveal page content after the container animation duration
    const t = window.setTimeout(() => setEntered(true), 700);
    return () => window.clearTimeout(t);
  }, [pathname]);

  const contentVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.996 },
    enter: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
      className={`page-transition perspective preserve-3d ${entered ? "entered" : ""} ${extraTop}`}
    >
      {/* content wrapper — animate the full page content in as a single unit */}
      <motion.div
        className="page-content"
        variants={contentVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;

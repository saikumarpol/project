import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = ({ cards, renderCard }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card, idx) => renderCard(card, idx))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

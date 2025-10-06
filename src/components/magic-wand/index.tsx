import lodash from "lodash";
import { type MouseEvent as ReactMouseEvent, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/style";

import "./index.css";
import { convertPolarToCartesian } from "@/lib/math";

const { random, range } = lodash;

const SPARKLE_LIFESPAN = 1500;

const MagicWand = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      range(isMobile ? 25 : 10).forEach(() => {
        const sparkle = document.createElement("img");
        sparkle.src =
          "https://sandpack-bundler.vercel.app/img/wand-sparkle.svg";
        sparkle.alt = "Sparkle";
        sparkle.role = "presentation";
        sparkle.ariaHidden = "true";

        const angle = isMobile ? random(0, 360) : random(200, 260);
        const distance = isMobile ? random(25, 50) : random(50, 100);
        const [translationX, translationY] = convertPolarToCartesian(
          angle,
          distance,
        );
        console.log(translationX, translationY);

        sparkle.className = cn("absolute animate-sparkle select-none");
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDuration = `${SPARKLE_LIFESPAN * 0.75}ms,${SPARKLE_LIFESPAN}ms`;
        sparkle.style.setProperty(
          "--sparkle-rotation",
          `${random(-135, 135)}deg`,
        );
        sparkle.style.setProperty(
          "--sparkle-dispersion-x",
          `${translationX}px`,
        );
        sparkle.style.setProperty(
          "--sparkle-dispersion-y",
          `${translationY}px`,
        );

        // biome-ignore lint/style/noNonNullAssertion: TypeScript is not aware of the check above
        containerRef.current!.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, SPARKLE_LIFESPAN);
      });
    }
  };

  return (
    <>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: Just an animation, nothing to see here */}
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        className={cn(
          "relative flex aspect-video w-112 max-w-full items-center justify-center overflow-hidden rounded-lg border border-gray-700 shadow-xl",
          "bg-gray-900 active:bg-gray-900/50",
          "cursor-wand active:cursor-wand-active",
        )}
      >
        <p className="select-none font-bold text-5xl text-gray-50/10 uppercase">
          Click here
        </p>
      </div>

      {/* Download the image on page load to make sure we're not waiting for the image to load before starting the animation */}
      <img
        src="https://sandpack-bundler.vercel.app/img/wand-sparkle.svg"
        alt=""
        className="hidden"
      />
    </>
  );
};

export default MagicWand;

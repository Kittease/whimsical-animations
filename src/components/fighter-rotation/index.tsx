import { type CSSProperties, useId, useState } from "react";

import "./index.css";
import { cn } from "@/lib/utils";

const FighterRotation = () => {
  const sliderId = useId();

  const [rotation, setRotation] = useState(0);

  return (
    <div className="flex flex-col items-center gap-y-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 854 388"
        aria-hidden="true"
        className="w-112 max-w-full animate-fighter-rotation fill-gray-100 [animation-duration:1500ms]"
        style={{ "--rotation": `${rotation}deg` } as CSSProperties}
      >
        <path d="M830.41 173.68L565.69 165.73L557.45 160.1C546 152.31 532.63 148.19 518.8 148.19H517.56L590.3 15.1901L563.98 0.800049L490.79 134.62C484.44 127.38 476.85 121.24 468.39 116.51C455.8 109.49 441.5 105.76 426.99 105.73C412.54 105.74 398.23 109.47 385.6 116.51C377.14 121.24 369.56 127.38 363.21 134.62L290.02 0.800049L263.7 15.1901L336.44 148.19H335.2C321.36 148.19 307.99 152.31 296.54 160.11L288.31 165.73L23.6201 173.68C17.5201 173.85 11.7901 176.31 7.48011 180.63C3.17011 184.96 0.710109 190.69 0.560109 196.78C0.250109 209.29 9.75011 219.89 22.2101 220.97L93.5301 228.11V242.61C73.0901 247.19 57.7701 265.47 57.7701 287.27C57.7701 312.5 78.3001 333.03 103.53 333.03C128.76 333.03 149.29 312.5 149.29 287.27C149.29 265.47 133.97 247.19 113.53 242.61V230.12L198.59 238.64L198.78 238.66C209.23 239.51 219.4 242.96 228.21 248.62L258.71 268.22C257.44 274.21 258.15 280.53 260.88 286.27L287.01 341.16C291.69 351 301.75 357.36 312.65 357.36H384.95L386.39 359.67C391.93 368.56 399.65 375.99 408.71 381.15L414.99 384.74C418.69 386.86 422.85 387.92 427 387.92C431.15 387.92 435.3 386.86 439 384.75L445.28 381.16C454.35 375.99 462.07 368.56 467.61 359.66L469.04 357.36H541.35C552.25 357.36 562.31 351 566.98 341.17L593.13 286.26C595.85 280.52 596.56 274.21 595.29 268.22L625.79 248.62C634.6 242.96 644.77 239.51 655.22 238.66L740.47 230.12V242.61C720.03 247.19 704.71 265.47 704.71 287.27C704.71 312.5 725.24 333.03 750.47 333.03C775.7 333.03 796.23 312.5 796.23 287.27C796.23 265.47 780.91 247.19 760.47 242.61V228.12L831.79 220.97C843.94 219.92 853.44 209.58 853.44 197.37V196.78C853.12 184.16 842.99 174.01 830.41 173.68ZM313.67 327.36L288.59 274.7L318.92 256.67C318.17 259.85 317.79 263.08 317.79 266.32C317.79 280.87 325.14 294.18 337.47 301.94C348.2 308.67 357.77 317.35 365.58 327.36H313.67ZM444.98 290.71H409.02C393.94 290.71 381.93 278.07 382.71 263.02L382.72 262.69C383.59 245.88 387.21 229.34 393.45 213.71L397.31 204.02C402.16 191.88 413.92 183.92 426.99 183.92C433.52 183.92 439.71 185.9 444.88 189.4C450.06 192.89 454.2 197.9 456.64 203.95L460.42 213.37C466.79 229.22 470.47 246.02 471.3 263.09C471.32 263.53 471.33 263.96 471.33 264.39C471.33 278.84 459.6 290.71 444.98 290.71ZM540.33 327.36H488.42C491.14 323.86 494.07 320.53 497.2 317.39C503.01 311.55 509.51 306.35 516.53 301.94C531.77 292.35 539.2 273.92 535.04 256.54L565.41 274.69L540.33 327.36Z" />
        <text className="hidden">
          {`
            Credits to shashank singh from The Noun Project for the fighter jet SVG
            https://thenounproject.com/icon/fighter-jet-4530245/
          `}
        </text>
      </svg>

      <div className="z-1 flex flex-col items-center gap-y-2">
        <input
          type="range"
          id={sliderId}
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
          min="0"
          max="180"
          className="w-80 max-w-full"
        />

        <label
          htmlFor={sliderId}
          data-value={rotation}
          className={cn("group/label flex flex-col items-center font-bold")}
        >
          <span className="text-2xl">Do a barrel roll!</span>
          <span
            className={cn(
              "text-lg transition-all duration-50",
              "scale-(--scale) text-green-400/(--opacity)",
              "group-data-[value=0]/label:scale-100 group-data-[value=0]/label:text-gray-400",
            )}
            style={
              {
                "--scale": `${Math.round(rotation / 1.8) + 50}%`,
                "--opacity": `${Math.round((rotation / 180) * 75) + 25}%`,
              } as CSSProperties
            }
          >
            {rotation === 0
              ? "Pretty please?"
              : rotation === 180
                ? "Nicely done!!"
                : `${Math.round(rotation / 1.8)}% there`}
          </span>
        </label>
      </div>
    </div>
  );
};

export default FighterRotation;

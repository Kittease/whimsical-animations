import lodash from "lodash";
import { useRef } from "react";
import { cn } from "@/lib/utils";

import "./index.css";

const { random } = lodash;

const EMOJIS_TO_USE = ["🎉", "🍺", "🤩", "🎊", "🍻", "💸"];
const ANIMATION_SPEED = 2000;

const KofiCard = () => {
  const emojisContainer = useRef<HTMLDivElement>(null);

  setInterval(() => {
    if (emojisContainer.current) {
      const animationDuration = random(
        ANIMATION_SPEED * 0.5,
        ANIMATION_SPEED * 1.5,
      );

      const newEmoji = document.createElement("div");
      newEmoji.textContent = EMOJIS_TO_USE[random(0, EMOJIS_TO_USE.length - 1)];
      newEmoji.className = cn(
        "absolute top-0 animate-fall select-none text-4xl [animation-duration:var(--fall-duration)]",
      );
      newEmoji.style.left = `${random(0, 100)}%`;
      newEmoji.style.setProperty(
        "--fall-distance",
        `calc(${random(1.5, 2)}*var(--container-height))`,
      );
      newEmoji.style.setProperty("--fall-duration", `${animationDuration}ms`);
      newEmoji.ariaHidden = "true";

      emojisContainer.current.appendChild(newEmoji);

      setTimeout(() => {
        newEmoji.remove();
      }, animationDuration);
    }
  }, 100);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-50 text-gray-950 shadow-gray-950/50 shadow-lg drop-shadow-2xl drop-shadow-gray-50/25">
      <div
        ref={emojisContainer}
        className={cn(
          "[--container-height:calc(var(--spacing)*40)]",
          "relative h-(--container-height) w-full overflow-hidden bg-pink-100 px-8 py-4",
        )}
      />

      <div
        className={cn(
          "[--padding-y:calc(var(--spacing)*20)]",
          "z-1 flex flex-col items-center gap-y-8 px-24 py-(--padding-y)",
        )}
      >
        <img
          className={cn(
            "[--avatar-size:calc(var(--spacing)*32)]",
            "mt-[calc(-1*(var(--avatar-size)/2)-var(--padding-y))] size-(--avatar-size) rounded-full border-8 border-gray-50 bg-amber-100",
          )}
          src="https://sandpack-bundler.vercel.app/img/avatars/009.png"
          alt="user avatar"
        />

        <h1 className="text-center font-bold text-2xl">
          Someone Bought You A Beer!
        </h1>
      </div>
    </div>
  );
};

export default KofiCard;

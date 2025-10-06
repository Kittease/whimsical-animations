import { createFileRoute } from "@tanstack/react-router";
import FighterRotation from "@/components/fighter-rotation";
import KofiCard from "@/components/kofi-card";
import MagicWand from "@/components/magic-wand";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex max-w-full flex-col items-center gap-y-32">
      <KofiCard />
      <FighterRotation />
      <MagicWand />
    </div>
  );
}

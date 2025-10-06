import { createFileRoute } from "@tanstack/react-router";
import FighterRotation from "@/components/fighter-rotation";
import KofiCard from "@/components/kofi-card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center gap-y-32">
      <KofiCard />
      <FighterRotation />
    </div>
  );
}

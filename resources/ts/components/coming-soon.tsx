import { IconPlanet } from "@tabler/icons-react";
import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

type ComingSoonProps = HTMLAttributes<HTMLDivElement>;

export default function ComingSoon({ ...props }: ComingSoonProps) {
  return (
    <div {...props}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <IconPlanet size={72} />
        <h1 className="text-4xl font-bold leading-tight">Coming Soon 👀</h1>
        <p className="text-center text-muted-foreground">
          This page has not been created yet. <br />
          Stay tuned though!
        </p>
      </div>
    </div>
  );
}

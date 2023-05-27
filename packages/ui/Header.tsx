import * as React from "react";

import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
export const Header = ({ text }: { text: string }) => {
  return (
    <div className="h-20 bg-white flex items-center shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 items-center">
          <GlobeAmericasIcon className="w-8 text-blue-500" />
          <h1 className="text-2xl tracking-tight font-semibold">{text}</h1>
        </div>
      </div>
    </div>
  );
};

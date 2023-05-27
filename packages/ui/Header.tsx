import * as React from "react";

export const Header = ({ text }: { text: string }) => {
  return (
    <div className="h-20 bg-white flex items-center shadow-sm">
      <div className="container mx-auto">
        <h1 className='text-2xl tracking-tight font-semibold'>{text}</h1>
      </div>
    </div>
  )
};

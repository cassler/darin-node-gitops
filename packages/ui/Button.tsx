"use client";

import * as React from "react";

export const Button = (props:React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className='p-1 px-2 border border-slate-200 text-slate-600 font-medium tracking-tight rounded' onClick={() => alert("boop")}>{props.children || 'Boop'}</button>;
};

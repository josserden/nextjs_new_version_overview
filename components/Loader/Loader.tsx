import React, { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="flex animate-pulse space-x-2">
      <div className="h-5 w-5 rounded-full bg-brand"></div>
      <div className="h-5 w-5 rounded-full bg-brand"></div>
      <div className="h-5 w-5 rounded-full bg-brand"></div>
    </div>
  );
};

import { Loader } from '@/components/Loader';
import React from 'react';

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 h-full w-full flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
}

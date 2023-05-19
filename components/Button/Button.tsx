import React, { FC } from 'react';
import { ButtonProps } from '@/components/Button/Button.types';

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

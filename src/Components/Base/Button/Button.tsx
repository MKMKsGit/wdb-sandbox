import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

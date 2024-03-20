import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const primaryStyles = ['bg-secondary-900', 'text-white'];
const disabledPrimaryStyles = ['bg-secondary-300', 'cursor-not-allowed', 'text-secondary-500'];

const secondaryStyles = ['bg-white', 'text-secondary-900', 'border', 'border-secondary-300'];
const disabledSecondaryStyles = ['cursor-not-allowed', 'text-secondary-500', 'border', 'border-secondary-300'];

export const Button = (props: ButtonProps) => {
  const { onClick, variant = 'primary', fullWidth, disabled, className, children, ...restProps } = props;

  const varientClasses = variant === 'primary' ? primaryStyles : secondaryStyles;
  const disabledClasses = variant === 'primary' ? disabledPrimaryStyles : disabledSecondaryStyles;

  const styleClasses = disabled ? disabledClasses : varientClasses;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className ?? ''} ${styleClasses.join(' ')} px-[10px] py-[17px] ${fullWidth ? 'w-full' : 'w-fit'}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

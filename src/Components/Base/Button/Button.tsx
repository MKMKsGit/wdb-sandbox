import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const disabledStyles = ['bg-secondary-300','cursor-not-allowed','text-secondary-500'];

export const Button = (props: ButtonProps) => {
  const { onClick, variant = 'primary', fullWidth, disabled, className, children, ...restProps } = props;

  const varientClasses = variant === 'primary' ? ['bg-secondary-900', 'text-white']: [];

  return (
    <button onClick={onClick} disabled={disabled} className={`${disabled ? disabledStyles.join(" ") :varientClasses.join(" ")} px-[10px] py-[17px] ${fullWidth ? 'w-full' : ''} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

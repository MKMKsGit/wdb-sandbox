import { IconProps } from './types';

const BasketWithItems = (props: IconProps) => {
  return (
    <i {...props}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.5002 19.3H30.3002L27.9002 28.7C27.5002 30.1 26.2002 31.1 24.8002 31.1H14.3002C12.8002 31.1 11.5002 30.1 11.2002 28.7L8.80017 19.3H17.5002M23.5002 27.8L24.3002 22.6M14.7002 22.6L15.5002 27.8M19.5002 22.6V27.8M30.4002 19.3C31.5002 19.3 32.3002 18.4 32.3002 17.4C32.3002 16.3 31.4002 15.5 30.4002 15.5H8.60019C7.50019 15.5 6.7002 16.4 6.7002 17.4C6.7002 18.5 7.60019 19.3 8.60019 19.3M11.5002 15.5L15.1002 9.29999M27.6002 15.5L24.0002 9.29999"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29.5" cy="14.5" r="3.5" fill="#FF000D" />
      </svg>
    </i>
  );
};

export default BasketWithItems;

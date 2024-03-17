import { IconProps } from './types';

const BasketWithItems = (props: IconProps) => {
  return (
    <i {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" viewBox="0 0 29 24" fill="none">
        <path
          d="M16.5002 11.3H25.3002L22.9002 20.7C22.5002 22.1 21.2002 23.1 19.8002 23.1H9.30017C7.80017 23.1 6.5002 22.1 6.2002 20.7L3.80017 11.3H12.5002M18.5002 19.8L19.3002 14.6M9.7002 14.6L10.5002 19.8M14.5002 14.6V19.8M25.4002 11.3C26.5002 11.3 27.3002 10.4 27.3002 9.39999C27.3002 8.29999 26.4002 7.49998 25.4002 7.49998H3.60019C2.50019 7.49998 1.7002 8.39999 1.7002 9.39999C1.7002 10.5 2.60019 11.3 3.60019 11.3M6.50018 7.49998L10.1002 1.29999M22.6002 7.49998L19.0002 1.29999"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

export default BasketWithItems;

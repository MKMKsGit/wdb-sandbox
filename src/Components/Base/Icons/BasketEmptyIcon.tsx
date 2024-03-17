import { IconProps } from './types';

const BasketEmptyIcon = (props: IconProps) => {
  return (
    <i {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
        <path
          d="M19.6 11.3L17.7 23.1M8.89999 11.3L10.8 23.1M5 17.2H22.7M14.3 11.3V23.1M6.2 7.50002L9.8 1.30002M18.7 1.20001L22.3 7.40002M19.5 23.1H9C7.5 23.1 6.19999 22.1 5.89999 20.7L3.5 11.3H25L22.6 20.7C22.3 22.1 21 23.1 19.5 23.1ZM27.1 9.40002C27.1 8.30002 26.2 7.50002 25.2 7.50002H3.39999C2.29999 7.50002 1.5 8.40002 1.5 9.40002C1.5 10.5 2.39999 11.3 3.39999 11.3H25.2C26.2 11.3 27.1 10.4 27.1 9.40002Z"
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

export default BasketEmptyIcon;

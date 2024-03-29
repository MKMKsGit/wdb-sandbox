import { IconProps } from './types';

const BasketEmptyIcon = (props: IconProps) => {
  return (
    <i {...props}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.6 19.3L23.7 31.1M14.9 19.3L16.8 31.1M11 25.2H28.7M20.3 19.3V31.1M12.2 15.5L15.8 9.30002M24.7 9.20001L28.3 15.4M25.5 31.1H15C13.5 31.1 12.2 30.1 11.9 28.7L9.5 19.3H31L28.6 28.7C28.3 30.1 27 31.1 25.5 31.1ZM33.1 17.4C33.1 16.3 32.2 15.5 31.2 15.5H9.39999C8.29999 15.5 7.5 16.4 7.5 17.4C7.5 18.5 8.39999 19.3 9.39999 19.3H31.2C32.2 19.3 33.1 18.4 33.1 17.4Z"
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

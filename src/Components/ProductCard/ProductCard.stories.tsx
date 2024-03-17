import { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  tags: ['autodocs'],
  component: ProductCard,
  render: (args) => <ProductCard {...args} />,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    name: 'Pleated Camisole Dress (Florfijo)',
    description: 'Our versatile crossbody bag combines fashion of the past with the function of the future.',
    imgUrl: 'https://via.placeholder.com/480',
    price: 1000,
    rating: 4,
  },
};

export const Sale: Story = {
  args: {
    name: 'Pleated Camisole Dress (Florfijo)',
    description: 'Our versatile crossbody bag combines fashion of the past with the function of the future.',
    imgUrl: 'https://via.placeholder.com/480',
    price: 1000,
    promotionPrice: 800,
    rating: 4,
  },
};

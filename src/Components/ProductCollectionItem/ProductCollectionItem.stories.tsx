import { Meta, StoryObj } from '@storybook/react';

import ProductCollectionItem from './ProductCollectionItem';

const meta: Meta<typeof ProductCollectionItem> = {
  component: ProductCollectionItem,
  render: (args) => (
    <div className={'w-[575px]'}>
      <ProductCollectionItem {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ProductCollectionItem>;

export const Default: Story = {
  args: {
    header: 'Header',
    description: 'Description',
    imgUrl: 'https://via.placeholder.com/760x500',
    onClick: () => {},
  },
};

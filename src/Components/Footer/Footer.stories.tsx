import { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
  render: (args) => <Footer {...args} />,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    productList: ['Product 1', 'Product 2', 'Product 3'],
  },
};

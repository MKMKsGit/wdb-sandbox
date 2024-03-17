import { Meta, StoryObj } from '@storybook/react';

import { BasketEmptyIcon } from '@/Components/Base';

import NavBar from './NavBar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  render: (args) => <NavBar {...args} />,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    tabList: ['Home', 'Shop', 'About', 'Contact'],
    handleClickTab: () => {},
    handleClickLogo: () => {},
    rightAdornment: <BasketEmptyIcon />,
  },
};

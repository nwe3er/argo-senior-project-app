// Button.stories.tsx
import { Meta, Story } from '@storybook/react';

export default {
  component: Button,
} as Meta;

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
  label: 'Button',
  primary: true,
};

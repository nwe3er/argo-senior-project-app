import { Meta, Story } from '@storybook/react';
import Chart from '../components/topAreasTable';

export default {
  component: Chart,
} as Meta;

export const Primary: Story = (args) => <Chart {...args} />;
Primary.args = {
  label: 'Button',
  primary: true,
};
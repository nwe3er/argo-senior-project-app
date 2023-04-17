import { Meta, Story } from '@storybook/react';
import Chart from '../components/ICUTrendCard';

export default {
  component: Chart,
  title: 'HighCharts',
} as Meta;

export const ICUTrendCard: Story = (args) => <Chart {...args} />;
ICUTrendCard.args = {
  label: 'Button',
  primary: true,
};

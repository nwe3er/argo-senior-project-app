import { Meta, Story } from '@storybook/react';
import Chart from '../components/DailyChangeCasesCard';

export default {
  component: Chart,
  title: 'Highcharts',
} as Meta;

export const DailyChangeCasesCard: Story = (args) => <Chart {...args} />;
DailyChangeCasesCard.args = {
  label: 'Button',
  primary: true,
};

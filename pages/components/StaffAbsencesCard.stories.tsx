import { Meta, Story } from '@storybook/react';
import Chart from '../components/StaffAbsencesCard';

export default {
  component: Chart,
  title: 'HighCharts',
} as Meta;

export const StaffAbsencesCard: Story = (args) => <Chart {...args} />;
StaffAbsencesCard.args = {
  label: 'Button',
  primary: true,
};

import { Meta, Story } from '@storybook/react';
import Chart from '../components/topCountriesTable';

export default {
  component: Chart,
  title: 'HighCharts',
} as Meta;

export const TopCountryCharts: Story = (args) => <Chart {...args} />;
TopCountryCharts.args = {
  label: 'Button',
  primary: true,
};

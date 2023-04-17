import { Meta, Story } from '@storybook/react';
import Chart from '../components/countryCharts';

export default {
  component: Chart,
  title: 'HighCharts',
} as Meta;

export const CountryCharts: Story = (args) => <Chart {...args} />;
CountryCharts.args = {
  label: 'Button',
  primary: true,
};

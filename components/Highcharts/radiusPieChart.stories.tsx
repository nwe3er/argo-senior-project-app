import { Meta, Story } from '@storybook/react';
import Chart from './radiusPieChart';

export default {
  title: 'Radius Pie Chart',
  component: Chart,
} as Meta;

const Template: Story<any> = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
};
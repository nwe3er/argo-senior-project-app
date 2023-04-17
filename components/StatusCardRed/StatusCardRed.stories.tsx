import { ComponentMeta, ComponentStory } from '@storybook/react';
import StatusCardGreen, { IStatusCard } from './StatusCardRed';
import { mockStatusCardProps } from './StatusCardRed.mocks';

export default {
  title: 'Surfaces/StatusCard',
  component: StatusCardGreen,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StatusCardGreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatusCardGreen> = (args) => (
  <StatusCardGreen {...args} />
);

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Red.args = {
  ...mockStatusCardProps.base,
} as IStatusCard;
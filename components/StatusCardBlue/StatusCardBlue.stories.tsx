import { ComponentMeta, ComponentStory } from '@storybook/react';
import StatusCardBlue, { IStatusCard } from './StatusCardBlue';
import { mockStatusCardProps } from './StatusCardBlue.mocks';

export default {
  title: 'Surfaces/StatusCard',
  component: StatusCardBlue,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StatusCardBlue>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatusCardBlue> = (args) => (
  <StatusCardBlue {...args} />
);

export const Blue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Blue.args = {
  ...mockStatusCardProps.base,
} as IStatusCard;

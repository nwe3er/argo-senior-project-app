import { ComponentMeta, ComponentStory } from '@storybook/react';
import DatePicker, { DateProps } from './DatePicker';
import { mockTemplateProps } from './DatePicker.mocks';

export default {
    title: 'MUIX/DatePicker',
    component: DatePicker,
    
    argTypes: {},
  } as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);
  
export const Default = Template.bind({});

export const Disabled = {
    args:{
        disabled:true,
    },
};

Default.args = {
  ...mockTemplateProps.DatePicker,
} as DateProps;

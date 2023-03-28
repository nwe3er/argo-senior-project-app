import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput, { ITextInput } from './TextInput';
import { TextInputProps } from './TextInput.mock';


export default {
  title: 'inputs/TextInput',
  component: TextInput,
  
  argTypes: {},
} as ComponentMeta<typeof TextInput>;


const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);


export const Base = Template.bind({});


export const Hover = {
    args:{
        placeholder: "Input Text",
        type: "Label",
    },
};

export const Focus = {
  args:{
      placeholder: "Input Text",
      type: "Label",
  },
};

export const Error = {
  args:{
      placeholder: "Input Text",
      type: "Label",
  },
};

export const Disabled = {
  args:{
      placeholder: "Input Text",
      type: "Label",
  },
};



Base.args = {
  ...TextInputProps.base,
} as ITextInput;

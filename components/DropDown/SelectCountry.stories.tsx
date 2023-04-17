/*import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectCountry from './SelectCountry';

export default {
  title: 'components/DropDownMenu',
  component: SelectCountry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectCountry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectCountry> = (args) => (
  <SelectCountry {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

/* Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate; 

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

export default {
  title: 'components/DropDownMenu',
  component: Select,
} as Meta;

const Template: Story = () => {
  const [selected, setSelected] = useState<string>('');

  const selectionChangeHandler = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSelected(event.target.value as string);
  };

  return (
    <FormControl style={{ marginTop: 100, marginLeft: 100 }}>
      <InputLabel>Countries</InputLabel>
      <Select value={selected} onChange={selectionChangeHandler}>
        <MenuItem value={1}>United States</MenuItem>
        <MenuItem value={2}>Mexico</MenuItem>
        <MenuItem value={3}>Canada</MenuItem>
      </Select>
      <FormHelperText>Select a country</FormHelperText>
    </FormControl>
  );
};

export const Default = Template.bind({}); 

import { Meta, Story } from '@storybook/react/types-6-0';
import SelectCountry from './SelectCountry';

export default {
  title: 'DropDown/SelectCountry',
  component: SelectCountry,
} as Meta;

const Template: Story = () => <SelectCountry />;

export const Default = Template.bind({}); */

import { Story } from '@storybook/react';
import SelectCountry, { Props } from './SelectCountry';

export default {
  title: 'Test/DropDowns/SelectCountry',
  component: SelectCountry,
};

const Template: Story<Props> = (args) => <SelectCountry {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '1',
  onChange: (event) => console.log(event.target.value),
};

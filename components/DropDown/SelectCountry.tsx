/*import React from 'react';

function SelectCountry({countries,countrySelector}){
    return (
        <React.Fragment>
            {   countries &&    
                <div className="input-group mb-3 mt-5">
                <div className="input-group-prepend">
                    <label className="input-group-text" >Country</label>
                </div>
                <select className="custom-select" id="country-selector" onChange={countrySelector}>
                    <option defaultValue value="india">India - IN</option>
                    {countries.map(
                        obj => <option value={obj.Slug}>{obj.Country} - {obj.ISO2}</option>
                    )}
                </select>
                </div>
            }  
            {   countries===undefined &&
                <p>No Data To Display</p>
            }
        </React.Fragment>
    )
}

export default SelectCountry;

import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';

function SelectCountry(): JSX.Element {
  const [selected, setSelected] = useState<string>('');

  const selectionChangeHandler = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSelected(event.target.value as string);
  };

  return (
    <FormControl style={{ marginTop: 100, marginLeft: 100 }}>
      <InputLabel>Months</InputLabel>
      <Select value={selected} onChange={selectionChangeHandler}>
        <MenuItem value={1}>Jan</MenuItem>
        <MenuItem value={2}>Feb</MenuItem>
        <MenuItem value={3}>March</MenuItem>
        <MenuItem value={4}>April</MenuItem>
        <MenuItem value={5}>May</MenuItem>
      </Select>
      <FormHelperText>Select a month</FormHelperText>
    </FormControl>
  );
}

export default SelectCountry; */

//import { MenuItem, Select } from '@material-ui/core';
//import React from 'react';


export interface IFirstCountry {
  sampleTextProp: string;
}

/*const SelectCountry: React.FC<IFirstCountry> = ({sampleTextProp}) => {
  return (
    <Select value={2} style={{ marginTop: 100, marginLeft: 100 }}>
      <MenuItem value={1}>Jan</MenuItem>
      <MenuItem value={2}>Feb</MenuItem>
      <MenuItem value={3}>March</MenuItem>
      <MenuItem value={4}>April</MenuItem>
      <MenuItem value={5}>May</MenuItem>
    </Select>
  );
}

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

const SelectCountry = () => {
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

export default SelectCountry; */

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

export type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const SelectCountry = ({ value, onChange }: Props) => {
  return (
    <FormControl style={{ marginTop: 100, marginLeft: 100 }}>
      <InputLabel>Countries</InputLabel>
      <Select value={value} onChange={onChange}>
        <MenuItem value={'United States'}>United States</MenuItem>
        <MenuItem value={'Mexico'}>Mexico</MenuItem>
        <MenuItem value={'Canada'}>Canada</MenuItem>
      </Select>
      <FormHelperText>Select a country</FormHelperText>
    </FormControl>
  );
};

export default SelectCountry;
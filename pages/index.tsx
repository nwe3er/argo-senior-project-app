import { NextPageWithLayout } from './page';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef, useState } from 'react';
import SelectCountry from '../components/DropDown/SelectCountry';


/*const data = [
  { x: 4492000, y: 10 },
  { x: 4550000, y: 20 },
  { x: 4591000, y: 30 },
  { x: 3, y: 40 },
  { x: 4, y: 50 },
]; */

const data = [  { name: 'Confirmed Cases', data: [4492000, 4550000, 4591000] },
  { name: 'Deaths', data: [100000, 105000, 110000] },
];

const options: Highcharts.Options = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'US 2023 Covid Status',
  },
  xAxis: {
    categories: ['January', 'February', 'March'],
    title: {
      text: 'X Axis Label'
    }
  },
  yAxis: {
    title: {
      text: 'Y Axis Label'
    }
  },
  series: [{
    type: 'line',
    name: 'Confirmed Cases',
    data: [
      [1, 4492000],
      [2, 4550000],
      [3, 4591000]
    ]
  }]
};

/*
const options: Highcharts.Options = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'US 2023 Covid Status',
  },
  xAxis: {
    categories: ['January', 'February', 'March'],
    title: {
      text: 'X Axis Label'
    }
  },
  yAxis: {
    title: {
      text: 'Y Axis Label'
    }
  },
  series: [{
    name: 'Confirmed Cases',
    data: [4492000, 4550000, 4591000]
  }
]
  
  /*series: [{
    name: 'My Series',
    data: data.map(({ x, y }) => [x, y])
  }] as Highcharts.SeriesOptionsType[]
}; 

const options2: Highcharts.Options = {
  chart: {
    type: 'bar'
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['January', 'February', 'March'],
    title: {
      text: 'X Axis Label'
    }
  },
  yAxis: {
    title: {
      text: 'Y Axis Label'
    }
  },
  series: [{
    name: 'Confirmed Deaths',
    data: [49447, 50558, 51347]
  }
]
  
  /*series: [{
    name: 'My Series',
    data: data.map(({ x, y }) => [x, y])
  }] as Highcharts.SeriesOptionsType[]
}; */

const options2 = {
  chart: {
    type: 'bar'
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['January', 'February', 'March'],
    title: {
      text: 'X Axis Label'
    }
  },
  yAxis: {
    title: {
      text: 'Y Axis Label'
    }
  },
  series: [{
    name: 'Confirmed Deaths',
    data: [49447, 50558, 51347]
  }
  ] as const
} as const;


const Home: NextPageWithLayout = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const [selectedCountry, setSelectedCountry] = useState('');

  const selectionChangeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCountry(event.target.value as string);
  };

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div>
        <h1>Select a country</h1>
        <SelectCountry value={selectedCountry} onChange={selectionChangeHandler} />
        {selectedCountry === 'United States' && (
          <>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}
            /> 
            <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            ref={chartComponentRef}
            {...props}
            />
          </>
        )}
        {selectedCountry === 'Mexico' && 
          <HighchartsReact
          highcharts={Highcharts}
          options={options2}
          ref={chartComponentRef}
          {...props}
          /> }
      </div>
    </section>
  );
};

export default Home;

/*
Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};*/
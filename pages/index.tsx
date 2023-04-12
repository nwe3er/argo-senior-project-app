import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
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

// US Covid Cases
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
      [1, 99883410],
      [2, 101219706],
      [3, 102873924]
    ]
  }]
};

// US Deaths
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
    data: [1085720, 1100846, 1118800]
  }
  ] as const
} as const;

// Meixco Covid Cases
const options3: Highcharts.Options = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Mexico 2023 Covid Status',
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
      [1, 7305414],
      [2, 7403572],
      [3, 7544489]
    ]
  }]
};

// Mexico Deaths
const options4 = {
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
    data: [331760, 332728, 333539]
  }
  ] as const
} as const;

// Canada Covid Cases
const options5: Highcharts.Options = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Canada 2023 Covid Status',
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
      [1, 4508373],
      [2, 4560911],
      [3, 4634277]
    ]
  }]
};

// Canada Deaths
const options6 = {
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
    data: [49700, 50784, 52121]
  }
  ] as const
} as const;
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
        {selectedCountry === 'Mexico' && (
          <>
            <HighchartsReact
            highcharts={Highcharts}
            options={options3}
            ref={chartComponentRef}
            {...props}
            />
            <HighchartsReact
            highcharts={Highcharts}
            options={options4}
            ref={chartComponentRef}
            {...props}
            /> 
          </>
        )}
        {selectedCountry === 'Canada' && (
          <>
            <HighchartsReact
            highcharts={Highcharts}
            options={options5}
            ref={chartComponentRef}
            {...props}
            />
            <HighchartsReact
            highcharts={Highcharts}
            options={options6}
            ref={chartComponentRef}
            {...props}
            /> 
          </>
        )}
      </div>
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
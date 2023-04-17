// Layout and tool imports
import { IJsonModel, Layout, Model, TabNode } from 'flexlayout-react';
import 'flexlayout-react/style/dark.css';
import styles from '../styles/fitness-style.module.css';
import { NextPageWithLayout } from './page';

import StatusCardBlue from '@/components/StatusCardBlue/StatusCardBlue';
import StatusCardGreen from '@/components/StatusCardGreen/StatusCardGreen';
import StatusCardRed from '@/components/StatusCardRed/StatusCardRed';

//Highcharts imports
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

// Component imports
import DatePicker from '../components/DatePicker/DatePicker';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';

const Fitness: NextPageWithLayout = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  var json: IJsonModel = {
    global: {
      splitterSize: 1,
      splitterExtra: 4,
      tabEnableFloat: false,
      tabSetEnableClose: true,
      tabSetMinWidth: 100,
      tabSetMinHeight: 100,
      borderMinSize: 100,
      borderEnableAutoHide: true,
    },
    borders: [
      {
        type: 'border',
        selected: 0,
        size: 300,
        location: 'left',
        children: [
          {
            type: 'tab',
            id: 'bbb',
            name: 'Navigation',
            component: 'Navigation',
            enableClose: false,
          },
        ],
      },
    ],
    layout: {
      type: 'row',
      id: '1',
      children: [
        {
          type: 'row',
          id: '2',
          weight: 57.80856423173803,
          children: [
            {
              type: 'tabset',
              id: '1a',
              weight: 39.192708333333336,
              children: [
                {
                  type: 'tab',
                  id: '1aa',
                  name: 'Overview',
                  component: 'Overview',
                },
              ],
            },
            {
              type: 'tabset',
              id: '1b',
              weight: 35.807291666666664,
              children: [
                {
                  type: 'tab',
                  id: '1bb',
                  name: 'Schedule',
                  component: 'Schedule',
                },
              ],
            },
            {
              type: 'row',
              id: '3',
              weight: 25,
              children: [
                {
                  type: 'tabset',
                  id: '1c',
                  weight: 24.300111982082868,
                  children: [
                    {
                      type: 'tab',
                      id: '1cc',
                      name: 'Steps',
                      component: 'Steps',
                    },
                  ],
                },
                {
                  type: 'tabset',
                  id: '1d',
                  weight: 75.69988801791713,
                  children: [
                    {
                      type: 'tab',
                      id: '1dd',
                      name: 'Distance',
                      component: 'Distance',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'row',
          id: '4',
          weight: 42.19143576826197,
          children: [
            {
              type: 'tabset',
              id: '1e',
              weight: 38.668373879641486,
              children: [
                {
                  type: 'tab',
                  id: '1ee',
                  name: 'Weight',
                  component: 'Weight',
                },
              ],
            },
            {
              type: 'tabset',
              id: '1f',
              weight: 61.331626120358514,
              children: [
                {
                  type: 'tab',
                  id: '1ff',
                  name: 'Calories',
                  component: 'Calories',
                },
              ],
              active: true,
            },
          ],
        },
      ],
    },
  };

  const bar: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: '#1E1E1E',
    },
    title: {
      text: 'Activity',
      align: 'center',
      verticalAlign: 'middle',
      y: 60,
      style: {
        color: '#fff',
      },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Activity',
        innerSize: '50%',
        data: [
          ['Movement', 73.86],
          ['Exercise', 11.97],
          ['Stand', 5.52],
        ],
      },
    ],
  };

  const line: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 250,
      width: 600,
      backgroundColor: '#1E1E1E',
    },
    title: {
      text: 'Weight Progression',
      align: 'left',
      style: {
        color: '#fff',
      },
    },

    yAxis: {
      title: {
        text: 'Weight (Lbs)',
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: January to December',
      },
      type: 'datetime',
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: Date.UTC(2021, 3, 1),
        pointInterval: 24 * 3600 * 1000,
      },
    },

    series: [
      {
        name: '2023',
        type: 'line',
        data: [
          125,
          125,
          123,
          120,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      },
      {
        name: '2022',
        type: 'line',
        data: [140, 145, 152, 152, 160, 155, 145, 142, 133, 130, 128, 127],
      },
      {
        name: '2021',
        type: 'line',
        data: [155, 150, 148, 152, 147, 143, 145, 142, 145, 140, 138, 135],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  const column: Highcharts.Options = {
    chart: {
      type: 'column',
      height: 250,
      width: 500,
      backgroundColor: '#1E1E1E',
    },
    title: {
      text: 'Caloric Intake',
      align: 'left',
      style: {
        color: '#fff',
      },
    },
    xAxis: {
      categories: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Calories',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          textOutline: 'none',
        },
      },
    },
    legend: {
      align: 'left',
      x: 400,
      verticalAlign: 'top',
      y: -12,
      floating: true,
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      style: {
        color: '#000',
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: 'Net Carbs',
        type: 'column',
        data: [700, 942, 864, 658, 794, 865, 764],
      },
      {
        name: 'Fat',
        type: 'column',
        data: [150, 203, 123, 245, 280, 192, 250],
      },
      {
        name: 'Protein',
        type: 'column',
        data: [256, 316, 257, 165],
      },
    ],
  };

  const model = Model.fromJson(json);
  const factory = (node: TabNode) => {
    var component = node.getComponent();
    if (component === 'panel') {
      return <div className="tab_content">{node.getName()}</div>;
    } else if (component === 'Schedule') {
      return (
        <div>
          <div className={styles.calendar} style={{ paddingRight: 20 }}>
            <DatePicker disabled={false}></DatePicker>
          </div>
          <div style={{ padding: 20 }}>
            <h3 className={styles.fontheaderreg}>Cardio</h3>
            <p className={styles.fontreg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <br></br>
            <h3 className={styles.fontheaderreg}>Core</h3>
            <p className={styles.fontreg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <br></br>
            <h3 className={styles.fontheaderreg}>Legs</h3>
            <p className={styles.fontreg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      );
    } else if (component === 'Overview') {
      return (
        <div className={styles.overviewcontainer}>
          <div style={{ padding: 20 }}>
            <HighchartsReact
              highcharts={Highcharts}
              options={bar}
              ref={chartComponentRef}
              {...props}
            />
          </div>

          <div>
            <div style={{ padding: 15 }}>
              <StatusCardBlue
                title="Net Carbs"
                total="6/31g"
                remaining="25g left"
              />
            </div>
            <div style={{ padding: 15 }}>
              <StatusCardGreen
                title="Proteins"
                total="78/156g"
                remaining="78g left"
              />
            </div>
            <div style={{ padding: 15 }}>
              <StatusCardRed
                title="Fat"
                total="42/156g"
                remaining="114g left"
              />
            </div>
          </div>
        </div>
      );
    } else if (component === 'Navigation') {
      return <SidebarLayout />;
    } else if (component === 'Weight') {
      return (
        <div>
          <div style={{ padding: 20 }}>
            <center>
              <rect className={styles.weightbox}>
                <h2 className={styles.fontheaderbolddark}>75kg -&gt; 70kg</h2>
              </rect>
            </center>
          </div>

          <div style={{ paddingInline: 20 }}>
            <HighchartsReact
              highcharts={Highcharts}
              options={line}
              ref={chartComponentRef}
              {...props}
            />
          </div>
        </div>
      );
    } else if (component === 'Calories') {
      return (
        <section style={{ padding: 20 }}>
          <center>
            <HighchartsReact
              highcharts={Highcharts}
              options={column}
              ref={chartComponentRef}
              {...props}
            />
          </center>
          <div style={{ padding: 5 }}>
            <h3 className={styles.fontheaderreg}>Burn</h3>
            <p className={styles.fontreg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <br></br>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={line}
            ref={chartComponentRef}
            {...props}
          />
        </section>
      );
    } else if (component === 'Distance') {
      return (
        <div>
          <div style={{ paddingTop: 20 }} className={styles.distancecontainer}>
            <rect className={styles.activitybox}>
              <h1 className={styles.fontheaderbolddark}>750</h1>
            </rect>
            <rect className={styles.activitybox}>
              <h1 className={styles.fontheaderbolddark}>10%</h1>
            </rect>
            <rect className={styles.activitybox}>
              <h1 className={styles.fontheaderbolddark}>47</h1>
            </rect>
          </div>

          <div style={{ paddingTop: 5 }} className={styles.distancecontainer}>
            <p className={styles.activitylabel}>Activity</p>
            <p className={styles.activitylabel}>Activity</p>
            <p className={styles.activitylabel}>Activity</p>
          </div>
        </div>
      );
    } else if (component === 'Steps') {
      return (
        <div>
          <div style={{ paddingTop: 50 }}>
            <div className={styles.steps}>
              <h3 className={styles.fontheaderbold}>7500 Steps</h3>
            </div>
            <div className={styles.steps}>
              <p className={styles.fontreg}>3.67 miles</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="app">
      <Layout model={model} factory={factory} />
    </div>
  );
};

export default Fitness;

import React from 'react';
// import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const inputdata = [
  {
    date: '1982',
    description: 'Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla',
  },
  {
    date: '1985',
    description: 'Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla',
  },
  {
    date: '1992',
    description: 'Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla',
  },
  {
    date: '2000',
    description: 'Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla',
  },
];

const AuthorTimeline = () => (
  <Timeline lineColor="#ddd">
    {inputdata.map(item => (
      <TimelineItem
        key={item.date}
        dateText={item.date}
        style={{ color: '#e86971' }}
      >
        <p>{item.description}</p>
      </TimelineItem>
    ))}
  </Timeline>
);

export default AuthorTimeline;

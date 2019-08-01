import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const ArtistTimeline = ({ inputData }) => (
  <Timeline lineColor="#ddd">
    {inputData.map(item => (
      <TimelineItem
        key={item.node.date}
        dateText={item.node.date}
        style={{ color: '#e86971' }}
      >
        <p>{item.node.description.description}</p>
      </TimelineItem>
    ))}
  </Timeline>
);

export default ArtistTimeline;

ArtistTimeline.propTypes = {
  inputData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

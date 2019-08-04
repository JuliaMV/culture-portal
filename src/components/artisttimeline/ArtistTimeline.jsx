/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const ArtistTimeline = ({ inputData }) => (
  <Timeline lineColor="#ddd">
    {inputData.map((item) => (
      <TimelineItem
        key={`${item.node.date}${item.node.description.description}`}
        dateText={item.node.date}
        style={{ color: '#e86971' }}
      >
        <p>{item.node.description.description}</p>
      </TimelineItem>
    ))}
  </Timeline>
);

ArtistTimeline.propTypes = {
  inputData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtistTimeline;

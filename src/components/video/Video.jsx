import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import styles from './Video.module.scss';

class Video extends React.Component {
  state = {
    isOpen: false,
  }

  showVideo = () => {
    this.setState({
      isOpen: true,
    });
  }

  hideVideo = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { url } = this.props;
    return (
      <div>
        <button type="button" onClick={this.showVideo}>
          Show Video
        </button>
        <Modal
          open={isOpen}
          onClose={this.hideVideo}
          center
          styles={{
            modal: {
              padding: 0,
              fontSize: 0,
            },
          }}
        >
          <iframe
            className={styles.VideoFrame}
            title="video"
            width="560"
            height="315"
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal>
      </div>
    );
  }
}


Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;

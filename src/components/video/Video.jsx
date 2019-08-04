import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { FormattedMessage } from 'react-intl';

// @ts-ignore
import styles from './Video.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <span className={styles.Loader_First} />
    <span className={styles.Loader_Second} />
    <span className={styles.Loader_Third} />
  </div>
);

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
        <button className={styles.VideoButton} type="button" onClick={this.showVideo}>
          <FormattedMessage id="showVideo" />
        </button>
        <Modal
          open={isOpen}
          onClose={this.hideVideo}
          center
          classNames={{ modal: styles.customModal }}
        >
          <Loader />
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.VideoFrame}
              title="video"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
    );
  }
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;

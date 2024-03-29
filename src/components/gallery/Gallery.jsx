import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './gallery.css';

const Gallery = ({ images }) => {
  const transformedImages = images.map(image => ({
    original: image.src, thumbnail: image.src,
  }));
  return (
    <div className="gallery__slider">
      <ImageGallery
        items={transformedImages}
        showFullscreenButton
        showPlayButton={false}
        autoPlayх
        useBrowserFullscreen={false}
      />
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  })).isRequired,
};

export default Gallery;

import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './imageObserve.css';

const ImageObserve = ({ customClass, root, rootMargin, threshold, src }) => {
  const intersectionOptions = {
    root,
    rootMargin,
    threshold,
  };
  console.log(intersectionOptions);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    console.log(imageElement, imageElement.alt);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.src = imageElement.dataset.src;
        // imageElement.src = props.src;
        // imageElement.src = imageElement.dataset.src;
      });
    }, intersectionOptions);

    observer.observe(imageElement);
    return () => observer.disconnect();
  });

  const getImageClass = () => cx(['lazy-loaded-image', customClass]);

  const imageRef = useRef(null);

  return (
    <div className="image-container">
      <img
        src="https://www.appseconnect.com/wp-content/uploads/2017/08/loader.gif"
        data-src={src}
        alt="intersection-observer"
        className={getImageClass()}
        ref={imageRef}
      />
    </div>
  );
};

ImageObserve.propTypes = {
  customClass: PropTypes.string,
  src: PropTypes.string,
  root: PropTypes.node,
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
};

ImageObserve.defaultProps = {
  customClass: '',
  src: '',
  root: null,
  rootMargin: '',
  threshold: 0,
};

export default ImageObserve;

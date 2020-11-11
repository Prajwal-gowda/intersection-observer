import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

import './imageObserve.css';

const ImageObserve = (props) => {
  console.log(props);
  const intersectionOptions = {
    root: props.root ? props.root : null,
    rootMargin: props.rootMargin,
    threshold: props.threshold,
  };

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
  });

  const getImageClass = () => cx(['lazy-loaded-image', props.customClass]);

  const imageRef = useRef(null);

  return (
    <div className="image-container">
      <img
        src="https://www.appseconnect.com/wp-content/uploads/2017/08/loader.gif"
        data-src={props.src}
        alt="intersection-observer"
        className={getImageClass()}
        ref={imageRef}
      />
    </div>
  );
};

export default ImageObserve;

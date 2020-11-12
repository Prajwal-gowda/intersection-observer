import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './reveal.css';

const Reveal = ({ children, customClass }) => {
  const cb = () => {
    console.log('inview');
  };
  console.log(children, customClass);
  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('slide-bottom-top');
          el.dataset.showReveal = 'true';
          cb();
        } else {
          // entry.target.classList.remove('isShow');
        }
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  });

  const revealRef = useRef(null);

  return (
    <div className="reveal-wrapper" ref={revealRef}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node,
};

Reveal.defaultProps = {
  customClass: '',
  children: null,
};

export default Reveal;

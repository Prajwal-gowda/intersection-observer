import React, { useEffect, useRef } from 'react';
import './reveal.css';

const Reveal = (props) => {
  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('slide-bottom-top');
          el.dataset.showReveal = 'true';
        } else {
          // entry.target.classList.remove('isShow');
        }
      });
    });
    observer.observe(el);
  });

  const revealRef = useRef(null);

  return (
    <div className="reveal-wrapper" ref={revealRef}>
      {props.children}
    </div>
  );
};

export default Reveal;

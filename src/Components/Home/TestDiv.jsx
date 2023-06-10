import React, { useEffect } from 'react';
import './Banner.css'; // Import the CSS file for styling
const Banner = () => {
    useEffect(() => {
        const textElement = document.getElementById('banner-text');
        const containerElement = document.getElementById('banner-container');

        const startAnimation = () => {
            const textWidth = textElement.offsetWidth;
            const containerWidth = containerElement.offsetWidth;
            const duration = (textWidth + containerWidth) * 3;

            textElement.classList.add('banner-text-animation');
            textElement.style.animationDuration = `${duration}ms`;
        };

        const stopAnimation = () => {
            textElement.classList.remove('banner-text-animation');
        };

        startAnimation();

        return () => {
            stopAnimation();
        };
    }, []);

    return (
        <div id="banner-container" style={{ overflow: 'hidden' }}>
           <div id="banner-text" style={{ display: 'inline-block', whiteSpace: 'nowrap', width: '100%' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam facere! Similique quasi voluptatum iusto hic animi omnis voluptatibus quaerat! Nostrum fugiat itaque ab sit quidem. Labore, deserunt maiores iusto ab blanditiis quisquam assumenda ut!
      </div>
        </div>
    );
};

export default Banner;

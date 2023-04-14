import React, { useState } from 'react';

function Slides({ slides }) {
  const [index, setIndex] = useState(0);
  const { title, text } = slides[index];

  const handleRestart = () => setIndex(0);
  const handlePrev = () => setIndex(index - 1);
  const handleNext = () => setIndex(index + 1);

  const isFirstSlide = index === 0;
  const isLastSlide = index === slides.length - 1;

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={handleRestart}
          disabled={isFirstSlide}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={handlePrev}
          disabled={isFirstSlide}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={isLastSlide}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  );
}

export default Slides;

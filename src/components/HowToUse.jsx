import React from 'react';

const HowToUse = () => {
  const style = {
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
    padding: '1em',
  };
  return (
    <div className="instruction" style={style}>
      <h2>How it works</h2>
      <h4>Step 1:</h4>{' '}
      <span>Click on the share icon on the tweet you want to create</span>
      <h4>Step 2:</h4>{' '}
      <span>
        On the pop up menu click on the copy link icon to copy the link of the
        tweet
      </span>
      <h4>Step 3:</h4>{' '}
      <span>Paste the link on the input field as indicated</span>
      <h4>Step 4:</h4>{' '}
      <span>Click on the search icon and wait for the tweet to load</span>
      <h4>Step 5:</h4>{' '}
      <span>
        Toggle between colors to suit your design. download to your gallery. And
        thats it you can share your tweet every where
      </span>
    </div>
  );
};

export default HowToUse;

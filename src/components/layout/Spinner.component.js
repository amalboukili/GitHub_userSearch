import React from 'react';

function Spinner() {
  return (
    <video
      poster="https://i.gifer.com/fetch/w300-preview/ae/ae84325701f6d97ac4ad7e7951ac9063.gif"
      className="full-media"
      loop=""
      autoPlay=""
      playsInline=""
      style={media}
    >
      <source src="https://i.gifer.com/WMDx.mp4" type="video/mp4" />
    </video>
  );
}

const media = {
  position: 'absolute',
  right: '0px',
  bottom: '0px',
  left: '0px',
  maxHeight: '100%',
  maxWidth: '100%',
  margin: 'auto',
};
export default Spinner;

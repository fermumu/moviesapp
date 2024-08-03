import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function VideoIcon({ videoUrl }) {
  return (
  <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faPlayCircle} style={{color: "#FF0000", fontSize: "2em"}} />
  </a>
  );
}

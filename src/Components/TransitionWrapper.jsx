import React from 'react';
import '../style/transitionWrapper.scss';

const TransitionWrapper = ({ready}) => (
  <div className="transitionWrapper" data-active={ready} />
);
export default React.memo(TransitionWrapper);
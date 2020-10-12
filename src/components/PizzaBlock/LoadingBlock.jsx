import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#dedede"
      foregroundColor="#ecebeb">
      <circle cx="139" cy="144" r="115" />
      <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="418" rx="6" ry="6" width="95" height="31" />
      <rect x="214" y="371" rx="0" ry="0" width="1" height="0" />
      <rect x="138" y="410" rx="25" ry="25" width="142" height="49" />
    </ContentLoader>
  );
}

export default LoadingBlock;

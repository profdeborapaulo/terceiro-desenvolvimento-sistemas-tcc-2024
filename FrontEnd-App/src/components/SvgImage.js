import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { svgs } from './SvgData';

const SvgImage = ({ svgName, width, height, color }) => {
  const selectedSvg = svgs.find(svg => svg.name === svgName);

  if (!selectedSvg) {
    return null;
  }

  const { paths } = selectedSvg;

  return (
    <Svg width={width} height={height} viewBox={`0 0 32 32`} fill={color} xmlns="http://www.w3.org/2000/svg">

      {paths.map((path, index) => (
        <Path key={index} d={path.d} fill={color} />
      ))}
    </Svg>
  );
};

export default SvgImage;
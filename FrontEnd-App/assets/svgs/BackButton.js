import * as React from "react"
import Svg, { Ellipse, G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <Ellipse cx={20} cy={20.5} fill={props.circleColor} rx={20} ry={20.5} />
      <G clipPath="url(#a)">
        <Path
          fill="#050D2E"
          stroke="#000"
          d="M24.676 30.84a.665.665 0 0 0 .469-1.133l-8.825-8.824 8.696-8.695a.665.665 0 0 0 0-.938.665.665 0 0 0-.938 0l-9.168 9.164a.665.665 0 0 0 0 .938l9.293 9.293c.133.132.3.195.473.195Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M10 31V11h20v20z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
export default SvgComponent
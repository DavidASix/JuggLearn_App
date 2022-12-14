import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Purchases(props) {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox='0 0 30.365 27.19'
    >
      <Path
        d="M29.205 8.363h-3.7a1.484 1.484 0 00-.124-.183L19.21.548a1.481 1.481 0 00-2.3 1.862l4.811 5.951H8.648l4.811-5.951a1.481 1.481 0 10-2.3-1.862L4.987 8.181a1.484 1.484 0 00-.124.183h-3.7a1.161 1.161 0 100 2.321h1.249A83.321 83.321 0 013.981 26.04a1.161 1.161 0 001.161 1.149h20.082a1.161 1.161 0 001.161-1.149 83.323 83.323 0 011.569-15.356h1.251a1.161 1.161 0 100-2.321zM10.66 20.978a1.081 1.081 0 01-2.161 0v-6.4a1.081 1.081 0 112.161 0zm5.6 0a1.081 1.081 0 01-2.161 0v-6.4a1.081 1.081 0 012.161 0zm5.6 0a1.081 1.081 0 01-2.161 0v-6.4a1.081 1.081 0 112.161 0z"
        fill={props.color || "#707070"}
      />
    </Svg>
  )
}

export default Purchases;

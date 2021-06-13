import React from "react"
import Lottie from "react-lottie"
import * as animationData from "../../images/lottie/spooky-chest.json"

export default class SpookyChest extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isStopped: false,
      isPaused: false
    }
  }

  render() {
    return (
      <Lottie options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        } }}
              height="100%"
              width="100%"
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
    )
  }
}
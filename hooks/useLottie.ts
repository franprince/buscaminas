import React from 'react'
import {useLottie} from 'lottie-react'
import explotionAnimation from '../lottieFiles/explosion.json'

const Explotion: React.FunctionComponent = () => {
  const options = {
    animationData: explotionAnimation,
    loop: false,
    autoplay: true,
  }

  const {View} = useLottie(options)

  return View
}

export default Explotion

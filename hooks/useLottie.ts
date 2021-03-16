import React from 'react'
import {useLottie} from 'lottie-react'
import explosionAnimation from '../lottieFiles/explosion.json'

const Explosion: React.FunctionComponent = () => {
  const options = {
    animationData: explosionAnimation,
    loop: false,
    autoplay: true,
  }

  const {View} = useLottie(options)

  return View
}

export default Explosion

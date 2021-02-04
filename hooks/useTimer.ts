import {useState, useRef} from 'react'
type useTimerTipe = {
  time: number
  handleReset: () => void
  isActive: boolean
  handleStart: () => void
  handleStop: () => void
}
const useTimer = (): useTimerTipe => {
  const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef(null)

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerRef.current)
    setIsActive(false)
  }
  const handleReset = () => {
    clearInterval(timerRef.current)
    setIsActive(false)
    setCounter(0)
  }

  return {
    time: counter,
    handleReset,
    isActive,
    handleStart,
    handleStop,
  }
}
export default useTimer

import React, {ReactElement} from 'react'
type Props = {
  count: number
}
const Timer: React.FC<Props> = ({count}: Props): ReactElement => {
  const seconds = count % 60
  const minutes = Math.floor(count / 60)
  const formatedSeconds = String(seconds).length === 1 ? `0${seconds}` : seconds
  const formatedMinutes = String(minutes).length === 1 ? `0${minutes}` : minutes
  return <p>{`${formatedMinutes}:${formatedSeconds}`}</p>
}

export default Timer

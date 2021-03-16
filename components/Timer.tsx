import React, {ReactElement} from 'react'
type Props = {
  count: number
}
const Timer: React.FC<Props> = ({count}: Props): ReactElement => {
  const seconds = count % 60
  const minutes = Math.floor(count / 60)
  const formatedSeconds = String(seconds).padStart(2, '0')
  const formatedMinutes = String(minutes).padStart(2, '0')
  return <p>{`${formatedMinutes}:${formatedSeconds}`}</p>
}

export default Timer

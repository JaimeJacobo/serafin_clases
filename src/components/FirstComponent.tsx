import React, {useState} from 'react'
import SecondComponent from './SecondComponent'

export default function FirstComponent_1() {
  const [counter, setCounter] = useState<number>(0)
  const handleIncrease = () => {
    setCounter((counter) => counter + 1)
  }

  const handleDecrease = () => {
    setCounter((counter) => counter - 1)
  }

  return (
    <>
      <SecondComponent
        counter={counter}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      ></SecondComponent>
    </>
  )
}

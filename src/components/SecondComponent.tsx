interface Props {
  counter: number
  handleDecrease: () => void
  handleIncrease: () => void
}

const SecondComponent: React.FC<Props> = ({
  counter,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <>
      <p>Componente 2</p>
      {counter}
      <div>
        <button onClick={handleIncrease}>Increase</button>
      </div>
      <div>
        <button onClick={handleDecrease}>Decrase</button>
      </div>
    </>
  )
}

export default SecondComponent

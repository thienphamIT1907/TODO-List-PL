import InputStyled from './styles'

const Input = () => {
  const handleClick = () => {
    console.log('Add...')
  }
  return (
    <InputStyled>
      <input type="text" />
        <img src="/src/assets/plusbtn.png" alt="plusbtn" className='plus-button' onClick={handleClick}/>
    </InputStyled>
  )
}
export default Input;
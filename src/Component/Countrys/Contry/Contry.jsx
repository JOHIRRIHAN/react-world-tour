import './Contry.css'
const Contry = ({contry}) => {
    const {name, flags } = contry;
  return (
    <div className='contry'>
        <h3>name: {name?.common}</h3>
        <h3>Republic: {name?.official}</h3>
        <img src={flags.png} alt="" />
    </div>
  )
}

export default Contry
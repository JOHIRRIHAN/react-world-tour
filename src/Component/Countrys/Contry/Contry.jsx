import { useState } from 'react';
import './Contry.css'
const Contry = ({contry}) => {
    const {name, flags, population, area, cca3} = contry;
  const [visited, setVisited] = useState(false)
  const handelVisited = () => {
    setVisited(true)
  }
 
    return (
    <div className='contry'>
        <h3>name: {name?.common}</h3>
        <h3>Republic: {name?.official}</h3>
        <img src={flags.png} alt="" />
        <h3>population: {population}</h3>
        <h3>area: {area}</h3>
        <h3>cca3: {cca3}</h3>
        <button onClick={handelVisited}>visited</button>
        {
            visited && 'I have visited this country.'
        }
    </div>
  )
} 

export default Contry
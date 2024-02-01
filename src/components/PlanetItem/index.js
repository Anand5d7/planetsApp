// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="planet-heading">{name}</h1>
      <p className="para">{description}</p>
    </li>
  )
}

export default PlanetItem

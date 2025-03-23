import './index.css'

export default function Photo({srs, name}) {
  return <img alt={name} src={srs} className='photo'/>
}
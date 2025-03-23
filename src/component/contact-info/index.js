import './index.css'
import Heading from '../heading'

export default function ContactInfo({name, image, rate, time, info, phone}) {
  return (
    <div className="contact-info">
      <div className="contact-info__header">
        <img className='contact-info__image' alt={name} src={image}/>
        <div className='contact-info__content'>
          <Heading>Господар - {name}</Heading>
          <div className='contact-info__info'>
            <span className='contact-info__sub-value'>{phone}</span>
            <span className='contact-info__sub-value'>{time}</span>
            <span className='contact-info__sub-value'>{rate}% відсотків швидкості відгуку</span>
          </div>
        </div>
      </div>
      <span className="contact-info__text">{info}</span>
    </div>
  )
}
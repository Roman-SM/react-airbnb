import './index.css'
import ListItem from '../list-item'
import Heading from '../heading'
import { Fragment } from 'react'
import Box from '../box'

import Pool from './svg/pool.svg'
import Gym from './svg/gym.svg'
import Breakfast from './svg/breakfast.svg'
import Wifi from './svg/wifi.svg'
import Parking from './svg/parking.svg'
import Pets from './svg/pets.svg'
import Shuttle from './svg/airport.svg'
import Concierge from './svg/concierge.svg'
import Room from './svg/room.svg'
import Child from './svg/child.svg'

export default function ComfortOptions({...rest}) {
  return (
    <Box shadow className='options_list'>
      <Heading border>Зручності</Heading>
      <List {...rest}/>
    </Box>
  )
}
function List({pool, gym, breakfast, wifi, parking, pets, shuttle, concierge, room, child}) {
  return (
    <Fragment>
      {pool ? <ListItem imageSrc={Pool}children={'Басейн'}/> : 'test2'}
      {gym ? <ListItem imageSrc={Gym} children={'Спортивний зал'}/> : ''}
      {breakfast ? <ListItem imageSrc={Breakfast} children={'Безкоштовний сніданок'}/> : ''}
      {wifi ? <ListItem imageSrc={Wifi} children={'Безкоштовний Wi-Fi'}/> : ''}
      {parking ? <ListItem imageSrc={Parking} children={'Безкоштовний вуличний паркінг'}/> : ''}
      {pets ? <ListItem imageSrc={Pets} children={'Дозволено розміщення з домашніми тваринами'}/> : ''}
      {shuttle ? <ListItem imageSrc={Shuttle} children={'Трансфер до/з аеропорту'}/> : ''}
      {concierge ? <ListItem imageSrc={Concierge} children={'Консьєрж-сервіс'}/> : ''}
      {room ? <ListItem imageSrc={Room} children={'Обслуговування номерів'}/> : ''}
      {child ? <ListItem imageSrc={Child} children={'Підходить для дітей'}/> : ''}
    </Fragment>
  )
}
import './index.css'
import ListItem from '../list-item'
import Heading from '../heading'
import Box from '../box'
import { Fragment } from 'react'

import Guests from './guests.svg'
import Bedrooms from './bedrooms.svg'
import Beds from './beds.svg'
import Baths from './baths.svg'

export default function RoomDetails({...rest}) {
  return (
    <Box shadow className='details__list'>
      <Heading border>Деталі про номер:</Heading>
      <List {...rest}/>
    </Box>
  )
}
function List({guests, bedrooms, beds, baths}) {
  return (
    <Fragment>
      <ListItem imageSrc={Guests}>Гостей: {guests}</ListItem>
      <ListItem imageSrc={Bedrooms}>Спалень: {bedrooms}</ListItem>
      <ListItem imageSrc={Beds}>Ліжок: {beds}</ListItem>
      <ListItem imageSrc={Baths}>Ванних кімнат: {baths}</ListItem>
    </Fragment>
  )
}
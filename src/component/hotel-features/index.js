import './index.css'
import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'
import { Fragment } from 'react'

export default function HotelFeatures({...rest}) {
  return (
    <Box shadow className='features__list'>
      <Heading border children={'Додаткові властивості'}/>
      <List {...rest}/>
    </Box>
  )
}
function List({rules, policy, tranportation, languages, offers, instructions}) {
  return (
    <Fragment>
      <ListItem title={'Правила дому'}>{rules}</ListItem>
      <ListItem title={'Політика скасування'}>{policy}</ListItem>
      <ListItem title={'Місцевий транспорт'}>{tranportation}</ListItem>
      <ListItem title={'Мови хоста'}>{languages}</ListItem>
      <ListItem title={'Спеціальні пропозиції:'}>{offers}</ListItem>
      <ListItem title={'Інструкції щодо реєстрації'}>{instructions}</ListItem>
    </Fragment>
  )
}
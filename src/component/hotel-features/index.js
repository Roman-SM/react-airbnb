import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import { Fragment } from "react";

export default function HotelFeatures({ ...rest }) {
  return (
    <Box shadow className="features__list">
      <Heading border children={"Additional Properties"} />
      <List {...rest} />
    </Box>
  );
}
function List({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <Fragment>
      <ListItem title={"House Rules"}>{rules}</ListItem>
      <ListItem title={"Cancellation Policy"}>{policy}</ListItem>
      <ListItem title={"Local Transportation"}>{transportation}</ListItem>
      <ListItem title={"Host Languages"}>{languages}</ListItem>
      <ListItem title={"Special Offers:"}>{offers}</ListItem>
      <ListItem title={"Check-in Instructions"}>{instructions}</ListItem>
    </Fragment>
  );
}

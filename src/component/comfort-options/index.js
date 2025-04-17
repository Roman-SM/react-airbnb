import "./index.css";
import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

import Pool from "./svg/pool.svg";
import Gym from "./svg/gym.svg";
import Breakfast from "./svg/breakfast.svg";
import Wifi from "./svg/wifi.svg";
import Parking from "./svg/parking.svg";
import Pets from "./svg/pets.svg";
import Shuttle from "./svg/airport.svg";
import Concierge from "./svg/concierge.svg";
import Room from "./svg/room.svg";
import Child from "./svg/child.svg";

export default function ComfortOptions({ ...rest }) {
  return (
    <Box shadow className="options_list">
      <Heading border>Amenities</Heading>
      <List {...rest} />
    </Box>
  );
}
function List({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  shuttle,
  concierge,
  room,
  child,
}) {
  return (
    <Fragment>
      {pool ? <ListItem imageSrc={Pool} children={"Pool"} /> : "test2"}
      {gym ? <ListItem imageSrc={Gym} children={"Gym"} /> : ""}
      {breakfast ? (
        <ListItem imageSrc={Breakfast} children={"Free Breakfast"} />
      ) : (
        ""
      )}
      {wifi ? <ListItem imageSrc={Wifi} children={"Free Wi-Fi"} /> : ""}
      {parking ? (
        <ListItem imageSrc={Parking} children={"Free Street Parking"} />
      ) : (
        ""
      )}
      {pets ? <ListItem imageSrc={Pets} children={"Pet-Friendly"} /> : ""}
      {shuttle ? (
        <ListItem imageSrc={Shuttle} children={"Airport Shuttle"} />
      ) : (
        ""
      )}
      {concierge ? (
        <ListItem imageSrc={Concierge} children={"Concierge Service"} />
      ) : (
        ""
      )}
      {room ? <ListItem imageSrc={Room} children={"Room Service"} /> : ""}
      {child ? <ListItem imageSrc={Child} children={"Family friendly"} /> : ""}
    </Fragment>
  );
}

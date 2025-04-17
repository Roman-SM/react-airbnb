import "./index.css";
import Box from "../box";
import Heading from "../heading";
import { Fragment } from "react";

export default function Reviews({ list }) {
  return (
    <div className="reviews__block">
      <Heading>Guest Reviews</Heading>
      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__header">
        <span className="reviews__title">{guestName}</span>
        <span className="reviews__rating">Rating: {rating}</span>
      </div>
      <span className="reviews__text">{review}</span>
    </Box>
  );
}

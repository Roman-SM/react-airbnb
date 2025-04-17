import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

export default function Price({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div class="price__header">
        <span
          className={`price__value ${
            discount ? "price__value--has-discount" : ""
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>
      <List {...rest} currency={currency} />
    </Box>
  );
}
function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price__list">
      <ListItem>
        <span>Cleaning Fee:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>
      <ListItem>
        <span>Service Fee:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>
      <ListItem>
        <span>Arrival Date:</span>
        <span>
          {currency}
          {checkin}
        </span>
      </ListItem>
      <ListItem>
        <span>Check-in Date:</span>
        <span>
          {currency}
          {checkout}
        </span>
      </ListItem>
    </ul>
  );
}

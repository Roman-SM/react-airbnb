import Page from "./component/page";
import Header from "./component/header";
import Title from "./component/title";
import Photo from "./component/photo";
import Price from "./component/price";
import RoomList from "./component/room-list";
import Description from "./component/description";
import ComfortOptions from "./component/comfort-options";
import RoomDetails from "./component/room-details";
import HotelFeatures from "./component/hotel-features";
import Reviews from "./component/reviews";
import Attractions from "./component/attractions";
import ContactInfo from "./component/contact-info";

function App() {
  const data = {
    listing_name: "East Side Bill",
    reviews_summary: {
      average_rating: 4.9,
      total_reviews: 190,
    },
    location: {
      city: "Austin, Texas",
      country: "United States",
    },
    superhost: true,

    image: "https://picsum.photos/1000/1000",

    price: {
      original_price: 308,
      discounted_price: 218,
      currency: "$",
      cleaning_fee: 90,
      service_fee: 200,
    },
    availability: {
      checkin_date: "9/6/2023",
      checkout_date: "9/11/2023",
    },

    roomTypes: [
      {
        id: 5313,
        type: "Deluxe Room",
        pricePerNight: 300,
        currency: "$",
        capacity: 2,
      },
      {
        id: 6264,
        type: "Suite",
        pricePerNight: 500,
        currency: "$",
        capacity: 4,
      },
      {
        id: 7332,
        type: "Presidential",
        pricePerNight: 1000,
        currency: "$",
        capacity: 6,
      },
    ],

    description:
      "Enjoy this clean, modern cottage located in a cozy yet convenient neighborhood in Central East Austin. Inspired by Japanese tea houses, this backyard cottage provides easy access to SXSW venues, the ACL festival, downtown, excellent restaurants, and public transportation, while offering a peaceful retreat for relaxation and recharging.",

    property_details: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },

    neighborhood_info:
      "The neighborhood is charming, lively, safe, and sweet...",

    amenities: {
      hasPool: true,
      hasGym: false,
      hasFreeBreakfast: true,
      hasFreeWiFi: true,
      hasParking: false,
      hasPetsAllowed: false,
      hasAirportShuttle: true,
      hasConciergeService: true,
      hasRoomService: false,
      hasChildFriendly: true,
    },

    contact_info: {
      name: "Kerthy",
      image: "https://picsum.photos/80/80",
      response_rate: 100,
      response_time: "within an hour",
      info: "I'm an Austin-Brooklyn filmmaker and television producer who can be found biking to the Farmer's Market...",
      phone: "+123-456-7890",
    },

    additional_properties: {
      house_rules:
        "No smoking or pets allowed. Quiet hours from 10:00 PM to 7:00 AM.",
      cancellation_policy:
        "Flexible cancellation policy with full refund if canceled 7 days before check-in.",
      local_transportation:
        "Public buses and taxis available within walking distance.",
      host_languages: ["English", "Spanish"],
      special_offers: "10% discount for bookings of 7 nights or more.",
      check_in_instructions:
        "Check-in time is 3:00 PM. Please contact us in advance with your estimated arrival time.",
    },

    guestReviews: [
      {
        id: 43454,
        guestName: "Alice Johnson",
        rating: 5,
        review:
          "Amazing experience! The staff was very friendly and the facilities were top-notch.",
      },
      {
        id: 75543,
        guestName: "Bob Smith",
        rating: 4,
        review:
          "Great location and beautiful views. However, the prices at the restaurant were a bit high.",
      },
      {
        id: 55431,
        guestName: "Eve Williams",
        rating: 5,
        review:
          "Absolutely loved the spa treatments. It was a relaxing and rejuvenating stay.",
      },
    ],

    nearbyAttractions: [
      {
        id: 453,
        name: "Crystal Clear Beach",
        link: "www.test.com",
      },
      {
        id: 741,
        name: "Tropical Rainforest Hiking Trails",
        link: "www.test.com",
      },
      {
        id: 422,
        name: "Island Waterfalls",
        link: "www.test.com",
      },
      {
        id: 876,
        name: "Cultural Village Tours",
        link: "www.test.com",
      },
    ],
  };

  return (
    <Page>
      <Header />
      <Title
        title={data.listing_name}
        rating={data.reviews_summary.average_rating}
        review={data.reviews_summary.total_reviews}
        city={data.location.city}
        country={data.location.country}
        superhost={data.superhost}
      />
      <Photo srs={data.image} name={data.listing_name} />
      <Price
        price={data.price.original_price}
        discount={data.price.discounted_price}
        currency={data.price.currency}
        cleaning={data.price.cleaning_fee}
        service={data.price.service_fee}
        checkin={data.availability.checkin_date}
        checkout={data.availability.checkout_date}
      />
      <RoomList list={data.roomTypes} />
      <Description title={"Description"} children={data.description} />
      <RoomDetails
        guests={data.property_details.guests}
        bedrooms={data.property_details.bedrooms}
        beds={data.property_details.beds}
        baths={data.property_details.baths}
      />
      <Description
        title={"About the Neighbors"}
        children={data.neighborhood_info}
      />
      <ComfortOptions
        pool={data.amenities.hasPool}
        gym={data.amenities.hasGym}
        breakfast={data.amenities.hasFreeBreakfast}
        wifi={data.amenities.hasFreeWiFi}
        parking={data.amenities.hasParking}
        pets={data.amenities.hasPetsAllowed}
        shuttle={data.amenities.hasAirportShuttle}
        concierge={data.amenities.hasConciergeService}
        room={data.amenities.hasRoomService}
        child={data.amenities.hasChildFriendly}
      />
      <ContactInfo
        name={data.contact_info.name}
        image={data.contact_info.image}
        rate={data.contact_info.response_rate}
        time={data.contact_info.response_time}
        info={data.contact_info.info}
        phone={data.contact_info.phone}
      />
      <HotelFeatures
        rules={data.additional_properties.house_rules}
        policy={data.additional_properties.cancellation_policy}
        transportation={data.additional_properties.local_transportation}
        languages={data.additional_properties.host_languages}
        offers={data.additional_properties.special_offers}
        instructions={data.additional_properties.check_in_instructions}
      />
      <Reviews list={data.guestReviews} />
      <Attractions list={data.nearbyAttractions} />
    </Page>
  );
}

export default App;

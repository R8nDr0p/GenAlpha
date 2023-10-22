import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
    address: "20 W 34th St., New York, NY 10001, USA",
    location: {
      lat: "40.7484°",
      long: "-73.9857",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
    address: "20 W 34th St., New York, NY 10001, USA",
    location: {
      lat: "40.7484°",
      long: "-73.9857",
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
    address: "20 W 34th St., New York, NY 10001, USA",
    location: {
      lat: "40.7484°",
      long: "-73.9857",
    },
    creator: "u3",
  },
];
function UserPlaces() {
  const { userId } = useParams();
  const filteredPlaces = DUMMY_PLACES.filter(
    (place) => place.creator === userId,
  );
  return <PlaceList items={filteredPlaces} />;
}

export default UserPlaces;

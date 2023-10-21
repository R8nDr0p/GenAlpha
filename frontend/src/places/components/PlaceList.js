import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

function PlaceList({ items }) {
  if (items.length === 0) {
    return (
      <div className={"place - list"}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className={"flex gap-2 md:flex-row justify-center items-center"}>
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;

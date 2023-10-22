import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

function PlaceList({ items }) {
  if (items.length === 0) {
    return (
      <div className={"place - list flex justify-center"}>
        <Card
          className={
            "flex flex-col justify-center items-center gap-4 max-w-fit"
          }
        >
          <h2 className={"text-3xl text-center"}>
            No places found. Maybe create one?
          </h2>
          <button className="relative group overflow-hidden px-6 h-12 border border-amber-200 hover:border-slate-700 rounded-full max-w-fit">
            <div
              aria-hidden="true"
              className="transition duration-300 group-hover:-translate-y-12"
            >
              <div className="h-12 flex items-center justify-center">
                <span className="text-amber-700">Share Places</span>
              </div>
              <div className="h-12 flex items-center justify-center">
                <span className="text-slate-700">Partager</span>
              </div>
            </div>
          </button>
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

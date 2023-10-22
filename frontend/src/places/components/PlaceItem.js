import React from "react";
import Card from "../../shared/components/UIElements/Card";

function PlaceItem({ image, title, address, description }) {
  return (
    <li>
      <Card>
        <div className={"place - item__image max-w-2xl"}>
          <img src={image} alt={title} className={"rounded-xl"} />
        </div>
        <div className={"place-item__info"}>
          <h2 className={"font-bold accent-amber-400 text-2xl text-center"}>
            {title}
          </h2>
          <h3 className={"font-bold accent-amber-400 text-2xl text-center"}>
            {address}
          </h3>
          <p className={"text-center"}>{description}</p>
        </div>
        <hr className={"mb-2"} />
        <div className={"place-item__actions flex gap-2 justify-center"}>
          <button className="bg-emerald-950 text-amber-300 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            VIEW ON MAP
          </button>
          <button
            className={
              "border-2 border-amber-300 shadow-amber-50 p-2 rounded hover:border-slate-700 hover:shadow-slate-800 hover:bg-emerald-700 hover:text-amber-200"
            }
          >
            EDIT
          </button>
          <button
            className={
              "border-2 border-amber-300 shadow-amber-50 p-2 bg-blend-lighten"
            }
          >
            DELETE
          </button>
        </div>
      </Card>
    </li>
  );
}

export default PlaceItem;

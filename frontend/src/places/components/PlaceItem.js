import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";

import "./PlaceItem.css";
import Map from "../../shared/components/UIElements/Map";

function PlaceItem({ image, title, address, description, coordinates }) {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        headerClass={
          "bg-violet-900 bg-gradient-to-l from-slate-400 to-violet-950 text-md"
        }
        contentClass={"place-item__modal-content"}
        footerClass={"place-item__modal-actions"}
        footer={
          <Button danger classNew={"text-white"} onClick={closeMapHandler}>
            CLOSE
          </Button>
        }
      >
        <div className={"map-container w-full h-60"}>
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
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
          <div className={"place-item__actions flex flex-col gap-2 justify-center md:flex-row"}>
            <button
              onClick={openMapHandler}
              className="bg-emerald-950 text-amber-300 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              VIEW ON MAP
            </button>
            <button className="bg-green-950 text-amber-300 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-green-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              EDIT
            </button>
            <button className="bg-red-950 text-amber-300 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-red-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              DELETE
            </button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;

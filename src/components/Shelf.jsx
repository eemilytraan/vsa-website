import React from "react";
import {
  RiceBowl, GuavaCandy, IncenseBowl, FishSauce, RiceCooker,
  Chopsticks, BanhMi, Sriracha, Hoisin, CoffeeCup, PandanJelly, PlayingCard
} from "./VietnameseIcons";

export default function Shelf({ photosChildren }) {
  const icons = [
    Sriracha, Hoisin, CoffeeCup, PandanJelly, PlayingCard,
    RiceBowl, GuavaCandy, IncenseBowl, FishSauce, RiceCooker, Chopsticks, BanhMi
  ].map((Icon, i) => <Icon key={`ic-${i}`} className="icon" />)
   .sort(() => Math.random() - 0.5);

  const photos = React.Children.toArray(photosChildren);
  const row = [];

  // item, photo, item, photo … single row
  for (let i = 0; i < photos.length; i++) {
    row.push(icons[i % icons.length]);
    row.push(photos[i]);
  }
  row.push(icons[(photos.length + 1) % icons.length]);

  return (
    <div className="shelf">
      <div className="shelf-row">{row}</div>
      <div className="shelf-wood" />
    </div>
  );
}

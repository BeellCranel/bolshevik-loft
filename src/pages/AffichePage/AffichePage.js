import React from "react";
import "./AffichePage.scss";
import { EventCard } from "../../components";

export const AffichePage = () => {
  return (
    <main className="affiche">
      <div className="affiche__wrapper">
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
        <EventCard address="https://getafisha.ru/standup/672" />
      </div>
    </main>
  );
};

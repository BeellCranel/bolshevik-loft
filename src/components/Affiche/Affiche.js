import React from "react";
import "./Affiche.css";
import EventCard from "../EventCard/EventCard";

const Affiche = () => {
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

export default Affiche;

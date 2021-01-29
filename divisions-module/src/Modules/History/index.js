import React from "react";
import { SideCard } from "../common/Atoms.style";
import { GoPrimitiveDot } from "react-icons/go";

export default function index() {
  const history = [
    {
      id: 1,
      date: "22:10 15/09/2020",
      text: "Searched “Journal Entries” on Division module",
    },
    {
      id: 2,
      date: "22:10 15/09/2020",
      text: "Searched “Fingerprint record” on Division module",
    },
    {
      id: 3,
      date: "22:10 15/09/2020",
      text: "Searched “Journal Entries” on Division moduleMojidi, Lagos",
    },
  ];
  return (
    <SideCard row="3" box="none" background="none">
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "1rem",
        }}
      >
        <img src="/images/speaker.png" />
        <h5>Module History</h5>
      </div>
      {history.map((item) => {
        const { id, date, text } = item;
        return (
          <div
            key={id}
            style={{
              //   display: "flex",
              fontSize: ".8rem",
              //   justifyContent: "space-between",
              margin: " .5rem",
            }}
          >
            <div style={{ color: " #747474 ", width: "100%" }}>{text}</div>
            <div style={{ color: " #A1AACE", width: "100%", alignItems:"center"}}>{date}<GoPrimitiveDot/>Web</div>
          </div>
        );
      })}
    </SideCard>
  );
}

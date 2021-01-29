import React from "react";
import { SideCard } from "../common/Atoms.style";

export default function index() {
  const summary = [
    { id: 1, src: "/images/phone.png", text: "08012345678" },
    { id: 2, src: "/images/mail.png", text: "asbfefr@gmail.com" },
    { id: 3, src: "/images/location.png", text: "Mojidi, Lagos" },
    { id: 4, src: "/images/journal.png", text: "2 Journal entries" },
    { id: 5, src: "/images/print.png", text: "24 fingerprints enrolled" },
  ];
  return (
    <SideCard>
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "1rem",
        }}
      >
        <img src="/images/castle.png" />
        <h5>Division Summary</h5>
      </div>
      {summary.map((item) => {
        const { id, src, text } = item;
        return (
          <div
            key={id}
            style={{
              display: "flex",
              fontSize: ".8rem",
              justifyContent: "space-between",
              margin: " .5rem",
            }}
          >
            <div style={{ width: "15%" }}>
              <img src={src} alt={text} />
            </div>
            <div style={{ width: "85%" }}>{text}</div>
          </div>
        );
      })}
    </SideCard>
  );
}

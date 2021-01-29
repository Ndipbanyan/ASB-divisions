import React from 'react'
import { Card } from '../common/Atoms.style'
import {RiErrorWarningLine} from 'react-icons/ri'
export default function Metric() {
    let metrics = [
        { number: 31454, title: "Ongoing metric" },
        { number: 2344, title: "Past metric" },
        { number: 14224, title: "Missed metric" },
        { number: 635, title: "Failed metric" },
        { number: 11334, title: "Pending metric" }
    ]
    return (
      <>
        {metrics.map((item) => {
            const { number, title } = item
            return (
              <Card>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50%",
                  }}
                >
                  <h6 style={{ color: "#19191D", fontSize: "1.5rem" }}>
                    {number}
                  </h6>
                  <div style={{ color: " #B4B4BB", fontSize: "1.5rem" }}>
                    <RiErrorWarningLine />
                  </div>
                </div>
                <div>
                  <div style={{ color: "#B4B4BB", fontSize: "1rem" }}>
                    {title}
                  </div>
                </div>
              </Card>
            );
        })}
        
      </>
    );
}

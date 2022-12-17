import React from "react";

export default function ResumePage() {
  return (
    <div>
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://docs.google.com/document/d/1E1SPfCfm_D5XTMXVtB4uCT-uTyWSY5IO/edit?usp=sharing&ouid=106847162975287723430&rtpof=true&sd=true`}
        frameBorder="0"
      />
    </div>
  );
}

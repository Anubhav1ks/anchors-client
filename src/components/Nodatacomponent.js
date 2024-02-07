import React from "react";

export default function Nodatacomponent({ text }) {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height:"20rem"
      }}
    >
      <img
        style={{ height: "8rem" }}
        className="w-1/2 h-1/2"
        src="/images/SVG/nodata_image.svg"
        alt="error"
      />
      <span className="text-lg">{text ? text : "No records found"}</span>
    </div>
  );
}

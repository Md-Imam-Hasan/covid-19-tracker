import React from "react";
import numeral from "numeral";
import { Circle } from "@react-google-maps/api";

const casesTypeColors = {
  cases: {
    hex: "#800080",
    multiplier: 400,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 360,
  },
  deaths: {
    hex: "#CC1034",
    multiplier: 1000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
      options={{
        strokeColor: casesTypeColors[casesType].hex,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: casesTypeColors[casesType].hex,
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier,
        zIndex: 1
      }}
    >
    </Circle>
  ));

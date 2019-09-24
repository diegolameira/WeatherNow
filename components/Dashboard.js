import React from "react";

import WeatherContainer from "../containers/Weather";
import WeatherBlock from "./WeatherBlock";

export default ({ cities }) =>
  cities.map(city => (
    <WeatherContainer key={city} city={city}>
      {({ main: { temp, pressure, humidity }, lastUpdate }) => (
        <WeatherBlock {...{ city, temp, pressure, humidity, lastUpdate }} />
      )}
    </WeatherContainer>
  ));

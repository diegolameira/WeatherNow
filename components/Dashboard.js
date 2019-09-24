import React from "react";

import WeatherBlock from "./WeatherBlock";

export default ({ cities }) => cities.map(city => <WeatherBlock city={city} />);

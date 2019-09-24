import React from "react";
import styled from "styled-components";

import WeatherContainer from "../containers/Weather";
import WeatherBlock from "./WeatherBlock";

export default ({ cities }) => (
  <DashboardContainer>
    {cities.map(city => (
      <WeatherContainer key={city} city={city}>
        {({ main: { temp, pressure, humidity }, lastUpdate }) => (
          <WeatherBlock {...{ city, temp, pressure, humidity, lastUpdate }} />
        )}
      </WeatherContainer>
    ))}
  </DashboardContainer>
);

const DashboardContainer = styled.div`
  display: flex;
`;

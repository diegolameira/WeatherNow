import React from "react";
import styled from "styled-components";

export default ({ city, temp, pressure, humidity, lastUpdate }) => (
  <WeatherBlockStyled>
    <h2 className="weatherblock-title">{city}</h2>
    <h3 className="weatheblock-temp">{temp}</h3>
    <div className="weatherblock-infos">
      <div>
        <span className="weatherblock-info">
          HUMIDITY
          <strong>
            {humidity}
            <span className="weatherblock-info-unity">%</span>
          </strong>
        </span>
      </div>
      <div>
        <span className="weatherblock-info">
          PRESSURE
          <strong>
            {pressure}
            <span className="weatherblock-info-unity">hPa</span>
          </strong>
        </span>
      </div>
      <p>{`Updated at ${lastUpdate}`}</p>
    </div>
  </WeatherBlockStyled>
);

const WeatherBlockStyled = styled.div``;

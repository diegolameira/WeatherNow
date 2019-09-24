import React from "react";
import styled from "styled-components";

export default ({ city, temp, pressure, humidity, lastUpdate }) => (
  <WeatherBlockStyled>
    <h2 className="title">{city}</h2>
    <h3 className="temp">{temp}</h3>
    <div className="infos">
      <div>
        <span className="info">
          HUMIDITY
          <strong>
            {humidity}
            <span className="info-unity">%</span>
          </strong>
        </span>
      </div>
      <div>
        <span className="info">
          PRESSURE
          <strong>
            {pressure}
            <span className="info-unity">hPa</span>
          </strong>
        </span>
      </div>
      <p>{`Updated at ${lastUpdate}`}</p>
    </div>
  </WeatherBlockStyled>
);

const WeatherBlockStyled = styled.div``;

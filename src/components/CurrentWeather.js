import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../css/Weather.css";

export default function CurrentWeather(props) {
  const {
    city,
    country,
    day,
    date,
    description,
    img,
    temp,
    temp_max,
    temp_min,
    humidity,
    wind
  } = props.weather;
  return (
    <Container className="main">
      <div className="header_key">
        <span className="h2">
          {city}, {country}
        </span>
        <p className="text-secondary">
          {day}, {date}
          <br />
          {description}
        </p>
      </div>
      <Row>
        <Col>
          <img className="icon" src={img} alt="" />
          <span className="temp_key">{temp}°</span>
        </Col>
        <Col>
          <p className="text-secondary">
            <span className="text-white h6">Temperature: </span>
            {temp_max}° ~ {temp_min}°
            <br />
            <span className="text-white h6">Humidity: </span>
            {humidity}%
            <br />
            <span className="text-white h6">Wind: </span>
            {wind} mph
          </p>
        </Col>
      </Row>
    </Container>
  );
}

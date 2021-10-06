import React from "react";
import { useSelector } from "react-redux";


const WeatherCard = () => {
    const placeData = useSelector(state => state.placeData);
    const theme = useSelector(state => state.theme);

  return (
    <div className="container">
      <div className="row">
        <div className=" offset-md-4 col-12 col-md-4 weather">
          <div className={theme?"card dark":"card"}>
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="condition">
                  {placeData.current.condition.text}
                </div>
                <div className="temp">{placeData.current.temp_c}°</div>
                <div className="place">{placeData.location.name}</div>
                <div className="container DataCard">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph}{" "}
                        <span className="unit">KM/H</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div>
                      <div className="data">
                        {placeData.current.precip_mm}
                        <span className="unit">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h1>place not found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

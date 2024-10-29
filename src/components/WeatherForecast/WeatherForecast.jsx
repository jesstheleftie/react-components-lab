import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  const { eachWeatherForecast } = props;
  return (
    <div className="weather">
      <h2>{eachWeatherForecast.day}</h2>
      <img src={eachWeatherForecast.img} alt={eachWeatherForecast.imgAlt} />
      <p>
        <span>Conditions: {eachWeatherForecast.conditions} </span>
      </p>
      <p>
        <span>Time: {eachWeatherForecast.time} </span>
      </p>
    </div>
  );
};

export default WeatherForecast;

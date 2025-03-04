import { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e72c4784facfed0ea8ec3ea565893a5d&units=metric`
    );
  }, [city]);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const selectWeather = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("网络请求错误！");
        }
        return response.json();
      })
      .then((json) => {
        if (json.cod === 200) {
          setWeather({
            temp: json.main.temp,
            main: json.weather[0].main,
            description: json.weather[0].description,
          });
        } else {
          setError(json.error || "获取数据失败！");
        }
      });
  };
  return (
    <>
      {error && <h2>{error}</h2>}
      <div>
        <input type="text" value={city} onChange={handleChange} />
        <button onClick={selectWeather}>查询</button>
      </div>
      {city ? <h2>{city}的天气：</h2> : <p>请输入地点</p>}
      {weather && (
        <>
          <p>主要天气：{weather.main}</p>
          <p>温度：{weather.temp} ℃</p>
          <p>描述：{weather.description}</p>
        </>
      )}
    </>
  );
};

export default Weather;

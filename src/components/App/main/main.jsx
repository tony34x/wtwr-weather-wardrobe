// import "./main.css";
import WeatherCard from "../weatherCard/weatherCard";
import "./main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, clothingItems, onCardClick, currentTemperatureUnit }) {
  const temperature =
    currentTemperatureUnit === "C"
      ? Math.round(((weatherData.temp.F - 32) * 5) / 9)
      : weatherData.temp.F;

  return (
    <main>
      <WeatherCard
        weatherData={weatherData}
        currentTemperatureUnit={currentTemperatureUnit}
        temperature={temperature}
      />
      <section className="cards">
        <p className="card__text">
          Today is {temperature}&deg; {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="card__list">
          {clothingItems
            .filter((item) => {
              return (
                item.isUserAdded ||
                item.weather.toLowerCase() === weatherData.type
              );
            })
            .map((item) => (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

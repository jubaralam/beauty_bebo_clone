import React from "react";

const Header = () => {
  const url =
    "https://www.beautybebo.com/pub/media/ads/home-slider/OFFER_HOME.jpeg";
  const icon = {
    heart:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYGJiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENtNuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkwx2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8AAAAASUVORK5CYII=",
    contact:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHElEQVR4nO2YTUtUYRiGr9QElSKF/kF+IEZBgqvEXZugcNHSZSujRPrYFkFtiwEFaeMHBP2DZmyjRQpBhFK0aTmVEESzyIp54oVXkHqdOc+cc+Y8g+eCG4ZhznPuizPn64WcnJycHOMMAreBEvAeqAC7QBl4AdwFzijmnQXu+W3LflbFzy4Ct4CBJAVGgVVAImYNGK8xbwJYV8wrAefiCBwFCkBVsdO9uG3mga5989znhQZmiZ/3GOjQSvT6Qy4x88rP6gNeJzCvBJzQHIkkJPby0gslNa8U9cgUEtxpWnkU5cRu5Jxodqr1LgCaq1PWKR4kMWSgnCgTvM/cMVBMlLkZEikaKCbKPA+JfDRQTJT5EBL5YaCYKOM6/8eugWKizM+QyI6BYqLMl5DIOwPFRJm3IZGnBoqJMishkVkDxUSZGyGREQPFRBn3NBJky0A5iRh3Th/IdQMFJWKu1RLp8Zc0MZ6vwDHqMGOgqNTJNBFwr5FvDJSVGveOyIsQp/0akxh8thpByaSx194qcIUGeWBAQHzuE4N2YNmAxCLQRkzcgCcZSiwkIbFfZi4DiQJwhBS4CvxugsAfv/KfKheAbylKfAcu0iT6gc0UJDaAUzSZDn/4fyUg4P6uD4FOMmQs5lLSJ+A8Ruj2K+SN3B/qPsVmwWXgcwQB95tLGKcXWKoh8Qw4SQsx9c8TdMV/15IMA9s+7nNLc9wn51DxF5poKQVKh3DVAAAAAElFTkSuQmCC",
    search:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg==",
  };
  return (
    <div>
      <div className="posterImage">
        <a href="https://www.beautybebo.com/">
          {" "}
          <img src={url} alt="Header Poster" />
        </a>
      </div>
      <div className="subHeder">
        <img
          src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
          alt=""
        />
        <div className="search">
          <select placeholder="All Categories">
            <option value="MackUp">--Mackup</option>
            <option value="Face">----Face</option>
            <option value="Foundation">------Foundation</option>
            <option value="Blush">------Blush</option>
            <option value="BBCream">------BB Cream</option>
            <option value="Highlighters">------BB Highlighters</option>
          </select>
          <input type="search" placeholder="Enter Your Search" />
          <button>
            <img src={icon.search} alt="icon" />
          </button>
        </div>
        <div className="icons">
          <img src={icon.contact} alt="icon" />
          <a href="/">
            <img src={icon.heart} alt="icon-2" /> 
          </a>
            
            <span>
            My Account  </span> 

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

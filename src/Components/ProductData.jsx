export default function Product() {
  const Icons = {
    heart:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHElEQVR4nO2YTUtUYRiGr9QElSKF/kF+IEZBgqvEXZugcNHSZSujRPrYFkFtiwEFaeMHBP2DZmyjRQpBhFK0aTmVEESzyIp54oVXkHqdOc+cc+Y8g+eCG4ZhznPuizPn64WcnJycHOMMAreBEvAeqAC7QBl4AdwFzijmnQXu+W3LflbFzy4Ct4CBJAVGgVVAImYNGK8xbwJYV8wrAefiCBwFCkBVsdO9uG3mga5989znhQZmiZ/3GOjQSvT6Qy4x88rP6gNeJzCvBJzQHIkkJPby0gslNa8U9cgUEtxpWnkU5cRu5Jxodqr1LgCaq1PWKR4kMWSgnCgTvM/cMVBMlLkZEikaKCbKPA+JfDRQTJT5EBL5YaCYKOM6/8eugWKizM+QyI6BYqLMl5DIOwPFRJm3IZGnBoqJMishkVkDxUSZGyGREQPFRBn3NBJky0A5iRh3Th/IdQMFJWKu1RLp8Zc0MZ6vwDHqMGOgqNTJNBFwr5FvDJSVGveOyIsQp/0akxh8thpByaSx194qcIUGeWBAQHzuE4N2YNmAxCLQRkzcgCcZSiwkIbFfZi4DiQJwhBS4CvxugsAfv/KfKheAbylKfAcu0iT6gc0UJDaAUzSZDn/4fyUg4P6uD4FOMmQs5lLSJ+A8Ruj2K+SN3B/qPsVmwWXgcwQB95tLGKcXWKoh8Qw4SQsx9c8TdMV/15IMA9s+7nNLc9wn51DxF5poKQVKh3DVAAAAAElFTkSuQmCC",
    basket:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2aS24TQRCGWzKCRSQgG2AN4QJJlpg1EbsEzDF4JIeA7HBuEOcChCXhEIjXPrADDgBZfGgkE+Hy9Ex33N2uGdUneeXqqup/eqZ+j+ycYRiGYRhGJMAYPYxdSYDLwA/08BO4UlKAHfSxXVKAY/TxptTmbwB/RPGNIsVn+9gQPZwBt0oU3hWFP2Uv6u/lg+jlxTKK7mYv6u9lT/TysZ/HzgNws+Z2XHcFZ/9xtmLhPb0VPb0uOft3shSL6+tREU/A/Oz/VdR8xF2Y7RKzf+yUABxk9QQomf0+gM2sD2cUzf6leAJgBVj977PilNGFHrsBPccEaIOeYwK0Qaxiyln4BLiOYwII0ivWdwGmTCLji9HQ11FM/DmeOtVP30sR8cXw9DSYvhcIip+hodYwMr4Inp7ux8TP0FDrVWR8ETw97cfE1wKMxNovnrgLFci5Dvgqwh6H5j8HuAr8FonuahcAuCNCqhc510PzzwCciGTPOiDAcxHyLjT3HNWGRbKTDgjwXoQ8Dc09B3C77ThpEgC4VnPbroXmrqV6+ImEI8UCPBFffw7N66Uaf02usG0jwEPgO/AN2Gpb54sPqVf1FjK6owCGImnlsAYRAlQb+cdpgAC18QHr6tzfMIUAg6bEigRovFCLijDxHa0AAbammzoFHgRspDY+YF3jrbqoACOfK2wToCFn0nVJ3N9FXKEGAZK6v1hXqESAdO4v1hUqESCd+4t1hcsWIIv7i3GFCgRI7/581Iwajbx0uWDebGjkXk4BBsr+JB388jalCBP0cph184ZhGIZhuD7xFx4mZmF2vE1DAAAAAElFTkSuQmCC",
  };
  const Data = [
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/1/6/16_17_3.jpg",
      title: "lakme absolute perfect radiance skin brightening light cream",
      mrp: 390,
      actualPrice: 290,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/p/p/ppd200g_540x.jpg",
      title: "Ponds Pure White Anti-Pollution + Purity Face Wash ( 220gm )",
      mrp: 450,
      actualPrice: 405,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/m/a/mama14.jpg",
      title:
        "Mamaearth Ubtan Face Wash With Turmeric & Saffron For Tan Removal (Pack Of 2 (100ml Each)",
      mrp: 518,
      actualPrice: 460,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/2/0/2001_52959787970_o-min.jpg",
      title: "Captivating Black Sequins Georgette Party Wear Saree With Blouse",
      mrp: 3900,
      actualPrice: 2099,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/7/3/73003_a-min_5.jpg",
      title: "Attractive Turquoise Sequins Net Reception Wear Lehenga Choli",
      mrp: 23800,
      actualPrice: 13599,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/p/c/pc-50253-bluelehengacholi_4_-min_5.jpg",
      title:
        "Gorgeous Navy Blue Embroidered Georgette Wedding Wear Lehenga Choli",
      mrp: 13999,
      actualPrice: 7800,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/9/5/9541_52770224853_o-min.jpg",
      title: "Gorgeous Teal Blue Sequined Georgette Ready Made Anarkali Suit",
      mrp: 8299,
      actualPrice: 4150,
    },
    {
      url: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/a/a/aayaa8003_52817184620_o_52824180078_o-min.jpg",
      title:
        "Precious Pink Digital Printed Cotton Silk Ready-To-Wear Long Kurti",
      mrp: 4200,
      actualPrice: 1750,
    },
  ];
  console.log(Data[1].url);
  return (
    <>
      {Data.map((e, i) => {
        
          <div className="card">
            <img src={e.url} alt={e.title} />
            <h2>{e.title}</h2>
            <div className="ratingStar"> star</div>
            <div className="price">
              <del className="mrp">₹{e.mrp}</del>
              <span className="actualPrice">₹{e.actualPrice}.00</span>
              <span className="discount">47% Off</span>
            </div>
            <div className="btn">
              <div className="button">
                <img src={Icons.basket} alt="" />
                <button>Add To Cart</button>
              </div>
              <img src={Icons.heart} alt="" />
            </div>
          </div>;
      
      })}
    </>
  );
}
// export {Product}

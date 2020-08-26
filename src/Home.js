import React from 'react';
import Product from "./Product";
import "./Home.css";
function Home() {
    return (
        <div className="home">
          <img  className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          />
          <h3 className="Intro">Welcome to Amazon Clone by Guhan.G</h3>
          {/* product ID,title.price,rating,image  */}
          <div className="home_row">
              <Product
                id="121212424"
                title="Apple iPhone 11 Pro Max (64GB) - Midnight Green "
                price={100000}
                rating={5}
                image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG33.png"
              />
              <Product
                id="456456"
                title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
                price={ 199900}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
              />
          </div>
          <div className="home_row">
              <Product
                id="7494168465"
                title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel - LS22R350FHWXXL"
                price={13299}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._SL1500_.jpg"
              />
              
              <Product
                id="741852369"
                title="Bosch 90cm 800 m3/hr Chimney (DWK098G60I, 1 Cassette Filter, Touch Control, Black)"
                price={31499}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81mZa-jtywL._SL1500_.jpg"
              />
          </div>
          <div className="home_row">
                <Product
                    id="456789671"
                    title="Apple MacBook Pro (13-inch, 8GB RAM, 512GB Storage, 2.4GHz Intel Core i5) - Space Grey"
                    price={169990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81DuDX2ZA8L._SL1500_.jpg"
                />
                <Product
                id="789852430"
                title="Wings of Fire: An Autobiography of Abdul"
                price={349}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71KKZlVjbwL.jpg"
                />
          </div>
          <div className="home_row">
                <Product
                    id="456789671"
                    title="Apple MacBook Pro (13-inch, 8GB RAM, 512GB Storage, 2.4GHz Intel Core i5) - Space Grey"
                    price={169990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81DuDX2ZA8L._SL1500_.jpg"
                />
               
          </div>
          {/* product  */}
        </div>
    )
}

export default Home;

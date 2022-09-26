import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./components/navbar/navbar";
import Tv from "./components/tv/tv";


function App() {
  return (
    <>
    <Navbar/>
    
    <div class='container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2020/01/15112212/700MCUO.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.comicbook.com/2020/06/divergent-movie-shailene-woodley-1224145.jpeg?auto=webp"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=1%2C318%2C999%2C499&width=960"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Tv/>
    </div>
    </>
  );
}

export default App;

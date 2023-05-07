import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function Producto() {
  return (
    <div className='format-carousel'>
        <Carousel variant="dark" className="d-flex align-items-center mt-5">
      <Carousel.Item>
        <img
          className="d-block"
          src="src\assets\img\amirali-mirhashemian-cZFU60dKB6U-unsplash.jpg"
          alt="CheeseCake Frutilla"
        />
        <Carousel.Caption className='format-text-carousel'>
          <h5>CheeseCake Frutilla</h5>
          <p>Tarta de queso y frutillas con base de galletas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="src\assets\img\amirali-mirhashemian-EfkMkUXs0fU-unsplash.jpg"
          alt="RedVelvet"
        />
        <Carousel.Caption>
          <h5>Red Velvet</h5>
          <p>Tarta de betarraga con queso crema.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="src\assets\img\kofi-okyere-xx1USWIvIFc-unsplash.jpg"
          alt="berries"
        />
        <Carousel.Caption>
          <h5>Tarta de Frambuesa</h5>
          <p>
            Tarta de frambuesa con base de galletas y queso crema.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Producto;
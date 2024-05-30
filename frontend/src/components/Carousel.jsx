import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

const CarouselUI = () => {
  return (
    <div className="cc-main">
      <MDBCarousel showControls fade interval={4000}>
        <MDBCarouselItem itemId={1}>
          <img src="/slider2.jpg" className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h1>IIITU Alumni Connect</h1>
            <p>"Bringing Alumni Together. Join Our Portal Today!"</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src="/slider3.jpg" className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src="/slider.jpg" className='d-block w-100' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}

export default CarouselUI;
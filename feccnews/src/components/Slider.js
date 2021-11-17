import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import slideOne from '../images/1.jpg';
// import slideTwo from '../images/2.jpg';
// import slideThree from '../images/3.jpg';
// import slideFour from '../images/4.jpg';
// import slideFive from '../images/5.jpg';

// const carouselImages = [slideOne, slideTwo, slideThree, slideFour, slideFive];

function Slider({ oneNewsImages }) {
  return (
    <StyledSlider>
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        interval={5000}
        transitionTime={200}
      >
        {oneNewsImages?.map((carouselImage, i) => (
          <div className="caro" key={i}>
            <img
              loading="lazy"
              src={carouselImage.image}
              alt="carousel"
              style={{ width: '100%', height: '40rem', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  margin: 2.5rem 0;
  width: 100%;
  padding: 0 4rem;

  .carousel * {
    border-radius: 1rem;
  }
`;
export default Slider;

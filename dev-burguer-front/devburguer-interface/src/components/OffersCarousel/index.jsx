import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Container, Title } from './styles.js';
import 'react-multi-carousel/lib/styles.css';
import { CardProduct } from '../CardProduct/index.jsx';

export function OffersCarousel() {

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await api.get('/products');

      const offers = data.filter(product => product.offer);

      setOffers(offers);
   
    }

    fetchProducts();
  }, []);

  const responsive = {
    desktop: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },

      breakpoint: { max: 3000, min: 1280 },
      items: 4,

    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,

    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    }
  };

  return (
    <Container>
      <Title>Ofertas do dia</Title>
      <Carousel responsive={responsive} infinite={true} partialVisbile={false} itemClass='carousel-item' >
        {offers.map(offer => (
          <CardProduct key={offer.id} offer={offer}>

          </CardProduct>
        ))}
      </Carousel>
    </Container>
  )
}   
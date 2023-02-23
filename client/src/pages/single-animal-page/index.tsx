/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { styled } from '@mui/material';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Img from 'components/ui/img';
import { EffectCards } from 'swiper';
import useAnimal from 'hooks/use-animal';
import AnimalPageCard from './animal-page-card';
import * as Styled from './styled';

const StyledSwiper = styled(Swiper)({
  width: '75%',
  height: '75%',
});

const SingleAnimalPage = () => {
  const { id } = useParams();
  const [animal] = useAnimal(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (animal === undefined) return null;

  return (
    <Styled.OutsideBox>
      <Styled.AnimalSwiperBox>
        <AnimalPageCard {...animal} />
        <StyledSwiper
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="mySwiper"
        >
          {animal.images.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} sx={{ width: 1, height: 1 }} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Styled.AnimalSwiperBox>
    </Styled.OutsideBox>
  );
};
export default SingleAnimalPage;

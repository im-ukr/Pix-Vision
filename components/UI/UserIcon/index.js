import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const waveEffect = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(235,20,97,0.2);
  }
  100% {
    box-shadow: 0 0 0 5px rgba(235,20,97,0);
  }
`;

const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0 0 1px ${(props) => props.stroke || '#0009'};

  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid transparent;
  }
`;

const IconLink = styled.section`
  color: #000d;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 30px;
  }

  .svg {
    height: 25px;
    width: 25px;
  }
`;

const CardIcon = styled.button`
  color: #000d;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  .svg {
    height: 22px;
    width: 22px;
    border-radius: 10px;
  }

  .like {
    animation: ${waveEffect} 0.3s ease-out;
  }
`;

export const UserIcon = ({ img, stroke = '#0009' }) => (
  <IconWrapper stroke={stroke}>
    <LazyLoadImage src={img} className="img" alt="user icon" />
  </IconWrapper>
);

export { IconLink, CardIcon };

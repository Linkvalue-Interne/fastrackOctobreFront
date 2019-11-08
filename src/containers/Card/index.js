import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import CardPartner from '../../commons/cardPartner';
import PictureBox from '../../commons/picture';
import Img from '../../commons/logoTechno';
import { H3, P, SpanBold } from '../../commons/text';

const CustomH3 = styled(H3)`
  padding: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  padding: 1.5rem 3rem;;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  width: calc(100% / 3);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = ({ partner }) => (
  <CardPartner>
    <PictureBox image={partner.image} />
    <CustomH3>{partner.firstname} <SpanBold>{partner.lastname}</SpanBold></CustomH3>
    <P>{partner.jobs}</P>
    <LogoContainer>
      <Logo>
        <Img src={partner.firstTechno} alt="" />
        <SpanBold><P>{partner.firstTechnoName}</P></SpanBold>
      </Logo>
      <Logo>
        <Img src={partner.secondTechno} alt="" />
        <SpanBold><P>{partner.secondTechnoName}</P></SpanBold>
      </Logo>
      <Logo>
        <Img src={partner.thirdTechno} alt="" />
        <SpanBold><P>{partner.thirdTechnoName}</P></SpanBold>
      </Logo>
    </LogoContainer>
  </CardPartner>
);

Card.propTypes = {

  partner: PropTypes.shape({
    image: PropTypes.string,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    jobs: PropTypes.string.isRequired,
    firstTechno: PropTypes.string.isRequired,
    secondTechno: PropTypes.string,
    thirdTechno: PropTypes.string,
    firstTechnoName: PropTypes.string.isRequired,
    secondTechnoName: PropTypes.string,
    thirdTechnoName: PropTypes.string,
  }).isRequired,
};

export default Card;

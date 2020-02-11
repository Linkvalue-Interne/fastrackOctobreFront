import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Header = styled.div`
  width: calc(100% - 80px);
  margin-left: 80px;
  display: flex;
  height: 5vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 300;
`;

const TextHeader = ({ title, subtitle }) => (
  <Header>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Header>
);

TextHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default TextHeader;

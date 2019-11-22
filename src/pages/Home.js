import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

import Nav from '../components/Nav';
import TextHeader from '../components/TextHeader';
import FixedButton from '../components/FixedButton';
import Card from '../components/Card';
import Container from '../components/commons/container';

const Link2 = styled(Link)`
  display: flex;
  margin: 0 5rem;
  width: 37%;
  height: 34vh;
  flex-wrap: wrap;
  margin-bottom: 8rem;
`;

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://fasttrack-octobre-back.herokuapp.com/api/partner/list')
      .then((res) => {
        const { data } = res;
        setList(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <TextHeader title="Partners" subtitle="Liste des partners enregistrés" />
      <FixedButton />
      <Container>
        {list.map((partner, index) => (
          <Link2 to={`/${partner.id}`}>
            <Card partner={{
              id: partner.id,
              wait: (index * 250),
              firstname: partner.firstName,
              lastname: partner.lastName,
              image: `./styles/${partner.avatar}`,
              jobs: partner.job,
              firstTechnoName: 'Docker',
              secondTechnoName: 'Jenkins',
              thirdTechnoName: 'CircleCI',
              firstTechno: './styles/img/docker.png',
              secondTechno: './styles/img/jenkins.png',
              thirdTechno: './styles/img/circleci.png',
            }}
            />
          </Link2>
        ))}
      </Container>
    </>
  );
};

export default Home;

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { P, H3 } from '../../commons/text';
import Img from '../../commons/logoTechno';
import Input from '../../commons/input';
import Step1 from './steps/step1';
import Step2 from './steps/step2';

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 ,0 ,0 , 0.5);
`;

const FormBox = styled.div`
  width: 60%;
  height: 75vh;
  background: #2F3640;
  display: flex;
  position: relative;
  padding: 4rem;
  justify-content: center;
`;

const Banner = styled.div`
  width: 50%;
  position: absolute;
  height: 50px;
  left: 25%;
  top: 0;
  background: #28ABE2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteP = styled(P)`
  color: #FFF;
`;

const DelIcon = styled(Img)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: calc(100% - 35px);
  top: 15px;
`;

const InputBox = styled.div`
  display: flex;
  width: calc(100% / 3);
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;
  padding: 1rem 0;
`;

const Box = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteH3 = styled(H3)`
  color: #FFF;
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;

/* 

const Form = () => (
  <FormContainer>
    <FormBox>
      <DelIcon src="src/styles/img/icons/croix.png" />
      <Banner><WhiteP>Créer un nouveau Partner</WhiteP></Banner>
      <Box>
        <InputBox>
          <WhiteH3>Prénom</WhiteH3>
          <Input placeholder="Prénom" />
        </InputBox>
      </Box>
    </FormBox>
  </FormContainer>
);

*/

class Form extends Component {

    state = {
      step: 1,
      firstname: '',
      lastname: '',
      mail: '',
      tel: '',
      job: '',
      xp: '',
      customer: '',
      project: '',
      firstObjectif: '',
      secondObjectif: '',
      thirdObjectif: '',
    };

  next = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  prev = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstname, lastname, mail, tel, job, xp, customer, project, firstObjectif, secondObjectif, thirdObjectif } = this.state;
    const values = { firstname, lastname, mail, tel, job, xp, customer, project, firstObjectif, secondObjectif, thirdObjectif };
    switch (step) {
      default:
      case 1:
        return <Step1 handleChange={this.handleChange} values={values} next={this.next} />;
      case 2:
        return <Step2 handleChange={this.handleChange} values={values} next={this.next} prev={this.prev} />;
    }
  }
}

export default Form;

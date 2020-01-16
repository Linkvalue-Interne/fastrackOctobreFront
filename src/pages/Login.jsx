import React, { useState } from 'react';
import { faUserNinja, faKey } from '@fortawesome/free-solid-svg-icons';

import {
  MainLoginContainer,
  LoginContainer,
  LogoContainer,
  LogoLV,
  PrezContrainer,
  AppPrez,
  AppTitle,
  LoginForm,
  FieldContainer,
  Input,
  DescInput,
  Icon,
} from '../components/commons/LoginStyles/LoginStyles';

const Login = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const data = {
    login: mail,
    password: pass,
  };

  return (

    <>
      <MainLoginContainer>
        <LogoContainer>
          <PrezContrainer>
            <AppTitle> SkillUp Factory</AppTitle>
            <AppPrez>
              L’app des ressources humaines développée avec amour par les Partners du FastTrack.
            </AppPrez>
          </PrezContrainer>
          <LogoLV src="./styles/img/LogoLinkValue.svg" alt="" />

        </LogoContainer>
        <LoginContainer>
          <LoginForm>
            <FieldContainer>
              <Icon icon={faUserNinja} />
              <DescInput>
                Courriel
              </DescInput>
              <Input type="email" name="email" defaultValue={mail} onChange={(e) => setMail(e.target.value)} />
            </FieldContainer>

            <FieldContainer>
              <Icon icon={faKey} />
              <faKey />
              <DescInput>
                Password
              </DescInput>
              <Input type="password" defaultValue={(e) => setPass(e.target.value)} name="password" />
            </FieldContainer>
          </LoginForm>
        </LoginContainer>
      </MainLoginContainer>
    </>


  );
};

export default Login;

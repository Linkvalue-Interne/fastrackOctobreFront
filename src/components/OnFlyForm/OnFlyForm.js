import React from 'react';
import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';

import VerticalFlex from '../commons/verticalFlex';
import { P } from '../commons/text';
import Form from '../commons/form';

const OnFlyForm = (props) => {
  return (
    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block">{props.title}</P>
      <Form margin=".8rem 0 .8rem .3rem">
        <div>
          <P contentEditable="true">Cliquez pour modifier</P>
        </div>
      </Form>
    </VerticalFlex>
  );
};

export default OnFlyForm;

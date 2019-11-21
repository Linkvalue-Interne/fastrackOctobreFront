import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import EditButton from '../commons/fixedButton';

const FixedButton = () => (
  <Link to="">
    <EditButton>
      <FontAwesomeIcon icon={faPlus} style={{ color: '#28ABE2' }} size="1x" />
    </EditButton>
  </Link>
);

// == Export
export default FixedButton;

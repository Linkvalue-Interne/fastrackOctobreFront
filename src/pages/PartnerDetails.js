import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPartner } from '../services/client';

import Nav from 'src/components/Nav';
import TextHeader from 'src/components/TextHeader';
import FixedButton from 'src/components/FixedButton';


const PartnerDetails = () => {
  const [partner, setPartner] = useState();
  const { partnerId } = useParams();

  useEffect(() => {
    setPartner(getPartner);
  }, []);

  return (
    <>
      {partner
        && (
          <>
            <Nav />
            <FixedButton />
            <TextHeader title={`${partner.firstName} ${partner.lastName}`} />
          </>
        )}
    </>
  );
};

export default PartnerDetails;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SubSkills from '../SubSkills';
import Button from '../commons/GlobalsStyles/button';
import { setTechno } from '../../store/actions';

const SubContainer = ({ category }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const toggleIsActive = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    dispatch(setTechno(e.target.innerText));
  };

  const dispatchTechno = (e) => {
    e.preventDefault();
    dispatch(setTechno(e.target.innerText));
  };

  return (
    <>
      <Button onClick={(e) => toggleIsActive(e)}>{category.name}</Button>
      {isActive && <SubSkills subCategories={category.subCategories} click={dispatchTechno} />}
    </>
  );
};

SubContainer.propTypes = {
  category: PropTypes.object.isRequired,
};
export default SubContainer;

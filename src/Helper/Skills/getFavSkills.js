const getFavSkills = (partnerList) => {
  // console.log('skills =>', skills);
  // console.log('partnerList =>', partnerList);
  const formatedFavSkills = {
    fav: {},
  };
  partnerList.map((partner) => {
    formatedFavSkills.fav = { ...formatedFavSkills.fav, partner.favorites};
  });
  return formatedFavSkills;
};

export default getFavSkills;

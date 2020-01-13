const getFavSkills = (skills, partnerList) => {
  console.log('skills =>', skills);
  console.log('partnerList =>', partnerList);
  const formatedFavSkills = {
    fav: {
      fav1: {},
      fav2: {},
      fav3: {},
      test: {},
    },
  };
  partnerList.map((partner) => {
    console.log('partner (map) =>', partner.favorites);
    // formatedFavSkills.fav1 = partner.favorites[0];
    // formatedFavSkills.fav2 = partner.favorites[1];
    // formatedFavSkills.fav3 = partner.favorites[2];
    skills.subCategory.map((subCategorie) => {
      const matchId = skills.find((skill) => skill.id === partner.favorites[0]);

      console.log('MatchID', matchId);
    });
  });
};

export default getFavSkills;

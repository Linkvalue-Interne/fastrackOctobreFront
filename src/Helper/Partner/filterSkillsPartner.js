export const filterSkillsPartnerActive = (skill, partnerSkills) => partnerSkills && partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);

export const filterSkillsPartnerUnactive = (skill, partnerSkills) => partnerSkills && !partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);

export const filterFavPartner = (skill, PartnerFav) => {
  {console.log("skill", skill)}
  {console.log("PartnerFav", PartnerFav)}
// partnerSkills && partnerSkills.some((partnerSkill) => 
// skill.id === partnerSkill.id)

};
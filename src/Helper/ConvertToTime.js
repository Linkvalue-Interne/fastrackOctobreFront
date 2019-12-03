const ConvertToTime = (initialTime) => {
  const years = Math.floor(initialTime / 12);
  const months = initialTime % 12;
  return {
    years,
    months,
  };
};

export default ConvertToTime;

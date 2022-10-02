const currentDate = (): string => {
  const date = new Date();
  return date.toLocaleDateString();
};

export default currentDate;

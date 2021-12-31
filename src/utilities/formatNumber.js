export default number => {
  const formatNumbering = Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};

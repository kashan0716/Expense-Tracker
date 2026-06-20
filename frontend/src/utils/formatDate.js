const formatDate = (date) => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return "-";

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;

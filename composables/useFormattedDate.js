export const useFormattedDate = (storyblokDate) => {
  const date = new Date(storyblokDate);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("es-ES", options);
};

export const handleError = (error) => {
  console.log(
    `Error with status ${error?.response?.status} : ${error?.response?.data}`
  );
};

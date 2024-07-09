export const BASE_URL = "https://nike-gallery-api.onrender.com/";

export function extractFirstErrorMessage(errors) {
  const combinedErrors = Object.values(errors).flatMap(
    (errorArray) => errorArray
  );
  console.log("combinedErrors", combinedErrors);
  if (combinedErrors.length > 0) {
    return combinedErrors[0]; // Return the first error message from the combined array
  }
  return null; // Return null if no errors found
}

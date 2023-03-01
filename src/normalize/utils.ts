// TODO: Add Types and tests for this file.
export const checkAndFilterFields = (obj: any, errorMessage: string) => {
  let filteredObj: any = {};
  for (let field in obj) {
    if (obj[field] == null || obj[field] === "") {
      console.error(`${errorMessage}. Field ${field} is missing a value or has an empty string.`);
    } else {
      if (typeof obj[field] === "object" && !obj[field].hasOwnProperty("fields")) {
        if (Array.isArray(obj[field]) && obj[field].length > 0) {
          const filteredArray = checkIfFieldsExistInArray(obj[field], errorMessage);
          if (filteredArray) {
            filteredObj[field] = filteredArray;
          } else {
            console.error(`${errorMessage}. Field ${field} is missing the field value.`);
          }
        } else {
          console.error(`${errorMessage}. Field ${field} is missing the field value.`);
        }
      } else {
        filteredObj[field] = obj[field];
      }
    }
  }

  return filteredObj;
};

const checkIfFieldsExistInArray = (array: any[], errorMessage: string) => {
  const filter = array
    .filter((item: any) => item.hasOwnProperty("fields"))
    .map((item: any) => checkAndFilterFields(item.fields, errorMessage));
  return filter.length > 0 ? filter : null;
};

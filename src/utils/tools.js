import { v4 as uuidv4 } from "uuid";

export const generateRandomId = () => {
  const prefix = "todo";
  return `${prefix}-${uuidv4()}`;
};

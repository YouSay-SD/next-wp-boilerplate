export const trimString = (string, number, placeholder = '...') => {
  return string.length > number ? string.substr(0, number) + placeholder : string;
}
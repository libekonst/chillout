/** Changes the document.title property or resets it if no text is provided, and returns the new title. */
const setDocTitle = (text?: string): string => {
  if (text) return (document.title = `${text} - The Chillout App`);
  return (document.title = 'The Chillout App');
};
export default setDocTitle;

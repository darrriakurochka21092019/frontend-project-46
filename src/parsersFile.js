
const parsers = {
  json: JSON.parse
  // yml: yaml.safeLoad,
};

const getParseContent = (fileData, extension) => {
  return parsers[extension](fileData)
}

export default getParseContent;

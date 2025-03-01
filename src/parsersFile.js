import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const getParseContent = (fileData, extension) => {
  const parser = parsers[extension];
  
  if (!parser) {
    throw new Error(`Unsupported file extension: ${extension}`);
  }
  
  return parser(fileData);
};

export default getParseContent;

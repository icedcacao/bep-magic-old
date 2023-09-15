const removeAccents = require("remove-accents");

const format_url_name = (name) => {
  name = removeAccents(name);
  name = name.toLowerCase();
  return name.replace(/ /g, "-");
};

module.exports = format_url_name;

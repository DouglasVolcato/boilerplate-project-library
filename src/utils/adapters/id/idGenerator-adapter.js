const { v4 } = require("uuid");

module.exports = class IdGeneratorAdapter {
  generateId() {
    return v4();
  }
};

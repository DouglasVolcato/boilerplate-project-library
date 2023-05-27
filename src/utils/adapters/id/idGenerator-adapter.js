const { v4 } = require("uuid");

export class IdGeneratorAdapter {
  generateId() {
    return v4();
  }
}

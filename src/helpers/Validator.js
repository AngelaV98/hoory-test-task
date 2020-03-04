class Validator {
  errors = {};
  isString(str) {
    return /^[A-Za-z-]+$/.test(str);
  }
  isEmail(email) {
    return /^[A-Za-z]([A-Za-z_0-9-]*)@([A-Za-z])+\.([A-Za-z])+$/.test(email);
  }
  isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      (typeof value === "object" && Object.values(value).length === 0) ||
      (typeof value === "string" && value.length === 0)
    );
  }
}

export default Validator;

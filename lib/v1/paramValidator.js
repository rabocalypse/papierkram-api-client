class ParamValidator {
  orderDirection(orderDirection) {
    if (
      orderDirection &&
      orderDirection !== "asc" &&
      orderDirection !== "desc"
    ) {
      throw new Error("orderDirection must be 'asc' or 'desc'");
    }
  }
}

module.exports = ParamValidator;

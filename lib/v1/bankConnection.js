const ParamValidator = require("./paramValidator");

class BankConnection {
  constructor(client) {
    this.client = client;
    this.paramValidator = new ParamValidator();
  }
  async by({ id }) {
    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/banking/bank_connections/${id}`,
      {
        headers: {
          method: "GET",
          Accept: "application/json",
          Authorization: `Bearer ${this.client.token}`,
        },
      }
    );
    const jsonData = await response.json();
    return jsonData;
  }

  async all(page, pageSize, config = {}) {
    const params = {
      page: page || 1,
      page_size: pageSize || 100,
    };
    if (config.orderBy) {
      params.order_by = orderBy;
    }
    if (config.orderDirection) {
      this.paramValidator.orderDirection(orderDirection);
      params.order_direction = orderDirection;
    }

    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/banking/bank_connections`,
      {
        headers: {
          method: "GET",
          Accept: "application/json",
          Authorization: `Bearer ${this.client.token}`,
        },
        params: params,
      }
    );
    const jsonData = await response.json();
    return jsonData;
  }
}

module.exports = BankConnection;

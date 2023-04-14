const ParamValidator = require("./paramValidator");

class ExpenseVoucher {
  constructor(client) {
    this.client = client;
    this.paramValidator = new ParamValidator();
  }
  async by({ id }) {
    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/expense/vouchers/${id}`,
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
    if (config.creditorId) {
      params.creditor_id = config.creditorId;
    }
    if (config.projectId) {
      params.project_id = config.projectId;
    }
    if (config.documentDateRangeStart) {
      params.document_date_range_start = config.documentDateRangeStart;
    }
    if (config.documentDateRangeEnd) {
      params.document_date_range_end = config.documentDateRangeEnd;
    }

    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/expense/vouchers`,
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

module.exports = ExpenseVoucher;

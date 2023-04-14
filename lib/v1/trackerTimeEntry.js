class TrackerTimeEntry {
  constructor(client) {
    this.client = client;
  }
  async by({ id }) {
    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/tracker/time_entries/${id}`,
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
      params.order_direction = orderDirection;
    }
    if (config.projectId) {
      params.project_id = config.projectId;
    }
    if (config.taskId) {
      params.task_id = config.taskId;
    }
    if (config.invoiceId) {
      params.invoice_id = config.invoiceId;
    }
    if (config.userId) {
      params.user_id = config.userId;
    }

    if (config.billingState) {
      const billingStates = [
        "billed",
        "unbilled",
        "billable",
        "unbillable",
        "archived",
      ];
      if (!billingStates.includes(config.billingState)) {
        throw new Error(
          "billingState needs to be one of: `${billingStates}.join(",
          ")``"
        );
      }
      params.billing_state = config.billingState;
    }
    if (config.startTimeRangeStart) {
      params.start_time_range_start = config.startTimeRangeStart;
    }
    if (config.startTimeRangeEnd) {
      params.start_time_range_end = config.startTimeRangeEnd;
    }

    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/tracker/time_entries`,
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

module.exports = TrackerTimeEntry;

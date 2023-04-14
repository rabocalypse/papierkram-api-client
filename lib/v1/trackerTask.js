class TrackerTask {
  constructor(client) {
    this.client = client;
  }
  async by({ id }) {
    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/tracker/tasks/${id}`,
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
    if (config.propositionId) {
      params.proposition_id = config.propositionId;
    }
    const response = await fetch(
      `https://${this.client.subdomain}.papierkram.de/api/v1/tracker/tasks`,
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

module.exports = TrackerTask;

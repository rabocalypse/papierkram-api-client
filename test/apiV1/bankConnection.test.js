const PapierkramApiClientV1 = require("../../index");

client = new PapierkramApiClientV1(
  process.env.PAPIERKRAM_SUBDOMAIN,
  process.env.PAPIERKRAM_API_KEY
);

test("ApiV1BankConnection all", async () => {
  const res = await client.v1.bankConnection.all();
  expect(res).toBeDefined();
  expect(res).toHaveProperty("entries");
  expect(res).toHaveProperty("has_more");
  expect(res).toHaveProperty("page");
  expect(res).toHaveProperty("page_size");
  expect(res).toHaveProperty("total_entries");
  expect(res).toHaveProperty("total_pages");
  expect(res).toHaveProperty("type");
  expect(res.entries).toHaveLength(1);
  expect(res.entries[0]).toHaveProperty("id");
  expect(res.entries[0]).toHaveProperty("name");
  expect(res.entries[0]).toHaveProperty("type");
  expect(res.entries[0].id).toBe(4);
  expect(res.entries[0].name).toBe("Standard");
  expect(res.entries[0].type).toBe("bank_connection");
  expect(res.has_more).toBe(false);
  expect(res.page).toBe(1);
  expect(res.page_size).toBe(100);
  expect(res.total_entries).toBe(1);
  expect(res.total_pages).toBe(1);
  expect(res.type).toBe("list");
});
test("BankConnection by id", async () => {
  const res = await client.v1.bankConnection.by({ id: 4 });
  expect(res).toBeDefined();
  expect(res).toHaveProperty("account_no");
  expect(res).toHaveProperty("account_type");
  expect(res).toHaveProperty("bic");
  expect(res).toHaveProperty("blz");
  expect(res).toHaveProperty("connection_type");
  expect(res).toHaveProperty("created_at");
  expect(res).toHaveProperty("customer_id");
  expect(res).toHaveProperty("hbci");
  expect(res).toHaveProperty("hbci_host_url");
  expect(res).toHaveProperty("hbci_version");
  expect(res).toHaveProperty("iban");
  expect(res).toHaveProperty("id");
  expect(res).toHaveProperty("primary");
  expect(res).toHaveProperty("title");
  expect(res).toHaveProperty("type");
  expect(res).toHaveProperty("updated_at");
  expect(res).toHaveProperty("user_id");
  // expect(res.account_no).toBe("123456789");
  expect(res.account_type).toBe("default");
  // expect(res.bic).toBe("ABCDEFGH");
  // expect(res.blz).toBe("12345678");
  expect(res.connection_type).toBe("default");
});

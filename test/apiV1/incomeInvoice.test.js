const PapierkramApiClientV1 = require("../../index");

client = new PapierkramApiClientV1(
  process.env.PAPIERKRAM_SUBDOMAIN,
  process.env.PAPIERKRAM_API_KEY
);

test("ApiV1IncomeInvoice all", async () => {
  const res = await client.v1.incomeInvoice.all();
  expect(res).toBeDefined();
  expect(res).toHaveProperty("entries");
  expect(res).toHaveProperty("has_more");
  expect(res).toHaveProperty("page");
  expect(res).toHaveProperty("page_size");
  expect(res).toHaveProperty("total_entries");
  expect(res).toHaveProperty("total_pages");
  expect(res).toHaveProperty("type");
  expect(res.entries).toHaveLength(12);
  expect(res.entries[0]).toHaveProperty("billing");
  expect(res.entries[0].billing).toHaveProperty("city");
  expect(res.entries[0].billing).toHaveProperty("company");
  expect(res.entries[0].billing).toHaveProperty("contact_person");
  expect(res.entries[0].billing).toHaveProperty("country");
  expect(res.entries[0].billing).toHaveProperty("department");
  expect(res.entries[0].billing).toHaveProperty("email");
  expect(res.entries[0].billing).toHaveProperty("street");
  expect(res.entries[0].billing).toHaveProperty("ust_idnr");
  expect(res.entries[0].billing).toHaveProperty("zip");
  expect(res.entries[0]).toHaveProperty("custom_template");
  expect(res.entries[0]).toHaveProperty("customer_no");
  expect(res.entries[0]).toHaveProperty("description");
  expect(res.entries[0]).toHaveProperty("document_date");
  expect(res.entries[0]).toHaveProperty("invoice_no");
  expect(res.entries[0]).toHaveProperty("id");
  expect(res.entries[0]).toHaveProperty("name");
  expect(res.entries[0]).toHaveProperty("record_state");
  expect(res.entries[0]).toHaveProperty("sent_on");
  expect(res.entries[0]).toHaveProperty("sent_to");
  expect(res.entries[0]).toHaveProperty("sent_via");
  expect(res.entries[0]).toHaveProperty("state");
  expect(res.entries[0]).toHaveProperty("total_gross");
  expect(res.entries[0]).toHaveProperty("total_net");
  expect(res.entries[0]).toHaveProperty("total_vat");
  expect(res.entries[0]).toHaveProperty("type");
});
test("IncomeInvoice by id", async () => {
  const res = await client.v1.incomeInvoice.by({ id: 10 });
  expect(res).toBeDefined();
  expect(res).toHaveProperty("billing");
  expect(res.billing).toHaveProperty("city");
  expect(res.billing).toHaveProperty("company");
  expect(res.billing).toHaveProperty("contact_person");
  expect(res.billing).toHaveProperty("country");
  expect(res.billing).toHaveProperty("department");
  expect(res.billing).toHaveProperty("email");
  expect(res.billing).toHaveProperty("street");
  expect(res.billing).toHaveProperty("ust_idnr");
  expect(res.billing).toHaveProperty("zip");
  expect(res).toHaveProperty("contact_person");
  expect(res).toHaveProperty("custom_template");
  expect(res).toHaveProperty("customer_no");
  expect(res).toHaveProperty("description");
  expect(res).toHaveProperty("document_date");
  expect(res).toHaveProperty("due_date");
  expect(res).toHaveProperty("id");
  expect(res).toHaveProperty("invoice_no");
  expect(res).toHaveProperty("line_items");
  expect(res.line_items[0]).toHaveProperty("description");
  expect(res.line_items[0]).toHaveProperty("line_item_type");
  expect(res.line_items[0]).toHaveProperty("name");
  expect(res.line_items[0]).toHaveProperty("position_in_group");
  expect(res.line_items[0]).toHaveProperty("price");
  expect(res.line_items[0]).toHaveProperty("proposition");
  expect(res.line_items[0]).toHaveProperty("quantity");
  expect(res.line_items[0]).toHaveProperty("total_net");
  expect(res.line_items[0]).toHaveProperty("unit");
  expect(res.line_items[0]).toHaveProperty("vat_rate");
  expect(res).toHaveProperty("name");
  expect(res).toHaveProperty("project");
  expect(res.project).toHaveProperty("id");
  expect(res.project).toHaveProperty("name");
  expect(res.project).toHaveProperty("type");
  expect(res).toHaveProperty("record_state");
  expect(res).toHaveProperty("sent_on");
  expect(res).toHaveProperty("sent_to");
  expect(res).toHaveProperty("sent_via");
  expect(res).toHaveProperty("state");
  expect(res).toHaveProperty("total_gross");
  expect(res).toHaveProperty("supply_date");
  expect(res).toHaveProperty("total_net");
  expect(res).toHaveProperty("total_vat");
  expect(res).toHaveProperty("type");
});

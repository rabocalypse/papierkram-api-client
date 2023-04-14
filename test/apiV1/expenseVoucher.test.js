const PapierkramApiClientV1 = require("../../index");

client = new PapierkramApiClientV1(
  process.env.PAPIERKRAM_SUBDOMAIN,
  process.env.PAPIERKRAM_API_KEY
);

test("ApiV1ExpenseVoucher all", async () => {
  const res = await client.v1.expenseVoucher.all();
  expect(res).toBeDefined();
  expect(res).toHaveProperty("entries");
  expect(res).toHaveProperty("has_more");
  expect(res).toHaveProperty("page");
  expect(res).toHaveProperty("page_size");
  expect(res).toHaveProperty("total_entries");
  expect(res).toHaveProperty("total_pages");
  expect(res).toHaveProperty("type");
  expect(res.entries).toHaveLength(100);
  expect(res.entries[0]).toHaveProperty("amount");
  expect(res.entries[0]).toHaveProperty("description");
  expect(res.entries[0]).toHaveProperty("document_date");
  expect(res.entries[0]).toHaveProperty("due_date");
  expect(res.entries[0]).toHaveProperty("entertainment_persons");
  expect(res.entries[0]).toHaveProperty("entertainment_reason");
  expect(res.entries[0]).toHaveProperty("flagged");
  expect(res.entries[0]).toHaveProperty("id");
  expect(res.entries[0]).toHaveProperty("invoice_amount");
  expect(res.entries[0]).toHaveProperty("name");
  expect(res.entries[0]).toHaveProperty("provenance");
  expect(res.entries[0]).toHaveProperty("record_state");
  expect(res.entries[0]).toHaveProperty("state");
  expect(res.entries[0]).toHaveProperty("type");
  expect(res.entries[0]).toHaveProperty("voucher_no");
});
test("ExpenseVoucher by id", async () => {
  const res = await client.v1.expenseVoucher.by({ id: 7 });
  expect(res).toBeDefined();
  expect(res).toHaveProperty("amount");
  expect(res).toHaveProperty("creditor");
  expect(res).toHaveProperty("description");
  expect(res).toHaveProperty("document_date");
  expect(res).toHaveProperty("documents");
  expect(res).toHaveProperty("due_date");
  expect(res).toHaveProperty("entertainment_persons");
  expect(res).toHaveProperty("entertainment_reason");
  expect(res).toHaveProperty("flagged");
  expect(res).toHaveProperty("id");
  expect(res).toHaveProperty("invoice_amount");
  expect(res).toHaveProperty("line_items");
  expect(res.line_items).toHaveLength(1);
  expect(res.line_items[0]).toHaveProperty("amount");
  expect(res.line_items[0]).toHaveProperty("billing");
  expect(res.line_items[0]).toHaveProperty("depreciation");
  expect(res.line_items[0]).toHaveProperty("name");
  expect(res.line_items[0]).toHaveProperty("vat_rate");
  expect(res).toHaveProperty("name");
  expect(res).toHaveProperty("provenance");
  expect(res).toHaveProperty("record_state");
  expect(res).toHaveProperty("state");
  expect(res).toHaveProperty("type");
  expect(res).toHaveProperty("voucher_no");
});

# papierkram-api-client

Der erste ~~illegale~~ nicht offizielle Papierkram-Client für die Papierkram-API für NodeJS.

🚧 🛠️ Dieses Projekt befindet sich noch in der Entwicklung und ist eher noch nicht für die Verwendung geeignet. 🛠️ 🚧  
Aber du kannst es gerne ausprobieren und mir Feedback geben.

## NodeJS Version

Dieser Client ist für NodeJS 18+ geschrieben. Denn `fetch` wird verwendet, um die API-Requests zu machen. 🥳

## Hinweis WIP

🚨 In Kürze wird es eine neue Version geben, mit mehr tests, allen Endpunkten und einer ausführlichen Dokumentation. 🤞

Ich bin eigentlich ein Ruby-Entwickler und habe mich entschieden, diesen Client in NodeJS zu schreiben, um mich nach einer langen Zeit mal wieder mit JavaScript zu beschäftigen.

Siehe [Papierkram API Client für Ruby](https://github.com/simonneutert/papierkram_api_client).

## Unterstützte Endpunkte

Aktuell unterstützte Endpunkte / Objekte:

- [x] Banking::BankConnection
- [ ] Banking::BankTransaction
- [ ] Contact::Company (Unternehmen)
- [ ] Contact::Company (Kontaktpersonen)
- [x] Expense::Voucher (Ausgabe Belege)
- [x] Income::Estimate (Angebote)
- [x] Income::Invoice (Rechnungen)
- [ ] Income::Proposition (Waren / Dienstleistungen)
- [ ] Info
- [ ] Project (Projekte)
- [ ] Tracker::Task (Aufgaben)
- [ ] Tracker::TimeEntry (Zeiterfassung)

## Installation

```bash
npm install papierkram-api-client
```

## Verwendung

```js
const PapierkramApiClient = require('papierkram-api-client');
const client = new PapierkramApiClient('deine-subdomain', 'DEIN-API_KEY');
client.v1.incomeInvoice.all().then((invoices, err) => {
  console.log(invoices);
});
// {
//   "type": "list",
//   "page": 1,
//   "page_size": 100,
//   "total_pages": 1,
//   "total_entries": 2,
//   "has_more": false,
//   "entries": [
//     {
//       "type": "invoice",
//       "id": 539,
//       "name": "My invoice",
//       "description": "Notes for the invoice",
//       "document_date": "2020-05-01",
//       "due_date": "2020-05-31",
//       "supply_date": "2023-04-04 10:14:22 +0200",
//       "customer_no": null,
//       "invoice_no": "R-INC",
//       "sent_on": null,
//       "sent_via": null,
//       "sent_to": null,
//       "paid_at_date": null,
//       "state": "paid",
//       "record_state": "active",
//       "custom_template": null,
//       "total_net": 200,
//       "total_vat": 26,
//       "total_gross": 226,
//       "billing": {
//         "company": "Mustermann Automobile GmbH",
//         "email": null,
//         "ust_idnr": "11/234/34567",
//         "street": "Dotzheimer Str. 36",
//         "zip": "65185",
//         "city": "Wiesbaden",
//         "country": "Deutschland",
//         "contact_person": "John Doe",
//         "department": "Purchasing"
//       }
//     },
//     {
//       "type": "invoice",
//       "id": 540,
//       "name": null,
//       "description": null,
//       "document_date": "2023-04-04",
//       "due_date": "2023-04-04",
//       "supply_date": "2023-04-04 10:14:22 +0200",
//       "customer_no": null,
//       "invoice_no": "R-INC",
//       "sent_on": null,
//       "sent_via": null,
//       "sent_to": null,
//       "paid_at_date": null,
//       "state": "paid",
//       "record_state": "active",
//       "custom_template": null,
//       "total_net": 0,
//       "total_vat": 0,
//       "total_gross": 0,
//       "billing": {
//         "company": "Mustermann Automobile GmbH",
//         "email": null,
//         "ust_idnr": null,
//         "street": "Dotzheimer Str. 36",
//         "zip": "65185",
//         "city": "Wiesbaden",
//         "country": "Deutschland",
//         "contact_person": "Max Mustermann",
//         "department": null
//       }
//     }
//   ]
// }
```

## Configuration

Es könnnen Environment-Variables gesetzt werden, um die Konfiguration zu übernehmen.

Schau dazu mal in die [.env.example](.env.example) Datei.

## Tests

1. stell sicher, dass die Environment-Variable `PAPIERKRAM_SUBDOMAIN` gesetzt ist
2. stell sicher, dass die Environment-Variable `PAPIERKRAM_API_KEY` gesetzt ist
3. `$ npm test`

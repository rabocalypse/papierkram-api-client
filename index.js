const BankConnection = require("./lib/v1/bankConnection");
// const BankTransaction = require("./v1/bankTransaction");
// const ContactCompany = require("./v1/contactCompany");
// const ContactCompanyPerson = require("./v1/contactCompanyPerson");
const ExpenseVoucher = require("./lib/v1/expenseVoucher");
const IncomeEstimate = require("./lib/v1/incomeEstimate");
const IncomeInvoice = require("./lib/v1/incomeInvoice");
// const IncomeProposition = require("./v1/incomeProposition");
// const Project = require("./v1/project");
const TrackerTask = require("./lib/v1/trackerTask");
const TrackerTimeEntry = require("./lib/v1/trackerTimeEntry");

class PapierkramApiClientV1 {
  constructor(subdomain, token) {
    this.subdomain = subdomain;
    this.token = token;
    this.name = "Client";
    this.v1 = {
      bankConnection: new BankConnection(this),
      //   bankTransaction: new BankTransaction(this),
      //   contactCompany: new ContactCompany(this),
      //   contactCompanyPerson: new ContactCompanyPerson(this),
      expenseVoucher: new ExpenseVoucher(this),
      incomeEstimate: new IncomeEstimate(this),
      incomeInvoice: new IncomeInvoice(this),
      //   incomeProposition: new IncomeProposition(this),
      //   project: new Project(this),
      trackerTask: new TrackerTask(this),
      trackerTimeEntry: new TrackerTimeEntry(this),
      quota(request) {
        return request;
      },
    };
  }
}

module.exports = PapierkramApiClientV1;

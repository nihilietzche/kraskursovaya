var request = require("request");

request({
  uri: "https://kursovayaforms.wufoo.com/api/v3/forms/z1ko8ngn1wlql1y/entries/count.json?sort=EntryId&sortDirection=DESC",
  method: "GET",
  auth: {
    'username': 'XIT0-VHF1-V0CX-K3H0',
    'password': 'fqw',
    'sendImmediately': false
  }
}, function b(error, response, body) {
  console.log(body);
});

const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU1MzgwNDdlLTM4ZjQtNDRiZi04ODBiLTFhN2M2Y2NjYWYxNC0xNjY1MzQ4NjM3ODc1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOGY2ZGIxZGYtMTZkOC00YmEwLWE1MDgtNDRjOGM5OWRkYmFlIiwidHlwZSI6InQifQ.QNJIcDKbYRjNvR70EZwkc0h7YX0ULD_aHmFIEkQwH-s'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
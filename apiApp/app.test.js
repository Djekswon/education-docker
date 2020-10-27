const request = require("supertest");

var app = require("./app").app;

it("should return Hello World Abs", function (done) {
  request(app)
    .get("/")
    .expect("Hello World Abs!")
    .end(done);
});

it("should return Contacts", function (done) {
  request(app)
    .get("/contacts")
    .expect("Contacts")
    .end(done);
});

it("should return NotFound with status 404", function (done) {
  request(app)
    .get("/error")
    .expect(404)
    .expect("NotFound")
    .end(done);
});
var request = require("request")
var assert = require("assert")
var chai = require('chai'), chaiHttp = require('chai-http'); mocha = require("mocha")

describe("something", () => {
    it("should", (done) => {
        assert.equal(1, 1)
        done()
    })
    request('http://localhost:3000/users', (e, r, b) => {
        assert.equal(b, "[]")
    })
    done()
})
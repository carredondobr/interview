const chai = require('chai');
const { expect } = require('chai');
chai.use(require('chai-arrays'));
const helpers = require('./helpers');

describe('description',() => {

  beforeEach(async () => {
    // await helpers.mongo.drop();
  });

  it('test', async (done) => {
    expect({}).to.be.a('object');
    done();
  });
});
const {ethers} = require("hardhat")
const {expect, assert} = require("chai")

describe("SimpleStorage", function(){
  let SimpleStorageFactory, simpleStorage
  beforeEach(async function(){
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await SimpleStorageFactory.deploy()
  })
  it.only("Should start with favorite number of 0", async function(){
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"

    assert.equal(currentValue.toString(), expectedValue)
  })
  it.only("Should update when we call store", async function(){
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })
  it.only("Should add people with favornumber when we call add Person", async function(){
    const expectedPeople = "Lisa"
    const expectedValue = "2"
    const transactionResponse = await simpleStorage.addPerson(expectedPeople, expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })
})

const EthCrypto = require("eth-crypto");
const Inquirer = require("inquirer");

async function main() {
  const answer = await Inquirer.prompt({
    type: "number",
    name: "credentialsAmount",
    message: "Please type how many key/pairs to generate: ",
  });

  for (let i = 0; i < answer.credentialsAmount; i++) {
    const identity = EthCrypto.createIdentity();
    console.log(
      `Address : ${identity.address}, privateKey: ${identity.privateKey}`
    );
  }
}

main();

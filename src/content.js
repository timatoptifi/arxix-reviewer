import Web3 from 'web3';
console.log(window, 'whole window');

console.log(window.window.ethereum, 'ethereum');

const connect = async () => {
  // await window.ethereum.enable();

  // await window.ethereum.request("eth_requestAccounts");
  const accounts = await ethereum.send('eth_requestAccounts');
  const web3 = new Web3(ethereum);
  const number = await web3.eth.getBalance(
    '0x1f24aB291D2e47C8699B131d6b00D67E30d975d1'
  );
  console.log(number, 'number');
  console.log(accounts, 'accounts');
};

let pageScriptPara = document.getElementById('header');
const aa = document.createElement('button');
aa.innerText = 'Connect';

aa.addEventListener('click', connect);

document.body.prepend(aa);

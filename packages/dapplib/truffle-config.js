require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food novel crawl pulse column hen light army gentle'; 
let testAccounts = [
"0x627a750da6f8d834c712afb68f3e74a33a2a8986a77cf4a9a8468caede97fb3a",
"0x06a1c5f8c4f2e0b106ebdebfa52c8864bbac6a4affb1330af6a6c721e3f45f38",
"0x8731421d1281b88165bf81bd5d81a67cade5da95830301c60aae518742015b79",
"0x8a5a2de72f25b9dda06226bc7fa0b7407d963adc9c0951191dd9ad45d2e7f98f",
"0x22ccbd3a15a4c6b6e20e96598ec0c1f449bac4caac823c859be57bc6130f01fe",
"0xf8ed5eef1a5bb7dc397ebfa2d5b1e95df1228874ed5327ee4c0052dcc841de6d",
"0x4a07a9f24c92678cbbb2b4a3e09f5d99301e0c0fa5f9915e0b45f7532c8e9ac9",
"0x8e036173ea440509b0e35dbed34690f210ee6accb7a0cded5b6a491b765001b0",
"0xd4b7fcd1c7497e16ee5e284f863d726648f0e96217fd6fcdbb911840363d95db",
"0x0e51c7fade8c674044cf2e9de30997cf39fc6d587edcfc607724d93711314856"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


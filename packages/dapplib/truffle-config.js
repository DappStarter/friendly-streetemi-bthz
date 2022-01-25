require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind hub include clinic fringe skin'; 
let testAccounts = [
"0x101a4231b6faba29ec12123da914eb9ad807bd5cd60428e4a10e3bd271977176",
"0x5cd77904daa0d3cfcba88111a16baa7af93d3120f4a516605923a908c8efb8cd",
"0xdf5136f1bed6f1afbaf46bba8fb4f9a1fc8b26d605e0244731739fa93766a7c1",
"0x8b692f6a15e0d7dca615167897e46affdcb033f72e01975e41e842da3d50c881",
"0xfb1f497d9fad76f27b3d18c9ad420d778e15e6a3c83aef0450feea98cd9a08b1",
"0x10b5d8680b88ba32a9e39850ee38cd4ab1d9088f020f5eff9414616345044dfd",
"0x3adbba2fb5a1d73b87374a8bd5ee8fa5259ae1ab487a93ed7e55ed30959dbd13",
"0xb5e224a5e38efcd6349a844f10a1d97b0ff6be2c2b9c8e8c331a02fc2abd8ab3",
"0xd3ea4b358bb6767ec5fad2c615c211f96833c5f64462c715cfe09f92fbe6e64c",
"0x6cf2c82b124693af15b602c57a266e9d6fd2054ec88147de9ea94713542e8ebc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


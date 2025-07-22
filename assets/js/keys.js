const { ec: EC } = require('elliptic');

// Initialize the elliptic curve
const ec = new EC('secp256k1');

// Generate key pair
const keyPair = ec.genKeyPair();

// Get the private and public keys in hexadecimal format
const privateKey = keyPair.getPrivate('hex');
const publicKey = keyPair.getPublic('hex');

// Output the keys
console.log('Private Key:', privateKey);
console.log('Public Key:', publicKey);
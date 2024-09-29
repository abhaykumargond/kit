const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');
const fs = require('fs');
const path = require('path');

// Connect to the Solana blockchain (e.g., using the devnet cluster)
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

// Read the compiled contract ABI and bytecode (if applicable)
const contractPath = path.resolve(__dirname, '../contracts', 'CropToken.json');
let abi, bytecode;

try {
    const contractData = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
    abi = contractData.abi;
    bytecode = contractData.bytecode;
} catch (error) {
    console.error(`Error reading contract file at ${contractPath}:`, error.message);
    process.exit(1); // Exit the process with an error code
}

// Example function to get the balance of a public key
async function getBalance(publicKeyString) {
    const publicKey = new PublicKey(publicKeyString);
    const balance = await connection.getBalance(publicKey);
    console.log(`Balance: ${balance / 1000000000} SOL`); // Convert lamports to SOL
    return balance / 1000000000;
}

// Example function to get the total supply of tokens (if applicable)
async function getTotalSupply() {
    // Implement logic to get total supply if you have a token contract
    // This is just a placeholder function
    console.log('Total Supply function is not implemented for Solana.');
}

module.exports = {
    getBalance,
    getTotalSupply,
};
const { gostCrypto, gostEngine } = require('node-gost-crypto');

function streebog(message) {
    const buffer = Buffer.from(message);
    
    const digest = gostEngine.getGostDigest({name: 'GOST R 34.11', length: 256, version: 1994});
    return Buffer.from(digest.digest(buffer)).toString('hex');
}

module.exports = streebog;
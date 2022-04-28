const { createHash } = require('crypto');

function sha256(message) {
    return createHash('sha256').update(message).digest('hex');
}

module.exports = sha256;
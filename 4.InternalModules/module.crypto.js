const crypto = require('crypto');

// Crypto 모듈을 사용한 해시
const shasum = crypto.createHash('sha256');
shasum.update('crypto_hash_');
const output = shasum.digest('hex');

console.log(output);

// Crypto 모듈을 사용한 암호화
const privateKey = '나만의 비밀 키';
const input = 'PASSWORD';

// 암호화
const cipher = crypto.createCipher('aes192', privateKey);
cipher.update(input, 'utf-8', 'base64');
const cipherOutput = cipher.final('base64');

// 암호화 해제
const decipher = crypto.createDecipher('aes192', privateKey);
decipher.update(cipherOutput, 'base64', 'utf8');
const decipherOutput = decipher.final('utf8');
console.log(`Original String: ${input}`);
console.log(`Cipher String: ${cipherOutput}`);
console.log(`Decipher String: ${decipherOutput}`);






const { randomBytes, createCipheriv } = require("crypto");
const { config } = require("dotenv");
const { writeFileSync } = require("fs");

config()

const iv = randomBytes(16);

const cipher = createCipheriv('aes-256-ctr', process.env.REACT_APP_ACCENT_TESTER_KEY, iv);

const data = [
    { word: 'data' }
];

const encrypted = Buffer.concat([cipher.update(
    JSON.stringify(data)
), cipher.final()]);

console.log(JSON.stringify({
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
}))

writeFileSync('data.txt', JSON.stringify({
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
}));
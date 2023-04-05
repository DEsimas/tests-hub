const { randomBytes, createCipheriv } = require("crypto");
const { config } = require("dotenv");
const { writeFileSync } = require("fs");

config()

const iv = randomBytes(16);

const cipher = createCipheriv('aes-256-ctr', process.env.REACT_APP_ACCENT_TESTER_KEY, iv);

const data = [
    { word: 'кондОвый' },
    { word: 'конЕчно' },
    { word: 'конфОрка' },
    { word: 'красИвее' },
    { word: 'крАшение' },
    { word: 'кУхонный' },
    { word: 'лассО' },
    { word: 'лАтте' },
    { word: 'лЕкторы' },
    { word: 'лОговище' },
    { word: 'ломОта' },
    { word: 'ломОть' },
    { word: 'манЁвр' },
    { word: 'манЯщий' },
    { word: 'нАискось' },
    { word: 'намЕрение' },
    { word: 'наОтмашь' },
    { word: 'началсЯ' },
    { word: 'он_нАчал' },
    { word: 'оно_нАчало' },
    { word: 'она_началА' },
    { word: 'они_нАчали' },
    { word: 'недУг' },
    { word: 'незадОлго' },
    { word: 'новорождЁнный' },
    { word: 'обеспЕчение' },
    { word: 'облегчИть' },
    { word: 'ободрИть' },
    { word: 'объезднОй' },
    { word: 'одЕсса' },
    { word: 'звУчение' },
    { word: 'озлОбленный' },
    { word: 'опЕка' },
    { word: 'ополОснутый' },
    { word: 'опОшлить' },
    { word: 'оптОвый' },
    { word: 'оспАривать' },
    { word: 'остриЁ' },
    { word: 'отсечЁнный' },
    { word: 'отцЕпленный' },
    { word: 'очеркОвый' },
    { word: 'партЕр' },
    { word: 'пЕня' },
    { word: 'перегрУженный' },
    { word: 'петЕль' },
    { word: 'пИхта' },
    { word: 'платЁжеспособный' },
    { word: 'платО' },
    { word: 'компьЮтер' },
    { word: 'компрометИровать' },
    { word: 'конкурентоспосОбный' },
    { word: 'констатИровать' },
    { word: 'поскользнУться' },
    { word: 'компетЕнтный' },
    { word: 'кондОвый' },
    { word: 'конЕчно' },
    { word: 'конфОрка' },
    { word: 'мтУси' }
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
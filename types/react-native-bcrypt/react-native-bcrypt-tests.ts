import bcrypt from "react-native-bcrypt";

const ROUND_NUMBER = 10;
const salt = bcrypt.genSaltSync(ROUND_NUMBER);
const hashedHello = bcrypt.hashSync("hello", salt);

bcrypt.compare("hello", hashedHello, (error, bool) => {});
bcrypt.compareSync("hello", hashedHello);
bcrypt.decodeBase64("..CA.uOD/eaGAOmJB.yMBv.", 16);
bcrypt.encodeBase64(
    [
        0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,
        0x0c, 0x0d, 0x0e, 0x0f, 0x10,
    ],
    16,
);
bcrypt.genSalt(ROUND_NUMBER, (error, salt) => {});
ROUND_NUMBER === bcrypt.getRounds(hashedHello);
bcrypt.getSalt(hashedHello);
bcrypt.hash("hello", ROUND_NUMBER, (error, hash) => {});
bcrypt.setRandomFallback();

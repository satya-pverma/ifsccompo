const { JWT_SECRET } = require("./dev");

module.exports={
    MONGOURI:process.env.MONGOURI,
    JWT_SECRET:process.env.JWT_SEC
}
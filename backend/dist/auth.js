"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var jwt = require("jsonwebtoken");
var apiConfig_1 = require("./apiConfig");
exports.handleAuthentication = function (request, response) {
    var user = request.body;
    if (isValid(user)) {
        var userFound = user_1.users[user.email];
        var token = jwt.sign({ sub: userFound.email, iss: 'meat-api' }, apiConfig_1.apiConfig.secret);
        response.json({ name: userFound.name, email: userFound.email, accessToken: token });
    }
    else {
        response.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var userFound = user_1.users[user.email];
    return userFound !== undefined && userFound.matches(user);
}

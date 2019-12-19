"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (user) {
        return user !== undefined && user.email === this.email && user.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "jaderhenryk@gmail.com": new User('jaderhenryk@gmail.com', 'Jader Henryk', 'arceus493'),
    "joicyadriani@gmail.com": new User('joicyadriani@gmail.com', 'Joicy Adriani', 'mewtwo150')
};

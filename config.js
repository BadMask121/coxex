var randomString = function(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var pkey_maker = randomString(10) + "-" + randomString(6) + "-" + randomString(12) + "-" + randomString(3);
const config = {
    host: "https://coxex.herokuapp.com/request",
    request: this.host + "/request",
    signup: this.request + "/signup",
    login: this.request + "/login",
    apiKey: "A8RWXSNHMQU6mW4UeEkn9z"
}
ConfigData = ' {"FRONT_END_PRIVATE_KEY": \"' + pkey_maker + '\"  , "SIGNUP_SCRIPT_URL" : "' + config.host + '/signup","LOGIN_SCRIPT_URL":"' + config.host + '/login", "CHECK_SESSION_SCRIPT_URL" : "' + config.host + '/checkSession" , "LOGOUT_SCRIPT_URL" : "http://localhost:444/CleedBackEnd/request/RequestLogout.php","UPDATE_SESSION_SCRIPT_URL" : "http://localhost:444/CleedBackEnd/request/RequestUpdateSession.php","SEND_PATENT_SCRIPT_URL" : "http://localhost:444/CleedBackEnd/request/RequestGetId.php" }';
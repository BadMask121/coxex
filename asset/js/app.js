/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.0/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }
    return function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                            path: "/"
                        }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (e) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var f in i) i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
                    return document.cookie = n + "=" + r + s
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (e) {}
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (e) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }(function() {})
});
//# sourceMappingURL=/sm/203d9606ffea7a776ef56994ac4d4a1ab0a18611bf5f22fd2f82e9b682eea54f.map


var file = location.pathname.split("/").slice(-1);
var fileName = file[0].split(".")[0];
const CONFIG = JSON.parse(ConfigData);
//assign our requestURL global variable to reduce redundancy 
const SIGNUP_SCRIPT_URL = CONFIG.SIGNUP_SCRIPT_URL;
const LOGIN_SCRIPT_URL = CONFIG.LOGIN_SCRIPT_URL;
const LOGOUT_SCRIPT_URL = CONFIG.LOGOUT_SCRIPT_URL;
const CLIENT_PRIVATE_KEY = CONFIG.FRONT_END_PRIVATE_KEY;
const CHECK_SESSION_SCRIPT_URL = CONFIG.CHECK_SESSION_SCRIPT_URL;
const SEND_PATENT_SCRIPT_URL = CONFIG.SEND_PATENT_SCRIPT_URL;
// const GET_ID_SCRIPT_URL = CONFIG.GET_ID_SCRIPT_URL;
const UPDATE_SESSION_SCRIPT_URL = CONFIG.UPDATE_SESSION_SCRIPT_URL;

const CLOUDNARY_URL = "https://api.cloudinary.com/v1_1/dp1lewjma/image/upload";
const CLOUDNARY_UPLOAD_PRESET = "tmqoqgpt";

var sessionexpire = new Date(new Date().getTime() + 60 * 170 * 60 * 1000);



$(document).ready(function() {




    // sessionAlive().then(function(res) {
    //     if (typeof(loginBtn) !== 'undefined') {
    //         loginBtn.style.background = "#ddd";
    //         loginBtn.style.color = "#113327";
    //         loginBtn.innerHTML = "Go to Dashboard";
    //         loginBtn.style.width = "auto";
    //         loginBtn.style.marginLeft = "-60px";
    //         loginBtn.setAttribute("href", "/dashboard/index.html");
    //     }
    //     if (fileName == "login.html") {
    //         window.open("/dashboard/index.html", "_self");
    //     }

    // }).catch(function(err) {
    //     setCookies("sessionID", null);
    //     if (fileName == "login.html" || fileName == "app.html")
    //         return false;
    //     window.open("/account/login.html?loggedout=true", "_self");
    // });


    // setInterval(() => {
    //     sessionAlive().then(function(res) {
    //         if (typeof(loginBtn) !== 'undefined') {
    //             loginBtn.style.background = "#ddd";
    //             loginBtn.style.color = "#113327";
    //             loginBtn.innerHTML = "Go to Dashboard";
    //             loginBtn.style.width = "auto";
    //             loginBtn.style.marginLeft = "-60px";
    //             loginBtn.setAttribute("href", "/dashboard/index.html");
    //         }
    //         if (fileName == "login.html") {
    //             window.open("/dashboard/index.html", "_self");
    //         }

    //     }).catch(function(err) {
    //         console.log(err);
    //         setCookies("sessionID");
    //         if (fileName == "login.html" || fileName == "app.html")
    //             return false;
    //         window.open("/account/login.html?loggedout=true", "_self");
    //     });

    // }, 30000);

    (typeof(signupbtn) !== 'undefined') ? signupbtn.onclick = function() {
        signup();
    }: null;

    (typeof(login_btn) !== 'undefined') ? login_btn.onclick = function() {
        login();
    }: null;



    (typeof(email) !== 'undefined') ? email.onkeyup = function(event) {
        if (!validateEmail(email.value)) {
            errorMessage.innerHTML = "Please enter a valid email";
            return false;
        } else {
            errorMessage.innerHTML = "";
        }
    }: null;

    $('#signup-form.form-body input').keyup(function(event) {

        switch (event.which || event.keycode) {
            case 13:
                signup();
                break;
            default:
                break;
        }
    });

    (typeof(newPassword) !== 'undefined') ? newPassword.onkeyup = function() {
        if (newPassword.value.length < 6) {
            errorMessage.innerHTML = "Password must be 6 characters higher";
            return false;
        } else {
            errorMessage.innerHTML = "";
        }

    }: null;

    (typeof(confirmPassword) !== 'undefined') ? confirmPassword.onkeyup = function() {
        if (newPassword.value !== confirmPassword.value) {
            errorMessage.innerHTML = "Please confirm your password";
            return false;
        } else {
            errorMessage.innerHTML = "";
        }

    }: null;




    /**
     * 
     * 
     * 
     * 
     * login function for interacting with server side code 
     */
    function login() {
        if (
            (email.value != undefined || email.value != "") &&
            (newPassword.value != undefined || newPassword.value != "")
        ) {
            errorMessage.innerHTML = "";
            if (!validateEmail(email.value)) {
                errorMessage.innerHTML = "Please enter a valid email";
                return false;
            }

            if (newPassword.value.length < 6) {
                errorMessage.innerHTML = "Password must be 6 characters higher";
                return false;
            }


            let data = {
                "email": email.value,
                "password": newPassword.value
            }

            let formdata = JSON.stringify(data);

            deactiveSignUpField();
            errorMessage.innerHTML = "Verifying Please wait...";
            if (typeof(axios) !== 'undefinded') {
                axios({
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    crossDomain: true,
                    url: LOGIN_SCRIPT_URL,
                    data: formdata
                }).
                then(function(response) {
                    if (response.data.error === "errorEmail") {
                        errorMessage.innerHTML = "Please enter a valid email";
                        activeSignUpField();
                        return false;
                    }
                    if (response.data.error === "errorPassword") {
                        errorMessage.innerHTML = "Password must be 6 characters higher";
                        activeSignUpField();
                        return false;
                    }

                    if (response.data.error === "errorEmptyPassword") {
                        errorMessage.innerHTML = "Password cannot be empty";
                        activeSignUpField();
                        return false;
                    }


                    if (typeof response.data.id !== 'undefined') {
                        updateSession(response.data.id).then(function(result) {
                            errorMessage.style.color = "green";
                            errorMessage.innerHTML = "Welcome " + email.value + " You'll Signed In Shortly";

                            setTimeout(() => {
                                window.open("/dashboard/index.html", "_self");
                            }, 3000);
                            return;

                        }).catch(function(err) {
                            errorMessage.style.color = "red";
                            errorMessage.innerHTML = err;
                            activeSignUpField();
                        });


                    } else if (response.data.error === "failed") {
                        errorMessage.innerHTML = "Invalid Credentials";
                        activeSignUpField();
                        return false;
                    } else {
                        errorMessage.innerHTML = "Error: Please try again or contact customer support";
                        activeSignUpField();
                        return false;
                    }
                }).catch(function(error) {
                    errorMessage.innerHTML = "Error: Please try again or contact customer support";
                    activeSignUpField();
                    return false;
                });
            }

        } else {
            errorMessage.innerHTML = "one or more fields empty";
            return false;
        }
    }


    /**
     * 
     * @method signup function for any app calling
     */
    function signup() {

        if (
            (fullName.value != undefined && fullName.value != "") &&
            (email.value != undefined && email.value != "") &&
            (newPassword.value != undefined && newPassword.value != "") &&
            (confirmPassword.value != undefined && confirmPassword.value != "")
        ) {
            errorMessage.innerHTML = "";
            if (!validateEmail(email.value)) {
                errorMessage.innerHTML = "Please enter a valid email";
                return false;
            }

            if (newPassword.value.length < 6) {
                errorMessage.innerHTML = "Password must be 6 characters higher";
                return false;
            }

            if (newPassword.value !== confirmPassword.value) {
                errorMessage.innerHTML = "Please confirm your password";
                return false;
            }

            // // encConPassword =confirmPassword;
            // var formdata = new FormData;
            // formdata.append("fullname", fullName.value);
            // formdata.append("email", email.value);
            // formdata.append("password", confirmPassword.value);

            let data = {
                "fullname": fullName.value,
                "email": email.value,
                "password": confirmPassword.value
            }

            let formdata = JSON.stringify(data);



            deactiveSignUpField();
            errorMessage.innerHTML = "Signing Up Please wait...";


            if (typeof(axios) !== 'undefinded') {
                axios({
                    method: "POST",
                    url: SIGNUP_SCRIPT_URL,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    crossDomain: true,
                    data: formdata
                }).then((response) => {

                    if (typeof(response.data.id) !== 'undefined') {

                        updateSession(response.data.id).then(function(result) {
                            errorMessage.style.color = "green";
                            errorMessage.innerHTML = "Sign Up Successful !!!";
                            setTimeout(() => {
                                window.open("/dashboard/index.html", "_self");
                            }, 3000);
                            return;

                        }).catch(function(err) {
                            errorMessage.style.color = "red";
                            errorMessage.innerHTML = err;
                            activeSignUpField();
                        });

                        return true;
                    }
                }).catch((error) => {

                    if (error.response) {
                        if (error.response.data.error === "errorEmail") {
                            errorMessage.innerHTML = "Please enter a valid email";
                            activeSignUpField();
                            return false;
                        }
                        if (error.response.data.error === "errorPassword") {
                            errorMessage.innerHTML = "Password must be 6 characters higher";
                            activeSignUpField();
                            return false;
                        }

                        if (error.response.data.error === "errorRegistered") {
                            errorMessage.innerHTML = "Account already exists";
                            activeSignUpField();
                            return false;
                        }

                        if (error.response.data.error == "failed") {
                            errorMessage.innerHTML = "Error: Server Error";
                            setTimeout(() => {
                                errorMessage.innerHTML = "";
                            }, 2000);
                            activeSignUpField();
                            return false;
                        }
                    }
                });
            }

        } else {
            errorMessage.innerHTML = "one or more fields empty";
            return false;
        }
    }



    function deactiveSignUpField() {
        (typeof(fullName) !== 'undefined') ? fullName.disabled = true: null;
        (typeof(email) !== 'undefined') ? email.disabled = true: null;
        (typeof(newPassword) !== 'undefined') ? newPassword.disabled = true: null;
        (typeof(confirmPassword) !== 'undefined') ? confirmPassword.disabled = true: null;
        (typeof(login_btn) !== 'undefined') ? login_btn.disabled = true: null;
        (typeof(signupbtn) !== 'undefined') ? signupbtn.disabled = true: null;
    }

    function activeSignUpField() {
        (typeof(fullName) !== 'undefined') ? fullName.disabled = false: null;
        (typeof(email) !== 'undefined') ? email.disabled = false: null;
        (typeof(newPassword) !== 'undefined') ? newPassword.disabled = false: null;
        (typeof(confirmPassword) !== 'undefined') ? confirmPassword.disabled = false: null;
        (typeof(login_btn) !== 'undefined') ? login_btn.disabled = false: null;
        (typeof(signupbtn) !== 'undefined') ? signupbtn.disabled = false: null;
    }

    /**
     * 
     * @method sessionAlive 
     * checks if user session if still set
     */
    function sessionAlive() {

        return new Promise((resolve, reject) => {

            var sessionID = getCookies("sessionID");
            if (sessionID == undefined) {
                reject(sessionID);
            }

            let formdata = {}

            if (typeof(axios) !== 'undefinded') {
                formdata.sessionID("sessionID", sessionID);
                axios({
                    method: "POST",
                    url: CHECK_SESSION_SCRIPT_URL,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    crossDomain: true,
                    data: JSON.stringify(formdata)
                }).then(function(response) {
                    // console.log(response.data);
                    if (response.data['status'] == "success") {
                        resolve(response.data['status']);
                    } else if (response.data['status'] == "failed") {
                        reject(response.data['status']);
                    }
                }).catch(function(err) {
                    console.log(err);
                    reject(err);
                });

            }

        });
    }
    //returns userID from database
    function getUserID(value) {


        return new Promise((resolve, reject) => {

            if (value == null || value == "")
                return null;



            var formdata = new FormData;
            formdata.append("requestID", true);
            formdata.append("email", value);
            if (typeof(axios) !== 'undefinded') {
                axios({
                    method: "POST",
                    crossdomain: true,
                    url: GET_ID_SCRIPT_URL,
                    data: formdata
                }).then(function(response) {
                    resolve(response.data.id);
                }).catch(function(error) {
                    reject(error);
                });
            }
        });
    }
    //updates userSession on server
    function updateSession(userId) {

        return new Promise((resolve, reject) => {
            if (userId === null)
                return false;

            var sessionID = setCookies("sessionID", email.value, {
                path: '/',
                expires: sessionexpire
            });


            if (sessionID !== null) {
                resolve(sessionID)
                return;
            }
            reject(null);
        });

    }










    /**
     * 
     * @param {*} email
     * email validattino 
     */
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }


    window.getCookies = getCookies;
    window.setCookies = setCookies;
    window.encrypt = encrypt;
    window.decrypt = decrypt;
}());


function encrypt(data) {
    if (CLIENT_PRIVATE_KEY != null ||
        CLIENT_PRIVATE_KEY !== undefined &
        typeof(CryptoJS) !== 'undefined' &&
        typeof(salt) !== 'undefined') {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem("pkey", CLIENT_PRIVATE_KEY)
        }
        return CryptoJS.AES.encrypt(data, CLIENT_PRIVATE_KEY).toString();
    }
    return null;
}

function decrypt(data) {
    const pkey = localStorage.setItem("pkey")
    if (pkey != null ||
        pkey !== undefined &
        typeof(CryptoJS) !== 'undefined' &&
        typeof(salt) !== 'undefined') {

        a = CryptoJS.AES.decrypt(data, pkey);
        return a.toString(CryptoJS.enc.Utf8);
    }
    return null;
}

function setCookies(key, value, properties = null) {

    /* setCookies() funtion takes three arguments arg1 = cookie_key
    arg2 = cookie_value, arg3 =json object of properties for cookies (optional) , arg4 = privatekey for encrypting Cookies

    privatekey is needed to decrypt getCookies

    Encrytion is done using Cryto.js javascript lib AES cryption algorithim
    */
    if (key === null)
        return key;


    if (properties == null) {
        properties = {
            path: '/'
        };
    }

    if (value != undefined || value != "")
        value = encrypt(value);
    Cookies.set(key, value, properties);

    return value;
}


function deleteCookie(a = null) {
    var attr = {
        path: '/',
        expires: sessionexpire
    }
    if (a !== null) {
        a = Cookies.get(a);
        Cookies.remove(a, attr);
        // window.location = '/?logged_out=true';
        return true;
    }

    Object.keys(Cookies.get()).forEach(function() {
        for (var i = 0; i < arguments.length; i++) {
            Cookies.remove(arguments[i], attr);
            return false;
        }
    });
    // window.location = '/?logged_out=true';
    return false;
}



/* getCookies() funtion takes two arguments arg1 = cookie_key
    arg2 = privatekey for encrypting Cookies

   same privatekey used for setCookie encryption is needed to decrypt getCookies
    */

/***
 * 
 * using cryptoJs lib to encrypt our data on client side ,
 * encryted data will still
 * be encryted on server side
 */


function getCookies(a, enc = false) {

    /* getCookies() funtion takes two arguments arg1 = cookie_key
        arg2 = privatekey used for encrypting {arg1}

        same encrytedkey and privatekey used
        for setCookie encryption is needed to decrypt getCookies
    */

    var e = Cookies.get(a);
    if (e != null && e !== undefined && enc === true) {
        try {
            e = decrypt(e);
            return e;
        } catch (error) {
            return error;
        }
    } else {
        return e;
    }
    return null;
}
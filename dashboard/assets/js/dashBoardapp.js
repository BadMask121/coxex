if (typeof filestack !== 'undefined') {
    const clientUpload = filestack.init(config.apiKey)
}


var fileUrls = {};
var data = {};
$(document).ready(function() {

    let firstPatentFile = document.getElementById('firstPatentFile');
    let secondPatentFile = document.getElementById('secondPatentFile');
    let firstPatentTextF = document.getElementById('firstPatentText')
    let secondPatentTextF = document.getElementById('secondPatentText')

    let realUserId = getCookies("sessionID")
    let pkey = localStorage.getItem('pkey');
    let userId = window.decrypt(realUserId, pkey);

    var file;


    (typeof logOut !== "undefined") ? logOut.onclick = function() {
        logout();
    }: null;

    if (fileName === 'coxexDetect') {

        firstPatentFile.addEventListener('change', function(event) {
            file = event.target.files[0];
            fileUrls.firstPatentUrl = firstPatentFile;
        });




        secondPatentFile.addEventListener('change', function(event) {
            file = event.target.files[0];
            fileUrls.secondPatentUrl = secondPatentFile;
        });

        detect.onclick = function(e) {
            let firstPatentText = firstPatentTextF.value;
            let secondPatentText = secondPatentTextF.value;

            if (firstPatentText === "" || secondPatentText === "") {
                alert("All fields are required")
                return;
            }

            data.firstPatent = {
                fullname: firstPatentText
            }
            data.secondPatent = {
                fullname: secondPatentText
            }

            if (fileUrls !== {}) {
                Object.keys(fileUrls).forEach((key) => {
                    Object.keys(data).forEach(dataKey => {

                        if (fileUrls.hasOwnProperty(key) && data.hasOwnProperty(dataKey)) {
                            uploadFile(file)
                                .then(res => {
                                    data[dataKey].fileurl = res;
                                    data[dataKey].userId = userId;
                                    uploadData(data)
                                        .then(res => {
                                            console.log(res);
                                        }).catch(err => console.warn(err))
                                }).catch(err => console.warn(err))
                        }
                    });
                });
            }
        }

    }

    //  const onProgress = (evt) => {
    //     document.getElementById('progress').innerHTML = `${evt.totalPercent}%`;
    // };

    function uploadFile(file) {

        return new Promise((resolve, reject) => {
            if (file !== undefined && file !== null) {
                clientUpload.upload(file, {}, {}, {})
                    .then(res => resolve(res.url))
                    .catch(err => reject(err))
            }
        });
    }

    function uploadData(data) {

        return new Promise((resolve, reject) => {
            if (typeof(axios) !== 'undefinded') {

                axios({
                    method: "POST",
                    url: SEND_PATENT_SCRIPT_URL,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    crossDomain: true,
                    data: JSON.stringify(data)
                }).then(res => {
                    resolve(res)
                }).catch(err => reject(err))
            }
        });
    }



    function logout() {
        var formdata = {}
        formdata.id = userId;

        if (typeof(axios) !== 'undefinded') {
            axios({
                method: "POST",
                url: LOGOUT_SCRIPT_URL,
                headers: {
                    'Content-Type': 'application/json'
                },
                crossDomain: true,
                data: formdata
            }).then(function(response) {
                console.log(response);
                if (response.data.error === "userNotFound") {
                    alert("Error: Couldnt log Out please try again");
                    return;
                }

                if (response.data.response === "success") {
                    window.deleteCookie()
                    window.open("/account/login.html?loggedout=true", "_self");
                    return true;
                }

            });
        }

    }
}());
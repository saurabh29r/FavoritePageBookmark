// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let siteNameEl = document.getElementById("siteNameInput");
let siteUrlEl = document.getElementById("siteUrlInput");
let siteNameErrorEl = document.getElementById("siteNameErrMsg");
let siteUrlErrorEl = document.getElementById("siteUrlErrMsg");

let formdata = {
    sitename: "",
    siteurl: ""
}
siteNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrorEl.textContent = "Required*";
        siteNameErrorEl.style.color = "red";
    } else {
        siteNameErrorEl.textContent = "";
    }
    formdata.sitename = siteNameEl.value;
});

siteUrlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrorEl.textContent = "Required*";
        siteUrlErrorEl.style.color = "red";
    } else {
        siteUrlErrorEl.textContent = "";
    }
    formdata.siteurl = siteUrlEl.value;
});



function validateForm(formdata) {
    let {
        sitename,
        siteurl
    } = formdata;

    if (sitename === "") {
        siteNameErrorEl.textContent = "Required*";
        siteNameErrorEl.style.color = "red";

    }
    if (siteurl === "") {
        siteUrlErrorEl.textContent = "Required*";
        siteUrlErrorEl.style.color = "red";
    }

}

function mainData(formdata) {
    // let {
    //     sitename,
    //     siteurl
    // } = formdata;
    //creating the div for that dynamic element
    let mainConEl = document.getElementById("conts");
    let createconatinerEL = document.createElement("div");
    createconatinerEL.classList.add("result");
    mainConEl.appendChild(createconatinerEL);
    let createUlEl = document.createElement("ul");
    createUlEl.id = "bookmarksList";
    createconatinerEL.appendChild(createUlEl);
    let createparaEl = document.createElement("p");
    createparaEl.style.color = "#ca44db";
    createparaEl.style.margin = "3px";
    createparaEl.style.fontWeight = "bold";
    createparaEl.textContent = formdata.sitename;
    console.log(createparaEl);
    createUlEl.appendChild(createparaEl);
    let anchorEl = document.createElement("a");
    anchorEl.href = formdata.siteurl;
    anchorEl.target = "_blank";
    anchorEl.textContent = formdata.siteurl;
    console.log(anchorEl);
    createUlEl.appendChild(anchorEl);
}

let bookmarkFormEl = document.getElementById("bookmarkForm");

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm(formdata);
    mainData(formdata);
    siteNameEl.value = "";
    siteUrlEl.value = "";
})
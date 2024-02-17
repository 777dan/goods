window.onload = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "goods.json", true);
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState != 4) return;
        if (xhttp.status != 200) {
            alert(xhttp.status + ": " + xhr.statusText);
        } else {
            let books = JSON.parse(xhttp.responseText);
            insertBooks(books);
        }
    };
}

function insertBooks(books) {
    var str = `<div class="wrap row">`;
    for (var i = 0; i < books.length; i++) {
        str += `<div class="bookWrap col s3">`;
        str += `<div class="image"><img src="${books[i].imageCover}" /></div>`;
        str += `<h4>${books[i].name}</h4>`;
        str += `<p>${books[i].description}</p>`;
        str += `<p>${books[i].price}</p>`;
        str += `<p>${books[i].stocked}</p>`;
        str += `</div>`;
    }
    str += `</div>`;
    document.getElementById("books").innerHTML = str;
}

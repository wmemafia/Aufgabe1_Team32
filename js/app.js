// JavaScript source code


function toggleColumnVisibility(col) {
    var tbl = document.getElementById('dataTable');
    var col = document.getElementsByTagName('col')[col];
    if (col) {
        if (col.style.visibility === "collapse") {
            col.style.visibility = "unset";
        } else {
            col.style.visibility = "collapse";
        }
    }
}

function sort(col, asc) {
    var tbl = document.getElementById('dataTable');
    var tbody = tbl.getElementsByTagName('tbody')[0];
    var rows = tbody.rows, rlen = rows.length, arr = new Array(), i, j, cells, clen;

    for (i = 0; i < rlen; i++) {
        cells =rows[i].cells;
        clen = cells.length;
        arr[i] = new Array();
        for(j = 0; j < clen; j++) {
            arr[i][j] = cells[j].innerHTML;
        }
    }
    
    arr.sort(function (a, b) {
        return (a[col] == b[col] ? 0 : ((a[col] > b[col]) ? asc : -1 * asc));
    });
    for (i = 0; i < rlen; i++) {
        arr[i] = "<td>" + arr[i].join("</td><td>") + "</td>";
    }
    tbody.innerHTML = "<tr>" + arr.join("</tr><tr>") + "</tr>";
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu) {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }

    }
}

function unresponsiveIt() {
    var w = window.outerWidth;
    var menu = document.getElementById('menu');
    if(w > 910) {
        menu.removeAttribute('style');
    }
    else {
        console.log('is not 910');
        if(!menu.hasAttribute('style')) {
            console.log('hast not style');
            menu.style.display = "none";
        }
    }

}

function preventDefault() {
    var temp = document.getElementsByClassName('toggles');
    for (var i = 0; i < temp.length; i++) {
        console.log(temp[i]);
        for (var x = 0; x < temp[i].length; x++) {
            console.log(temp[i]);
            temp[i][x].addEventListener("click", function(event) {
                console.log('TOD UND VERDERBEN');
                event.preventDefault();
            });
        }
    }

}

window.onload = preventDefault;


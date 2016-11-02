// JavaScript source code


function toggleColumnVisibility(col) {
    var tbl = document.getElementById('dataTable');
    var tbody = tbl.getElementsByTagName('tbody')[0];
    var thead = tbl.getElementsByTagName('thead')[0];
    var rows = tbody.rows;
    var head = thead.rows[0].cells;
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].cells;
        var cell = cells[col];
        if (cell.style.display === "none") {
            cell.style.display = "table-cell";
            head[col].style.display = "table-cell";
        } else {
            cell.style.display = "none";
            head[col].style.display = "none";
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
        if(!menu.hasAttribute('style')) {
            menu.style.display = "none";
        }
    }

}


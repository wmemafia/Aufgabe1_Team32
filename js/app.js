// JavaScript source code


function toggleColumnVisibility(col) {
    var tbl = document.getElementById('dataTable');
    var col = document.getElementsByTagName('col')[col];
    if (col) {
        if (col.style.visibility === "collapse") {
            col.style.visibility = "";
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


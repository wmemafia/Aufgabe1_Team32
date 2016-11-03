// JavaScript source code

/**
 * toggles the visibiliy of the selected table column
 * @param {number} col - the number of the column to be toggled
 */
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
/**
 * sorts the table based on the selected column ascending or descending
 * @param {number} col - the column number on which should be sorted
 * @param {number} asc - ascending when value is greater zero, descending when value is less than zero
 */
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
        console.log('a' + a[col]);
        console.log('b' + b[col]);
        console.log(a[col] == b[col] ? 0 : ((a[col] > b[col]) ? asc : -1 * asc));
        return (a[col] == b[col] ? 0 : ((a[col] > b[col]) ? asc : -1 * asc));
    });
    for (i = 0; i < rlen; i++) {
        arr[i] = "<td>" + arr[i].join("</td><td>") + "</td>";
    }
    tbody.innerHTML = "<tr>" + arr.join("</tr><tr>") + "</tr>";
}

/**
 * toggles menu style from none to block and vice versa
 */
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

/**
 * deletes menu style if inner width is greater then 910px and adds style if it is less than 910px
 */
function unresponsiveIt() {
    var w = window.innerWidth;
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


let fruits = ["apple", "banana", "pear", "grape"]

/*
<tr>
<td>apple</td>
<td> <button type="button" class="btn btn-sm btn-danger" >Delete</button> </td>
</tr>
*/

let rows = ""

for (let i = 0; i < fruits.length; i++) {
    //console.log(fruits[i])
    //let row = `<tr><td>` + fruits[i] + `</td><td><button type="button" class="btn btn-sm btn-danger" >Delete</button></td> </tr>`
    //let row = `<tr><td>${fruits[i]}</td><td><button type="button" class="btn btn-sm btn-danger" >Delete</button></td> </tr>`
    rows += `<tr><td>${fruits[i]}</td><td><button type="button" class="btn btn-sm btn-danger" onclick="btnDeleteRow(this)">Delete</button></td> </tr>`
}

document.querySelector("tbody").innerHTML = rows

function btnDeleteRow(btnElement) {
    if (confirm("Are you sure?")) {
        btnElement.closest('tr').remove()
    }
}

// új sor beszúrása a gomb lenyomásval
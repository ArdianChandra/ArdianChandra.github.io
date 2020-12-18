function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function autoGenerate() {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
    cell1.innerHTML = "Tugas Harian";
    cell2.innerHTML = "Mengerjakan soal rocket dengan baik";
    cell3.innerHTML = "Rabu, 16-12-2020";
    cell4.innerHTML = "Jumat, 19-12-2020";
    cell5.innerHTML = '<button onclick="deleteRow(this)" class="done action"><img src="aset/done 32.ico" alt="icon"></img></button>';
    cell6.innerHTML = '<button onclick="deleteRow(this)" class="cancel action"><img src="aset/cancel-32.ico" alt="icon"></img></button>';
  }

function yellowtheme(){
    document.body.style.backgroundImage = "url(aset/yellow_background.jpg)"
}

function bluetheme(){
    document.body.style.backgroundImage = "url(aset/blue_background.jpg)"
}

// var input = document.getElementById("buttonAdd");
// input.addEventListener("click", add())
// var row = 1;
function add(){
    var name = document.getElementById("taskname").value;
    var desc = document.getElementById("desc").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var table = document.getElementById("table");

    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    
    if(name === '' || desc === '' || from === '' || to === ''){
        alert("Please fill all data")
    }else{
        cell1.innerHTML = name;
        cell2.innerHTML = desc;
        cell3.innerHTML = from;
        cell4.innerHTML = to;
        cell5.innerHTML = '<button onclick="deleteRow(this)" class="done action"><img src="aset/done 32.ico" alt="icon"></img></button>';
        cell6.innerHTML = '<button onclick="deleteRow(this)" class="cancel action"><img src="aset/cancel-32.ico" alt="icon"></img></button>';
    }

    document.getElementById("taskname").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
}

function cancel(){
    document.getElementById("taskname").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
}

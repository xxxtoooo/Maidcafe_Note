let maids = JSON.parse(localStorage.getItem("maids")) || [];

function save() {
    localStorage.setItem("maids", JSON.stringify(maids));
}

function showMaids() {

    const list = document.getElementById("maidList");

    list.innerHTML = "";

    maids.forEach((maid, index)=>{

        list.innerHTML += `
        <div class="maidCard">

        <h2>${maid.name}</h2>

        <p>🎀 ${maid.color}</p>

        <p>${maid.catch}</p>

        <button onclick="deleteMaid(${index})">
        削除
        </button>

        </div>
        `;

    });

}

function addMaid(){

    const name=document.getElementById("name").value;
    const color=document.getElementById("color").value;
    const catchcopy=document.getElementById("catch").value;

    if(name=="") return;

    maids.push({

        name:name,

        color:color,

        catch:catchcopy

    });

    save();

    showMaids();

    document.getElementById("name").value="";
    document.getElementById("color").value="";
    document.getElementById("catch").value="";

}

function deleteMaid(index){

    maids.splice(index,1);

    save();

    showMaids();

}

showMaids();

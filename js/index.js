document.getElementById("add").addEventListener("click", Add);
document.getElementById("del").addEventListener("click", delBoxes);
document.getElementById("mark").addEventListener("click", MarkBoxes);
document.getElementById("clear").addEventListener("click", ClearBoxes);


function Add(form)
{
    form.preventDefault();
    var list = document.getElementById("listToDo");
    var text = document.getElementById("newTodo").value;
    document.getElementById("newTodo").value = " ";
    var ans = document.createElement('input');
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'checkboxs');
    ans.setAttribute('type', 'checkbox');
    ans.setAttribute('name', '2Do');
    var ansLabel = document.createElement('label');
    ansLabel.setAttribute('for','2Do');
    ansLabel.appendChild(ans);
    ansLabel.appendChild(document.createTextNode(text));
    newdiv.appendChild(ansLabel);
    list.appendChild(newdiv);
}

function delBoxes(){
    var ans = confirm("You sure you want to delete ALL your Todo's List!!???");
    if(ans)
        document.getElementById("listToDo").innerHTML = " ";
}

function ClearBoxes(){
    var checkboxs = document.getElementsByName("2Do");
    for ( var i=0; i < checkboxs.length; i++){
        if(checkboxs[i].type == 'checkbox')
            checkboxs[i].checked = false;
    }
}

function MarkBoxes(){
    var checkboxs = document.getElementsByName("2Do");
    for ( var i=0; i < checkboxs.length; i++){
        if(checkboxs[i].type == 'checkbox')
            checkboxs[i].checked = true;
    }

}
function aniadirListItem(){
    const text = document.getElementById('input2').value;
    console.log(text)
    const li = document.createElement('li');
    li.textContent = text;

    document.getElementById('change').appendChild(li);
}

function eliminarListItem(){
    const ul = document.getElementById('change');
    if (ul.children.length > 0) {
         ul.removeChild(ul.lastElementChild);
    } else {
        alert('UL vacio, no se puede eliminar.')
    }
}

const buttonAdd = document.getElementById('addToUl');
buttonAdd.addEventListener('click', aniadirListItem);

const buttonDel = document.getElementById('deleteToUl');
buttonDel.addEventListener('click', eliminarListItem);

function aniadirListItem(){
    const text = document.getElementById('input2').value;
    console.log(text)
    const li = document.createElement('li');
    li.textContent = text;

    document.getElementById('change').appendChild(li);
}

const button = document.getElementById('addToUl');
button.addEventListener('click', aniadirListItem);
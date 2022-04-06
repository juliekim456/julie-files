const people = [
    {name: "adri"},
    {name: "becky"},
    {name: "chris"},
    {name: "dillon"},
    {name: "evan"},
    {name: "frank"},
    {name: "george"},
    {name: "hugh"},
    {name: "jacob"},
    {name: "kristina"},
    {name: "patrick"},
    {name: "matilda"},
    {name: "velma"},
    {name: "saba"},
    {name: "chichi"},
    {name: "julie"},
    {name: "bob"},

];

// RENDER NAMES TO THE WEBPAGE

let ul = document.querySelector('ul');
let searchBar = document.querySelector('input');

function renderNamesToPage(people){
for(i=0; i < people.length; i++){
    console.log(people[i])
    // create an element
    let list_item = document.createElement("li");
    list_item.textContent = people[i].name;

    ul.appendChild(list_item);

}
}

renderNamesToPage(people)

// SEARCH NAMES

function searchNames(event){
    let searchString = event.target.value;
    console.log(searchString)

    const searchedName = people.filter(function(person){
        if(searchString){
            return person.name.includes(searchString)
        }
    })
    renderSearchedNames(searchedName)
}

function renderSearchedNames(searched){
    console.log('line 64: ', searched)
    clearList();
    for(i=0; i < searched.length; i++){
        let list_item = document.createElement('li');
        list_item.textContent = searched[i].name;

        ul.appendChild(list_item);
    
    }
}

function clearList(){
    ul.innerHTML = ""
}

searchBar.addEventListener('keyup', searchNames)
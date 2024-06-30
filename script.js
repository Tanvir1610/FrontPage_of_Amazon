var inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.id = 'search';
inputElement.placeholder = 'Search amazon.in';

var buttonElement = document.createElement('button');
// buttonElement.textContent = 'Search';

var iconElement = document.createElement('i');
iconElement.classList.add('fa-solid' , 'fa-magnifying-glass');

buttonElement.appendChild(iconElement);

var searchContainer = document.createElement('div');
searchContainer.style.marginBottom = '20px';
searchContainer.style.textAlign = 'center' ;
searchContainer.style.margin = '20px';
searchContainer.appendChild(inputElement);
searchContainer.appendChild(buttonElement);

var mainContainer = document.getElementById('search-container');
mainContainer.appendChild(searchContainer);

function searchOnPage(){
    var searchText = inputElement.value.trim().toLocaleLowerCase();

    if (searchText == ''){
        alert('Please enter a search term.');
        return;
    }

    var foundCount = 0;

    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element){
        element.classList.remove('highlight');
    });

    var allElements = document.querySelectorAll('body *');
    allElements.forEach(function(element){
        var textContent = element.textContent.toLocaleLowerCase();
        if(textContent.includes(searchText)){
            element.classList.add('highlight');
            foundCount++;
        }
    });

    if (foundCount == 0){
        alert('No matches found.');
    }
    else {
        alert('Found' + foundCount + 'match(es).');
    }
}

buttonElement.addEventListener('click' , searchOnPage);

inputElement.addEventListener('keydown' , function(event){
    if(event.key == 'Enter'){
        searchOnPage();
    }
});
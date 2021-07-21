
function newItem(){
  
//1. Adding a new item to the list of items: 
let li = $('<li></li>');
let inputValue = $('#input').val(); //.val() delivers the value of the input
li.append(inputValue);

if (inputValue === '') {
  alert('You must write something!');
} else {
  $('#list').append(li);
}

//2. Crossing out an item from the list of items:
function crossOut() {
  li.toggleClass('strike');
}

li.on('dblclick', crossOut);

//3(i). Adding the delete button "X": 
let crossOutButton = $('<button class="crossOutButton"></button>');
crossOutButton.append(crossOutButton.text("X"));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
  li.addClass('delete')
}
// 4. Reordering the items: 
$('#list').sortable();

// 5. adding newItem by clicking Enter-key:
$('#input').keypress(function(event){
  if(event.which == '13' ){
    $('#list').append(li);
  }
});

}


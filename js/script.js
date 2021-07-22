function newItem() {

	//1. Adding a new item to the list of items: 
	let listItem = $('<li></li>');
	let inputValue = $('#input').val(); //.val() delivers the value of the input
	listItem.append(inputValue);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
		$('#list').append(listItem);
	}

	//2. Crossing out an item from the list of items:
	function crossOut() {
		listItem.toggleClass('strike');
	}

	listItem.on('dblclick', crossOut);

	//3(i). Adding the delete button "X": 
	let crossOutButton = $('<button class="crossOutButton"></button>');
	crossOutButton.append("X");
	listItem.append(crossOutButton);

	crossOutButton.on('click', deleteListItem);
	//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
	function deleteListItem() {
		listItem.addClass('delete')
	}
	// 4. Reordering the items: 
	$('#list').sortable();
}

	// 5. Adding List-Items by pressing Enter-key
  let inputValue = $('#input').val();
  $('#input').on('keydown', function(e) {
    if (e.which == '13') {
      newItem();
      e.preventDefault();
      $('#input').val('');
    }
  });
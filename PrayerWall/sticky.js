$(document).ready(function(){
	loadStoredNotes();
	$(document).on('click', '#crteStkyBtn', addNote);
	$(document).on('click', '#addBtn', showOvrly);
	$(document).on('click', '#cnclStkyBtn', cnclOvrly);
	$(document).on('click', '#clnStorge', cleanNotes);
	$(document).on('click', '#wrapper', cnclOvrly);


$("textarea").on("change keyup input",function(){
	if($(this).val().length>0)$("#crteStkyBtn").removeClass("ntActv");
	else if($(this).val().length>100)
	this.value=this.value.substring(0,max);
	else $("#crteStkyBtn").addClass("ntActv")});

	console.log(localStorage.length);
});

function cleanNotes(){
	localStorage.clear();
	$('#stkyNts').empty();
}

function getStoredNotes(){
	var storedNotes= new Array();
	for(var i =0; i< localStorage.length; i++){
		 storedNotes.push(localStorage[localStorage.key(i)]);
	}
	return storedNotes;
}

function loadStoredNotes(){
	var pastNotes= getStoredNotes()
	console.log(getStoredNotes());
	if(pastNotes.length > 1){
		for (item in pastNotes){
			createSticky(pastNotes[item]);
		}
	}else if(pastNotes.length > 0){
			createSticky(pastNotes);
	}
}

function showOvrly(){
	$('#stkyOvrly').removeClass('hidden');
	$('#wrapper').addClass('hideOvrly');
}

function cnclOvrly(){
	$('#stkyOvrly').addClass('hidden');
	$('#wrapper').removeClass('hideOvrly');
	$('.txtBox').val('');
}

function addNote(){
     var usrInput = $('.txtBox').val();
	 //console.log(usrInput);

	if(usrInput.length > 0){
		console.log($(this));
		$('#').removeClass('ntActv');
		addtoSticky(usrInput);
		cnclOvrly();
		//console.log(notes);
	}else{

	}
}


function addtoSticky(note){
	if(note.length > 0){
		console.log(note);
		createSticky(note);
		localStorage.setItem('note_'+note.length, note);
	}
}

function createSticky(text){
	$('#stkyNts').append('<li class="box">'+text+'</li>');
}

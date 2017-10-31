function show(){
	var a = document.getElementById('main-block');
	a.innerHTML = ('<span>Good News!</span>');
	console.log('Done');
};

window.onload = function() {
    show();
};

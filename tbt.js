// trial by typing js


document.addEventListener('keydown', function(event) {
	var newContent = document.getElementById('content_header1').innerHTML + "";
	if (event.key == 'Backspace') {
		newContent = document.getElementById('content_header1').innerHTML + "";
		if (newContent[newContent.length - 1] == ";") {
			for (let i = newContent.length - 1; i > 0; i--) {
				if (newContent[i] == "&") {
					document.getElementById('content_header1').innerHTML = newContent.substring(0, i - 1);
					break;
				}
			}
		}
		else {
			document.getElementById('content_header1').innerHTML = newContent.substring(0, newContent.length - 1);
		}
	}
	else if (event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 111 || event.keyCode >= 186 && event.keyCode <= 222) {
		if (newContent.length < 50) {
			document.getElementById('content_header1').innerHTML += event.key ;
		}
	}
});
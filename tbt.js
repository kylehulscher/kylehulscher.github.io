// trial by typing js1

const myRequest = new Request('https://raw.githubusercontent.com/kylehulscher/kylehulscher.github.io/main/word_list.json');
var myList = [];

function loadWordList() {
	fetch(myRequest)
	  .then((response) => response.json())
	  .then((data) => {
	    for(var i = 0; i < data.length; i++) {
	    	myList.push(data[i].of);
	    }}).then(function() {
			for (var i = 0; i < 40; i++) {
				var ind = Math.floor(Math.random() * myList.length);
				document.getElementById('content_header1').innerHTML += myList[ind] + " ";
			}})
		}

loadWordList();

function headingComparator() {
	var header1html = document.getElementById('content_header1').innerHTML + "";
	var header2html = document.getElementById('content_header2').innerHTML + "";
	for (var i = 0; i < header2html.length; i++) {
		if (header2html[i] != header1html[i]) {
			console.log("no");
			document.getElementById('content_header2').innerHTML = header2html.substring(0, i) + '<span class="wrongChar">' + header2html[i] + '</span>' + header2html.substring(i + 1, header2html.length);
			
		}
	}
}

document.addEventListener('keydown', function(event) {
	var header1String = document.getElementById('content_header1').innerText + "";
	var header2String = document.getElementById('content_header2').innerText + "";
	if (event.key == 'Backspace') {
		if (header2String[header2String.length - 1] == ";") {
			for (let i = header2String.length - 1; i >= 0; i--) {
				if (header2String[i] == "&") {
					document.getElementById('content_header2').innerText = header2String.substring(0, i);
					break;
				}
				else if (i == 0) {
					document.getElementById('content_header2').innerText = header2String.substring(0, header2String.length - 1);
				}
			}
		}
		else {
			document.getElementById('content_header2').innerText = header2String.substring(0, header2String.length - 1);
		}
	}
	else if (event.keyCode == 32 || event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 111 || event.keyCode >= 186 && event.keyCode <= 222) {
		if (header2String.length < header1String.length - 1) {
			document.getElementById('content_header2').innerText += event.key;
		}
	}
	headingComparator();
});
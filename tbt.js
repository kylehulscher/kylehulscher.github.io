// trial by typing js1


document.addEventListener('keydown', function(event) {
	var newContent = document.getElementById('content_header1').innerHTML + "";
	if (event.key == 'Backspace') {
		newContent = document.getElementById('content_header1').innerHTML + "";
		if (newContent[newContent.length - 1] == ";") {
			for (let i = newContent.length - 1; i >= 0; i--) {
				if (newContent[i] == "&") {
					document.getElementById('content_header1').innerHTML = newContent.substring(0, i);
					break;
				}
				else if (i == 0) {
					document.getElementById('content_header1').innerHTML = newContent.substring(0, newContent.length - 1);
				}
			}
		}
		else {
			document.getElementById('content_header1').innerHTML = newContent.substring(0, newContent.length - 1);
		}
	}
	else if (event.keyCode == 32 || event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 111 || event.keyCode >= 186 && event.keyCode <= 222) {
		if (newContent.length < 500) {
			if (event.keyCode == 32) {
				document.getElementById('content_header1').innerHTML += "&nbsp;";
			}
			else {
				document.getElementById('content_header1').innerHTML += event.key;
			}
		}
	}
});

// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}

syncReadFile('./word_list.csv');
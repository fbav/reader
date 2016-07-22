Load text - asynchronous call

Create a stop words list e.g. look for frequently occuring words such as 'the', 'and', 'is', 'a'
Tokenize the rest. This gives us a lookup table

Find duplicates in the remaining if using es6 we can use sets e.g.:
function makeUniqueSet(arr) {
   return Array.from(new Set(arr));
}



Use Web Workers to do processing if on the client


	<input type="text" id="search">
	<input type="button" id="button" onmousedown="doSearch(document.getElementById('fileDisplayArea').value)" value="Find">
	
		function readFile () {
			var fileInput = document.getElementById('fileInput');
			var fileDisplayArea = document.getElementById('fileDisplayArea');

			fileInput.addEventListener('change', function (e) {
				var file = fileInput.files[0];
				var textType = /text.*/;

				if (file.type.match(textType)) {
					var reader = new FileReader();

					reader.onload = function (e) {
						fileDisplayArea.innerText = reader.result;
					}

					reader.readAsText(file);
				} else {
					fileDisplayArea.innerText = "File not supported!"
				}
			});



			function doSearch(text) {
				if (window.find && window.getSelection) {
					document.designMode = "on";
					var sel = window.getSelection();
					sel.collapse(document.body, 0);

					while (window.find(text)) {
						document.getElementById("button").blur();
						document.execCommand("HiliteColor", false, "yellow");
						sel.collapseToEnd();
					}
					document.designMode = "off";
				} else if (document.body.createTextRange) {
					var textRange = document.body.createTextRange();
					while (textRange.findText(text)) {
						textRange.execCommand("BackColor", false, "yellow");
						textRange.collapse(false);
					}
				}
			}
		}
	

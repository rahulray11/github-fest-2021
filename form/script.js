const name = document.forms["myForm"]['name'].value;
const cls = document.getElementById("cls").value;

function validate() {
	if (name == '') {
		alert('please filled name field.');
		return false;
	}

}
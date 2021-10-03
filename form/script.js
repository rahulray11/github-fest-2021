function validate(e) {
    e.preventDefault();
    const name = document.forms["myForm"]['name'].value;
    const cls = document.getElementById("cls").value;

	if (name == '') {
		alert('please filled name field.');
		return false;
	} else if (cls == '') {
		alert('please filled class field.');
		return false;
    } else {
        document.forms["myForm"].submit();
    }
}
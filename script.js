//your JS code here. If required.
let key = document.getElementById("keys");
const student = {
	name : "umesh",
	getKeys: function(){
		return Object.keys(student);
	}
	
}
document.write(student.getKeys());
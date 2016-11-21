// window.onload = function() {
// 	document.getElementById('myBtn').addEventListener ('click', function () {
// 		document.getElementById('myModal').style.display = "block"
// 	})
// }
document.getElementsByClassName('close')[0].addEventListener ('click', function(){
	document.getElementById('myModal').style.display = "none"
})

setTimeout(showModal,3000)

function showModal(){
	document.getElementById('myModal').style.display = "block"
}

document.getElementsByTagName("button")[0].addEventListener("click", changeText);

// function changeText(){
	// document.getElementsByTagName
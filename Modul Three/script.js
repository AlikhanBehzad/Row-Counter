/*

let countEl
let Str = document.getElementById("countString")
let counEl =document.getElementById("count-el")
console.log(countEl)



function increment(){
	let count =0
 	count = count+1
	countEl.innerText=count
}
increment()
function save(){
	console.log(count)
}
save()

//let unsername ="You have three notifications!"


/*let name ="Alikhan "
let greetings ="Hi! "
let WelC = document.getElementById("welCome-id")
WelC.innerText = greetings+name + "👋"
*/
/*console.log(count)
function safe(){
	let Str = count +" - "
	countString.innerText +=Str
console.log(count)

}
save()
*/
let saveEl = document.getElementById("countString")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function Save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    saveEl.innerText =0
    count=0
}

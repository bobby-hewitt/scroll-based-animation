var trees = document.getElementsByClassName('tree')
var ground = document.getElementById('scene1Ground')
var factory = document.getElementById('factory')


window.onscroll = function(e){
	window.requestAnimationFrame(run)
}

function run(){
	const windowPos = window.pageYOffset
	const w = window.innerWidth 
	if (windowPos < w * 2) moveTrees(windowPos, 0, w * 2)
	else if (windowPos < w * 4) changeGroundColor(windowPos, w * 2, w * 4)
	else if (windowPos < w * 6) animateFactoryIn(windowPos, w*4, w*6)
}

function moveTrees(windowPos, start, end){
	var y = windowPos - start
	var range = end - start
	console.log(y, range)
	for (var i = 0; i < trees.length; i++){
		trees[i].style.marginLeft = (y /2) + 'px'
		if (y > (range /2)){
			console.log(2 - (y /  (range /2)))
			trees[i].style.opacity =2 - (y /  (range /2))
		}
	}
}

function changeGroundColor(windowPos, start, end){
	var y = windowPos - start
	var range = end - start
	ground.style.background = 'rgb(30,' + mapInt(y, range, 0, 20, 100) + ',20)'
	// console.log(map(y, 0, range, 20, 100))
}

function animateFactoryIn(windowPos, start, end){
	var y = windowPos - start
	var range = end - start
	factory.style.opacity = map(y, 0, range, 0, 1)
	console.log(map(y, 0, range, 0, 1))
}



// the map function returns a number with one 
function mapInt(num, inMin, inMax, outMin, outMax) {
  return Math.floor((num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin)
}
function map(num, inMin, inMax, outMin, outMax) {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
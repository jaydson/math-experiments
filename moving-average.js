// Moving Average
const data = [33,38,31,35,30,36,34,39,39,36,40,38,37,39,32,38,37,39,37,35,37,34,35,36]

function movingAverage(data, n) {
	let sum = 0
	let index = data.length
	let mean

	for (let i = n; i > 0; i--) {
		index --
		sum += data[index]
	}
	mean = sum / n
	return mean
}

// Mean squared error
function mse(data, n) {
	let total = 0
	for (let i = n; i < data.length; i++) {
		let mA = movingAverage(data.slice(0, i), n)
		let sub = data[i] - mA
		let r = sub * sub
		total += r
	}
	return total / (data.length - n)
}

mse(data, 2)

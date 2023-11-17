const conversionEl1 = document.getElementById("conversion1")
const conversionEl2 = document.getElementById("conversion2")
const conversionEl3 = document.getElementById("conversion3")
const input = document.getElementById("input")
const btn = document.getElementById("btn")

const units = {
    meter: 3.281, // 1 meter = 3.281 feet
    feet: 0.304, // 1 feet = 0.304 meter
    liter: 0.264, // 1 liter = 0.264 gallon
    gallon: 3.785, // 1 gallon = 3.785 liter
    kg: 2.204, // 1 kg = 2.204 pound
    pound: 0.453, // 1 pound = 0.453 kg
}

btn.addEventListener("click", function() {
    const val = input.value;
    const { meter, feet, liter, gallon, kg, pound } = units
    conversionEl1.textContent = `${val} meters = ${calcRes(meter)} feet | ${val} feet = ${calcRes(feet)} meters`
    conversionEl2.textContent = `${val} liters = ${calcRes(liter)} gallons | ${val} gallons = ${calcRes(gallon)} liters`
    conversionEl3.textContent = `${val} pounds = ${calcRes(kg)} pounds | ${val} pounds = ${calcRes(pound)} kilos`
})

function calcRes(rate) {
    const val = input.value;
    const res = val * rate
    return res.toFixed(3)
}
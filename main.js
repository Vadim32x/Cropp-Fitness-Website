fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log("response:", response)

        return response.json()
    })
    .then(json => console.log(json))






















/*
const serverURL = "https://jsonplaceholder.typicode.com/todos/1"

async function getData(url) {
    let response = await fetch(url) //делаем запрос и полученный запрос записываем в переменную
    console.log("-response:", response)

    let data = await response.json() // достаем из него данные

    console.log("data:", data)
    return data
}

getData(serverURL)

let data = await getData(serverURL)
let output = document.querySelector(".output")
console.log("output:", output)

output.innerHTML = data.title 
*/
const user = {
    name: "david",
    age: 20
}

console.log(user["name"])

let json = JSON.stringify(user)

console.log(json)

let user2 = JSON.parse(json)

console.log(user2)



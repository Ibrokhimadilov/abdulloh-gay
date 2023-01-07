let body = document.querySelector("#body")
let p = document.querySelector("#p")
const users = [
    {
        id: 1,
        username: "cronaldo",
        folovers: 520,
        contry: "portugal",
        number: 7
    },
    {
        id: 2,
        username: "chpepsi",
        folovers: 430,
        contry: "argentina",
        number: 30
    },
    {
        id: 3,
        username: "mbape",
        folovers: 100,
        contry: "france",
        number: 7
    }
]
users.map(player => {
    const bodyTr = document.createElement("tr")
    const playersValue = Object.values(player)
})

body.addEventListener("click", () => {
    p.innerHTML = "Abdulloh Gey"
})
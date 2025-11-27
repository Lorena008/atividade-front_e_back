const button = document.querySelector("button")

button.onclick = (event) => {
    event.preventDefault()
    sendUser()
}

async function sendUser() {
    const name = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#senha").value

    const user = {
        name,
        email,
        password
    }

    const response = await fetch("https://backend02mb-n4c2.vercel.app/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)

    window.location.href = "../index.html"
}
function init() {
    const navUL = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    //verifica se existe um usuãrio logado e mostra o nome na ela e botão de sair
    if (user) {
        navUL.innerHTML += `
            <li>
                <a href="./pages/jogar.html">Jogar</a>
            </li>
            <li><h2>Usuário: ${user.name}</h2></li>
            <li><button>Sair</button></li>
        `
        return
    }

    //só vai aparecer quando o usuário não estiver logado
    navUL.innerHTML += `
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

init()
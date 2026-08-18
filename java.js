const lightTheme = document.getElementById("lightTheme");
const darkTheme = document.getElementById("darkTheme");
const alienTheme = document.getElementById("alienTheme");

const buttons = [
    lightTheme,
    darkTheme,
    alienTheme
];

function changeTheme(theme) {

    // Remove os temas anteriores
    document.body.classList.remove(
        "light-theme",
        "alien-theme"
    );

    // Define o novo tema
    if (theme === "light") {
        document.body.classList.add("light-theme");
    }

    if (theme === "alien") {
        document.body.classList.add("alien-theme");
    }

    // Atualiza botão selecionado
    buttons.forEach(button => {
        button.classList.remove("selected");
    });

    if (theme === "light") {
        lightTheme.classList.add("selected");
    }

    if (theme === "dark") {
        darkTheme.classList.add("selected");
    }

    if (theme === "alien") {
        alienTheme.classList.add("selected");
    }

    // Salva o tema
    localStorage.setItem("theme", theme);
}


// Clique nos botões

lightTheme.addEventListener("click", () => {
    changeTheme("light");
});

darkTheme.addEventListener("click", () => {
    changeTheme("dark");
});

alienTheme.addEventListener("click", () => {
    changeTheme("alien");
});


// Recupera o tema salvo

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    changeTheme(savedTheme);
} else {
    changeTheme("dark");
}
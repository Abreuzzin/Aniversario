// =========================
// ELEMENTOS
// =========================

const btnAbrir =
    document.getElementById("btnAbrir");

const presente =
    document.getElementById("presente");

const aniversario =
    document.getElementById("aniversario");

const btnCarta =
    document.getElementById("btnCarta");

const envelope =
    document.getElementById("envelope");

const mensagem =
    document.getElementById("mensagem");


// =========================
// ABRIR PRESENTE
// =========================

function abrirPresente() {

    const tampa =
        document.querySelector(
            ".presente-tampa"
        );

    if (tampa) {

        tampa.style.transform =
            "translateY(-55px) rotate(-8deg)";

    }

    if (btnAbrir) {

        btnAbrir.style.opacity = "0";

        btnAbrir.style.transform =
            "translateY(10px)";

        btnAbrir.style.pointerEvents =
            "none";

    }

    setTimeout(() => {

        if (aniversario) {

            aniversario.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 700);

}


// Clique no presente

if (presente) {

    presente.addEventListener(
        "click",
        abrirPresente
    );

}


// Clique no botão

if (btnAbrir) {

    btnAbrir.addEventListener(
        "click",
        abrirPresente
    );

}


// =========================
// ANIMAÇÕES AO ROLAR
// =========================

const elementos =
    document.querySelectorAll(
        ".conteudo-aniversario, " +
        ".titulo-lembrancas, " +
        ".foto-card, " +
        ".conteudo-carta, " +
        ".conteudo-final"
    );


const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "aparecer"
                        );

                        observador.unobserve(
                            entrada.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(
    (elemento) => {

        observador.observe(
            elemento
        );

    }
);


// =========================
// EFEITO NAS FOTOS
// =========================

const fotos =
    document.querySelectorAll(
        ".foto-container img"
    );


fotos.forEach(
    (foto) => {

        foto.addEventListener(
            "mouseenter",
            () => {

                foto.style.transform =
                    "scale(1.05)";

            }
        );


        foto.addEventListener(
            "mouseleave",
            () => {

                foto.style.transform =
                    "scale(1)";

            }
        );

    }
);


// =========================
// ABRIR CARTINHA
// =========================

function abrirCarta() {

    const tampa =
        document.querySelector(
            ".envelope-tampa"
        );

    if (tampa) {

        tampa.style.transform =
            "rotateX(180deg)";

    }

    if (btnCarta) {

        btnCarta.style.opacity = "0";

        btnCarta.style.transform =
            "translateY(10px)";

        btnCarta.style.pointerEvents =
            "none";

    }

    setTimeout(() => {

        if (mensagem) {

            mensagem.style.display =
                "block";

        }

    }, 600);

}


// Clique no envelope

if (envelope) {

    envelope.addEventListener(
        "click",
        abrirCarta
    );

}


// Clique no botão

if (btnCarta) {

    btnCarta.addEventListener(
        "click",
        abrirCarta
    );

}


// =========================
// CARREGAMENTO
// =========================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "carregado"
        );

    }
);
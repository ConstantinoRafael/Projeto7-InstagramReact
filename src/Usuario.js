import React from "react";


export default function Usuario() {
    const [nome, setNome] = React.useState("Catana")
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")

    function trocarNome() {
        const nomePrompt = prompt("Qual o seu nome?");
        setNome(nomePrompt);
    }

    function trocaImagem() {
        const imagemPrompt = prompt("Qual a imagem nova?");
        setImagem(imagemPrompt);
    }

    return (
        <div class="usuario">
            <img src={imagem} onClick={trocaImagem}/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={trocarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}
import React from "react";

function Post(props) {
    let [curtir, setCurtir] = React.useState("heart-outline");
    let [descurtir, setDescurtir] =  React.useState("heart");
    let [salvar, setSalvar] = React.useState("bookmark-outline");
    let [postCurtido, setPostCurtido] = React.useState(props.ncurtidas); //101523
    
    function curtirPost() {
        const newPostCurtido = "heart";
        setCurtir(newPostCurtido);
        setPostCurtido(parseInt(postCurtido)+1);
    }

    function descurtirPost() {
        const newPostDescurtido = "heart-outline";
        setCurtir(newPostDescurtido);
        setPostCurtido(parseInt(postCurtido)-1);
    
    }

    function salvarPost() {
        const postSalvo = "bookmark";
        setSalvar(postSalvo);
    }    

     return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imgp} />
                        {props.p}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagem} onClick={curtirPost}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon class={(curtir === "heart-outline") ? "preto" : "hidden"} name="heart-outline" onClick={curtirPost}></ion-icon>
                            <ion-icon class={(curtir === "heart") ? "heart" : "hidden"} name="heart" onClick={descurtirPost}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={salvar} onClick={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imgp} />
                        <div class="texto">
                            Curtido por <strong>{props.usuario}</strong> e <strong>{postCurtido} outras pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}


export default function Posts() {
    const post = [
        {imgp:"assets/img/meowed.svg", p:"meowed", imagem:"assets/img/gato-telefone.svg", usuario:"respondeai", ncurtidas:"101523"},
        {imgp:"assets/img/barked.svg", p:"barked", imagem:"assets/img/dog.svg", usuario:"adorable_animals", ncurtidas:"200541"},
    ]

    return (
        <div class="posts">
            {post.map((p) => (<Post imgp = {p.imgp} p = {p.p} imagem = {p.imagem} usuario = {p.usuario} ncurtidas = {p.ncurtidas} />))} 
        </div>
    )
}
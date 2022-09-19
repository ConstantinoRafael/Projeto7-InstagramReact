function Post(props) {
    console.log(props);
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
                    <img src={props.imagem} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imgp} />
                        <div class="texto">
                            {props.texto}
                        </div>
                    </div>
                </div>
            </div>
    )
    
}


export default function Posts() {
    const post = [
        {imgp:"assets/img/meowed.svg", p:"meowed", imagem:"assets/img/gato-telefone.svg", texto:"Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"},
        {imgp:"assets/img/barked.svg", p:"barked", imagem:"assets/img/dog.svg", texto:"Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"},
    ]

    return (
        <div class="posts">
            {post.map((p) => (<Post imgp = {p.imgp} p = {p.p} imagem = {p.imagem} texto = {p.texto} />))} 
        </div>
    )
}
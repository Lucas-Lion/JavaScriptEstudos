// CRUD
// CREATE - READ - UPDATE - DELETE

const miniTwitter = {
    usuarios: [
        {
            username: 'lucas_lionv',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'lucas_lionv',
            content: 'Meu primeiro tweet'
        }
    ],
};

// CREATE
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}

criaPost({owner: 'lucas_lionv', content: 'Segundo Tweet'});
criaPost({owner: 'lucas_lionv', content: 'Terceiro Tweet'});
console.log(miniTwitter.posts)

// READ
function pegaPosts() {
    return miniTwitter.posts;
}

console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const PostqueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(PostqueVaiSerAtualizado)
    PostqueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost (1, 'novo conteudo do post')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })

    miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts())
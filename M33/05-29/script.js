function acharLivro (){
    const isbn = document.getElementById('isbn').value
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if (data.erro) {
                alert('Livro não encontrado')
                return
            }

            document.getElementById('title').innerText += data.title;
            document.getElementById('autor').innerText += data.authors;
            document.getElementById('publisher').innerText += data.publisher;
            document.getElementById('n_paginas').innerText += data.page_count;
            document.getElementById('sinopse').innerText = data.synopsis;
        })
        .catch((error) => {
            console.log('Erro na requesição:', error)
            alert("Erro ao buscar o livro")
        })
}
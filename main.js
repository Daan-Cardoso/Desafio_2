(function Main() {
    var clients = [];
    const $list = document.querySelector('#list');
    let $listItem = document.getElementsByTagName('li');
    const $searchInput = document.querySelector('#input');


    async function FetchCliente() {
        clients = [{
                name: "Kauan Pereira Rocha",
                telefone: "(81) 9479-5548"
            },
            {
                name: "Antônio Oliveira Cunha",
                telefone: "(73) 3626-4953"
            },
            {
                name: "Paulo Ferreira Sousa",
                telefone: "(61) 5620-5278"
            },
            {
                name: "Beatrice Silva Gomes",
                telefone: "(81) 9362-3427"
            },
            {
                name: "Gabriela Oliveira Sousa",
                telefone: "(19) 6770-3263"
            },
            {
                name: "Alex Oliveira Correia",
                telefone: "(32) 6974-7896"
            },
            {
                name: "Breno Azevedo Martins",
                telefone: "(91) 7167-8651"
            },
            {
                name: "Giovanna Rocha Barros",
                telefone: "(21) 6495-8033"
            },
            {
                name: "Daniel Sousa Carvalho",
                telefone: "(81) 9852-4166"
            },
            {
                name: "Luis Rodrigues Barros",
                telefone: "(85) 8946-9329"
            },
            {
                name: "Felipe Fernandes Almeida",
                telefone: "(21) 7167-9927"
            },
            {
                name: "Lavinia Ribeiro Ferreira",
                telefone: "(35) 6497-5127"
            },
            {
                name: "Danilo Araujo Costa",
                telefone: "(91) 5514-7876"
            },
            {
                name: "Leila Fernandes Cunha",
                telefone: "(11) 5356-3574"
            },
            {
                name: "Livia Silva Ribeiro",
                telefone: "(47) 4241-8712"
            }
        ]
    }

    function createItem(clientName, clientTelefone, imgIndex) {
        let card = document.createElement('li');
        card.classList.add('list__item');

        let img = document.createElement('img');
        img.src = `./img/user0${imgIndex}.png`
        img.classList.add('list__photo')

        let nameParagraph = document.createElement('p');
        nameParagraph.classList.add('list__paragraph');
        let name = document.createTextNode(clientName);

        let telefoneParagraph = document.createElement('p');
        telefoneParagraph.classList.add('list__telefone');
        let telefone = document.createTextNode(clientTelefone);

        $list.appendChild(card)
        card.appendChild(img);
        nameParagraph.appendChild(name);
        telefoneParagraph.appendChild(telefone);
        card.appendChild(nameParagraph);
        card.appendChild(telefoneParagraph);
    }

    function Update() {
        let imgIndex = 1;
        for (i in clients) {
            imgIndex === 3 ? imgIndex = 1 : imgIndex++;
            createItem(clients[i].name, clients[i].telefone, imgIndex);
        }
    }

    function clearFilter() {
        for (i in clients) {
            $listItem[i].style.display = "";
        }
    }

    function padronizeSearch(word) {
        return word.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    }

    function filter(inputedWord) {
        if (inputedWord !== "") {
            for (let i = 0; i < clients.length; i++) {
                padronizeSearch(clients[i].name).indexOf(inputedWord) > -1 ? $listItem[i].style.display = "" : $listItem[i].style.display = "none";
            }
        } else {
            clearFilter();
        }
    }

    $searchInput.addEventListener('keyup', () => {
        filter(padronizeSearch($searchInput.value));
    })

    async function Start() {
        await FetchCliente();
        Update();
    }



    Start();


    window.Main = {

    }

})();
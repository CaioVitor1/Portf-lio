import literaBooksGif from "../src/assets/literaBooks/litera_books.gif"
import trackitGif from "../src/assets/Trackit/trackit_gif.gif"
import singMeGif from "../src/assets/singme/singMeaSong_Cypess.gif"
import zapRecallGif from "../src/assets/zaprecall/zaprecall.gif"
import cineflexGif from "../src/assets/cineflex/cineflex.gif"
import parrotsGif from "../src/assets/parrots/parrots.gif"
import valex from "../src/assets/valex/valex.png"
import literaBooksBack from "../src/assets/literaBooks/livros.jpg"
import repoprovas from "../src/assets/repoprovas/iconReadMe.svg"
export async function getProjects(projectId){
    console.log(projectId)
    const project = [{id: 1,
        name:	"LiteraBooks",
        deploy:	"https://literabooks.vercel.app/",
        front: "https://github.com/CaioVitor1/literaBooks_Front",
        back: "https://github.com/CaioVitor1/literaBooks_back",
        repository: "",
        image1: literaBooksGif,
        description:	"Esse é um projeto autoral onde fui responsável por todo front-end, Back-End e modelagem do banco de dados. Nesse projeto você poderá fazer seu cadastro na nossa rede social e preencher seu perfil informando algumas de suas preferências, como: autor favorito, genêros favoritos, livro favorito, meta de leitura anual e muito mais! Ao entrar em nossa plataforma você receberá sugestões de livros baseados nos seus gostos preferidos, vendo um belo resumo do livro. Além disso, você poderá ver quais as últimas leituras de outros usuários e saber o que eles acharam dos livros!",
        technologies: ["HTML","JavaScript", "TypeScript", "React.js", "Node.js", "styled Components", "PostgreSQL", "Prisma (ORM)","Testes automatizados", "autenticação JWT", "Responsividade" ],    
        functionalities: [ "Escolha de preferências", "Meta de leitura", "Timeline", "Comunidade literária", "Perfil do usuário"]
    },
        {id: 2,
        name:	"Trackit",
        deploy:	"https://track-it-rose.vercel.app/",
        front: "",
        back: "",
        repository: "https://github.com/CaioVitor1/TrackIt",
        image1: trackitGif,
        description:	"O objetivo desse projeto foi contruir uma aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas slightly_smiling_faceO cliente poderá poderá fazer o cadastro na biblioteca e escolher quais seus hábitos/afazeres que tem durante os dias da semana, podendo editá-lo em caso de preenchimento incorreto. Ao escolher seus hábitos, o usuário poderá dar um 'check' ao finalizar a tarefa e conferir quais de suas metas diárias foram cumpridas e quais ainda precisam ser realizadas.",
        technologies: ["HTML","JavaScript",, "React.js", "styled Components", "react-loader-spinner", "dayjs", "react-circular-progressbar"],    
        functionalities: [ "Definição de hábitos", "Checklist em cada hábito", "histórico de hábitos"]
    },
    {id: 3,
    name:	"Sing me a song",
    deploy:	"",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/Sign-me-a-song",
    image1: singMeGif,
    description:	"Já pediu para alguém alguma recomendação de música? Chegou a hora de transformar isso em código. Nesse projeto, construi a rede Sing me a Song. Ou melhor, os testes desta rede! Sing me a song é uma aplicação para recomendação anônima de músicas. Quanto mais as pessoas curtirem uma recomendação, maior a chance dela ser recomendada para outras pessoas!",
    technologies: ["Node.Js", "Jest", "Supertest", "Cypress", "Prisma", "Express" ],    
    functionalities: [ "Testes unitários", "Testes de integração", "Testes de ponta a ponta"]
    },
    {id: 4,
    name:	"Cineflex",
    deploy:	"https://cineflex-mu.vercel.app/",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/Sign-me-a-song",
    image1: cineflexGif,
    description:	"Nesse projeto fizemos uma Single-Page Application (SPA) para um cinema, usando React Router e consumindo uma API! O cliente poderá escolher qual filme ele deseja assistir e em seguida selecionará quais os assentos deseja ocupar e qual horário de sua preferência. Será possível ver quais os assentos estarão reservados. Ao finalizar o pedido o cliente terá acesso aos dados de sua compra e será possível voltar ao menu inicial.",
    technologies: ["HTML", "CSS","JavaScript", "React.js"],    
    functionalities: [ "Escolha de filme", "Escolha de sessão", "Escolha de assento", "Resumo do pedido"]
    },
    {id: 5,
    name:	"ZapRecall",
    deploy:	"https://zap-recall-kappa.vercel.app/",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/Sign-me-a-song",
    image1: zapRecallGif,
    description:	"Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias Active Recall e Spaced Repetition. A ideia é ler a pergunta ou afirmação e tentar lembrar da reposta. Ao se deparar com a mesma, dependendo do esforço necessário para responder ou não o flashcard, você fica consciente de quais conteúdos estão frescos na memória e quais não estão, então, pode praticar com frequência os conteúdos que não estão. Quando lembramos instantaneamente de um flashcard, tivemos um 'Zap!'",
    technologies: ["HTML", "CSS","JavaScript", "React.js"],    
    functionalities: [ "Contagem de acertos", "Renderizações condicionais"]
    },
    {id: 6,
    name:	"Parrots Card Game",
    deploy:	"https://caiovitor1.github.io/Parrots-Card-Game/",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/Sign-me-a-song",
    image1: parrotsGif,
    description:	"Implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes! Esse jogo foi desenvolvido sem nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro!!",
    technologies: ["HTML", "CSS", "JavaScript"],    
    functionalities: [ "Contagem de jogadas", "Tempo de jogo", "Cards de diversos tamanhos"]
    },
    {id: 7,
    name:	"literaBooks - BackEnd",
    deploy:	"https://litera-books-back.vercel.app/",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/literaBooks_back",
    image1: literaBooksBack,
    description:	"Esse é um projeto autoral onde fui responsável por todo front-end, Back-End e modelagem do banco de dados. Nesse projeto você poderá fazer seu cadastro na nossa rede social e preencher seu perfil informando algumas de suas preferências, como: autor favorito, genêros favoritos, livro favorito, meta de leitura anual e muito mais! Ao entrar em nossa plataforma você receberá sugestões de livros baseados nos seus gostos preferidos, vendo um belo resumo do livro. Além disso, você poderá ver quais as últimas leituras de outros usuários e saber o que eles acharam dos livros!",
    technologies: ["Node.Js","Jest", "Cypress", "JavaScript", "TypeScript", "PostgreSQL", "Prisma (ORM)","Testes automatizados", "autenticação JWT", "Responsividade" ],    
    functionalities: [ "Modelagem de banco de dados SQL" ,"Rotas de Cadastro", "Rota de login", "informações do usuário", "construção de Seed", "utilização de ORM", "Testes automatizados"]
    },
    {id: 8,
    name:	"Valex",
    deploy:	"",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/Valex",
    image1: valex,
    description:	"Nesse projeto foi construída uma API de cartões de benefícios usando Typescript. A API será responsável pela criação, recarga, ativação, assim como o processamento das compras.",
    technologies: ["TypeScript", "npm", "Node.Js", "PostgreSQL"],    
    functionalities: [ "Contagem de jogadas", "Tempo de jogo", "Cards de diversos tamanhos"]
    },    
    {id: 9,
    name:	"RepoProvas",
    deploy:	"",
    front: "", 
    back: "",
    repository: "https://github.com/CaioVitor1/RepoProvas",
    image1: repoprovas,
    description:	"Esse projeto é um um sistema de compartilhamento de provas entre estudantes! No RepoProvas qualquer pessoa pode procurar provas antigas de suas disciplinas e professores ou enviar provas antigas para ajudar os calouros. Fui responsável pela construção de API e testes de integração do sistema :)",
    technologies: ["TypeScript", "npm", "Node.Js", "Prisma", "PostgreSQL"],   
    functionalities: [ "Testes de integração", "Utilização de ORM (Prisma)", "Autenticação com token JWT"]
    },    
    
    
    
    ]
    for(let i = 0; i < project.length; i++){
        if(project[i].id == projectId){
            return project[i]
        }
    }
    
return "Não houve compatibilidade"
	
}
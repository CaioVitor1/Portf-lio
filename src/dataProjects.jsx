import literaBooksInitalPage from "../src/assets/fotoLiteraBooks.png"
import literaBooksSignIn from "../src/assets/signin.png"
import literaBookstimeline from "../src/assets/timeline.png"
import trackitLogo from "../src/assets/trackitLogo.png"
import trackitCheck from "../src/assets/trackitCheck.png"
import trackitHabits from "../src/assets/trackitHabitos.png"
import signmeasong from "../src/assets/signmeasong.svg"
import signmeasongimage1 from "../src/assets/singmeasongimage1.png"
import signmeasongimage2 from "../src/assets/singmeasongimage2.png"
export async function getProjects(projectId){
    console.log(projectId)
    const project = [{id: 1,
        name:	"LiteraBooks",
        deploy:	"https://literabooks.vercel.app/",
        front: "https://github.com/CaioVitor1/literaBooks_Front",
        back: "https://github.com/CaioVitor1/literaBooks_back",
        repository: "",
        image1: literaBooksInitalPage,
        image2:	literaBooksSignIn,
        image3: literaBookstimeline,
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
        image1: trackitLogo,
        image2:	trackitHabits,
        image3: trackitCheck,
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
    image1: signmeasong,
    image2:	signmeasongimage2,
    image3: signmeasongimage1,
    description:	"Já pediu para alguém alguma recomendação de música? Chegou a hora de transformar isso em código. Nesse projeto, construi a rede Sing me a Song. Ou melhor, os testes desta rede! Sing me a song é uma aplicação para recomendação anônima de músicas. Quanto mais as pessoas curtirem uma recomendação, maior a chance dela ser recomendada para outras pessoas!",
    technologies: ["Node.Js", "Jest", "Supertest", "Cypress", "Prisma", "Express" ],    
    functionalities: [ "Testes unitários", "Testes de integração", "Testes de ponta a ponta"]
    }

    ]
    for(let i = 0; i < project.length; i++){
        if(project[i].id == projectId){
            return project[i]
        }
    }
    
return "Não houve compatibilidade"
	
}
import literaBooksThumb from "../src/assets/literaBooks/leitor.jpg";
import trackitLogo from "../src/assets/Trackit/trackitLogo.png"
import signmeasong from "../src/assets/singme/signmeasong.svg"
import zapRecallLogo from "../src/assets/zaprecall/logo.png"
import cineflexLogo from "../src/assets/cineflex/cineflex.svg"
import parrotsLogo from "../src/assets/parrots/parrotsLogo.svg"
import valex from "../src/assets/valex/valex.png"
import literaBooksBack from "../src/assets/literaBooks/livros.jpg"
import repoprovas from "../src/assets/repoprovas/iconReadMe.svg"

export async function projectsMain(){
  
    const main = [  	
        {id: 1,
        name:	"LiteraBooks",
        banner:	literaBooksThumb,
        description:	"Projeto autoral e Full-Stack onde desenvolvi uma plataforma para usuários compartilharem suas experiências literárias!"
        },
        {id: 2,
        name:	"Trackit",
        banner:	trackitLogo,
        description:	"Projeto Front-End onde o objetivo foi contruir uma aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas!!"
        },
        {id: 3,
        name:	"Sing me a Song",
        banner:	signmeasong,
        description:	"Neste projeto recebi um front-end e back-end completamente implementados e fui responsável pela implementação de todos os testes automatizados do projeto!! "
        } 
        ];
  
    
return main
	
}

export async function projectsFront(){
   
    const front = [  	
        {id: 4,
        name:	"Cineflex",
        banner:	cineflexLogo,
        description:	"Projeto onde construimos uma plataforma que simula uma bilheteria de cinema!!"
        },
        {id: 5,
        name:	"ZapRecall",
        banner:	zapRecallLogo,
        description:	"Projeto onde o objetivo foi contruir app de flashcards chamado Zap Recall!"
        },
        {id: 6,
        name:	"ParrotsCardGame",
        banner:	parrotsLogo,
        description:	"Implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes! "
        } 
        ];
  
    
return front
	
}

export async function projectsBack(){
    
    const back = [  	
        {id: 7,
        name:	"LiteraBooks - BackEnd",
        banner:	literaBooksBack,
        description:	"Descrição do Back-End do projeto LiteraBooks"
        },
        {id: 8,
        name:	"Valex",
        banner:	valex,
        description:	"API de cartões de benefícios usando Typescript!"
        },
        {id: 9,
        name:	"RepoProvas",
        banner:	repoprovas,
        description:	"Construção de API e testes de integração de um sistema de compartilhamento de provas entre estudantes! "
        } 
        ];
  
    
return back
	
}


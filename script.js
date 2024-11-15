let container = document.querySelector('.container');

let game_store = [
    {
        name: "Tic Tac Toe",
        img: "https://github.com/anuhang9/tic_tac_toe/blob/master/tic_tac_toe.png?raw=true",
        link: "https://anuhang9.github.io/tic_tac_toe/"
    },
    {
        name: "Rock Paper Scissors",
        img: "https://github.com/anuhang9/rock_paper_scissor/blob/master/rock_paper_scissor.png?raw=true",
        link: "https://anuhang9.github.io/rock_paper_scissor/"
    },
    {
        name: "Flappy Bird",
        img: "https://github.com/anuhang9/flappy_bird/blob/master/flappy_bird.png?raw=true",
        link: "https://anuhang9.github.io/flappy_bird/"
    }
]

game_store.forEach((value)=>{
    
    
    // create nodes
    function create_nodes(){
        let card = document.createElement('a');
        card.classList.add('card');
        card.setAttribute('href', value.link);
        card.setAttribute('target', '_blank')

        let game_image = document.createElement('img');
        game_image.classList.add('game-image');
        game_image.setAttribute('src', value.img)
        card.appendChild(game_image);
        
        let game_name = document.createElement('h4');
        game_name.classList.add('game-name');
        let append_game_name = document.createTextNode(value.name);
        game_name.appendChild(append_game_name);
        card.appendChild(game_name);
        
        container.appendChild(card);
    }
    create_nodes()
})
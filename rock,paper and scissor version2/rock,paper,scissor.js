let score =JSON.parse(localStorage.getItem('score')) || {wins : 0 , loose : 0 , tie : 0};
      function reset_score(){
        score.wins=0;
        score.loose=0;
        score.tie=0
        update_score_element();
      }
      
      
      
      let isautoPlaying = false;
      let intervalId;
      function autoPlay(){
        const auto = document.querySelector('.auto-play-button');
        let autoPlayele =auto.innerHTML;
        if(autoPlayele === 'Auto Play'){
          auto.innerHTML = 'Stop Play'
        }
        else{
          auto.innerHTML = 'Auto Play'
        }
        if(!isautoPlaying){ 
         intervalId=setInterval(function(){
          const playerMove = pickcomp_move();
          play_game(playerMove);
        },1000);
        isautoPlaying = true;
      }
      else{
        clearInterval(intervalId);
        isautoPlaying = false;
      }
    }

    document.querySelector('.move-button-rock').addEventListener('click', ()=>{
      play_game('Rock');
    });

    document.querySelector('.move-button-paper').addEventListener('click', ()=>{
      play_game('Paper');
    });

    document.querySelector('.move-button-scissor').addEventListener('click', ()=>{
      play_game('Scissor');
    });

    document.body.addEventListener('keydown',(event)=>{
      if(event.key === 'r' || event.key === 'R'){
        play_game('Rock');
      }
      else if(event.key === 'p' || event.key === 'P'){
        play_game('Paper');
      }
      else if(event.key === 's' || event.key === 'S'){
        play_game('Scissor');

      }
      else if (event.key === 'Enter'){
        reset_score();
      }
      else if (event.key === 'a' || event.key === 'A'){
        autoPlay();
      }
      
    });


      function play_game(player_move){
        const comp_move=pickcomp_move();
        
      let result ='';
     
     if(player_move==='Scissor')
    {

      if('Rock'=== comp_move){
        result = 'You Lose';
      }
      else if(comp_move==='Paper'){
        result = 'You win';
      }
      else{
        result ='Tie'
      }
      
    }

     if(player_move==='Paper'){
      if('Rock'=== comp_move){
        result = 'You win';
      }
      else if(comp_move==='Paper'){
        result = 'Tie';
      }
      else{
        result ='You Lose'
      }
      ;
     }
     if(player_move==='Rock'){
      if('Rock'=== comp_move){
        result = 'Tie';
      }
      else if(comp_move ==='Paper'){
        result = 'You Lose';
      }
      else{
        result ='You win'
      }
     }
     if(result === 'You win'){
      score.wins+=1;
     }
     else if(result==='You Lose'){
      score.loose+=1;
     }
     else{
      score.tie+=1;
     }
     localStorage.setItem('score',JSON.stringify('score'));
     
     console.log(localStorage.setItem('score',JSON.stringify(score)));

     document.querySelector('.js-result').innerHTML = `You <img src="rock_paper_scissor_game_pictures/${player_move}-emoji.png" class ="move-icon">
  computer 
  <img src="rock_paper_scissor_game_pictures/${comp_move}-emoji.png" class="move-icon">`;
     document.querySelector('.js-moves').innerHTML = `You choosed ${player_move}
     and computer choosed ${comp_move}`
     document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} Looses : ${score.loose} Ties : ${score.tie}`
    }

    function update_score_element(){
     alert(document.querySelector('.js-score').innerHTML =`Wins : ${score.wins}, Losses : ${score.loose} Ties : ${score.tie}`);
    }
      
      function pickcomp_move(){
        let comp_move='';
     const random_num=Math.random();
     if(random_num>=0 && random_num < 1/3 ){
      comp_move='Rock';}
    else if(random_num>=1/3 && random_num<2/3){
       comp_move='Paper';
    }
    else{
       comp_move='Scissor';
    } 
    return comp_move;
      }
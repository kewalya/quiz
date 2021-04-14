class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   question.hide()

  background("yellow")

  var resultHeading=createElement("h2")
  resultHeading.html("the result of the quiz")
  resultHeading.position(350,20) 
    Contestant.getPlayerInfo()

  if(allContestants!==undefined){
    fill("blue")
    textSize(20)
    text("NOTE:Contestant who answered correct are hilighted in green colour",130,230)
  }
 
   

  for(var con in allContestants){
   if(allContestants[con].answer=="2"){
   fill("green")
   text(allContestants[con].name,130,300)
   }
   else{
     fill("red")
     text(allContestants[con].name,130,330)
   }
  }
   
    
  }

}

class Question {


  
  constructor() {
    this.title = createElement('h1')
    
  //  this.input1 = createInput("").attribute("Enter Your Name Here....");
    //this.input2 = createInput("").attribute("Enter Correct Option No..placeholder"," Your name...:");
    this.input1 = createInput("Enter Your Name Here....")//.attribute("");
    this.input2 = createInput("Enter Correct Option No..placeholder");//.attribute("");
    
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What goes up but never comes down? " );
    this.question.position(150, 80);
    this.option1.html("1: Helium " );
    this.option1.position(150, 105);
    this.option2.html("2: Age" );
    this.option2.position(150, 125);
    this.option3.html("3: wisdom " );
    this.option3.position(150, 145);
    this.option4.html("4: Balloon" );
    this.option4.position(150, 165);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(360, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

  }
}



$(document).ready(function(){ 

    var magic8Ball={};
    magic8Ball.answers=['Yes!','No!', 'I do not know', 'You are the best!'];
      
    $('#answer').hide();

    magic8Ball.askQuestion=function(question) {
      $('#8ball').attr('src','https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png'); //this brings out the triangular answer image
      var randomAnswer= Math.random();
      var randomArray= randomAnswer * this.answers.length;
      var estimateNumber= Math.floor(randomArray);
      var finalAnswer= this.answers[estimateNumber];
      $('#answer').text(finalAnswer);

      //console.log(question);
      //console.log(finalAnswer);
    };


 
    var onClick=function() {
      $('#8ball').effect('shake');
      var askMe=prompt('Ask me a yes or no question!');
      magic8Ball.askQuestion(askMe);
      $('#answer').fadeIn(5000);// this doesn't work without .hide()function! 

      setTimeout(    //I don't need to call out this particular function. it will work on its own. 
        function(){
        $('#answer').fadeOut(2000)
      }, 7000);

      setTimeout(
        function(){
          $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png');
        }, 11000);

      };
  
      $('#questionButton').click(onClick);






    });


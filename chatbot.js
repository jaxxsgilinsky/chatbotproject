function returnTime(){
  var now = new Date(Date.now());
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var timeString = hours + ":" + minutes;
  return timeString;
}


var responses = {
  "question": "answers",
  "Hey": "Hello there human",
  "How are you?": "I am doing good, thank you for asking!",
  "What is your name?": "My name is JaxxsBot",
  "What is your favorite song?": "I don't listen to music but, if I did i doubt you'd be interested in my choice",
  "How old are you?": "I can not share my age with you humans",
  "Do you have any family?": "I actually don't know, us robots don't have gatherings like you humans, we're kind of heartless. Haha",
  "What do you look like?": "Like any other robot, as if you've ever seen one.",
  "What are you doing today?": "I'll be here, ready to answer your questions.",
  "How's the weather?": "I actually don't know, I don't get out much, or at all really.",
  "Do you want to go grab a bite?": "A bite? You mean food? No thank you, I don't eat human food.",
  "What time is it?": returnTime()
}

   function askQuestion() {
   var question = $("#input").val()

   $("#chat-area").prepend("Me: " + question + "<br/>")

   var answers = responses[question]

   if (answers == undefined) {

   var fallback = ["I'm not sure of what you're asking", "Try asking me another question", "I'm sorry, I'm not following along", "Why are you asking me this?", "I don't know the answer"];
   var rand = Math.floor((Math.random() * fallback.length));
   $("#chat-area").prepend("Bot: " + fallback[rand] + "<br>");
  }

   else {
   $("#chat-area").prepend("Bot: " + answers + "<br/>")
  }
}

   $(document).keyup(function(event) {
     if (event.keyCode == 13) {
       askQuestion();
     }
 });

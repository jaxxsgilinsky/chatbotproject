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

function askedQuestion() {
  var question = $("#input").val()

  $("#chat-area").prepend(question + "<br/>")

  var answers = responses[question]

}

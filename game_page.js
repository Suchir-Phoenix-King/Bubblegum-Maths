function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4 style='text-align:center;'><b>"+number1+" "+"X"+" "+number2+"</b></h4>";
    input_box = "<br><h4>Answer: </h4><span id='answer'><input type='text' id='player_answer_input' placeholder='Answer' class='form-control'></span>";
    check_button = "<br><button type='submit' class='btn btn-success' id='check' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");
}

question_turn = "player1";
answer_turn = "player2";
player1_score = 0;
player2_score = 0;
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

function check() {
    get_answer = document.getElementById("player_answer_input").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1") 
        {
            update_player_1_score = player1_score +1;
            document.getElementById("player1_score").value = update_player_1_score;
        }
        else
        {
            update_player_2_score = player2_score +1;
            document.getElementById("player2_score").value = update_player_2_score;
        }
    }

    if(question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player1_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_name;
        document.getElementById("player_answer").innerHTML = "Question Turn - "+ player2_name;
    }
}
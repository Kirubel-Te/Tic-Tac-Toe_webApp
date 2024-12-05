$(document).ready(() => {
    let score = () => {
        let winner;
        if($(".first .first-one").text()===$(".first .first-two").text() && $(".first .first-three").text() === $(".first first-two").text()){
            console.log("the winner is: "+ $(".first .first-one").text());
            winner = $(".first .first-one").text();
        }
        else if($(".second .second-one").text() === $(".second .second-two").text() && $(".second .second-two").text()===$(".second .second-three").text()){
            console.log("the winner is : "+ $(".second .second-one").text());
            winner = $(".second .second-one").text();
        }
        else if($(".third .third-one").text()===$(".third .third-two").text() && $(".third .third-two").text()===$(".third .third-three").text()){
            console.log("the winner is : "+$(".third .third-one").text())
            winner = $(".third .third-one").text();
        }
        else if($(".first .first-one").text()===$(".second .second-one").text()&&$(".second .second-one").text()===$(".third .third-one").text()){
            console.log("the winner is : "+$(".first .first-one").text());
            winner = $(".first .first-one").text();
        }
        else if($(".first .first-two").text()===$(".second .second-two").text()&&$(".second .second-two").text()===$(".third .third-two").text()){
            console.log("the winner is : "+$(".third .third-two").text());
            winner = $(".third .third-two").text();
        }
        else if($(".first .first-three").text()===$(".second .second-three").text()&&$(".second .second-three").text()===$(".third .third-three").text()){
            console.log("the winner is : "+$(".first .first-three").text());
            winner = $(".first .first-three").text();
        }
        else if($(".first .first-one").text()===$(".second .second-two").text()&&$(".second .second-two").text()===$(".third .third-three").text()){
            console.log("the winner is : "+$(".third .third-three").text());
            winner = $(".third .third-three").text();
        }
        else if($(".first .first-three").text()===$(".second .second-two").text()&&$(".second .second-two").text()===$(".third .third-one").text()){
            console.log("the winner is : "+$(".first .first-three").text());
            winner = $(".first .first-three");
        }
        else{
            if(count >= 9){
                console.log("it is a draw");
                winner="draw";
            }
            else{
                console.log("let's continue");
            }
        }
        return winner;
    }
    let count = 0;
    let player_one = "O";
    let player_two = "X";
    $(".first .first-one").click(()=>{
        if($(".first .first-one").text() === ""){
            if(count % 2 === 0){
                $(".first .first-one").text(player_one);
            }
            else{
                $(".first .first-one").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".first .first-two").click(()=>{
        if($(".first .first-two").text() === ""){
            if(count % 2 === 0){
                $(".first .first-two").text(player_one);
            }
            else{
                $(".first .first-two").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".first .first-three").click(()=>{
        if($(".first .first-three").text()=== ""){
            if(count % 2 === 0){
                $(".first .first-three").text(player_one);
            }
            else{
                $(".first .first-three").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".second .second-one").click(()=>{
        if($(".second .second-one").text()=== ""){
            if(count % 2 === 0){
                $(".second .second-one").text(player_one);
            }
            else{
                $(".second .second-one").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".second .second-two").click(()=>{
        if($(".second .second-two").text()===""){
            if(count % 2 === 0){
                $(".second .second-two").text(player_one);
            }
            else{
                $(".second .second-two").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".second .second-three").click(()=>{
        if($(".second .second-three").text()===""){
            if(count % 2 === 0){
                $(".second .second-three").text(player_one);
            }
            else{
                $(".second .second-three").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".third .third-one").click(()=>{
        if($(".third .third-one").text()===""){
            if(count % 2 === 0){
                $(".third .third-one").text(player_one);
            }
            else{
                $(".third .third-one").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".third .third-two").click(()=>{
        if($(".third .third-two").text()===""){
            if(count % 2 === 0){
                $(".third .third-two").text(player_one);
            }
            else{
                $(".third .third-two").text(player_two);
            }
            count++;
            if(score() != "draw" && score() != null){
                console.log(score());
            }
            else if(score() === "draw"){
                console.log(score());
            }
            else{
                console.log("continue");
            }
        }
    });

    $(".third .third-three").click(()=>{
        if($(this).text()=== ""){
            if(count % 2 === 0){
                $(this).text(player_one);
            }
            else{
                $(this).text(player_two);
            }
            count++;
            console.log(score())
        }
    });
})
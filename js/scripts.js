$(document).ready(() => {
    let result;
    
    let score = () => {
        let winner = null;
        const winningCombos = [
            // Rows
            [".first .first-one", ".first .first-two", ".first .first-three"],
            [".second .second-one", ".second .second-two", ".second .second-three"],
            [".third .third-one", ".third .third-two", ".third .third-three"],
            // Columns
            [".first .first-one", ".second .second-one", ".third .third-one"],
            [".first .first-two", ".second .second-two", ".third .third-two"],
            [".first .first-three", ".second .second-three", ".third .third-three"],
            // Diagonals
            [".first .first-one", ".second .second-two", ".third .third-three"],
            [".first .first-three", ".second .second-two", ".third .third-one"]
        ];
    
        // Check each winning combination
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
    
            if (
                $(a).text() !== "" &&
                $(a).text() === $(b).text() &&
                $(b).text() === $(c).text()
            ) {
                winner = $(a).text();
                break;
            }
        }
    
        if (!winner && count >= 8) {
            console.log("It's a draw.");
            winner = "draw";
        }
    
        return winner;
    };
    
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupid");
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
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
        }
    });

    $(".third .third-three").click(()=>{
        if($(".third .third-three").text()=== ""){
            if(count % 2 === 0){
                $(".third .third-three").text(player_one);
                console.log("one");
            }
            else{
                $(".third .third-three").text(player_two);
                console.log("one");
            }
            result = score();
            if(result === "X" || result === "O"){
                console.log("the winner is : "+ result);
            }
            else if(result === "draw"){
                console.log("the result is : draw");
            }
            else{
                console.log("continue");
            }
            count++;
        }
        else{
            console.log("the cell is already occupied");
        }
    });
})
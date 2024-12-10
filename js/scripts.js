$(document).ready(() => {
    let result;
    let color = ($template) => {
        if($template.text() === "O"){
            $template.css("cssText","color:red !important");
        }
        else{
            $template.css("cssText","color:rgb(19, 115, 160) !important");
        }
    }
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
                $(".cell").css("cssText","display:none !important");
                $(".score-wrapper").css("cssText","display:block !important");
                $(".cell").text("");
                $("#winner").text("The Winner is");
                if(winner === "O"){
                    $("#winner").css("cssText","color:rgb(19, 115, 160) !important");
                    $("#emoji p").css("cssText","color:red !important");
                }
                else{
                    $("#winner").css("cssText","color:red !important");
                    $("#emoji p").css("cssText","color:rgb(19, 115, 160) !important");
                }
                $("#emoji p").text(`${winner}`);
                break;
            }
        }
    
        if (!winner && count >= 8) {
            console.log("It's a draw.");
            winner = "draw";
            $(".cell").css("cssText","display:none !important");
            $(".score-wrapper").css("cssText","display:block !important");
            $(".cell").text("");
            $("#winner").text("It's A Draw!").css("cssText","color:black !important");
            $("#emoji p").text("😭");
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
            color($(".first .first-one"));
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
            color($(".first .first-two"));
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
            color($(".first .first-three"));
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
            color($(".second .second-one"));
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
            color($(".second .second-two"));
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
            color($(".second .second-three"));
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
            color($(".third .third-one"));
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
            color($(".third .third-two"));
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
            color($(".third .third-three"));
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
    $(".score-wrapper button").click(() => {
        $(".score-wrapper").css("cssText","display:none !important");
        $(".cell").css("cssText","display:block !important");
        count = 0;
        $(".cell").css("cssText","align-item:center !important");
    })
})
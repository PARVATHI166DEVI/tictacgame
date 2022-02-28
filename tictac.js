let divsection = [["","",""],
                  ["","",""],
                  ["","",""],
]

let currentPlayer = "X"

var winner = "none"

function checkstatus(){
    //row
    let cnt = 1
    for(let i=0;i<divsection.length;i++){
        for(let j=1;j<divsection[i].length;j++){
            if(divsection[i][j]!="" && divsection[i][j-1]!="" && divsection[i][j]==divsection[i][j-1]){
                cnt++;
            }
        }
        if(cnt==3){
            return true
        }
    }
    //colom 
    for(let i=0;i<divsection.length;i++){
        for(let j=1;j<divsection[i].length;j++){
            if(divsection[j][i]!="" && divsection[j-1][i]!="" && divsection[j][i]==divsection[j-1][i]){
                cnt++;
            }
        }
        if(cnt==3){
            return true
        }
    }
    //down-diagonal
    let i=1,j=1;
    cnt=1;
    while(i!=divsection.length){
            if(divsection[i][j]!="" && divsection[j-1][i-1]!="" && divsection[i][j]==divsection[j-1][i-1]){
                cnt++;
            }
            i++,j++;
        }
        if(cnt==3){
            return true
        }
    //up-diagonal
    i=1,j=1;
    cnt=1;
    while(i>=0){
        if(divsection[i][j]!="" && divsection[i+1][j-1]!="" && divsection[i][j]==divsection[i+1][j-1]){
            cnt++;
        }
        i--,j++;
    }
    if(cnt==3){
        return true
    }
    return false
}



function Message(){
    winner = currentPlayer
    alert("your win")
}



function getIndex(id){
    let a = parseInt(id);
    a--;
    var row = Math.floor(a/3)
    var col = a%3
    return [row,col]
}

function play(event){
    let ind = getIndex(event.id)
    let l1 = ind[0]
    let l2 = ind[1]
    if(divsection[l1][l2]!=""){
        return;
    }
    divsection[l1][l2] = currentPlayer
    var chk = checkstatus()
    event.innerText = currentPlayer
    
    if(chk){
    Message()
    return
}
    currentPlayer = currentPlayer=="X" ? "O" : "X";
    document.querySelector("#activePlayer").innerText = currentPlayer
}

function clearBoard(){
    divsection = [["","",""],
                  ["","",""],
                  ["","",""],
]

currentPlayer = "X"
winner = "none"
document.querySelector("#activePlayer").innerText = currentPlayer
let cell_list = document.querySelectorAll(".cell")
for(let i=0;i<cell_list.length;i++){
    cell_list[i].innerText="";
}
}




let x = 10
let y = 0
let xMove =0
let bullet = [true];
let gamemode = 0;
let xPos = 345
let yPos = 730
let score = 0 
let bulletPos;
let enemies = true;
let moveRight = true;
let moveLeft = false;
let row1 = 0
let row2 = 0
let row3 = 0
let row4 = 0
let row5 = 0
let endGame = 360;
let arr = [[true, true, true, true, true], [true, true, true, true, true],
           [true, true, true, true, true], [true, true, true, true, true],
           [true, true, true, true, true], [true, true, true, true, true],
           [true, true, true, true, true], [true, true, true, true, true],
           [true, true, true, true, true], [true, true, true, true, true],
           [true, true, true, true, true]];

function preload(){
   player = loadImage("img/player.jpg")
   textScreen = loadImage("img/logo.png")
   invader = loadImage("img/invaders.jpg")
   invader2 = loadImage("img/invaders2.jpg")
   invaders3 = loadImage ("img/invaders3.jpg")
   enter = loadImage("img/enter.jpg")
   gameOver = loadImage("img/gameOver.jpg")
   shoot = loadSound("img/shoot.wav")
   background = loadSound("img/music.mp3")
}

function setup(){
   createCanvas(790,790);
   fill(0);
   rect(0,0,800,800);
   fill(0,255,0);
   rect(0,785,800,10)
   player = loadImage("img/player.jpg")
   textScreen = loadImage("img/logo.png")
   background.play();
}

function draw(){
   if (gamemode ==0){
        image(textScreen, 0,0);
        image(enter,150,500,500,100)
   }else if (gamemode ==1){
        fill(0)
        rect(0,0,800,800)
        fill(0,255,0);
        rect(0,785,800,10)
        fill("GOLD")
        textFont("impact", 50)
        text("Score : " + score,0,50);
        fill(255)
        image(player,xPos,730,75,50)
        if (keyIsDown(LEFT_ARROW)){
            if(xPos>0){
                xPos -= 5
            }
        }else if (keyIsDown(RIGHT_ARROW)){
            if(xPos<730){
               xPos += 5
            }
        }
        if(enemies){
            if(xMove>-1&&xMove<200){
                for (i=0;i<11;i++){
                    for(n=0;n<5;n++){
                        if(bulletPos>x && bulletPos<x+xMove && y+250<yPos&&y+300>yPos && arr[i][0]){
                            score += 10
                            yPos = 730
                            bullet[0] = false
                            arr[i][0]=false
                            if(arr[i][0] == false){
                                row1 += 1
                                if (row1 == 11){
                                    endGame += 60
                                }
                            }
                        }else if (arr[i][0]){
                            image(invader,x+xMove,y+300,55,55)
                        }if(bulletPos>x && bulletPos<x+xMove && y+190<yPos&&y+240>yPos && arr[i][1]){
                            score += 10
                            yPos = 730
                            bullet[0] = false
                            arr[i][1]=false
                            if(arr[i][1] == false){
                                row2 += 1
                                if (row2 == 11){
                                    endGame += 60
                                }
                            }
                        }else if (arr[i][1]){
                            image(invader,x+xMove,y+240,55,55)
                        }if(bulletPos>x && bulletPos<x+xMove && y+130<yPos&&y+180>yPos && arr[i][2]){
                            score += 20
                            yPos = 730
                            bullet[0] = false
                            arr[i][2]=false
                            if(arr[i][2] == false){
                                row3 += 1
                                if (row3 == 11){
                                    endGame += 60
                                }
                            }
                        }else if (arr[i][2]){
                            image(invader2,x+xMove,y+180,55,55)
                        }if(bulletPos>x && bulletPos<x+xMove && y+70<yPos&&y+120>yPos && arr[i][3]){
                            score += 20
                            yPos = 730
                            bullet[0] = false
                            arr[i][3]=false
                            if(arr[i][3] == false){
                                row4 += 1
                                if (row4 == 11){
                                    endGame += 60
                                }
                            }
                        }else if (arr[i][3]){
                            image(invader2,x+xMove,y+120,55,55)
                        }if(bulletPos>x && bulletPos<x+xMove && y+0<yPos&&y+60>yPos && arr[i][4]){
                            score += 30
                            yPos = 730
                            bullet[0] = false
                            arr[i][4]=false
                            if(arr[i][4] == false){
                                row5 += 1
                                if (row5 == 11){
                                    endGame += 60
                                }
                            }
                        }else if (arr[i][4]){
                            image(invaders3,x+xMove,y+60,50,50)
                        } 
                    } 
                    x+=60
                }if (moveRight && xMove == 130){
                    i=0
                    if (i<1){
                        xMove=130
                    }else{
                        xMove=0
                    }
                    moveRight=false
                    moveLeft = true
                    i++
                }else if(moveLeft && xMove == 10){
                    xMove=0
                    y+=30
                    moveRight=true
                    moveLeft = false
                }if (moveRight){
                    x=0
                    xMove+=1
                }else if (moveLeft){
                    x=0
                    xMove-=1
                }
            }
        }if(bullet[0]){
            rect(bulletPos+35,yPos,5,10)
            yPos -= 12
            if (yPos < 0){
                yPos = 730
                bullet[0] = false
            }
        }
        if(endGame == 660){
            reset();
        }else if (y >= endGame){
            gamemode = 3
        }
    } else if (gamemode == 3){
        fill(0)
        rect(0,0,800,800)
        image(gameOver,0,0,800,730)
        fill("GOLD")
        textFont("impact", 50)
        text("Score : " + score,300,500);
        text("Press ESC to play again", 150,580)
    }  
}      

function keyPressed(){
   if (gamemode == 0){
       if (keyCode == 13){
           gamemode = 1           
       }
   }else if (gamemode == 1){
       if (key == " " && !bullet[0]){
           bullet[0] = true
           bulletPos = xPos  
           shoot.play();                        
       } 
    }else if (gamemode == 3){
        if (keyCode == 27){
            score = 0
            reset()
            gamemode = 1
        }
    }
}

function reset(){
    endGame = 360;
    x = 10
    y = 0
    xMove =0
    bullet = [true];
    row1 = 0
    row2 = 0
    row3 = 0
    row4 = 0
    row5 = 0
    enemies = true
    bulletPos = xPos   
    yPos=730      
    background.play();                 
    for(let i =0; i<arr.length; i++){
        arr[i] = [true, true, true, true, true]
    }
}

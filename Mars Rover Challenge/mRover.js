var mRover= {
  x:0,
  y:0,
  idirection: "N",
  travelLog:[]
};

function turnLeft(rover){
  console.log("turnLeft was called!");
  
    switch(mRover.idirection){
      case "N":
        mRover.idirection = "O";
        console.log(mRover.x);
        console.log(mRover.y);
        break;
      case "E":
        mRover.idirection = "N";
        console.log(mRover.x);
        console.log(mRover.y);
        break;
       case "S":
        mRover.idirection = "E";
        console.log(mRover.x);
        console.log(mRover.y);
        break;
       case "O":
        mRover.idirection = "S";
        console.log(mRover.x);
        console.log(mRover.y);
        break;
    }
  }


function turnRight(rover){
  console.log("turnRight was called!");
  switch(mRover.idirection){
      case "N":
        mRover.idirection = "E";
        console.log(mRover.x);
        console.log(mRover.y);
        break;
      case "E":
        mRover.idirection = "S";
        console.log(mRover.x);
        console.log(mRover.y);
        break;
      case "S":
        mRover.idirection = "O";
        console.log(mRover.x);
        console.log(mRover.y);
      break;
      case "O":
        mRover.idirection = "N";
        console.log(mRover.x);
        console.log(mRover.y);
  }
}
  

     function moveForward(rover){
     console.log("moveForward was called");
     switch(mRover.idirection){
       case "N":
         mRover.y = mRover - 1;
         mRover.travelLog.push(mRover.x,mRover.y);
         console.log(mRover.idirection);
         console.log(mRover.x);
         console.log(mRover.y);
         break;
       case "O":
         mRover.y = mRover - 1;
         mRover.travelLog.push(mRover.x,mRover.y);
         console.log(mRover.idirection);
         console.log(mRover.x);
         console.log(mRover.y);
         break;
       case "E":
         mRover.y = mRover + 1;
         mRover.travelLog.push(mRover.x,mRover.y);
         console.log(mRover.idirection);
         console.log(mRover.x);
         console.log(mRover.y);
         break;
        case "S":
         mRover.y = mRover + 1;
         mRover.travelLog.push(mRover.x,mRover.y);
         console.log(mRover.idirection);
         console.log(mRover.x);
         console.log(mRover.y);
         break;
  }
}

function comando(solicitud){
  console.log(mRover.idirection);
  for (var i=0; i<solicitud.length;i++){
     var movimiento = solicitud[i];
    console.log(movimiento);
    switch (movimiento){
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      case "f":
        moveForward();
        break;
    }
  }
  console.log(mRover.travelLog);
}

comando("rffrfflfrff");
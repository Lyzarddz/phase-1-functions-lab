// Code your solution in this file!

function distanceFromHqInBlocks(pickUp){
    return pickUp < 42 ? 42 - pickUp : pickUp - 42;
}

function distanceFromHqInFeet(pickUpFeet){
    return distanceFromHqInBlocks(pickUpFeet) * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blockDist = start < destination ? destination - start : start - destination;  
    return blockDist * 264;
  }

  function calculatesFarePrice(start, destination) {
      const distance = distanceTravelledInFeet(start, destination)
      if (distance <= 400){
        return 0;
      } else if (distance <= 2000){
          return (distance - 400) * 0.02;
      } else if (distance > 2000 && distance < 2500){
          return 25;
      } else {
          return "cannot travel that far";
      }
    
   
  }
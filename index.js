function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination) {
  const totalFeet = distanceTravelledInFeet(start, destination);
  if (totalFeet > 2500) {
    return "cannot travel that far";
  }
  if (totalFeet > 2000) {
    return 25;
  }
  if (totalFeet > 400) {
    return (totalFeet - 400) * 0.02;
  }
  return 0;
}

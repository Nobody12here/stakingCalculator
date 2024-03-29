function calculateReward(duration:number,tokenAmount:number|null,setReward:React.Dispatch<React.SetStateAction<number>>){
  let reward = 0;
  if(tokenAmount === 0){
  return
  }
  if(tokenAmount == null){
    return
  }
  if (duration === 0) {
    reward = (tokenAmount *  1) /100; 
  } else if (duration === 3) {
    reward = (tokenAmount * 1.5)/100;
  }
  else if (duration === 6) {
    reward = (tokenAmount * 2)/100; 
  } else if (duration === 12) {
    reward = (tokenAmount * 3.5)/100; 
  } else if (duration === 18) {
    reward = (tokenAmount * 5)/100; 
  } else if (duration === 24) {
    reward = (tokenAmount * 7)/100; 
  }
  setReward(reward);
  return reward;
}
export { calculateReward };
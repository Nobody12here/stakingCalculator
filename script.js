// Purpose: To calculate the reward based on the token amount and duration selected by the user.
  function calculateReward() {
    const tokenAmount = parseFloat(document.getElementById('tokenAmount').value);
    const duration = parseInt(document.getElementById('duration').value);
    let text = ""
    let reward = 0;
    if(tokenAmount == 0 || isNaN(tokenAmount)){
      document.getElementById('reward').innerText = `Please enter a valid token amount`;
      return;
    }
    if (duration === 0) {
      reward = (tokenAmount *  2.5) /100; 
      text = "per day"
    } else if (duration === 6) {
      reward = (tokenAmount * 5)/100; 
    } else if (duration === 12) {
      reward = (tokenAmount * 7)/100; 
    } else if (duration === 18) {
      reward = (tokenAmount * 8.5)/100; 
    } else if (duration === 24) {
      reward = (tokenAmount * 10)/100; 
    }
    document.getElementById('reward').innerText = `Estimated Reward: ${reward.toFixed(3)} Tokens ${text}  `;
  }

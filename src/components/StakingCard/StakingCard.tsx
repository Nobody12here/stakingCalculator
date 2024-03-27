import { FC, useState } from "react";
import { DurationDropdown, InputField } from "../Input";
import "./StakingCard.style.css";

import { CalculateButton } from "../Input";
const StakingDetails: FC = () => {
  return (
    <div className="text2-container">
      <h5 className="t1 heading2">$BFM Crypto Staking Calculator</h5>
    </div>
  );
};

const Card: FC = (): JSX.Element => {
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [reward,setReward] = useState<number>(0);
  console.log(duration)
  return (
    <>
      <div className={`main-container`}>
        <StakingDetails />
        <InputField tokenAmount={tokenAmount} setTokenAmount={setTokenAmount}></InputField>
        <DurationDropdown selectedDuration={duration} setSelectedDuration={setDuration}/>
        <div className="loading">Reward Amount:   {duration === 0 ? `${reward} per Month` : reward}</div>
        <CalculateButton duration={duration} tokenAmount={tokenAmount} setReward={setReward}/>
        <button className="staking-calculator" onClick={()=>{window.location.href="https://staking-frontend-two.vercel.app/"}}>Staking Website</button>
      </div>
    </>
  );
};

const StakingCard: FC = () => {
 
  return (
    <>
      <div className="heading-container">
        <h3 className="text">
          <span className="bold-text">Seize Opportunities</span>, Grow Your
          Wealth Through $BFM Crypto Staking
        </h3>
      </div>
      <div className="card-container">
        <Card />
      </div>
    </>
  );
};

export default StakingCard;

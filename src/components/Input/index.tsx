import { FC } from "react";
import "./InputForm.style.css";
import { calculateReward } from "../../utils";
interface SubmitButton {
  handleSubmit: () => void;
}
interface CalculateButtonProps{
  duration:number;
  tokenAmount:number;
  setReward:React.Dispatch<React.SetStateAction<number>>;
}
interface DurationFieldProps {
  selectedDuration: number | null;
  setSelectedDuration: React.Dispatch<React.SetStateAction<number>>;
}
interface InputFieldProps {
  tokenAmount: number;
  setTokenAmount: React.Dispatch<React.SetStateAction<number>>;
  }
const DurationDropdown: FC<DurationFieldProps> = ({
  selectedDuration,
  setSelectedDuration,
}) => {
  const handleDurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDuration(parseInt(event.target.value));
  };
  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor="duration">
        Select Duration
      </label>
      <select
        className="dropdown"
        id="duration"
        value={selectedDuration || ""}
        onChange={handleDurationChange}
      >
        <option value="0">Unlocked Staking (2.5%)</option>
        <option value="6">6 months (Monthly 5%) </option>
        <option value="12">12 months (Monthly 7%) </option>
        <option value="18">18 months (Monthly 8.5%) </option>
        <option value="24">24 months (Monthly 10%) </option>
      </select>
    </div>
  );
};

const CalculateButton: FC<CalculateButtonProps> = ({duration,tokenAmount,setReward}) => {
  return (
    <div className="btn2-container">
      <button className="btn2 btn-how" onClick={()=>calculateReward(duration,tokenAmount,setReward)} >Calculate</button>
    </div>
  );
};
const DisconnectAndSubmitButtons: FC<SubmitButton> = ({ handleSubmit }) => {
  return (
    <div className="btn2-container">
      <w3m-button size="md" balance="hide" />
      <button className="stake" onClick={handleSubmit}>
        Stake
      </button>
    </div>
  );
};
const InputField: FC<InputFieldProps> = (props): JSX.Element => {
  const tokenAmount = props.tokenAmount;
  const setTokenAmount = props.setTokenAmount;
 
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTokenAmount(event.target.value as unknown as number);
    console.log("tokenAmount = ", tokenAmount);
  }

  return (
    <>
      <div className="input-container">
        <label className="token-inp-label" htmlFor="token-amount">
          Please add an token amount
        </label>
        <input
          className="token-inp"
          value={tokenAmount}
          name="token-amount"
          type="number"
          onChange={handleInputChange}
        />
      </div>

      
    </>
  );
};
export {
  InputField,
  DurationDropdown,
  CalculateButton,
  DisconnectAndSubmitButtons,
};

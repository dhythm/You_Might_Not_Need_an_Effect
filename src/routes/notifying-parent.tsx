import { useEffect, useState } from "react";

export const NotifyingParentSample = () => (
  <>
    <div style={{ textAlign: "start" }}>
      <h4>Bad</h4>
      <Bad />
    </div>

    <hr style={{ borderTop: "2px dotted #bbb" }}></hr>

    <div style={{ textAlign: "start" }}>
      <h4>Good</h4>
      <Good />
    </div>

    <hr style={{ borderTop: "2px dotted #bbb" }}></hr>

    <div style={{ textAlign: "start" }}>
      <h4>Also Good</h4>
      <AlsoGood />
    </div>
  </>
);

const Bad = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <p>{isOn ? "✅" : "🔴"}</p>
      <BadToggle onChange={setIsOn} />
    </>
  );
};

const Good = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <p>{isOn ? "✅" : "🔴"}</p>
      <GoodToggle onChange={setIsOn} />
    </>
  );
};

const AlsoGood = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <p>{isOn ? "✅" : "🔴"}</p>
      <AlsoGoodToggle isOn={isOn} onChange={setIsOn} />
    </>
  );
};

type ToggleProps = {
  onChange: (value: boolean) => void;
};
const BadToggle = ({ onChange }: ToggleProps) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange]);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <input
        name="checkbox"
        type="checkbox"
        onClick={handleClick}
        checked={isOn}
      />
    </>
  );
};

const GoodToggle = ({ onChange }: ToggleProps) => {
  const [isOn, setIsOn] = useState(false);

  const updateToggle = (nextIsOn: boolean) => {
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  };

  const handleClick = () => {
    updateToggle(!isOn);
  };

  return (
    <>
      <input
        name="checkbox"
        type="checkbox"
        onClick={handleClick}
        checked={isOn}
      />
    </>
  );
};

const AlsoGoodToggle = ({
  onChange,
  isOn,
}: ToggleProps & { isOn: boolean }) => {
  const handleClick = () => {
    onChange(!isOn);
  };

  return (
    <>
      <input
        name="checkbox"
        type="checkbox"
        onClick={handleClick}
        checked={isOn}
      />
    </>
  );
};

import { useEffect, useState } from "react";

export const UpdatingStateSample = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
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
    </>
  );
};

const Bad = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <form>
      <input
        name="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        name="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <p>{fullName}</p>
    </form>
  );
};

const Good = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");

  const fullName = firstName + " " + lastName;

  return (
    <form>
      <input
        name="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        name="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <p>{fullName}</p>
    </form>
  );
};

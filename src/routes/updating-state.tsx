import { useEffect, useId, useState } from "react";

export const UpdatingStateSample = () => (
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

const Bad = () => {
  const id = useId();
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <form>
      <label htmlFor={id + "-firstName"}>First Name</label>
      <div>
        <input
          id={id + "-firstName"}
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <label htmlFor={id + "-lastName"}>Last Name</label>
      <div>
        <input
          id={id + "-lastName"}
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <p>{fullName}</p>
    </form>
  );
};

const Good = () => {
  const id = useId();
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");

  const fullName = firstName + " " + lastName;

  return (
    <form>
      <label htmlFor={id + "-firstName"}>First Name</label>
      <div>
        <input
          id={id + "-firstName"}
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <label htmlFor={id + "-lastName"}>Last Name</label>
      <div>
        <input
          id={id + "-lastName"}
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <p>{fullName}</p>
    </form>
  );
};

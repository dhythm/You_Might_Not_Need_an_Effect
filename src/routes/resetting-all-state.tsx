import { useEffect, useId, useState } from "react";

export const ResettingAllStateSample = () => (
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
  const [userId, setUserId] = useState("1");
  return (
    <>
      <SelectUser onChange={setUserId} />
      <BadProfile userId={userId} />
    </>
  );
};

const Good = () => {
  const [userId, setUserId] = useState("1");
  return (
    <>
      <SelectUser onChange={setUserId} />
      <GoodProfile userId={userId} key={userId} />
    </>
  );
};

type SelectUserProps = {
  onChange: (userId: string) => void;
};
const SelectUser = ({ onChange }: SelectUserProps) => (
  <>
    <label htmlFor="user">Select a user: </label>
    <select id="user" onChange={(e) => onChange(e.target.value)}>
      {users.map((user) => (
        <option value={user.id}>{user.name}</option>
      ))}
    </select>
  </>
);

const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Alice" },
  { id: "3", name: "Bob" },
];

type ProfileProps = {
  userId: string;
};
const BadProfile = ({ userId }: ProfileProps) => {
  const id = useId();
  const [comment, setComment] = useState("");

  useEffect(() => {
    // setComment("");
  }, [userId]);
  const user = users.find((user) => user.id === userId);

  return (
    <div>
      <p>name: {user?.name}</p>
      <p>comment: {comment}</p>
      <form
        id={id}
        onSubmit={(e: any) => {
          e.preventDefault();
          setComment(e.target[0].value);
          (document.getElementById(id) as HTMLFormElement).reset();
        }}
      >
        <input name="comment" />
        <input type="submit" />
      </form>
    </div>
  );
};

const GoodProfile = ({ userId }: ProfileProps) => {
  const id = useId();
  const [comment, setComment] = useState("");
  const user = users.find((user) => user.id === userId);

  return (
    <div>
      <p>name: {user?.name}</p>
      <p>comment: {comment}</p>
      <form
        id={id}
        onSubmit={(e: any) => {
          e.preventDefault();
          setComment(e.target[0].value);
          (document.getElementById(id) as HTMLFormElement).reset();
        }}
      >
        <input name="comment" />
        <input type="submit" />
      </form>
    </div>
  );
};

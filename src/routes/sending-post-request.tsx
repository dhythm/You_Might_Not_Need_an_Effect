import { useEffect, useState } from "react";

export const SendingPostRequestSample = () => (
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [jsonToSubmit, setJsonToSubmit] = useState<object | null>(null);
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", jsonToSubmit);
    }
  }, [jsonToSubmit]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setJsonToSubmit({ firstName, lastName });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={(e) => setFirstName(e.target.value)} />
      <input name="lastName" onChange={(e) => setLastName(e.target.value)} />
      <input type="submit" />
    </form>
  );
};

const Good = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    post("/api/register", { firstName, lastName });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={(e) => setFirstName(e.target.value)} />
      <input name="lastName" onChange={(e) => setLastName(e.target.value)} />
      <input type="submit" />
    </form>
  );
};

const post = (path: string, option?: any) => {
  alert(`path: ${path}, option: ${JSON.stringify(option)}`);
};

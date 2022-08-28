import { useEffect, useMemo, useState } from "react";

export const CachingCalculationsSample = () => (
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
  const [filterText, setFilterText] = useState("");
  const [visibleTodos, setVisibleTodos] = useState<string[]>([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filterText));
  }, [todos, filterText]);

  return (
    <>
      <Form onChange={setFilterText} />
      <ul>
        {visibleTodos.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </>
  );
};

const Good = () => {
  const [filterText, setFilterText] = useState("");
  const visibleTodos = useMemo(
    () => getFilteredTodos(todos, filterText),
    [todos, filterText]
  );

  return (
    <>
      <Form onChange={setFilterText} />
      <ul>
        {visibleTodos.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </>
  );
};

const todos = ["Get apples", "Get oranges", "Get carrots", "Go shopping"];
const getFilteredTodos = (todos: string[], filterText: string) => {
  const visibleTodos = todos.filter((todo) => todo.includes(filterText));
  return visibleTodos;
};

type Props = {
  onChange: (value: string) => void;
};
const Form = ({ onChange }: Props) => (
  <input name="filter" onChange={(event) => onChange(event.target.value)} />
);

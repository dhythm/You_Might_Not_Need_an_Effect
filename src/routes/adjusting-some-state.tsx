import { useEffect, useId, useState } from "react";

export const AdjustingSomeStateSample = () => (
  <>
    <div style={{ textAlign: "start" }}>
      <h4>Bad</h4>
      <Bad />
    </div>

    <hr style={{ borderTop: "2px dotted #bbb" }}></hr>

    <div style={{ textAlign: "start" }}>
      <h4>Better</h4>
      <Better />
    </div>

    <hr style={{ borderTop: "2px dotted #bbb" }}></hr>

    <div style={{ textAlign: "start" }}>
      <h4>Best</h4>
      <Best />
    </div>
  </>
);

const Bad = () => {
  const [items, setItems] = useState(itemsNormal);
  return (
    <>
      <SelectItemType onSelect={setItems} />
      <BadList items={items} />
    </>
  );
};

const Better = () => {
  const [items, setItems] = useState(itemsNormal);
  return (
    <>
      <SelectItemType onSelect={setItems} />
      <BetterList items={items} />
    </>
  );
};

const Best = () => {
  const [items, setItems] = useState(itemsNormal);
  return (
    <>
      <SelectItemType onSelect={setItems} />
      <BestList items={items} />
    </>
  );
};

type SelectItemTypeProps = {
  onSelect: (items: string[]) => void;
};
const SelectItemType = ({ onSelect }: SelectItemTypeProps) => {
  return (
    <>
      <select
        id="user"
        onChange={(e) =>
          onSelect(e.target.value === "normal" ? itemsNormal : itemsOnSale)
        }
      >
        <option value="normal">Normal</option>
        <option value="onSale">On Sale</option>
      </select>
    </>
  );
};

const itemsNormal = ["apple", "orange", "carrot", "mango"];
const itemsOnSale = ["mango", "pear"];

type ListProps = {
  items: string[];
};
const BadList = ({ items }: ListProps) => {
  const id = useId();
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState<string | null>(null);

  useEffect(() => {
    setSelection(null);
  }, [items]);

  return (
    <>
      <input
        id={id}
        type="checkbox"
        value="isReverse"
        onClick={(e: any) => setIsReverse(e.target.checked)}
        checked={isReverse}
      />
      <label htmlFor={id}>reverse?</label>
      {items
        .sort((a, b) => (a < b ? -1 : 1))
        .sort(() => (isReverse ? -1 : 1))
        .map((item) => (
          <div>
            <input
              type="radio"
              value={item}
              onClick={(e: any) => {
                if (e.target.checked) {
                  setSelection(item);
                }
              }}
              checked={selection === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
    </>
  );
};

const BetterList = ({ items }: ListProps) => {
  const id = useId();
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState<string | null>(null);

  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }

  return (
    <>
      <input
        id={id}
        type="checkbox"
        value="isReverse"
        onClick={(e: any) => setIsReverse(e.target.checked)}
        checked={isReverse}
      />
      <label htmlFor={id}>reverse?</label>
      {items
        .sort((a, b) => (a < b ? -1 : 1))
        .sort(() => (isReverse ? -1 : 1))
        .map((item) => (
          <div>
            <input
              type="radio"
              value={item}
              onClick={(e: any) => {
                if (e.target.checked) {
                  setSelection(item);
                }
              }}
              checked={selection === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
    </>
  );
};

const BestList = ({ items }: ListProps) => {
  const id = useId();
  const [isReverse, setIsReverse] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const selection = items.find((item) => item === selected) ?? null;

  return (
    <>
      <input
        id={id}
        type="checkbox"
        value="isReverse"
        onClick={(e: any) => setIsReverse(e.target.checked)}
        checked={isReverse}
      />
      <label htmlFor={id}>reverse?</label>
      {items
        .sort((a, b) => (a < b ? -1 : 1))
        .sort(() => (isReverse ? -1 : 1))
        .map((item) => (
          <div>
            <input
              type="radio"
              value={item}
              onClick={(e: any) => {
                if (e.target.checked) {
                  setSelected(item);
                }
              }}
              checked={selection === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
    </>
  );
};

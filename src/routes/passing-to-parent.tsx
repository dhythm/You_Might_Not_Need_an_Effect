import { useEffect, useState } from "react";

export const PassingParentSample = () => (
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
  const [data, setData] = useState<Record<string, string> | null>(null);
  return <BadChild onFetched={setData} />;
};

const Good = () => {
  const data = useSomeApi();
  return <GoodChild data={data} />;
};

const BadChild = ({
  onFetched,
}: {
  onFetched: (data: Record<string, string>) => void;
}) => {
  const data = useSomeApi();

  useEffect(() => {
    if (data) {
      onFetched(data);
    }
  }, [onFetched, data]);

  return <>{JSON.stringify(data)}</>;
};

const GoodChild = ({ data }: { data: Record<string, string> }) => {
  return <>{JSON.stringify(data)}</>;
};

const useSomeApi = () => {
  return {
    foo: "foo",
    bar: "bar",
    baz: "baz",
  };
};

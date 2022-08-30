import { useEffect, useState } from "react";

export const FetchingDataSample = () => (
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

const Bad = (query: any = {}) => {
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchResult(query, page).then((json) => {
      setResults(json);
    });
  }, [query, page]);

  const handleNextPageClick = () => {
    setPage(page + 1);
  };

  return <></>;
};

const Good = (query: any = {}) => {
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let ignore = false;
    fetchResult(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  const handleNextPageClick = () => {
    setPage(page + 1);
  };

  return <></>;
};

const useDate = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
};

const fetchResult = async (query: any, page: number) => {
  return [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Alice",
    },
    {
      id: 3,
      name: "Bob",
    },
  ];
};

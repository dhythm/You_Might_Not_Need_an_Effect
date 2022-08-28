import { useEffect } from "react";

export const InitializingApplicationSample = () => (
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
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);

  return <></>;
};

let didInit = false;

const Good = () => {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  return <></>;
};

const loadDataFromLocalStorage = () => {
  console.log("loaded");
};
const checkAuthToken = () => {
  console.log("authenticated");
};

if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

const AlsoGood = () => {
  return <></>;
};

import { useEffect, useState, useSyncExternalStore } from "react";

export const SubscribingToExternalStoreSample = () => (
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
  const isOnline = useBadOnlineStatus();
  return <p>{isOnline ? "✅" : "🔴"}</p>;
};

const Good = () => {
  const isOnline = useGoodOnlineStatus();
  return <p>{isOnline ? "✅" : "🔴"}</p>;
};

const useBadOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const updateState = () => {
      setIsOnline(navigator.onLine);
    };

    updateState();

    window.addEventListener("online", updateState);
    window.addEventListener("offline", updateState);
    return () => {
      window.removeEventListener("online", updateState);
      window.removeEventListener("offline", updateState);
    };
  }, []);

  return isOnline;
};

const subscribe = (callback: any) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

const useGoodOnlineStatus = () => {
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
};

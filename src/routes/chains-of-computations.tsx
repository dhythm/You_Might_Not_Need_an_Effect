import { useEffect, useState } from "react";

export const ChainsOfComputationsSample = () => (
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

type Card = {
  gold: boolean;
};

const Bad = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount((c) => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound((r) => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert("Good game!");
  }, [isGameOver]);

  const handlePlaceCard = (nextCard: Card) => {
    if (isGameOver) {
      throw Error("Game already ended.");
    } else {
      setCard(nextCard);
    }
  };

  return (
    <>
      <p>gold card: {goldCardCount}</p>
      <p>round: {round}</p>
      <button
        onClick={() => {
          if (Math.random() > 0.5) {
            handlePlaceCard({ gold: true });
          } else {
            handlePlaceCard({ gold: false });
          }
        }}
      >
        Place Card
      </button>
    </>
  );
};

const Good = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  const isGameOver = round > 5;

  const handlePlaceCard = (nextCard: Card) => {
    if (isGameOver) {
      throw Error("Game already ended.");
    }

    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert("Good game!");
        }
      }
    }
  };

  return (
    <>
      <p>gold card: {goldCardCount}</p>
      <p>round: {round}</p>
      <button
        onClick={() => {
          if (Math.random() > 0.5) {
            handlePlaceCard({ gold: true });
          } else {
            handlePlaceCard({ gold: false });
          }
        }}
      >
        Place Card
      </button>
    </>
  );
};

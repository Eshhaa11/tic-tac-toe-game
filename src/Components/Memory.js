import { useState } from "react";
import "./Memory.css";

const images = ["🍕", "🍫", "🍇", "🫧", "🌷", "🦚", "🏏", "🐬"];
const shuffled = [...images, ...images].sort(() => Math.random() - 0.5);

function Game() {
    const [cards, setCards] = useState(
        shuffled.map((item, index) => ({
          id: index,
          value: item,
          isFlipped: false,
          isMatched: false,
        }))
      );
      const [flipped, setFlipped] = useState([]);

      const handleClick = (index) => {
        const newCards = [...cards];
    
        if (newCards[index].isFlipped || newCards[index].isMatched || flipped.length === 2) {
          return;
        }

        newCards[index].isFlipped = true;
        const newFlipped = [...flipped, index];
    
        if (newFlipped.length === 2) {
          const [first, second] = newFlipped;
          if (newCards[first].value === newCards[second].value) {
            newCards[first].isMatched = true;
            newCards[second].isMatched = true;
          } else {
            setTimeout(() => {
              newCards[first].isFlipped = false;
              newCards[second].isFlipped = false;
              setCards([...newCards]);
            }, 800);
          }
          setFlipped([]);
        } else {
          setFlipped(newFlipped);
        }
    
        setCards(newCards);
      };
    
      return (
        <div className="memory-game">
          <h1>Memory Matching Card Game</h1>
          <div className="grid">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={`card ${card.isFlipped || card.isMatched ? "flipped" : ""}`}
                onClick={() => handleClick(i)}
              >
                {card.isFlipped || card.isMatched ? card.value : "❓"}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Game;

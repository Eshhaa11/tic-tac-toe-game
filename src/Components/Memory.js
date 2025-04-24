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
}
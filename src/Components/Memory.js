import { useState } from "react";
import "./Memory.css";

const images = ["🍕", "🍫", "🍇", "🫧", "🌷", "🦚", "🏏", "🐬"];
const shuffled = [...images, ...images].sort(() => Math.random() - 0.5);
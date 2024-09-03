import { width } from "../styles";

export const containerWidth = width * 0.9;
export const containerHeight = width * 0.12;
export const animatedWidth = containerWidth / 2;
export const animatedHeight = containerHeight * 0.85;
export const top = (containerHeight - animatedHeight) / 2;
export const moviment = (animatedWidth / 2) - top;
"use client";

import { memo, useEffect, useRef, useState } from "react";

const FPS = 8;
const INITIAL_LIFE_CHANCE = 0.15;
const RANDOM_REVIVAL_CHANCE = 0.01;
const CELL_SIZE = 20;
const FONT_SIZE = 16;
const ASCII = " ·+@";

const GameOfLife = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [matrix, setMatrix] = useState<number[][]>([]);

  const currentMatrixRef = useRef<number[][]>([]);

  useEffect(() => {
    currentMatrixRef.current = matrix;
  }, [matrix]);

  // initial matrix
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();
    const rows = Math.ceil(height / CELL_SIZE);
    const cols = Math.ceil(width / CELL_SIZE);

    const initialMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () =>
        Math.random() < INITIAL_LIFE_CHANCE
          ? Math.floor(Math.random() * ASCII.length)
          : 0,
      ),
    );

    setMatrix(initialMatrix);
  }, []);

  // game loop
  useEffect(() => {
    const interval = 1000 / FPS;
    const loop = setInterval(() => {
      const currentMatrix = currentMatrixRef.current;
      if (
        !currentMatrix ||
        currentMatrix.length === 0 ||
        currentMatrix[0].length === 0
      ) {
        return;
      }

      const newMatrix = currentMatrix.map((row) => [...row]);

      for (let y = 0; y < currentMatrix.length; y++) {
        for (let x = 0; x < currentMatrix[0].length; x++) {
          const age = currentMatrix[y][x];
          const neighbors = countNeighbors(currentMatrix, x, y);
          const isLive =
            Math.random() < RANDOM_REVIVAL_CHANCE ||
            (currentMatrix[y][x] > 0 ? neighbors === 2 : neighbors === 3);

          newMatrix[y][x] = isLive
            ? Math.min(ASCII.length - 1, age + 1)
            : Math.max(0, age - 1);
        }
      }

      setMatrix(newMatrix);
    }, interval);

    return () => {
      clearInterval(loop);
    };
  }, []);

  // draw matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || matrix.length === 0) return;

    const { width, height } = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const style = getComputedStyle(container);
    const textColor = style.getPropertyValue("--secondary");
    const fontFamily = style.getPropertyValue("--font-pp-neue-montreal-mono");

    ctx.clearRect(0, 0, width, height);
    ctx.font = `${FONT_SIZE}px ${fontFamily || "monospace"}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        const age = matrix[y][x];
        if (age > 0) {
          const character = ASCII[age];
          const centerX = x * CELL_SIZE + CELL_SIZE / 2;
          const centerY = y * CELL_SIZE + CELL_SIZE / 2;
          ctx.fillText(character, centerX, centerY);
        }
      }
    }
  }, [matrix]);

  return (
    <div ref={containerRef} className="size-full">
      <canvas ref={canvasRef} />
    </div>
  );
});
GameOfLife.displayName = "GameOfLife";

export default GameOfLife;

const countNeighbors = (matrix: number[][], x: number, y: number) => {
  let count = 0;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      const nx = x + dx,
        ny = y + dy;

      if (nx >= 0 && nx < matrix[0].length && ny >= 0 && ny < matrix.length) {
        if (matrix[ny][nx] > 0) count++;
      }
    }
  }

  return count;
};

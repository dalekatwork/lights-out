import { useState } from "react";

const SIZE = 5;

type Board = boolean[][];

function randomBoard(): Board {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => Math.random() < 0.5),
  );
}

function toggle(board: Board, row: number, col: number): Board {
  const next = board.map((r) => [...r]);
  const targets = [
    [row, col],
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ];
  for (const [r, c] of targets) {
    if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) {
      next[r][c] = !next[r][c];
    }
  }
  return next;
}

export default function App() {
  const [board, setBoard] = useState<Board>(randomBoard);
  const [moves, setMoves] = useState(0);

  const litCount = board.flat().filter(Boolean).length;

  const handleClick = (row: number, col: number) => {
    setBoard((b) => toggle(b, row, col));
    setMoves((m) => m + 1);
  };

  const reset = () => {
    setBoard(randomBoard());
    setMoves(0);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-semibold tracking-tight">Lights Out</h1>

      <div className="flex gap-6 text-sm text-slate-400">
        <span>Moves: {moves}</span>
        <span>Lights on: {litCount}</span>
      </div>

      <div
        className="grid w-full max-w-sm gap-2"
        style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
      >
        {board.map((row, r) =>
          row.map((on, c) => (
            <button
              key={`${r}-${c}`}
              aria-label={`Tile ${r + 1}, ${c + 1}: ${on ? "on" : "off"}`}
              className={`tile ${on ? "tile-on" : "tile-off"}`}
              onClick={() => handleClick(r, c)}
            />
          )),
        )}
      </div>

      <button
        onClick={reset}
        className="rounded-md border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800"
      >
        New board
      </button>
    </main>
  );
}

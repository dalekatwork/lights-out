# Lights Out

A starter for a Lights Out puzzle game built with React, TypeScript, Tailwind CSS and Vite.

## Current state

- Renders a 5×5 grid with basic CSS and glow styling for lit tiles.
- Clicking a tile flips it and its orthogonal neighbours.
- Shows a move counter and the number of lights on.
- "New board" generates a random board (not yet guaranteed solvable).

## Planned

- Seeded, guaranteed-solvable board generation with a GF(k) solver
- Timer and optimum-relative scoring
- Game fingerprinting for verify and replay
- 3-colour tiles and stage progression
- Win, lose and best-score animations

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run typecheck`.

## License

MIT, see [LICENSE](./LICENSE).

# Desktop Automation

Automate mouse movement in a circular pattern using [@nut-tree-fork/nut-js](https://nutjs.dev/), written in TypeScript.

## Installation

```sh
yarn install
# or
npm install
```

## Usage

To start the automation:

```sh
yarn start
# or
npm start
```

This will run the TypeScript script using tsx.

## How it works

- Moves the mouse in a smooth animated circle at the center of your main screen.
- You can adjust the radius, speed, and frame delay in `index.ts`.
- Uses [@nut-tree-fork/nut-js](https://nutjs.dev/) for cross-platform desktop automation.

## Configuration

Edit `index.ts` to change:

- `radius`: Circle radius in pixels
- `stepIncrement`: Angle increment per frame
- `frameDelay`: Milliseconds between frames

## License

MIT

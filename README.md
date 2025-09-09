# Quanty
A utility website that calculates mean, median, mode, range, variance, and standard deviation with formula and solution.

## Wireframe
Wireframe Source: [Quanty Wireframe](https://www.figma.com/proto/TBECwA0AOYVFczDP9Dxg6X/Quanty-Data-Analyzer?node-id=0-1&t=K5DQjH11IOinSbY7-1)

## Usage
Just input a set of data and click solve, you have the complete solution in an instant.

## To run this project (General Steps):
1. Clone this repository `git clone https://github.com/khianvictorycalderon/Quanty-Data-Analyzer.git`
2. Run `npm install`
3. Run `npm run dev`

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install tailwindcss @tailwindcss/vite`
- `npm install react-icons --save`
- `npm install katex react-katex`
- `npm install --save-dev @types/react-katex`

## Configuration Dependencies
- Update `vite.config.ts`:
  ```ts
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```
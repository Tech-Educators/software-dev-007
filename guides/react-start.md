# Quick Start Guide for a React App

Go to the directory you want your project folder to be in in your terminal
For example, if you want the project to be in `/projects/react-app` then navigate to `/projects`

- Run `npx create-vite`
- Give the name of the project
- Select `react` as the Framework
- Select `JavaScript` as the Variation
- cd into the new folder it created
- Run `npm i` to install the node_modules
- Run `npm run dev` to start it up!

## Files to delete

In the `/src` directory you don't NEED to keep all of it. Here are the parts you can remove:

- You don't need either of `index.css` or `App.css` (but I recommend you keep at least one of them)
  - If you remove either, you need to make sure its not being imported in either `main.jsx` or `App.jsx`
- The inside of `main.jsx` should probably remain untouched for now (unless you delete `index.css`)
- You can completely delete the inside of `App.jsx` or just delete the bits you don't need. Here is an example of the most barebones version of it:

```js
export default function App() {
  return <div></div>;
}
```

// thius function takes 5 seconds to do something (the something is nothing)
async function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

export default async function SlowComponent() {
  await delay();
  return <p>I am a very slow components. But I made it! Look at me!</p>;
}

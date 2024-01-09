import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import "./css/global.css";
import "./css/main.css";

export default function App() {
  return (
    <div>
      <PageHeader />
      <main>
        <section>
          <h2>Woah such beauty!</h2>
          <p>
            Although I used css to target the tags, this was a naughty thing to
            do!
          </p>
          <p>Naughty Tim!</p>
          <p>You should use specific classes</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </section>
        <img
          src="https://th-thumbnailer.cdn-si-edu.com/NOKvdu7i9aU4dyDwoiuMiWOGSmQ=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ef/ff/efff9ae5-1832-489f-bb1f-f1a00944a8aa/hedgehog.jpg"
          alt="jez"
        />
      </main>
      <PageFooter />
    </div>
  );
}

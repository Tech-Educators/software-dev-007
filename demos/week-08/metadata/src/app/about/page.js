export const metadata = {
  title: "About | Jeff's amazing Metadata Page",
  description: "All about my name Jeff.",
  openGraph: {
    title: "About but with openGraph",
    description: "blah blah blah",
    type: "website",
    url: "myapp.com/about",
    image:
      "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024",
  },
};

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This website is all about my name, which is Jeff.</p>
    </div>
  );
}

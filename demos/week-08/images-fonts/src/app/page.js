import Image from "next/image";
// import hedgehog from "../../public/hedgehog.webp"
import hedgehog from "@/../public/hedgehog.webp";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        This <strong>image</strong> is going to reference the image directly
      </p>
      <Image
        src="/hedgehog.webp"
        alt="a beautiful hedgehog"
        width={400}
        height={400}
      />

      <p>This image is first imported and then we use it.</p>
      <Image
        src={hedgehog}
        alt="a beautiful hedgehog that hasn't been squashed"
        placeholder="blur"
      />
    </div>
  );
}

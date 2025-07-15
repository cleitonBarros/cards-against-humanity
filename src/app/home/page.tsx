import FaQ from "./_components/FaQ";
import Hero from "./_components/hero";
import Marquee from "./_components/marquee";
import YourStory from "./_components/your-story";

export default function Home() {
  return (
    <>
      <Hero />
      <YourStory />
      <Marquee />
      <FaQ />
    </>
  );
}

import Banner from "@/components/home/banner";
import Experiences from "@/components/home/experiences";
import Solution from "@/components/home/solution";

export default function Home() {
  return (
      <div className={'pt-16 bg-white text-dark'}>
        <Banner/>
          <Experiences />
          <Solution/>
      </div>
  );
}

import Banner from "@/components/home/banner";
import Experiences from "@/components/home/experiences";

export default function Home() {
  return (
      <div className={'pt-16 bg-white text-dark'}>
        <Banner/>
          <Experiences />
      </div>
  );
}

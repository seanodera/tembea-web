import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {FaChevronCircleRight} from "react-icons/fa";
import {AiOutlineGithub} from "react-icons/ai";

export default function Banner() {

    return <section className={'text-center px-8 bg-white'}>
        <div className={'rounded-xl h-screen bg-cover gap-8 flex flex-col justify-between items-center text-dark'} style={{
            backgroundImage: `url("/cover.jpg")`
        }}>
            <div className={'pt-40 items-center text-center'}>
                <h1 className={'text-9xl font-semibold'}>
                    Adam & Butler
                </h1>
                <h2 className={'text-5xl font-semibold'}>Hallmark of luxury travel</h2>
                <div className={'px-8 py-4 rounded-full mx-auto mt-16 bg-white text-black text-xl font-light w-max flex gap-4'}>
                    <Link href={'/experience'} className={'flex flex-nowrap items-center gap-2'}>Our
                        Experience <FaChevronCircleRight className={'text-primary'}/> </Link>
                    <Link href={'/journey'} className={'flex items-center gap-2'}>Plan Your
                        Journey <FaChevronCircleRight className={'text-primary'}/></Link>
                    <Link href={'/webinar'} className={'flex items-center gap-2'}>Webinar <FaChevronCircleRight
                        className={'text-primary'}/></Link>
                </div>
            </div>

            <div className={'flex py-8 px-4 backdrop-blur-sm bg-opacity-25 bg-white w-full text-black'}>
                <AiOutlineGithub size={24} />
            </div>
        </div>

    </section>
}
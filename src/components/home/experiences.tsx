'use client'
import {AiOutlineHeart} from "react-icons/ai";
import {HeartIcon} from "@heroicons/react/24/outline";
import {FaCircleChevronDown} from "react-icons/fa6";
import {BiChevronDown} from "react-icons/bi";
import {useState} from "react";
import experiences from "@/data/experiencesData";

const experiencesTypes = ['All experiences', 'Photography', 'Adventure', 'Celebration', 'Family', 'Culinary', 'Speciality', 'Luxury', 'Voyages']

export default function Experiences() {
    const [currentIndex, setCurrentIndex] = useState(0);
    return <section className={'px-24 my-24 bg-white'}>
        <div className={'grid grid-cols-3 md:gap-24'}>
            <div>
                <h2 className={'text-6xl font-bold'}>Africa</h2>
                <p>

                </p>
            </div>
            <ExperienceCard experience={experiences[0]}/>
            <div className={'text-end flex flex-col gap-4'}>
                <div className={'rounded-full border border-dark py-2 px-3 w-max flex ms-auto'}>Africa <BiChevronDown
                    size={24}/></div>
                <h2 className={'text-3xl pb-2'}>Select experience type</h2>
                <div className={'flex flex-row gap-4 ms-auto w-2/3 justify-end flex-wrap'}>
                    {experiencesTypes.map((experience, index) => <Pill key={index} text={experience}
                                                                       active={index === currentIndex}
                                                                       onClick={() => setCurrentIndex(index)}/>)}
                </div>
            </div>
            {experiences.slice(1, 6).map((experience, index) => <ExperienceCard experience={experience} key={index}/>)}
            <div className={'flex flex-col justify-between px-4'}>
                <p>Africa has an immense amount to offer as a travel destination. Discover your own africa, the most
                    important question is, where is heart set to visiting first? </p>
                <Pill text={'View More'}/>
            </div>
        </div>
    </section>
}


function ExperienceCard({experience}: {
    experience: {
        id: number,
        location: string,
        image: string,
        favorite: boolean,
        activity: string,
    }
}) {
    return <div className={'rounded-lg p-8 bg-cover flex flex-col justify-between text-white bg-blend-darken'} style={{
        backgroundImage: `url(${experience.image})`,
        aspectRatio: '0.87'
    }}>
        <div className={'flex justify-between '}>
            <div className={'rounded-full bg-white text-dark py-2 px-3'}>Adventure</div>
            <div className={'rounded-full w-11 h-11 shrink-0 grow-0 aspect-square bg-white bg-opacity-50 py-2'}>
                <HeartIcon className={`mx-auto h-7 ${experience.favorite ? 'fill-primary' : ''}`}/></div>
        </div>
        <div className={'backdrop-blur-sm bg-opacity-20 bg-dark px-3 py-2 rounded-xl'}>
            <h2 className={'text-3xl pb-4'}>{experience.activity}</h2>
            <p>{experience.location}</p>
        </div>
    </div>
}

function Pill(this: any, {text, active = false, onClick}: { text: string, active?: boolean, onClick?: () => void }) {

    return <div
        className={`${active ? 'bg-dark text-white' : 'bg-white text-dark'} rounded-full py-2 px-3 w-max text-nowrap border border-gray-500 active:bg-dark active:text-white hover:bg-dark hover:text-white`}
        onClick={onClick?.bind(this)}>{text}</div>
}
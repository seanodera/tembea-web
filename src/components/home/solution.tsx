import {faker} from "@faker-js/faker";
import {AiFillCiCircle} from "react-icons/ai";


export default function Solution() {

    return <section className="section text-center px-24 py-16">
        <h1 className="text-8xl font-bold">Why Aviatour</h1>

        <div className={'grid grid-cols-3 items-center bg-line mt-8'}>
            <div className={'col-span-1 py-16 flex items-center'}>
                <img src={faker.image.urlLoremFlickr({category: 'beach'})} alt={''} className={'rounded-xl aspect-video object-cover'}/>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={' col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Best Travel Provider</h3>
                <p className={'mt-4'}>Your travel memories and stories are our top priority. We ensure that the entire
                    process of our holiday goes well and is unforgettable</p>
            </div>

            <div className={' row-span-1 col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Experienced Agent</h3>
                <p className={'mt-4'}>Our experience and flying hours have proven that the satisfaction of customers who
                    keep coming back and the various things we have gone through are our basis for providing the best
                    and always being ready to provide solutions for you.</p>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={'row-span-1 col-span-1 py-16 flex items-center'}>
                <img src={faker.image.urlLoremFlickr({category:'hotel'})} alt={''} className={'rounded-xl aspect-video object-cover'}/>
            </div>

            <div className={'row-span-1 col-span-1 py-16 flex items-center'}>
                <img src={faker.image.urlLoremFlickr({category:'pool'})} alt={''} className={'rounded-xl aspect-video object-cover'}/>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={' row-span-1 col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Best And Personal Service</h3>
                <p className={'mt-4'}>We know that your interests are more important than any program we can offer.
                    Providing the best service for each individual is our principle in perfecting your trip</p>
            </div>
            <div className={' row-span-1 col-span-1 py-16 text-start flex flex-col justify-center gap-2'}>
                <h3 className={'text-5xl font-semibold'}>Free From Problems</h3>
                <p className={'mt-4'}>
                    Through comprehensive service in all aspects, you don&apos;t need to take care of many things and make
                    your holiday like work. We will do it for you so you can enjoy every moment without any problems</p>
            </div>
            <div className={'mx-auto w-max h-max rounded-full bg-gray-200 p-2'}>
                <div className={'rounded-full bg-primary p-3'}/>
            </div>
            <div className={'row-span-1 col-span-1 py-16 flex items-center'}>
                <img src={faker.image.urlLoremFlickr({category: 'caribbean'})} alt={''} className={'rounded-xl aspect-video object-cover'}/>
            </div>
        </div>
    </section>
}
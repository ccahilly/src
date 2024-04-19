import Layout from "@/components/layout";
import images from "@/public/images.json";
import copy from "@/public/copy.json";
import schedule from "@/public/schedule.json";
import { IoGlobe } from "react-icons/io5";

export default function Contact() {
    return (
        <Layout>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">{copy.runs.title.split(" ").slice(0, -1).join(" ")} <span className="underline underline-offset-2">{copy.runs.title.split(" ").slice(-1)}</span></h2>
            </section>
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-20">
                <div className="flex flex-col justify-center items-center border rounded h-fit">
                    <img src={images.schedule.claw} alt="Claw" className="w-full aspect-video object-cover" />
                    <div className="flex gap-2 items-center mt-4">
                        <h3 className="text-2xl font-black text-center">{copy.schedule.claw.title}</h3>
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-center text-sm px-2 text-neutral-500 leading-4 my-1">
                        {copy.schedule.claw.description}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <div className="flex gap-4 text-center font-semibold">
                        {
                            schedule.claw.days.map((day, index) => (
                                <p key={index}>{day}</p>
                            ))
                        }
                    </div>
                    <div className="flex gap-4 text-center font-bold">
                        {schedule.claw.time}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <a href={schedule.claw.location.url} className="text-rose-500 hover:underline underline-offset-2 flex gap-2 items-center mt-4 mb-8">
                        <IoGlobe />
                        {schedule.claw.location.name}
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center border rounded h-fit">
                    <img src={images.schedule.track} alt="Claw" className="w-full aspect-video object-cover" />
                    <div className="flex gap-2 items-center mt-4">
                        <h3 className="text-2xl font-black text-center">{copy.schedule.track.title}</h3>
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                    </div>
                    <div className="text-center text-sm px-2 text-neutral-500 leading-4 my-1">
                        {copy.schedule.track.description}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <div className="flex gap-4 text-center font-semibold">
                        {
                            schedule.track.days.map((day, index) => (
                                <p key={index}>{day}</p>
                            ))
                        }
                    </div>
                    <div className="flex gap-4 text-center font-bold">
                        {schedule.track.time}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <a href={schedule.track.location.url} className="text-rose-500 hover:underline underline-offset-2 flex gap-2 items-center mt-4 mb-8">
                        <IoGlobe />
                        {schedule.track.location.name}
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center border rounded h-fit">
                    <img src={images.schedule.fun} alt="Claw" className="w-full aspect-video object-cover" />
                    <div className="flex gap-2 items-center mt-4">
                        <h3 className="text-2xl font-black text-center">{copy.schedule.fun.title}</h3>
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-center text-sm px-2 text-neutral-500 leading-4 my-1">
                        {copy.schedule.fun.description}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <div className="flex gap-4 text-center font-semibold">
                        {
                            schedule.fun.days.map((day, index) => (
                                <p key={index}>{day}</p>
                            ))
                        }
                    </div>
                    <div className="flex gap-4 text-center font-bold">
                        {schedule.fun.time}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <a href={schedule.fun.location.url} className="text-rose-500 hover:underline underline-offset-2 flex gap-2 items-center mt-4 mb-8">
                        <IoGlobe />
                        {schedule.fun.location.name}
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center border rounded h-fit">
                    <img src={images.schedule.long} alt="Claw" className="w-full aspect-video object-cover" />
                    <div className="flex gap-2 items-center mt-4">
                        <h3 className="text-2xl font-black text-center">{copy.schedule.long.title}</h3>
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    </div>
                    <div className="text-center text-sm px-2 text-neutral-500 leading-4 my-1">
                        {copy.schedule.long.description}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <div className="flex gap-4 text-center font-semibold">
                        {
                            schedule.long.days.map((day, index) => (
                                <p key={index}>{day}</p>
                            ))
                        }
                    </div>
                    <div className="flex gap-4 text-center font-bold">
                        {schedule.long.time}
                    </div>
                    <hr className="w-1/2 my-4" />
                    <a href={schedule.fun.location.url} className="text-rose-500 hover:underline underline-offset-2 flex gap-2 items-center mt-4 mb-8">
                        <IoGlobe />
                        {schedule.long.location.name}
                    </a>
                </div>
            </section>
            <section className="max-w-6xl mx-auto grid grid-cols-1 gap-8 p-4">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">Traditions</h2>
                <div className="w-full grid lg:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center justify-center border rounded p-4">
                        <h3 className="text-2xl font-black mt-4">The Dish Race</h3>
                        <div className="my-2 py-2 px-4 rounded bg-rose-100 font-bold text-rose-900 uppercase text-xs">
                            SPRING
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center border rounded p-4">
                        <h3 className="text-2xl font-black mt-4">Liquidy Lag Lap</h3>
                        <div className="my-2 py-2 px-4 rounded bg-rose-100 font-bold text-rose-900 uppercase text-xs">
                            FALL/SPRING
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center border rounded p-4">
                        <h3 className="text-2xl font-black mt-4">Stanford to Sea</h3>
                        <div className="my-2 py-2 px-4 rounded bg-rose-100 font-bold text-rose-900 uppercase text-xs">
                            SPRING
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import images from "@/public/images.json";
import schedule from "@/public/schedule.json";
import copy from "@/public/copy.json";
import contact from "@/public/contact.json";
import { IoCaretDown, IoGlobe } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-full lg:min-h-[90vh]">
          <img src={images.home.hero} alt="Runners" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center">{copy.home.title}</h2>
          <p className="text-neutral-500 text-center mt-4">{copy.home.subtitle}</p>
          <IoCaretDown className="text-4xl mt-4 animate-bounce" />
        </div>
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
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center text-center my-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold drop-shadow-xl text-center">HOW TO JOIN?</h2>
          <h2 className="text-5xl lg:text-7xl font-black text-center mt-4"><span className="bg-gradient-to-br from-red-700 via-rose-600 to-pink-600 inline-block text-transparent bg-clip-text">EASY!</span> <br /> Just <span className="underline underline-offset-4">show up</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <Link href={contact.mailingList} className="px-8 py-4 bg-rose-500 text-white text-xl font-semibold rounded hover:bg-rose-600 transition-colors">
              Join the Mailing List
            </Link>
            <Link href={contact.groupMe} className="px-8 py-4 bg-rose-100 text-rose-900 text-xl font-semibold rounded hover:bg-rose-200 transition-colors">
              Join the Groupchat
            </Link>
          </div>
        </div>
        <div className="w-full h-full">
          <img src={images.home.join_us} alt="Runners" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="max-w-5xl mx-auto my-20">
        <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mb-8">Calendar</h2>
        <iframe title="Running Calendar" src="https://outlook.office365.com/owa/calendar/3d6c0cdd40fd4f728fb575da26bc71ed@stanford.edu/2689cb5f4a434de5adff799992c3ee3c1962905941190256865/calendar.html" width="100%" height="600" />
      </section>
    </Layout>
  );
}

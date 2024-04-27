import Layout from "@/components/layout";
import images from "@/public/images.json";
import copy from "@/public/copy.json";
import records from "@/public/records.json";
import Link from "next/link";
import contact from "@/public/contact.json";

export default function Contact() {
    return (
        <Layout>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">{copy.team.title}</h2>
                <Link href={contact.teamForm} className="w-fit mx-auto px-8 py-4 bg-rose-500 text-white text-xl font-semibold rounded hover:bg-rose-600 transition-colors">
                    Join the Team
                </Link>
                <div className="text-neutral-500 flex items-center justify-center gap-8 text-center">
                    <hr className="w-1/3 my-4" />
                    {copy.team.subtitle}
                    <hr className="w-1/3 my-4" />
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto my-20">
                <img src={images.team.coach.hero} alt="Stanford Running Club Coach" className="hidden md:block w-full h-full object-cover rounded" />
                <div className="flex flex-col justify-center items-center p-8">
                    <img src={images.team.coach.headshot} alt="Stanford Running Club Coach" className="w-32 h-32 object-cover rounded-full" />
                    <div className="mt-4 text-xs font-bold px-4 py-1 bg-black rounded text-white mb-1">COACH</div>
                    <h3 className="text-3xl font-black text-center">{copy.team.coach.name}</h3>
                    <p className="text-neutral-500 text-center mt-4 text-sm">{copy.team.coach.bio}</p>
                </div>
            </section>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8 p-4">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">Records</h2>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-black">Track</h3>
                    {
                        records.track.map((distance, index) => (
                            <div key={index} className="flex flex-col border rounded p-4 gap-4">
                                <h4 className="text-xl font-black">{distance.name}</h4>
                                {
                                    distance.records.map((record, index) => (
                                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left" key={index}>
                                            <p className="w-40 font-bold">{record.name}</p>
                                            <p className="w-20">{record.time}</p>
                                            <p className="w-32">{record.date}</p>
                                            <p>{record.location}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <h3 className="text-3xl font-black">Cross Country</h3>
                    {
                        records.xc.map((distance, index) => (
                            <div key={index} className="flex flex-col border rounded p-4 gap-4">
                                <h4 className="text-xl font-black">{distance.name}</h4>
                                {
                                    distance.records.map((record, index) => (
                                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left" key={index}>
                                            <p className="w-40 font-bold">{record.name}</p>
                                            <p className="w-16">{record.time}</p>
                                            <p className="w-32">{record.date}</p>
                                            <p>{record.location}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <h3 className="text-3xl font-black">Road</h3>
                    {
                        records.road.map((distance, index) => (
                            <div key={index} className="flex flex-col border rounded p-4 gap-4">
                                <h4 className="text-xl font-black">{distance.name}</h4>
                                {
                                    distance.records.map((record, index) => (
                                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left" key={index}>
                                            <p className="w-40 font-bold">{record.name}</p>
                                            <p className="w-16">{record.time}</p>
                                            <p className="w-32">{record.date}</p>
                                            <p>{record.location}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <h3 className="text-3xl font-black">Field</h3>
                    {
                        records.field.map((distance, index) => (
                            <div key={index} className="flex flex-col border rounded p-4 gap-4">
                                <h4 className="text-xl font-black">{distance.name}</h4>
                                {
                                    distance.records.map((record, index) => (
                                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left" key={index}>
                                            <p className="w-40 font-bold">{record.name}</p>
                                            <p className="w-16">{record.time}</p>
                                            <p className="w-32">{record.date}</p>
                                            <p>{record.location}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <h3 className="text-3xl font-black">Miscellaneous</h3>
                    {
                        records.misc.map((distance, index) => (
                            <div key={index} className="flex flex-col border rounded p-4 gap-4">
                                <h4 className="text-xl font-black">{distance.name}</h4>
                                {
                                    distance.records.map((record, index) => (
                                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left" key={index}>
                                            <p className="w-40 font-bold">{record.name}</p>
                                            <p className="w-16">{record.time}</p>
                                            <p className="w-32">{record.date}</p>
                                            <p>{record.location}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </section>
        </Layout >
    )
}
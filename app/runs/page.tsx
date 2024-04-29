import Layout from "@/components/layout";
import copy from "@/public/copy.json";
import routes from "@/public/routes.json";
import Link from "next/link";
import images from "@/public/images.json";

export default function Contact() {
    return (
        <Layout>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8 p-4">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">{copy.runs.title.split(" ").slice(0, -1).join(" ")} <span className="underline underline-offset-2">{copy.runs.title.split(" ").slice(-1)}</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    {
                        images.runs.hero_gallery.map((image, index) => (
                            <img key={index} src={image} alt="Run Hero" className={
                                `w-full h-full object-cover rounded aspect-video 
                                ${index > 0 ? "hidden lg:block" : ""}`
                            } />
                        ))
                    }
                </div>
            </section>
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-20">
                {
                    routes.claw.map((route, index) => (
                        <div key={index} className="flex flex-col items-center justify-center border rounded p-4">
                            <h3 className="text-2xl font-black mt-4">{route.name}</h3>
                            <div className="flex flex-col items-center justify-center my-4 gap-2">
                                <div className="font-semibold text-2xl uppercase">{route.distance}</div>
                                <div className="py-2 px-4 rounded uppercase text-xs">
                                    <strong className="mr-2">Elevation</strong>
                                    {route.climb}
                                </div>
                            </div>
                            <Link href={route.strava} className="px-4 py-2 bg-rose-100 text-rose-900 rounded font-semibold w-full text-center">
                                View Route on Strava
                            </Link>
                        </div>
                    ))
                }
                <div className="flex flex-col items-center justify-center border rounded p-4">
                    <h3 className="text-2xl font-black mt-4">And more...</h3>
                </div>
            </section>
            <section className="max-w-6xl mx-auto grid grid-cols-1 gap-8 p-4">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-8">Traditions</h2>
                <div className="w-full grid lg:grid-cols-3 gap-4">
                    {
                        copy.runs.traditions.map((tradition, index) => (
                            <div key={index} className="border rounded">
                                <img src={tradition.image} alt={tradition.name} className="object-cover aspect-video" />
                                <div className="flex flex-col items-center justify-center p-4 gap-2">
                                    <h3 className="text-2xl font-black mt-4">{tradition.name}</h3>
                                    <p className="text-sm text-neutral-500 text-center px-2 leading-4 my-2">
                                        {tradition.description}
                                    </p>
                                    <div className="my-2 py-2 px-4 rounded bg-rose-100 font-bold text-rose-900 uppercase text-xs">
                                        {tradition.season}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}
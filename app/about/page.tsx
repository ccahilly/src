import Layout from "@/components/layout";
import images from "@/public/images.json";
import copy from "@/public/copy.json";

export default function Contact() {
    return (
        <Layout>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">{copy.about.title.split(" ").slice(0, -1).join(" ")} <span className="underline underline-offset-2">{copy.about.title.split(" ").slice(-1)}</span></h2>
                <div className="text-neutral-500 flex items-center justify-center gap-8 text-center max-w-prose mx-auto">
                    {copy.about.subtitle}
                </div>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto my-20">
                <div className="grid">
                    {
                        images.about.gallery.slice(0, 2).map((image, index) => (
                            <div key={index}>
                                <img
                                    className="h-auto max-w-full object-cover object-center aspect-square"
                                    src={image}
                                    alt="gallery-photo"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="grid">
                    {
                        images.about.gallery.slice(3, 5).map((image, index) => (
                            <div key={index}>
                                <img
                                    className="h-auto max-w-full object-cover object-center aspect-square"
                                    src={image}
                                    alt="gallery-photo"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="grid">
                    {
                        images.about.gallery.slice(7).map((image, index) => (
                            <div key={index}>
                                <img
                                    className="h-auto max-w-full object-cover object-center aspect-square"
                                    src={image}
                                    alt="gallery-photo"
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}
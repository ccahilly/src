import Layout from "@/components/layout";
import Link from "next/link";
import contact from "@/public/contact.json";

export default function Contact() {
    return (
        <Layout>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                <h2 className="text-5xl lg:text-7xl font-black drop-shadow-xl text-center mt-20">GET IN TOUCH</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link href={contact.mailingList} className="px-8 py-4 bg-rose-500 text-white text-xl font-semibold rounded hover:bg-rose-600 transition-colors">
                        Join the Mailing List
                    </Link>
                    <Link href={contact.groupMe} className="px-8 py-4 bg-rose-100 text-rose-900 text-xl font-semibold rounded hover:bg-rose-200 transition-colors">
                        Join the Groupchat
                    </Link>
                </div>
                <div className="text-neutral-500 flex items-center justify-center gap-8 text-center">
                    <hr className="w-1/3 my-4" />
                    or reach out directly
                    <hr className="w-1/3 my-4" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {
                        contact.contacts.map((contact, index) => (
                            contact.people.map((person, index) => (
                                <div key={index} className="flex flex-col items-center justify-center border rounded p-4">
                                    <img src={person.image} alt={person.name} className="w-24 h-24 object-cover" />
                                    <h3 className="text-xl font-bold mt-4">{person.name}</h3>
                                    <Link href={`mailto:${person.email}`} className="text-neutral-500 hover:underline">{person.email}</Link>
                                    <div className="my-2 py-2 px-4 rounded bg-rose-100 font-bold text-rose-900 uppercase text-xs">
                                        {contact.role}
                                    </div>
                                </div>
                            ))
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}
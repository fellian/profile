import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Home = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const storedMessages =
            JSON.parse(localStorage.getItem("contactMessages") || "[]") || [];
        const updatedMessages = [...storedMessages, formData];
        localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

        setFormData({ name: "", email: "", message: "" });

    };

    return (
        <>
            <section
                id="home"
                className="py-20 bg-gray-900 text-white text-center"
            >
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Hi, I'm Fellian Satriabudi
                        </h1>
                        <p className="text-xl sm:text-2xl text-blue-300 font-medium mb-6">
                            Student
                        </p>
                        <img
                            src="src/assets/foto2.jpg"
                            alt="Fellian Satriabudi"
                            className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500 shadow-md object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            <section id="about" className="py-20 bg-gray-900 text-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded" />
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            className="md:w-1/3 flex justify-center"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="group w-64 h-64 rounded-xl overflow-hidden shadow-xl ring-4 ring-blue-500 bg-gray-800 transform hover:scale-105 transition duration-300">
                                <img
                                    src="src/assets/foto1.jpeg"
                                    alt="About"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="md:w-2/3 md:pl-8"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I am a student of Informatics Engineering Study Program, Faculty of Computer Science, Soegijapranata Catholic University. I am currently in 4th semester and live in Semarang. I am interested in web application development, programming, and the latest technology in informatics.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: "Full Name", value: "Fellian Satriabudi" },
                                    { label: "Nick Name", value: "Ian" },
                                    { label: "Email", value: "fellian.satriabudi@gmail.com" },
                                    { label: "From", value: "Purworejo, Central Java" },
                                    { label: "Hobbies", value: "Playing Football, Listen Music, Watching Football Match, Play Games" },
                                    { label: "Education", value: "Informatics Engineering, Soegijapranata Catholic University" },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold text-gray-200 mb-1">{item.label}:</h4>
                                        <p className="text-gray-400">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="skills" className="py-20 bg-gray-900 text-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            The following are the technical and soft skills that I have mastered.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 justify-center text-center">
                        <ul className="space-y-2 items-center text-center">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                        <ul className="space-y-2 items-center text-center">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                        </ul>
                        <ul className="space-y-2 items-center text-center">
                            <li>Problem Solving</li>
                            <li>Communication</li>
                            <li>Teamwork & Collaboration</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-gray-900 text-gray-100">
                <div className="max-w-2xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Contact Me
                        </h2>
                        <p className="mb-8 text-gray-400">
                            Want to discuss or collaborate? Send a direct message via the
                            following form:
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 text-left">
                            <input
                                type="text"
                                id="nama"
                                name="name"
                                autoComplete="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                autoComplete="off"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold shadow"
                            >
                                Send Message
                            </button>
                        </form>

                        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4 text-blue-400 text-lg">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=fellian.satriabudi@gmail.com"
                                target="_blank"
                                className="hover:underline text-center"
                            >
                                fellian.satriabudi@gmail.com
                            </a>
                            <a
                                href="https://www.instagram.com/fellianns_?igsh=YzhieHNlaGUwY2Nr"
                                target="_blank"
                                className="flex items-center justify-center gap-2 hover:underline"
                            >
                                <FaInstagram /> Instagram
                            </a>
                            <a
                                href="https://wa.me/qr/7CWGJ5GHNCYQN1"
                                target="_blank"
                                className="flex items-center justify-center gap-2 hover:underline"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home

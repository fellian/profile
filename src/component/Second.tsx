import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "FinBot",
      description:
        "FinBot is a web-based chatbot designed to assist in answering various questions related to Financial Technology (FinTech). It provides quick, relevant, and easy-to-understand information on topics such as digital wallets, online lending, tech-based investments, and other digital financial services.",
      image: "/assets/finbot.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio website is a personal site that serves as a platform to showcase one's works, experiences, and skills professionally. Through this website, visitors can learn more about the individual's background, completed projects, and areas of expertise.",
      image: "/assets/portofolio.png",
    },
    {
      title: "Book List Website",
      description:
        "The Book List Website is a web application designed to display, manage, and search for various types of books. It allows users to view available books, add new entries, edit information, and efficiently search through the collection.",
      image: "/assets/daftarbuku.png",
    },
    {
      title: "DecoNest",
      description:
        "DecoNest is a web-based application developed to facilitate the online ordering and selling of home furniture. The design process includes requirement analysis (software specification), system design, and test scenario development. It also involves creating database designs (ERD), UML diagrams, Data Flow Diagrams (DFD), and responsive UI/UX designs to ensure optimal user experience across devices.",
      image: "/assets/deconest.png",
    },
    {
      title: "Movie List Website - Cinephile",
      description:
        "Cinephile is a movie web application that allows users to browse movie listings, view details about each movie, and add or remove movies from their favorites list. The website is built using Next.js (App Router) and gets data from MockAPI.io.",
      image: "/assets/film.png",
    },
    {
      title: "Weather Forecast Website",
      description:
        "The Artificial Neural Network (ANN)-Based Weather Forecast Website is a web application that can predict daily weather conditions, such as sunny, cloudy, or rainy, based on real-time data retrieved from WeatherAPI. This application is built using Flask (Python) for the backend and HTML/CSS/JavaScript for the interface. The Artificial Neural Network (ANN) model embedded in the system is used to analyze weather data such as temperature, humidity, wind speed, and sky conditions to produce accurate predictions.",
      image: "/assets/cuaca.png",
    },
  ];

  const truncate = (text: string, maxLength = 100) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <section id="projects" className="py-16 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  {truncate(project.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-8 w-full max-w-4xl text-gray-900 shadow-2xl ring-2 ring-indigo-400 flex flex-col items-center"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                onClick={() => setPreviewImage(selectedProject.image)}
                className="w-full max-w-lg h-64 object-cover rounded mb-6 shadow-md cursor-zoom-in"
              />
              <h2 className="text-2xl font-bold mb-3 text-center">{selectedProject.title}</h2>
              <p className="mb-6 text-sm sm:text-base text-center max-w-xl">
                {selectedProject.description}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-2 rounded hover:opacity-90 text-sm shadow-md"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            <motion.img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain p-4 cursor-zoom-out"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects

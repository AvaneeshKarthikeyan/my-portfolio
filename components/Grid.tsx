import { motion } from "framer-motion";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-opacity-10 bg-white backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-4">
          I prioritize client collaboration, fostering open communication
        </h2>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-opacity-10 bg-white backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-4">
          I&apos;m very flexible with time zone communications
        </h2>

        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-opacity-10 bg-white backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-4">
          Tech enthusiast with a passion for development.
        </h2>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-opacity-10 bg-white backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden"
      >
        <h2 className="text-2xl font-bold mb-4">My tech stack</h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-opacity-20 bg-purple-500 rounded-full">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-opacity-20 bg-blue-500 rounded-full">
            Express
          </span>
          <span className="px-3 py-1 bg-opacity-20 bg-green-500 rounded-full">
            Vue.js
          </span>
          <span className="px-3 py-1 bg-opacity-20 bg-yellow-500 rounded-full">
            Nuxt.js
          </span>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};

export default Grid;

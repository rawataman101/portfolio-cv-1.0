import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden 
      flex-col text-left md:flex-row 
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      {/* heading */}
      <h3
        className="absolute top-24 uppercase 
      tracking-[20px] text-gray-500 text-2xl"
      >
        Experience
      </h3>

      {/* card */}
      <div
        className="w-full flex space-x-10
      overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar-thin scrollbar-track-gray-400/2 scrollbar-thumb-[#F7AB0A]/80"
      >
        {/* cards */}
        {experiences?.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

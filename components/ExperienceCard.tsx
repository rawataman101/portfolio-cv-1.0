import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-l items-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[650px] 
    xl:w-[900px] xl:h-[600px]
    snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer 
    duration-200 overflow-hidden mt-[50px]"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>

        {/* tech used */}
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (
            <img
              key={experience._id}
              className="h-10 w-10 rounded-full object-contain"
              src={urlFor(tech?.image).url()}
              alt=""
            />
          ))}
        </div>
        {/* date */}
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul
          className="list-disc space-y-4 ml-5 text-lg h-60 w-90 overflow-y-scroll 
        scrollbar-thin scrollbar-track-black 
        scrollbar-thumb-[#F7AB0A]/80 pr-5
        xl:w-4/5 xl:h-[100px]"
        >
          {experience?.points?.map((point, i) => (
            <li key={i}>🟡 {point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

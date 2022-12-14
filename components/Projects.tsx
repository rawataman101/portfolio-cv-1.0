import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase 
      tracking-[20px] text-gray-500 text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-20 w-full
      scrollbar-thin scrollbar-track-gray-400/2 
      scrollbar-thumb-[#F7AB0A]/80 h-full mb-[120px]"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center
          flex flex-col sapce-y-5 items-center justify-center p-20
          md:p-44 md:mt-20 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="object-contain h-[300px] w-[300px] xl:h-[350px] xl:w-[600px] mb-5"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}
                </span>
                : {project?.title}
              </h4>
              {/* git link */}
              <div className="flex items-center justify-center">
                <SocialIcon
                  className="cursor-pointer"
                  url={project?.linkToBuild}
                  network="telegram"
                  fgColor="gray"
                  bgColor="transparent"
                />
                {/* vertical line */}
                <div className="vl" />
                <SocialIcon
                  className="cursor-pointer"
                  url={project?.githubLink}
                  network="github"
                  fgColor="gray"
                  bgColor="transparent"
                />
              </div>
              {/* technologies */}
              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((tech) => (
                  <img
                    key={tech._id}
                    src={urlFor(tech?.image).url()}
                    alt=""
                    className="object-contain h-10 w-10"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* background line */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

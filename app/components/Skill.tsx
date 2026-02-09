import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

type Skill = { name: string; level: string; description?: string };
type Props = { skills: Skill[] };

const MotionCard = motion.div;
const MotionButton = motion.button;

export default function SkillComponent({ skills }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const selectedSkill = openIndex !== null ? skills[openIndex] : null;

  const otherSkills = useMemo(
    () =>
      skills
        .map((s, i) => ({ skill: s, index: i }))
        .filter((x) => x.index !== openIndex),
    [skills, openIndex]
  );

  return (
    <section
      id="skills"
     className="min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center"
      >
        <h3 className="opacity-70">Explore My</h3>
        <h2 className="text-3xl font-bold section-text">Skills</h2>
      </motion.div>

      <LayoutGroup>
        <AnimatePresence mode="wait">
          {openIndex === null ? (
            // A) default grid
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl"
            >
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                  uniform
                  onClick={() => setOpenIndex(index)}
                />
              ))}
            </motion.div>
          ) : (
            // B) open layout
            <motion.div
              key="open"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl"
            >
              {/* LEFT selected */}
              <MotionCard
                layout
                initial={{ opacity: 0, x: -10, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                {/* subtle animated gradient */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.12]"
                  initial={{ opacity: 0.05 }}
                  animate={{ opacity: 0.12 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background:
                      "radial-gradient(600px circle at 20% 20%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(600px circle at 80% 30%, rgba(168,85,247,0.35), transparent 55%)",
                  }}
                />

                <div className="relative">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Selected
                  </div>

                  <motion.div
                    key={selectedSkill?.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="font-bold text-gray-900 dark:text-gray-100 text-center text-4xl"
                  >
                    {selectedSkill?.name}
                  </motion.div>

                  <motion.div
                    key={selectedSkill?.level}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: 0.03 }}
                    className="text-gray-600 dark:text-gray-300 mt-1 text-[1.5rem]"
                  >
                    <span className="font-semibold block">Level:</span> {selectedSkill?.level}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: 0.06 }}
                    className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                  
                  </motion.p>

                  <MotionButton
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="absolute top-4 right-4 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-sm dark:border-gray-600 dark:bg-gray-700 text-gray-900 font-semibold dark:text-gray-100 cursor-pointer"
                    onClick={() => setOpenIndex(null)}
                  >
                    ✕
                    <motion.span
                      aria-hidden
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      
                    </motion.span>
                  </MotionButton>
                </div>
              </MotionCard>

              {/* RIGHT others */}
              <motion.div
                layout
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {otherSkills.map(({ skill, index }) => (
                  <SkillCard
                    key={index}
                    skill={skill}
                    uniform
                    onClick={() => setOpenIndex(index)}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}

function SkillCard({
  skill,
  onClick,
  uniform,
}: {
  skill: Skill;
  onClick: () => void;
  uniform?: boolean;
}) {
  return (
    <MotionCard
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",
        uniform ? "min-h-[96px]" : "",
      ].join(" ")}
    >
      {/* hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(420px circle at 50% 10%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(520px circle at 90% 60%, rgba(168,85,247,0.16), transparent 60%)",
        }}
      />

      <div className="relative p-4 flex items-center justify-between gap-4 h-full">
        <div className="min-w-0">
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
            {skill.name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-300 truncate">
            {skill.level}
          </div>
        </div>

        <MotionButton
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="shrink-0 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-sm dark:border-gray-600 dark:bg-gray-700 text-gray-900 font-semibold dark:text-gray-100 cursor-pointer"
          onClick={onClick}
        >
          Description
        </MotionButton>
      </div>
    </MotionCard>
  );
}

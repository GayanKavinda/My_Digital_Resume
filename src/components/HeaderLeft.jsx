import "react";
import PropTypes from "prop-types";
import image from "/IMG_0938_crop.jpg";
import {
  BiSun,
  BiMoon,
  // BiCurrentLocation,
  BiEnvelope,
  BiPhone,
  BiLogoGithub,
  // BiLogoTwitter,
  BiLogoLinkedin,
  BiHome,
  BiLogoFirefox,
  BiCool,
} from "react-icons/bi";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="" className="w-32 rounded-full" />

          <div className="text-center space-y-1">
            <h1 className="text-4x1 font-light">
              Gayan <span className="font-semibold"> Gamlath </span>
            </h1>
            <h3 className="text-xl font-light"> Fresh Graduate Developer </h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiHome className="text-xl" />
              <span>Gampaha, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>gayankavinda98v.lk@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>+9470 213 1350</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <a
                href="https://github.com/GayanKavinda/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                github.com/GayanKavinda/
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoFirefox className="text-xl" />
              <a
                href="https://gayankv-profile.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                gayankv-profile.vercel.app/
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <a
                href="https://linkedin.com/in/gayan-gamlath-k98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                linkedin.com/in/gayan-gamlath-k98
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

          <ul className="relative border-l border-gray-200 dark:border-gray-700">
            <li
              className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 
                before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform"
            >
              <span className="font-semibold md:text-lg">
                Information Technology
              </span>
              <span className="font-light">
                Sri Lanka Institute of Information Technology
              </span>
              <span className="text-sm text-gray-400">2018 - 2024</span>
            </li>
            <li
              className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 
                before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform"
            >
              <span className="font-semibold md:text-lg">
                Advanced Level - ART Stream
              </span>
              <span className="font-light">Thakshila Collage Gampaha</span>
              <span className="text-sm text-gray-400">2015 - 2017</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
          <div className="space-y-3">
            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                Technical
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Laravel",
                  "UI/UX",
                  "AWS",
                  "Docker",
                  "MySQL",
                  "PostgreSQL",
                  "CI/CD",
                  "Linux",
                  "API Testing",
                  "Selenium",
                  "Wordpress",
                ].map((skill, idx) => (
                  <span
                    key={skill + idx}
                    className="bg-black text-white px-3 py-1 rounded-full text-xs dark:bg-white dark:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                Core
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Project Management",
                  "Data Analysis",
                  "Problem Solving",
                  "Networking & Hardware Management",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-3 py-1 rounded-full text-xs dark:bg-white dark:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Communication",
                  "Leadership",
                  "Teamwork",
                  "Adaptability",
                  "Work Ethics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-3 py-1 rounded-full text-xs dark:bg-white dark:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>

          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3">
              <li>Gaming</li>
              <li>Learning</li>
              <li>Workouts</li>
              <li>Movies & Anime</li>
              <li>Exploring Tech</li>
            </ul>

            {/* <ul className="flex list-disc flex-col gap-3">
              <li>Gaming</li>
              <li>Learning</li>
              <li>Earning</li>
            </ul> */}
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-bae font-semibold md:text-2xl">LANGUAGES</h1>

          <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
            <li>Sinhala</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

HeaderLeft.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default HeaderLeft;

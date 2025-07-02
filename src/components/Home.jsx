import "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            <b className="dark:text-white">Passionate IT Fresh Graduate</b> with
            1 year of professional experience in software development, testing,
            and cloud technologies. Dedicated to delivering innovative
            solutions, fostering teamwork, and driving impactful contributions
            to achieve organizational success.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Column 1 */}
            <ul className="relative border-l border-gray-200 dark:border-gray-700 lg:w-1/2">
              <li className="relative mb-10 pl-6">
                <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black dark:bg-white"></span>
                <h3 className="text-lg font-semibold">
                  Junior Software Developer
                </h3>
                <p className="font-light">
                  {" "}
                  Information Communication Technology Agency of Sri Lanka{" "}
                </p>
                <p className="text-sm text-gray-400">2025 - Now</p>
                <br />
                <p className="text-sm text-gray-600 dark:text-gray-400"></p>
              </li>
              <li className="relative mb-10 pl-6">
                <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black dark:bg-white"></span>
                <h3 className="text-lg font-semibold">
                  Information Technology Project Coordinator
                </h3>
                <p className="font-light">United Nations Volunteers</p>
                <p className="text-sm text-gray-400">2025 Feb - 2025 March</p>
                <br />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Assigned and tracked daily tasks using a shared system,
                  ensuring team clarity on responsibilities and deadlines.
                  <br />
                  <br />
                  • Monitored task progress, identified delays, and followed up
                  to maintain project timelines.
                  <br />
                  <br />
                  • Maintained team motivation and mediated conflicts to promote
                  a productive work environment.
                  <br />
                  <br />
                  • Tracked attendance and ensured team accountability
                  throughout project duration.
                  <br />
                  <br />
                  • Identified operational challenges and proposed workflow
                  improvements to boost efficiency.
                  <br />
                  <br />
                  • Prepared and presented regular progress reports to
                  supervisors and senior management.
                  <br />
                  <br />• Actively participated in team meetings to address
                  issues, share feedback, and align activities with project
                  goals.
                </p>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="relative border-l border-gray-200 dark:border-gray-700 lg:w-1/2">
              <li className="relative mb-10 pl-6">
                <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black dark:bg-white"></span>
                <h3 className="text-lg font-semibold">
                  Trainee Software Engineer
                </h3>
                <p className="font-light">
                  {" "}
                  Ministry of Home Affairs in Sri Lanka
                </p>
                <p className="text-sm text-gray-400">2023 Nov -2024 Nov</p>
                <br />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Developed 3+ Laravel web applications for Estate, Vehicle,
                  and Record Room Management systems, contributing to 40%
                  improvement in administrative efficiency
                  <br />
                  <br />
                  • Implemented role-based access control using Spatie Laravel
                  Permission package to enhance system security
                  <br />
                  <br />
                  • Optimized UI/UX with responsive designs that significantly
                  improved user engagement metrics
                  <br />
                  <br />
                  • Delivered IT infrastructure support with 95% first-call
                  resolution rate for network and hardware issues
                  <br />
                  <br />
                  • Managed government Resource Profile System for national
                  resource tracking, ensuring high data accuracy and system
                  reliability in collaboration with Presidential Secretariat
                  Office (Colombo, Sri Lanka)
                  <br />
                  <br />• Contributed to project management efforts and created
                  graphical content to streamline system processes
                </p>
              </li>
              {/* <li className="relative mb-10 pl-6">
                <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black dark:bg-white"></span>
                <h3 className="text-lg font-semibold">Senior Web Developer</h3>
                <p className="font-light">Company XY</p>
                <p className="text-sm text-gray-400">2018-2018</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae earum ipsum quo a tempora enim, vel corporis
                  perspiciatis rerum autem iste, ullam placeat totam, numquam
                  illum facere quidem nemo ab iusto. Cupiditate numquam tempora
                  dolorum voluptate et reprehenderit architecto quisquam.
                </p>
              </li> */}
            </ul>
          </div>
        </div>

{/* Projects Section */}
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
          <div className="flex flex-col gap-8">
            {/* Project 1 */}
            <div className="border rounded-lg p-5 dark:border-gray-700">
              <h3 className="text-lg font-semibold">Record Room Management System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A Laravel-based web application for managing user control, Record Check and etc.
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Developed for Administration Division to optimize file tracking and management</li>
                <li>Implemented Spatie Laravel Permission for role-based access control</li>
                <li>Designed intuitive dashboard for file archival management</li>
              </ul>
            </div>
            {/* Project 2 */}
            <div className="border rounded-lg p-5 dark:border-gray-700">
              <h3 className="text-lg font-semibold">Vehicle Management System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Developed a system to track and manage government vehicle allocations, maintenance, and usage logs.
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Built using Laravel Breeze and Spatie for streamlined vehicle data management</li>
                <li>Designed user interface using Figma, focusing on user experience and intuitive navigation</li>
                <li>Integrated secure authentication and authorization mechanisms</li>
              </ul>
            </div>
            {/* Project 3 */}
            <div className="border rounded-lg p-5 dark:border-gray-700">
              <h3 className="text-lg font-semibold">Performance Agreement System - Aluth Gamak Aluth Ratak</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                National platform for tracking and managing seasonal progress in every district development progress and pass the money.
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Developed system for 25 district secretariats across Sri Lanka</li>
                <li>Implemented comprehensive data management with trend analysis capabilities</li>
                <li>Enabled multiple export formats (PDF, CSV, Excel) for flexible reporting</li>
              </ul>
            </div>
            {/* Project 4 */}
            <div className="border rounded-lg p-5 dark:border-gray-700">
              <h3 className="text-lg font-semibold"> “I-Helmet” – Way to improve typical miners safety - 4th Year Research Project</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Smart Helmet for Miners reduce danger situations and measure the environment 
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Designed Internet of Things based safety monitoring system for miners</li>
                <li>Integrated deep learning algorithms for real-time accident detection</li>
                <li>Technologies: Arduino, Raspberry Pi, AWS, TensorFlow, Google Colab, ReactJs</li>
                <li>Sensors and Modules: MQ Gas, Temperature, Dust, IR, Buzzer, Pulse, Lora Radio Frequency</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificates</h1>

          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Certificate journey
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fugit dolor, nulla impedit labore ex repellat earum
                voluptatem at. Ea repellendus assumenda animi architecto fuga
                perferendis ipsum doloremque, laudantium, id fugiat amet sit
                harum eveniet magnam, unde nisi dicta! Nemo.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Certificate journey
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fugit dolor, nulla impedit labore ex repellat earum
                voluptatem at. Ea repellendus assumenda animi architecto fuga
                perferendis ipsum doloremque, laudantium, id fugiat amet sit
                harum eveniet magnam, unde nisi dicta! Nemo.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Certificate journey
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur fugit dolor, nulla impedit labore ex repellat earum
                voluptatem at. Ea repellendus assumenda animi architecto fuga
                perferendis ipsum doloremque, laudantium, id fugiat amet sit
                harum eveniet magnam, unde nisi dicta! Nemo.
              </p>
            </div>
          </div>
        </div> */}

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">References</h1>

          <div className="flex flex-wrap gap-10">
            <div className="align-baseline space-y-1">
              <h3 className="text-lg font-light">
                Director of Information Technology
              </h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Mrs. Chanaki Mallikarachchi
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ministry of Digital Economy,
                <br /> Level 11, Unit No: 1101, <br />
                One Galle Face Tower, <br />
                No 1 A, Centre Road, Galle Face, <br />
                Colombo 02, Sri Lanka.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 cursor-pointer select-all transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={async () => {
                  const email = "dir_it@mode.gov.lk";
                  await navigator.clipboard.writeText(email);
                  alert(`Copied: ${email}`);
                }}
              >
                dir_it@mode.gov.lk
              </p>
            </div>

            <div className="align-baseline space-y-1">
              <h3 className="text-lg font-light">
                Associate Engineer at Manage Service
              </h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Thinan Eshan Kahawandala
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Axiata Digital Labs,
                <br /> Parkland Level 11, <br />
                33 Park St, <br />
                Colombo, Sri Lanka
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 cursor-pointer select-all transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={async () => {
                  const email = "thinan.eshan@gmail.com";
                  await navigator.clipboard.writeText(email);
                  alert(`Copied: ${email}`);
                }}
              >
                thinan.eshan@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

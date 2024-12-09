import React from "react";
import { motion } from "framer-motion";

const FoundersFridaySection = () => {
  return (
    <section className="bg-transparent py-16 px-4 md:px-8">
      <div className="container mx-auto space-y-20">
        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: -100 }} // Starts offscreen and invisible
          whileInView={{ opacity: 1, x: 0 }} // Animates to its normal position and becomes visible
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-purple-600 font-bold text-lg">
              Founders Friday
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Happens At <br /> Founders Friday
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
              Learn More →
            </button>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <img
              src="IMG1_sec section.png"
              alt="Founders Friday 2"
              className="absolute left-10 md:left-32 rounded-lg shadow-lg w-[80%] md:w-[60%] z-0"
            />
            <img
              src="IMG2_sec section.png"
              alt="Founders Friday 1"
              className="rounded-lg top-12 md:top-24 shadow-lg w-[80%] md:w-[60%] relative z-10"
            />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="space-y-10 pt-20 "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-purple-600 font-bold text-lg mt-36">
            Sponsor The Next Friday
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 w-full md:w-96">
            Why Sponsor Founders Friday?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Benefits */}
            <motion.div
              className="grid grid-cols-2 border border-purple-400 gap-6 bg-gray-50 rounded-lg shadow-md justify-center p-6 sm:p-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Networking Opportunities",
                  description:
                    "Connect with industry leaders, founders, and potential partners.",
                  backgroundColor: "bg-purple-500",
                },
                {
                  title: "Community Impact",
                  description:
                    "Support the growth and development of the startup ecosystem.",
                  backgroundColor: "bg-purple-300",
                },
                {
                  title: "Brand Association",
                  description:
                    "Align your brand with innovation and entrepreneurial success.",
                  backgroundColor: "bg-purple-300",
                },
                {
                  title: "Visibility",
                  description:
                    "Gain exposure to a targeted audience of young professionals and entrepreneurs.",
                  backgroundColor: "bg-purple-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.backgroundColor} border border-purple-500 flex flex-col items-center justify-center rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mx-auto text-center shadow-md hover:shadow-lg`}
                >
                  <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base px-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-900 px-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Right: Sponsorship Form */}
            <motion.div
              className="p-4 sm:p-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                How To Sponsor
              </h3>

              <p className="text-gray-600 mb-6">
                <i> Ready to make an impact? </i>{" "}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Fill out the form below or contact us at [email or phone number]
                to learn more about how you can sponsor the next Founders
                Friday.
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">Name</p>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Company name</p>
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg w-auto shadow-md hover:bg-purple-700"
                >
                  Sponsor →
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersFridaySection;

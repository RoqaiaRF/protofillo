import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Engineering
            </h5>
            <p className="font-semibold">Tafila Technical University (2015-2019)</p>
            <p className="my-3">
               I graduated top of my class with GPA: 84.56%
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web Developer & Team Leader</h5>
            <p className="font-semibold">Timlands LTD  ( 6/2021 - 2/2022)</p>
            <p className="my-3"> Writing clean code for the front and back end of the software & Developing APIs and RESTful services</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold"> Back-end NodeJs Developer</h5>
            <p className="font-semibold">Snapbot  ( 2/2022 - 9/2022)</p>
            <p className="my-3"> Working on NodeJS, ExpressJs, Redis to build real time WhatssApp chatbot using Twilio provider</p>
          </div>
        </div>

        
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

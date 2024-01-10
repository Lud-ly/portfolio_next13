import ServiceCard from "../../src/components/card/ServiceCard";
import { services } from "../../data/data";

const Skills = () => {
  return (
    <div className="h-full col-span-12 p-4 text-base bg-gray-100 dark:bg-gray-900 lg:col-span-3 rounded-2xl shadow-custom-light">
      <div className="px-6 py-2 h-full rounded-2xl shadow-custom-light">
        <h4 className="text-md font-semibold tracking-wide">
          ANALYSE, CONCEPTION & RÉALISATION
        </h4>
        <div className="grid gap-7 my-14 md:grid-cols-2 text-xl">
          {services.map((service) => (
            <div
              className="col-span-2 my-3 p-2 bg-white dark:bg-gray-800 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

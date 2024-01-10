import { FunctionComponent } from "react";
import { Service } from "../../../types/types";
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <div className="flex items-center p-2 space-x-4">
      <div className="w-12 h-12 text-green-500">
        <Icon size={50} />
      </div>
      <div className="">
        <h6 className="font-bold mb-1">
          <b>{title}</b>
        </h6>
        <p className="text-sm" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;

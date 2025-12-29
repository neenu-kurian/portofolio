import { skillsDetails } from "../skills";
import Card from "./Card";
import { additionalStrengths } from "../skills";
import Chip from "./Chip";

const Skills = () => {
  return (
    <div id="skills" className="p-8 md:p-20 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-medium mb-6">
        Technical Skills and Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillsDetails.map((category) => (
          <div key={category.category}>
            <Card key={category.category} icon={category.icon} gradient={category.gradient} title={category.category} skills={category.skills} />
          </div>
        ))}
      </div>
      <div className="border border-gray-300 mt-10 md:mt-20 p-4 md:p-5 rounded-2xl bg-blue-50">
        <h3 className="text-xl md:text-3xl font-medium mb-4 md:mb-6">
          Additional Strengths
        </h3>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {additionalStrengths.map((strength: string) => (
            <Chip key={strength} item={strength} color="bg-white"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

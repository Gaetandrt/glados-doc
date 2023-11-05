import LearnCard from "@/components/LearnCard";
import { Children } from "react";
import { BsFillFileTextFill } from "react-icons/bs";


export default function Learn() {
  return (
    <div className='p-10 w-full overflow-hidden'>
      <h1 className="font-semibold text-4xl mb-8">
        Quick Start
      </h1>
      <p className="font-medium text-xl mb-8">
        Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.
      </p>
      <LearnCard Icon={BsFillFileTextFill} iconSize={33} title='Prenez note'>
        <p>caca</p>
      </LearnCard>
  </div>
  )
}

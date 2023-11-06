import LearnCard from "@/components/LearnCard";
import { BiBrain } from "react-icons/bi";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function Learn() {
  return (
    <div className='p-10 w-full overflow-hidden'>
      <h1 className="font-semibold text-4xl mb-8">
        Quick Start
      </h1>
      <p className="font-medium text-xl mb-8">
        Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.
      </p>
      <LearnCard Icon={BiBrain} iconSize={33} title='What you will learn!'>
        <ul className="justify-between">
          <li className="mb-5">
            <div className="flex flex-row items-center">
              <IoMdCheckboxOutline className='inline-block mr-2 text-green-400/80' size={20} />
              <p>Basic data types and creation of new type</p>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex flex-row items-center">
              <IoMdCheckboxOutline className='inline-block mr-2 text-green-400/80' size={20} />
              <p>Function declaration and special function </p>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex flex-row items-center">
              <IoMdCheckboxOutline className='inline-block mr-2 text-green-400/80' size={20} />
              <p>Variable and array declaration </p>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex flex-row items-center">
              <IoMdCheckboxOutline className='inline-block mr-2 text-green-400/80' size={20} />
              <p>Creation of structures and enumerations </p>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex flex-row items-center">
              <IoMdCheckboxOutline className='inline-block mr-2 text-green-400/80' size={20} />
              <p>Control structures</p>
            </div>
          </li>
        </ul>
      </LearnCard>
      <hr className='border-gray-400/20 mb-8 mt-8 w-full' />
      <h1 className="font-semibold text-4xl mb-8 mt-8">
        Installation
      </h1>
      <p className="font-medium text-xl mb-8">
        In this section, we will see how to install the compiler.
        <br />
        You can download the Glados binari <a className='text-blue-400' href="https://github.com/NickSpyker/GLaDOS/releases/tag/0.1.35">here</a>.
      </p>
    </div>
  )
}

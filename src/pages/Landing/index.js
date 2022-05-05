import { AuthContext } from "context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import love from "..//..//images/loveicon.png";
import shield from "..//..//images/shieldicon.png";
import united from "..//..//images/united.png";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="p-20 flex flex-row justify-between gap-20 my-10">
        <div className="">
          <h1 className="text-5xl mb-10 font-bold text-emerald-900">
            A safe place to share your thoughts and emotions.
          </h1>
          <h2 className="text-2xl mb-10 text-stone-700">
            We are a pseudonymous forum where people openly talk about mental
            health and find support, without being judged or discriminated.
          </h2>
          <button className="mb-10 px-5 py-3 bg-emerald-400 rounded-lg text-emerald-900 font-bold">
            {!user && <Link to="/signup">Start Sharing</Link>}
          </button>

          {/*INFORMATION*/}
          <h1 className="text-2xl">What is mental health?</h1>
          <p className="mb-2">
            Mental health includes our emotional, psychological, and social
            well-being. It affects how we think, feel, and act. It also helps
            determine how we handle stress, relate to others, and make healthy
            choices. Mental health is important at every stage of life, from
            childhood and adolescence through adulthood.
          </p>
          <p className="mb-5">
            Although the terms are often used interchangeably, poor mental
            health and mental illness are not the same. A person can experience
            poor mental health and not be diagnosed with a mental illness.
            Likewise, a person diagnosed with a mental illness can experience
            periods of physical, mental, and social well-being.
          </p>
          <h1 className=" text-2xl">
            Why is mental health important for overall health?
          </h1>
          <p className="mb-5">
            Mental and physical health are equally important components of
            overall health. For example, depression increases the risk for many
            types of physical health problems, particularly long-lasting
            conditions like diabetes, heart disease, and stroke. Similarly, the
            presence of chronic conditions can increase the risk for mental
            illness
          </p>
          <h1 className=" text-2xl">
            Can your mental health change over time?
          </h1>
          <p className="mb-5">
            Yes, it's important to remember that a person's mental health can
            change over time, depending on many factors. When the demands placed
            on a person exceed their resources and coping abilities, their
            mental health could be impacted. For example, if someone is working
            long hours, caring for a relative, or experiencing economic
            hardship, they may experience poor mental health.
          </p>
          <h1 className=" text-2xl">
            Can your mental health change over time?
          </h1>
          <p>
            There is no single cause for mental illness. A number of factors can
            contribute to risk for mental illness, such as
          </p>
          <ul className="mb-10">
            <li>
              Early adverse life experiences, such as trauma or a history of
              abuse (for example, child abuse, sexual assault, witnessing
              violence, etc.)
            </li>
            <li>
              Experiences related to other ongoing (chronic) medical conditions,
              such as cancer or diabetes
            </li>
            <li>Biological factors or chemical imbalances in the brain</li>
            <li>Use of alcohol or drugs</li>
            <li>Having feelings of loneliness or isolation</li>
          </ul>
        </div>

        <div>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1522199899308-2eef382e2158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt="Girl in a jacket"
            width="1200"
            height="1300"
          />
        </div>
      </div>

      {/*section#2*/}
      <div className="bg-white p-20 flex my-10 flex-row justify-between gap-10 text-stone-700">
        <div className="p-10 border-2 rounded-xl border-gray-100 bg-gray-100 justify-center">
          <img className="mb-5" src={united} width={80} alt=""></img>
          <h1 className="font-bold text-emerald-500 text-xl mb-5">
            The Support You Need
          </h1>
          <p>
            {" "}
            Our community is designed for people to support each other and to
            interact with people going through similar issues.{" "}
          </p>
        </div>
        <div className="p-10 border-2 rounded-xl border-gray-100 bg-gray-100 justify-center">
          <img className="mb-5" src={shield} width={80} alt=""></img>
          <h1 className="font-bold text-emerald-500 text-xl mb-5">
            No Sensitive Data Collected{" "}
          </h1>
          <p>
            {" "}
            We don't collect any senstitive data about you, like your real name,
            your address, or data about the usage of the platform.{" "}
          </p>
        </div>
        <div className="flex justify-center flex-col p-10 border-2 rounded-xl border-gray-100 bg-gray-100 justify-center ">
          <img className="mb-5" src={love} width={80} alt=""></img>
          <h1 className="font-bold text-emerald-500 text-xl mb-5">
            Moderated By The Community
          </h1>
          <p>
            {" "}
            Interact with others in an safe enviroment where moderators ensure
            that our communication is safe and respectful.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

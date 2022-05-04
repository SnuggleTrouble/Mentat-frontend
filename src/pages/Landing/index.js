import { AuthContext } from "context";
import { useContext } from "react";
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
          <button className="px-5 py-3 bg-emerald-400 rounded-lg text-emerald-900 font-bold">
            Start Sharing
          </button>
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

import { Navbar } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
    <div className="p-20 flex flex-row justify-between gap-20 my-10">
    <div className="">
    <h1 className="text-5xl mb-10 font-bold text-emerald-900">A safe place to share your thoughts and emotions</h1>
      <h2 className="text-2xl mb-10 text-stone-700">
        We are a pseudonymous forum where people openly talk about mental health and find support, without being judge or discriminated.
      </h2>
      <button className="px-5 py-3 bg-emerald-400 rounded-lg text-emerald-900 font-bold">Start Sharing</button>
    </div>
     <div>
     <img className="rounded-xl" src="https://images.unsplash.com/photo-1522199899308-2eef382e2158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" alt="Girl in a jacket" width="1200" height="1300"/>
    </div>
    </div>
    {/*section#2*/}
    <div className="bg-white p-20 flex my-10 flex-row justify-between gap-10 text-stone-700">
    <div className="flex justify-center flex-col p-10 border-2 rounded-xl border-gray-100 bg-gray-100 justify-center ">
      <img className="mb-5" src="https://cdn-icons.flaticon.com/png/512/3364/premium/3364924.png?token=exp=1651329208~hmac=5daeb34872ba99c3a017be43494e21d2" width={80}></img>
      <h1 className="font-bold text-emerald-500 text-xl">Moderated by the community</h1>
      <p> Interact with others in an safe enviroment where moderators ensure that our communication is safe and respectful. </p>
    </div>
    <div className="p-10 border-2 rounded-xl border-gray-100 bg-gray-100 justify-center">
      <img className="mb-5" src="https://cdn-icons-png.flaticon.com/512/1161/1161439.png" width={80}></img>
      <h1 className="font-bold text-emerald-500 text-xl">No sensitive data collected </h1>
      <p> We don't collect any senstitive data about you like your real name, or your address or data about your usage in our forum. </p>
    </div>
    <div className="p-10 border-2 rounded-xl border-gray-100 bg-gray-100 justify-center">
      <img className="mb-5" src="https://cdn-icons.flaticon.com/png/512/3166/premium/3166003.png?token=exp=1651329546~hmac=518baa61cb6095d2dbe41a322e096c60" width={80}></img>
      <h1 className="font-bold text-emerald-500 text-xl">The support you need</h1>
      <p> Our community is designed for people to support each other and to interact with people going through similar issues.  </p>
    </div>
    </div>
  

    </div>

  );
}

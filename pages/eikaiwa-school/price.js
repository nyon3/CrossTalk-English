
import Layout from "@/components/Layout/layout";
import {
    GroupLesson,
    PrivateLesson,
    DiscussionClass,
  } from "@/components/Price";

  export default function Price() {
    return (
      <Layout>
        <div>
           <h1 className="text-4xl font-bold text-center text-gray-800">PRICE</h1>            
            <h2 className="text-3xl text-center">料金</h2>

        </div>
        <div className=" flex flex-col items-center md:flex-row justify-between">
        <div className="w-full md:w-1/3 p-2">
          <PrivateLesson />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <GroupLesson />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <DiscussionClass />
        </div>
      </div>
      </Layout>
    );
  }
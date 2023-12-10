import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="bg-lightgreen py-32 pt-40 mx-5 px-40 font-itim rounded-b-3xl">
        <h1 className="text-5xl mb-10 leading-tight" style={{width: "500px"}}>"I want to build projects, <br></br>but I do not have <span className="underline underline-offset-8 decoration-red-600 decoration-wavy">a Mentor</span>"</h1>
        <p style={{width: "400px"}}>CariMentor goes beyond just pairing you with a dedicated mentor; it immerses you in a supportive mentor-mentee group, creating an environment conducive to nurturing creativity and fostering innovation.</p>
      </div>
      {/* what is cariMentor section*/}
      <h2 className="font-itim font-bold text-2xl pb-10 tracking-wide text-center mt-7">What is CariMentor?</h2>
        <div className="grid grid-cols-3 text-center m-10 gap-x-4">
        <div>
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-16">t</div>
            <h2 className="font-itim text-xl font-semibold">Register as a Mentee</h2>=
            <p>Join as a mentee today for just RM5 and unlock valuable mentorship opportunities that will propel your personal and professional development.</p>
          </div>
          <div >
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-16">t</div>
            <h2 className="font-itim text-xl font-semibold">Find your group</h2>
            <p>Discover your mentor-mentee group and initiate the process of getting acquainted with fellow members to foster a supportive and collaborative environment.</p>
          </div>
          <div>
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-16">t</div>
            <h2 className="font-itim text-xl font-semibold">Learn and create together!</h2>
            <p>Embark on a collaborative learning journey as you code alongside your peers, fostering a spirit of innovation within the group.</p>
          </div>
        </div>
      {/* picture section */}
      <div className="bg-darkgreen p-10 font-itim text-2xl text-white ">
        <div className="flex justify-around items-center gap-x-10">
          <img src="/images/group_2.jpeg" width="600" alt="image" className="border-8 border-lightgreen rounded-lg drop-shadow-lg"/>
          <p>Participate in insightful and profound discussions guided by the expertise of a knowledgeable mentor, enhancing your understanding and fostering meaningful learning experiences.</p>
        </div>
        <div className="flex justify-around items-center gap-x-10">
          <p>Gather around with your friends, creating a collaborative space to collectively develop and nurture your innovative ideas.</p>
          <img src="/images/group_1.jpeg" width="600" className="border-8 border-lightgreen rounded-lg drop-shadow-lg"/>
        </div>
      </div>
      {/* who is mentor section */}

        <h2 className="font-itim font-bold text-2xl pb-10 tracking-wide mt-7 text-center">But, who is my Mentor?</h2>
        <div className="grid grid-cols-3 text-center m-10 gap-x-4">
        <div>
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-16">t</div>            
            <h2 className="font-itim text-xl font-semibold">Handpicked and carefully selected</h2>
            <p className="w-">Motion-U meticulously conducts interviews with all applicants, ensuring that only the most qualified individuals are selected to become mentors, guaranteeing a high standard of guidance and support for participants.</p>
          </div>
          <div>
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-16">t</div>
            <h2 className="font-itim text-xl font-semibold">Receive a propoer training by coaches</h2>
            <p>Each mentor has undergone comprehensive training and coaching led by seasoned professionals, ensuring that they are well-equipped to provide top-notch guidance and support to mentees.</p>
          </div>
          <div>
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-16">t</div>
            <h2 className="font-itim text-xl font-semibold">Most importantly, they are still student!</h2>
            <p>
Rest assured, your mentors are continuously learning and growing, just like you. This shared commitment to ongoing learning creates a dynamic and collaborative environment for mutual development.</p>
          </div>
        </div>
      {/* call for action section */}
      <a id="sign-up-now">
        <div className="bg-lightgreen text-center font-itim py-20">
        <h1 className="text-4xl ">What are you waiting for?</h1>      
        <h1 className="text-4xl mb-16">Sign up now!</h1>
        <div className="flex justify-around">
          <a href="" className="bg-darkgreen rounded-3xl p-2 px-16 py-3 border-2 border-black text-white">Become a Mentee</a>
          <a href="" className="bg-darkgreen rounded-3xl p-2 px-16 py-3 border-2 border-black text-white">Become a Mentor</a>
        </div>
        </div>
      </a>

    </>
  )
}
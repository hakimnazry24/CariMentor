import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="bg-lightgreen mx-3 font-itim rounded-b-3xl p-7 text-center md:text-left md:pl-20 md:w-full md:py-20">
        <h1 className="text-4xl pt-5 pb-16 leading-tight md:text-5xl md:pb-20">"I want to build projects, <br></br>but I do not have <span className="underline underline-offset-8 decoration-red-600 decoration-wavy">a Mentor</span>"</h1>
        <p className="md:w-2/3">CariMentor goes beyond just pairing you with a dedicated mentor; it immerses you in a supportive mentor-mentee group, creating an environment conducive to nurturing creativity and fostering innovation.</p>
      </div>
      {/* what is cariMentor section*/}
      <h2 className="font-itim font-bold text-2xl pb-10 text-center mt-7">What is CariMentor?</h2>
        <div className="md:grid md:grid-cols-3 text-center m-10 gap-x-4">
        <div className="mb-5">
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-14 text-5xl text-white">1</div>
            <h2 className="font-itim text-xl font-semibold">Register as a Mentee</h2>
            <p>Join as a mentee today for just RM5 and unlock valuable mentorship opportunities that will propel your personal and professional development.</p>
          </div>
          <div className="mb-5">
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-14 text-5xl text-white">2</div>
            <h2 className="font-itim text-xl font-semibold">Find your group</h2>
            <p>Discover your mentor-mentee group and initiate the process of getting acquainted with fellow members to foster a supportive and collaborative environment.</p>
          </div>
          <div className="mb-5">
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-14 text-5xl text-white">3</div>
            <h2 className="font-itim text-xl font-semibold">Learn and create together!</h2>
            <p>Embark on a collaborative learning journey as you code alongside your peers, fostering a spirit of innovation within the group.</p>
          </div>
        </div>
      {/* picture section */}
      <div className="bg-darkgreen p-10 font-itim md:text-2xl text-l text-white ">
        <div className="md:flex md:justify-around md:items-center md:gap-x-10 md:text-left text-center">
          <img src="/images/group_2.jpeg" width="600" alt="image" className="border-8 border-lightgreen rounded-lg drop-shadow-lg mb-6"/>
          <p>Participate in insightful and profound discussions guided by the expertise of a knowledgeable mentor, enhancing your understanding and fostering meaningful learning experiences.</p>
        </div>
        <div className="md:flex md:flex-row-reverse md:justify-around md:items-center md:gap-x-10 mt-12 text-center md:text-left">
          <img src="/images/group_1.jpeg" width="600" className="border-8 border-lightgreen rounded-lg drop-shadow-lg mb-6"/>
          <p>Gather around with your friends, creating a collaborative space to collectively develop and nurture your innovative ideas.</p>
        </div>
      </div>
      {/* who is mentor section */}
        <h2 className="font-itim font-bold text-2xl pb-10 mt-7 text-center">But, who is my Mentor?</h2>
        <div className="md:grid md:grid-cols-3 text-center m-10 gap-x-4">
        <div className="mb-5">
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-14 text-5xl text-white" >1</div>            
            <h2 className="font-itim text-xl font-semibold">Handpicked and carefully selected</h2>
            <p className="w-">Motion-U meticulously conducts interviews with all applicants, ensuring that only the most qualified individuals are selected to become mentors, guaranteeing a high standard of guidance and support for participants.</p>
          </div>
          <div className="mb-5">
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-14 text-5xl text-white">2</div>
            <h2 className="font-itim text-xl font-semibold">Receive a propoer training by coaches</h2>
            <p>Each mentor has undergone comprehensive training and coaching led by seasoned professionals, ensuring that they are well-equipped to provide top-notch guidance and support to mentees.</p>
          </div>
          <div className="mb-5">
            <div className="rounded-full bg-darkgreen w-40 mx-auto py-14 text-5xl text-white">3</div>
            <h2 className="font-itim text-xl font-semibold">Most importantly, they are still student!</h2>
            <p>Rest assured, your mentors are continuously learning and growing, just like you. This shared commitment to ongoing learning creates a dynamic and collaborative environment for mutual development.</p>
          </div>
        </div>
      {/* call for action section */}
      <a id="sign-up-now">
        <div className="bg-lightgreen text-center font-itim py-20">
        <h1 className="text-4xl ">What are you waiting for?</h1>      
        <h1 className="text-4xl mb-16">Sign up now!</h1>
        <div className="flex justify-around">
          <a href="" className="bg-darkgreen rounded-3xl p-2 px-3 md:px-16 md:py-3 border-2 border-black text-white">Become a Mentee</a>
          <a href="" className="bg-darkgreen rounded-3xl p-2 px-3 md:px-16 md:py-3 border-2 border-black text-white">Become a Mentor</a>
        </div>
        </div>
      </a>
    </>
  )
}
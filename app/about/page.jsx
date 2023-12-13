export default function About() {
    return (
        <>
            <div className="mt-20 px-32">
                <div className="pb-10">
                    <h1 className=" text-2xl font-itim">What is CariMentor?</h1>
                    <hr />
                    <p className="pt-5">CariMentor is an innovative mentor-mentee platform designed to facilitate collaborative learning experiences for students through group interactions, all under the guidance of a dedicated mentor. The platform aims to create a supportive environment where students can learn from each other while benefiting from the expertise and guidance of a mentor.</p>
                </div>
                <div className="pb-10">
                    <h1 className="text-2xl font-itim">Objectives of CariMentor</h1>
                    <hr className="pb-5"/>
                    <div className="pb-5">
                        <h2 className="text-lg font-itim">1. Facilitate Collaborative Learning</h2>
                        <p>Enable students to engage in collaborative learning experiences within small groups, fostering knowledge sharing, and peer-to-peer support.</p>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-lg font-itim">2. Build a Supportive Community</h2>
                        <p>Foster a sense of community among students by providing forums, virtual meetings, and communication channels where they can connect, share experiences, and build a network of like-minded individuals.</p>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-lg font-itim">3. Establish a Platform for Career Development</h2>
                        <p>Connect students with mentors who can provide guidance on career paths, industry insights, and practical advice, contributing to the students' overall personal and professional development.</p>
                    </div>
                </div>
                <div className="pb-10">
                    <h1 className="text-2xl font-itim">How CariMentor is conducted?</h1>
                    <hr className="pb-5"/>
                    <div>
                        <div className="pb-5">
                            <h3 className="text-lg font-itim">1. Register as a Mentor or Mentee</h3>
                            <p>Students aspiring to become mentors or mentees can register by following the <a className="underline text-blue-500 hover:text-blue-200" href="/#sign-up-now">link</a>. Mentor application is only eligible for 
                             <span className="font-bold"> KICT students currently at 3rd year of study and above only</span>.
                            </p>
                        </div>
                        <div className="pb-5">
                            <h3 className="text-lg font-itim">2. Mentors to attend workshop</h3>
                            <p>A complimentary workshop is scheduled for mentors prior to the commencement of mentor-mentee sessions. Industry professionals will be invited to conduct the workshop.</p>
                        </div>
                        <div className="pb-5">
                            <h3 className="text-lg font-itim">3. Start of mentor mentee session</h3>
                            <p>After receiving instructions on the agenda, mentors will facilitate mentor-mentee sessions. They are permitted to organize meetings, study groups, pair programming, and other activities to foster a sense of togetherness within the group.</p>
                        </div>
                        <div className="pb-5">
                            <h3 className="text-lg font-itim">4. Duration of the mentor mentee session</h3>
                            <p>A mentor-mentee session is designed to span for <span className="font-bold">one semester</span>. At the conclusion of the semester, mentors and mentees can choose to either <span className="font-bold">extend their participation for another semester or withdraw from the mentor-mentee group.</span></p>
                        </div>
                        <div className="pb-5">
                            <h3 className="text-lg font-itim">5. Curriculum</h3>
                            <p>The primary focus of this mentor-mentee group revolves around <span className="font-bold">web application or mobile application development</span>. However, the approach to group conduct is at the discretion of each group's mentors.</p>
                        </div>
                        <div className="pb-5">
                            <h3 className="text-lg font-itim">6. End of a semester</h3>
                            <p>Upon the conclusion of the semester, mentors and mentees will be honored with a recognition award, <span className="font-bold">including certificates and star points</span>. A grand dinner will also be organized to express appreciation for the dedication and efforts of both mentors and mentees throughout the semester.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
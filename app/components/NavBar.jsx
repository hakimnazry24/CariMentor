
const NavBar = () => {
  return (
    <>
        <div className="fixed top-0 w-full bg-white z-10">
            <div className="flex justify-between my-3 mt-5 px-16 font-itim ">
                <div className="text-2xl"><a href="/">CariMentor</a></div>
                <div>
                <a href="/be-a-mentee" className="mx-5">Be a Mentee</a>
                <a href="/be-a-mentor" className="mx-5">Be a Mentor</a>
                <a href="/about" className="mx-5">About</a>
                </div>
                <a href="#sign-up-now" className="inline"><div className="bg-darkgreen rounded-3xl p-2 px-5 text-white">Get Start</div></a>
            </div>
        </div>
    </>
  )
}

export default NavBar
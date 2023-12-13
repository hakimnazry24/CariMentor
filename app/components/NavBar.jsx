"use client"

const NavBar = () => {
  const toggleMobileNavBar = () => {
    const btn = document.querySelector("#mobile-navbar-btn");
    const mobileNavbar = document.querySelector("#mobile-navbar");

    btn.addEventListener("click", () => {
      mobileNavbar.classList.toggle("hidden");
    });
  };
  return (
    <>
        <nav className="font-itim w-full fixed top-0 bg-slate-200 z-10">
          <div className="p-3 px-5 flex justify-between items-center">
            <a href="/"><span className="text-xl lg:text-2xl">CariMentor</span></a>
            <button id="mobile-navbar-btn" onClick={toggleMobileNavBar} className="bg-darkgreen p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
          </div>
            <ul className="px-7 py-4 hidden" id="mobile-navbar">
            <li className="pb-2 underline"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfuHXLW-LRdI4f7g0UeDa2nAmL9kSZ8gaTHKSqpMNwXLM-vRg/viewform?usp=sf_link" >Be A Mentor</a></li>
            <li className="pb-2 underline"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeK0D3-JwopdRAAwLJK6QbonMAsSBEkafhIyf8XMUfu78eNxg/viewform?usp=sf_link" >Be A Mentee</a></li>
            <li className="pb-2 underline"><a href="/about" >About</a></li>
            <br />
            <br />
            <a href="#sign-up-now" className="text-white bg-darkgreen p-2 rounded-2xl ">Get Start</a>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
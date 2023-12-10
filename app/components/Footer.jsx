export default function Footer() {
    return (
        <>
            <div className="bg-darkgreen px-20 py-10 font-itim text-white relative bottom-0 left-0 w-full">
                <div className="container columns-3 pb-14">
                    <div className="break-inside-avoid-column">
                        <h1 className="text-2xl mb-3">CariMentor</h1>
                        <p>CariMentor serves as a dynamic mentorship platform, bridging the gap between experienced mentors and eager mentees seeking guidance on their IT learning journey.</p>
                    </div>
                    <div className="break-inside-avoid-column">
                        <h2 className="text-2xl mb-3">Getting started</h2>
                        <a href="" className="block">About</a>
                        <a href="" className="block">Join the community</a>
                    </div>
                    <div className="break-inside-avoid-column">
                        <h2 className="text-2xl mb-3">Contact us</h2>
                        <p>For any inqueries, please contact us at: <br />motionu.kict@gmail.com</p>
                    </div>                    
                </div>
                <hr />
                <div className="container columns-2 pt-8">
                    <p>Copyright CariMentor 2023-2025. All right reserved</p>
                    <div className="flex">
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </>
    )
}
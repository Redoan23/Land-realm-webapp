
import { useParams, useLoaderData } from "react-router-dom"
import { IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";

export default function EstateDetails() {
    document.title = 'Land Details'
    const { id } = useParams()
    const int = parseInt(id)
    const data = useLoaderData()
    const kind = data.find(info => info.id === int)

    return (
        <div>
            <div><h1 className=" text-center text-5xl font-bold mt-16">Estate Details</h1></div>
            <div className=" flex justify-center flex-col md:flex-row bg-gray-100 w-96 md:w-[700px] lg:w-[1000px] gap-10 md:p-3 mx-auto mt-10">
                <div className=" w-96 md:w-[450px]"> <img className=" h-[400px] w-full rounded-md" src={kind.image} alt="" /> </div>
                <div className=" space-y-3">
                    <div className=" flex flex-col md:flex-row gap-1 items-center">
                        <div className=" text-3xl font-bold">
                            {kind.estate_title}
                        </div>
                        <p>-</p>
                        <div >
                            {kind.location}
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row gap-2 font-semibold">
                        <div className=" flex gap-1">
                            {kind.area}
                            <p>-</p>
                        </div>
                        <div>
                            {kind.price}
                        </div>
                    </div>

                    <div className=" py-4 space-y-3 ">
                        <h3 className=" text-2xl font-semibold">Share property</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div data-aos='fade-down' className=" flex items-center gap-1 border p-2 justify-center"> <IoLogoFacebook />  <a href="">Facebook</a></div>
                            <div data-aos='fade-left' className=" flex items-center gap-1 border p-2 justify-center"> <IoLogoTwitter /><a href="">Twitter</a></div>
                            <div data-aos='fade-right' className=" flex items-center gap-1 border p-2 justify-center"><IoLogoWhatsapp /> <a href="">WhatsApp</a></div>
                        </div>
                    </div>
                    <div className=" pt-1 pb-8">
                        <button className=" btn rounded-none bg-orange-400 text-white hover:text-black">MAKE ENQUIRY</button>
                    </div>
                    <hr />
                    <div>
                        <h3 className=" text-center pb-1">Contact Us for More Details</h3>
                        <div className=" flex flex-col md:flex-row items-center">
                            <p className=" px-2 border-r-2 border-black">+991 0300 67 200</p>
                            <p className=" px-2">info@landrealmnotvalid@xmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" mx-auto w-80 md:w-96 lg:w-[1000px] mt-5">
                <h3 className=" text-2xl font-bold">Facilities</h3>
                <div className=" flex gap-1 font-semibold pt-2">{kind.facilities.map(data => <li data-aos='fade-left' className=" list-none border p-2">{data}</li>)}</div>
            </div>
            <div className=" w-80 md:w-96 lg:w-[1000px] mx-auto">
                <div><h3 className=" text-2xl pt-8 font-bold">About</h3></div>
                <div className=" text-left">
                    {kind.description}
                </div>
            </div>
        </div>
    )
}
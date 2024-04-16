import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/less/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useLoaderData } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const position = [51.505, -0.09]

AOS.init();

export default function Home() {
    document.title = 'Land realm'
    const swiper = useSwiper()

    const estates = useLoaderData()
    console.log(estates)

    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/TBhRZ6k/236.jpg")] h-[300px] bg-center rounded-lg'>
                <h1 className=' text-4xl md:text-6xl text-white text-center pt-10 opacity-75 font-bold' data-aos='zoom-in' data-aos-duration='600' data-aos-transition='200'>LAND REALM</h1>
                <p className=' text-xs md:text-lg font-semibold text-center text-white pl-36 md:pl-80' data-aos='fade-left' data-aos-duration='1500'>Find the land to cultivate your dream</p>
            </div>
            <div data-aos='fade-left' data-aos-delay='100' className=' mt-20'>
                <h1 className='text-3xl text-center font-bold py-10'>Have a Look on Our Gallery</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    modules={[Navigation, Pagination]}


                >
                    <SwiperSlide>{<img src="https://i.ibb.co/5WgQpFZ/4673.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/RpdksCG/2147652038.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/6vzGxwv/jeff-burak-l-PO0-Vz-F-4s8-unsplash.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/hLg9NsJ/15242.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/xsdNqRW/rebecca-mckenna-DWu-Wm-Sz-RO0-M-unsplash.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/xs8BWsd/13956.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/s2HY2yc/4287.jpg" alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img src="https://i.ibb.co/XC5f8xP/102.jpg" alt="" />}</SwiperSlide>

                </Swiper>
            </div>

            <section>
                <div>
                    <div className=' text-center font-bold text-3xl mt-20 pb-10'>Estates</div>
                    <div>
                        <div data-aos="fade-up" data-aos-transition='1500' data-aos-duration='800' className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                            {estates.map(estate => <div className='  ' data-aos="fade-up" key={estate.id}>

                                <div className=" hover:-translate-y-3 ease-in-out duration-[700ms] transition-all    md:w-72 lg:w-96 shadow-xl image-full">
                                    <div className=' overflow-hidden'>
                                        <figure className=''><img className=' hover:scale-[1.3] duration-[700ms] ease-in-out' src={estate.image} alt="estate" /></figure>
                                    </div>
                                    <div className="card-body ">
                                        <h2 className="card-title">{estate.estate_title}</h2>
                                        <p className=' font-medium'>{estate.segment_name}</p>
                                        <p>{

                                            estate.facilities.map(data => <li>{data}</li>)

                                        }</p>
                                        <p>{estate.price}</p>

                                        <div className="card-actions justify-end">
                                            <Link to={`/estatedetails/${estate.id}`}><button className="btn rounded-none hover:border-black hover:bg-white ">View details</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>)}
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <h3 className=' text-center font-bold text-5xl mt-36'>Find Us</h3>
                <div className=' mt-10'>
                    <MapContainer
                        center={[39.16918027836418, -105.33671804264205]}
                        zoom={8}
                        scrollWheelZoom={false}
                        className=' mx-auto w-screen h-96 flex justify-center'
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[39.16918027836418, -105.33671804264205]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}
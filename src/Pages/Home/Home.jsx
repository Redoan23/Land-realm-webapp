import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/less/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useLoaderData } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
    document.title = 'Land realm'
    const swiper = useSwiper()

    const estates = useLoaderData()
    console.log(estates)

    return (
        <div>
            <div data-aos='fade-left' data-aos-delay='100'>
                <h1 className='text-3xl text-center font-bold py-5'>Have a Look on Our Collection Gallery</h1>
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
                    {/* <div className='swipwer-nav-btns'>
                        <button onClick={() => swiper.slideNext}>Prev</button>
                        <button onClick={() => swiper.slidePrev}>next</button>
                    </div> */}
                </Swiper>
            </div>

            <section>
                <div>
                    <div  className=' text-center font-bold text-3xl mt-20 pb-10'>Estates</div>
                    <div>
                        <div data-aos="fade-up" className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                            {estates.map(estate => <div data-aos="fade-up" key={estate.id}>

                                <div className=" rounded-3xl md:w-72 lg:w-96 shadow-xl image-full">
                                    <figure className='p-3'><img className=' rounded-3xl' src={estate.image} alt="estate" /></figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{estate.estate_title}</h2>
                                        <p className=' font-medium'>{estate.segment_name}</p>
                                        <p>{

                                            estate.facilities.map(data => <li>{data}</li>)

                                        }</p>
                                        <p>{estate.price}</p>

                                        <div className="card-actions justify-end">
                                            <Link to={`/estatedetails/${estate.id}`}><button className="btn hover:border-black hover:bg-white ">View details</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
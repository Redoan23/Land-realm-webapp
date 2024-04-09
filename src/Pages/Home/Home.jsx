import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Home() {
    return (
        <div>
            <div>
                <h1>this is from home</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                >
                    <SwiperSlide>{ <img src="https://i.ibb.co/5WgQpFZ/4673.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/RpdksCG/2147652038.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/6vzGxwv/jeff-burak-l-PO0-Vz-F-4s8-unsplash.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/hLg9NsJ/15242.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/0BgmRXZ/rebecca-mckenna-DWu-Wm-Sz-RO0-M-unsplash.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/xs8BWsd/13956.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/s2HY2yc/4287.jpg" alt="" /> }</SwiperSlide>
                    <SwiperSlide>{ <img src="https://i.ibb.co/XC5f8xP/102.jpg" alt="" /> }</SwiperSlide>
                </Swiper>
            </div>

            <section>
                <div>
                    estate-
                    agricultural land <br />
                    ranches <br />
                    farms <br />
                    vineyards <br />
                    forests <br />
                    plantations <br />
                </div>
            </section>
        </div>
    )
}
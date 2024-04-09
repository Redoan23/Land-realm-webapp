import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Home() {
    return (
        <div>
            <div>
                <h1>this is from home</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
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
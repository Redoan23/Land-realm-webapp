import { Link, useLoaderData } from "react-router-dom"


export default function LatestNews() {
    document.title = 'Latest News'
    const data = useLoaderData()
    console.log(data)

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mt-24">
            {data.map(info =>
                <div data-aos='fade-up' data-aos-delay="1000" className="card card-compact  md:w-72 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={info.image} alt="news picture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{info.title}</h2>
                        <p>{info.description.length > 60 ? <div>{info.description.slice(0, 60)} <Link className=" font-medium">...Read more</Link></div> : info.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
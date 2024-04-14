import { useNavigate, useRouteError } from "react-router-dom"

export default function Error() {
    document.title='Error'
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div className=" flex justify-center items-center text-center mx-auto">
            <div className=" flex flex-col items-center gap-4 text-center ">
                {error.status}
                <div className=" text-red-500">{error.statusText}</div>
                <button className=" btn" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    )
}
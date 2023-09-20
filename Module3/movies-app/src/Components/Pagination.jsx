
export default function Pagination({handlePrev,handlenext,pageNo}) {
    

    return (

        <div className="flex justify-center items-center h-3 p-4 m-3 mt-8  bg-gray-200">
            <div onClick={handlePrev} className="m-4 font-bold text-xl hover:cursor-pointer"><i class="fa-solid fa-arrow-left"></i></div>
            <div className="m-4 font-bold text-xl hover:cursor-pointer">{pageNo}</div>
            <div onClick={handlenext} className="m-4 font-bold text-xl hover:cursor-pointer"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}
function Banner() {
    return (
        <div className="h-[30vh] flex items-end md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/john-wick-keanu-reeves-social-1.jpg)` }} >
            <div className="text-2xl text-center font-bold text-white bg-gray-800/70 w-full p-4">
                John Wick 4
            </div>
        </div>
    )
}
export default Banner;
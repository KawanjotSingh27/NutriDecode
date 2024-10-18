function Profile(){
    return(
        <div className="bg-green-100">
            <div className="grid grid-rows-4 grid-cols-4 gap-4 p-10">
                <div className="bg-white row-start-1 row-end-5 col-start-1 col-end-2 shadow-lg p-6">
                    <div className="flex mb-5">
                        <div className="bg-gray-300 w-36 h-36"></div>
                        <div className="text-sm p-2 mt-2">
                            <p className="text-2xl mb-2">Vipul Kohli</p>
                            <p>Male</p>
                            <p>19 years</p>
                            <p>5'9ft | 70 kgs</p>
                        </div>
                    </div>
                    <hr className="h-1 border-none bg-gray-400"></hr>
                    <div className="flex flex-col gap-0.5 mt-4">
                        <p className="text-2xl">Levels</p>
                        <p className="ml-2">Knowledge : Novice</p>
                        <p className="ml-2">Activity : Moderate</p>
                        <p className="ml-2">Health : Normal</p>
                    </div>
                </div>
                <div className="bg-white row-start-1 row-end-2 col-start-2 col-end-4 shadow-lg p-5">
                    Favourites
                </div>
                <div className="bg-white row-start-1 row-end-2 col-start-4 col-end-5 shadow-lg p-5">
                    Family Profile
                </div>
                <div className="bg-white row-start-2 row-end-5 col-start-2 col-end-3 shadow-lg p-5">
                    Knowledge Center
                </div>
                <div className="bg-white row-start-2 row-end-5 col-start-3 col-end-4 shadow-lg p-5">
                    Diet Summary
                </div>
                <div className="bg-white row-start-2 row-end-4 col-start-4 col-end-5 shadow-lg p-5">
                    Health history
                </div>
                <div className="bg-white row-start-4 row-end-5 col-start-4 col-end-5 shadow-lg p-5">
                    Past Searched Products
                </div>
            </div>
        </div>
    )
}

export default Profile;
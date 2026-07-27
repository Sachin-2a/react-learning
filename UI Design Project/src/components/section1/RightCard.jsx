function RightCard(props){
    return (
        <>
            
                <div className="h-full w-80  rounded-4xl relative overflow-hidden shrink-0">
                    <img className="h-full w-full object-cover" src={props.img} alt="User" />
                    <div className="absolute h-full w-full top-0 left-0  p-10 flex flex-col justify-between">
                        <h1 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold">{props.id}</h1>
                        <div>
                            <p className="text-lg leading-normal text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam, aut iure voluptate dignissimos iusto debitis eaque tempora itaque nulla!
                            </p>
                            <div className="flex justify-between">
                                <button className="bg-blue-500 text-white font-md px-8 py-3 rounded-full">{props.tag}</button>
                                <button className="bg-blue-500 text-white font-md px-4 py-3 rounded-full ">→</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
         
        </>
    )
}
export default RightCard
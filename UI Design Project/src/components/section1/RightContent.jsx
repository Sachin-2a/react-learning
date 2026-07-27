import RightCard from "./RightCard"

function RightContent(props){
    
    return (
        <div id="right" className="h-full w-2/3 flex flex-nowrap gap-10 p-6 overflow-x-auto rounded-4xl ">
            {
                props.users.map(function(elem,idx){
                    return <RightCard key={idx} id={idx+1} img={elem.img} tag={elem.tag}/>
                })
            }
     
        </div>
    )
}
export default RightContent
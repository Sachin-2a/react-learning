import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Center(props){
   
    return(
        <>
            <div className='py-10 h-[90vh] items-center flex justify-between px-18  gap-2 '>
                <LeftContent/>
                <RightContent users={props.users}/>
            </div>
        
        </>
    )
}

export default Center

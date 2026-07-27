import Center from './Center';
import Navbar from './Navbar'
const Section1=(props)=>{
    
    return(
        <div className="h-screen w-full">
            <Navbar/>
            <Center users={props.users}/>
        
        
        </div>
    );
}
export default Section1
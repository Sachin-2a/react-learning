import { Link } from "react-router-dom"

const NavBar=()=>{
    return(
        <>
            <div className="flex items-center bg-cyan-900 px-8 py-4 justify-between">
                <h1 className="text-3xl font-bold">CodeX</h1>
                <div className="flex gap-8 text-xl">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    
                </div>
            </div>
        
        </>
    )
}

export default NavBar
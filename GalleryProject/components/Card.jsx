function Card(props){
    return(
             <div key={props.idx}>
          <a href={props.elem.url} target='_blank'>
      <div className='h-40 w-44 overflow-hidden bg-white rounded-xl' >
      <img className='h-full w-full object-cover' src={props.elem.download_url}/>
      </div>
          <h2 className='font-bold text-lg'>{props.elem.author}</h2>
          </a>
      </div>
    )
}
export default Card

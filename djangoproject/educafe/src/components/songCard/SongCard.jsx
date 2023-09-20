import PlayPause from '../playpause/playPause.'
import cheb from '../../assets/cheb.jpeg'

const SongCard = ({image, h1}) =>  {
  
return (
  <>
  
  <div className="flex flex-col w-[250px] p-4 bg-wur-sm animate-slidepointer">
  {/* flex flex-col w-[250px] p-4 bg-white/50 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer */}
    <div className="relative w-full h-56 group ">
    {/* relative w-full h-56 group */}
        
<img src = {cheb} />
<h1>{h1}</h1>
    
      <PlayPause/>
     
    </div>
  </div>
  </>
  
  )
}

export default SongCard;
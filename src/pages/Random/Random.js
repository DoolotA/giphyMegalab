import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandoming } from "../../redux/Randoming"

function Random() {
    const dispatch = useDispatch()
    const randoms = useSelector(state => state.randoms)
    console.log(randoms)
  

    useEffect(() => {
        dispatch(getRandoming())
    }, [])

    return(
        
        
        <div className='doolot-erkek1'><img className='doolot_img1' src={randoms.images?.downsized.url}/></div>
        
    
    )
}

export default Random;
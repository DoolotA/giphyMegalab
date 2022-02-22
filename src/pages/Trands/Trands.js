import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTranding } from "../../redux/tranding"

function Trands() {
    const dispatch = useDispatch()
    const trands = useSelector(state => state.trands.data)
  

    useEffect(() => {
        dispatch(getTranding())
    }, [])

    return(
        <div className='doolot-erkek'>
        {trands.map(item => {
        return <img className='doolot_img' src={item.images.fixed_height.url}/>
        })}
        </div>
    )
}

export default Trands
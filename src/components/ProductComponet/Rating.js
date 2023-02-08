import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {IoStarHalfOutline} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'

export const Rating = ({value ,text, color}) => {
  return (
    <div className='flex items-center'>
        {
            [1,2,3,4,5].map((rate)=>(
                <span key={uuidv4()}>
                    <i style={{color}}
                     className={value + 1 === rate + 0.5 ? "fas fa star-half-alt": value >= rate ? "fa fa-star": "far fa-star"}>

                     </i>
                </span>
            ))


        }
    </div>
//     <div>      <div className='flex items-center'>
//     <AiFillStar className={`${rating1 ? 'text-yellow-400' : 'text-gray-200'}`} onClick={()=> setRating1(!rating1)} />
//     <AiFillStar className={`${rating2 ? 'text-yellow-400' : 'text-gray-200'}`} onClick={()=> setRating2(!rating2)} />
//     <AiFillStar className={`${rating3 ? 'text-yellow-400' : 'text-gray-200'}`} onClick={()=> setRating3(!rating3)} />
//     <AiFillStar className={`${rating4 ? 'text-yellow-400' : 'text-gray-200'}`} onClick={()=> setRating4(!rating4)} />
//     <AiFillStar className={`${rating5 ? 'text-yellow-400' : 'text-gray-200'}`} onClick={()=> setRating5(!rating5)} />
    
   
// </div></div>
  )
}

Rating.defaultProps = {
    color: '#FFA41C'
}
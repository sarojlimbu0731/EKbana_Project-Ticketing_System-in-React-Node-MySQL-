import React from 'react';
import { Link } from 'react-router-dom';
import "./searchItem.css"

const SearchItem = ({item}) => {

  return (
    <div className='searchItem'>
        <img alt='busImage' className='siImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZe573a_FOulg723XUrHhcbcBOTiFwGvAIshpLg3vy03up-1tq8kvAeysobt8dY7LXpI&usqp=CAU' />
        <div className='siDesc'>
            <h1 className='siTitle'>Tower street apartment</h1>
            <span className='siDistance'>500m from the center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>Studio apartment with airconditioning</span>
            <span className='siFeature'>Entire studio - 1 bathroom - 1 full bed</span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>You can cancel later so, lock in this great price today</span>
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Execellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>$123</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
               <Link to={`/buses/${item.busId}`}>
               <button className='siCheckButton'>See availability</button>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem;
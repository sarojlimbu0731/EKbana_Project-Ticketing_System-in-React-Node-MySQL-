import React from 'react';
import { Link } from 'react-router-dom';
import "./searchItem.css"

const SearchItem = ({item}) => {

  return (
    <div className='searchItem'>
        <img alt='busImage' className='siImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZe573a_FOulg723XUrHhcbcBOTiFwGvAIshpLg3vy03up-1tq8kvAeysobt8dY7LXpI&usqp=CAU' />
        <div className='siDesc'>
            <h1 className='siTitle'>{item.name}</h1>
            <div className='details'>
            <span className='siSubtitle'>From: {item.from}</span>
            <span className='siFeature'>To: {item.to}</span>
            <span className='siCancelOp'>Travel Date: {item.date}</span>
            <span className='siCancelOpSubtitle'>You can cancel later so, lock in this great price today</span>
            </div>
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Execellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>Per ticket Rs.{item.rate}</span>

               <Link to={`/buses/${item.busId}`}>
               <button className='siCheckButton'>See availability</button>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem;
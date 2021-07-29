import {useEffect, useState} from 'react'

import Rock from '../../images/icon-rock.svg'
import Paper from '../../images/icon-paper.svg'
import Scissors from '../../images/icon-scissors.svg'
import Spock from '../../images/icon-spock.svg'
import Lizard from '../../images/icon-lizard.svg'

const Choice = ({handleClick, level}) => {

  const [items, setItems] = useState([])
  useEffect(() => {
    setItems((level === 3) ?
      [
        {
          img: Rock,
          gameChoice:0
        },
        {
          img:Paper,
          gameChoice:1
        },
        {
          img:Scissors,
          gameChoice:2
        }
      ]
      : [ {
        img:Rock,
        gameChoice:0
      },
        {
          img:Paper,
          gameChoice:1
        },
        {
          img:Scissors,
          gameChoice:2
        },
        {
          img:Spock,
          gameChoice:3
        },
        {
          img:Lizard,
          gameChoice:4
        }
      ])

  },[level])

  return ( <>
    {items.map(e => <ChoiceElement key={e.gameChoice} Chose={handleClick} img={e}/>)}
    </>
  )
}

const ChoiceElement = ({Chose, img}) => {
    return (
      <div onClick={Chose} data-game={img.gameChoice} className='Choice'> 
        <img src={img.img} alt="" data-game={img.gameChoice} />
      </div> )
}


export default Choice

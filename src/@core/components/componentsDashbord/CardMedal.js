// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import WelCome from '@src/assets/images/pic/w.jpg'

const CardMedal = () => {
  return (
    <Card className=' w-100 card-congratulations-medal'>
      <CardBody>
      
        <img className='congratulation-medal w-75 pt-1 rounded-10' src={WelCome} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal

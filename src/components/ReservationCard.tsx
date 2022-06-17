import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'
import { addCustomer } from '../features/customerSlice'
import { v4 as uuid } from 'uuid'

interface ReservationCardTypes {
  name: string
  index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch()

  return (
    <div
      className='reservation-card-container'
      onClick={() => {
        dispatch(removeReservation(index))
        dispatch(
          addCustomer({
            id: uuid(),
            name: name,
            food: [],
          })
        )
      }}>
      <div className='reservation-card-name'>{name}</div>
      <div className='reservation-card-remove'>X</div>
    </div>
  )
}

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'

interface CustomerCardTypes {
  id: string
  name: string
  food: string[]
}

const CustomerCard = ({ id, name, food }: CustomerCardTypes) => {
  const dispatch = useDispatch()
  const [customerFoodInput, setCustomerFoodInput] = useState('')
  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          {food.map(food => {
            return <p>{food}</p>
          })}
        </div>
        <div className='customer-food-input-container'>
          <input
            type='text'
            onChange={e => setCustomerFoodInput(e.target.value)}
            value={customerFoodInput}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return

              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              )
              setCustomerFoodInput('')
            }}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard

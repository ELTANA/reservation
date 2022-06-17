import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CustomerState {
  value: string[]
}

interface AddFoodToCustomerPayload {
  id: string
  food: string
}

interface Customer {
  id: string
  name: string
  food: string[]
}

const initialState: CustomerState = {
  value: [],
}

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state: { value: any }, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFoodToCustomer: (
      state: { value: any },
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer: { id: string; food: string[] }) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food)
        }
      })
    },
  },
})

export const { addCustomer, addFoodToCustomer } = customerSlice.actions

export default customerSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ResvationState {
  value: string[]
}

const initialState: ResvationState = {
  value: [],
}

export const reservationSlice = createSlice({
  name: 'resevations',
  initialState,
  reducers: {
    addReservation: (
      state: { value: string[] },
      action: PayloadAction<string>
    ) => {
      state.value.push(action.payload)
    },
    removeReservation: (
      state: { value: any },
      action: PayloadAction<number>
    ) => {
      state.value.splice(action.payload, 1)
    },
  },
})

export const { addReservation, removeReservation } = reservationSlice.actions

export default reservationSlice.reducer

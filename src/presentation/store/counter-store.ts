import { create } from 'zustand';

interface CounterState {
  count: number;
  incrementBy: ( value: number ) => void;
}

export const useCounterStore = create<CounterState>()( ( set ) => ( {
  count: 0,
  incrementBy: ( value ) => set( ( state ) => ( { count: state.count + value } ) ),
} ) );

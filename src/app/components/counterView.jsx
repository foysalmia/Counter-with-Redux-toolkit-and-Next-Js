/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { decrement, decrementByValue, increment, incrementByValue } from '@/redux/features/Counter/CounterSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const CounterView = () => {
    const data = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='mt-5'>
            <h1 className='text-zinc-950 font-black p-5 text-5xl'>data {data}</h1>
            <div className='mt-5'>
                <button onClick={()=>dispatch(increment())} className='p-3 bg-green-500 mr-3 rounded-md hover:bg-blue-500'>Increment</button>
                <button onClick={()=>dispatch(decrement())} className='p-3 bg-green-500 mr-3 rounded-md hover:bg-blue-500'>Decrement</button>
                <button onClick={()=>dispatch(incrementByValue(5))} className='p-3 bg-green-500 mr-3 rounded-md hover:bg-blue-500'>Increment 5</button>
                <button onClick={()=>dispatch(decrementByValue(5))} className='p-3 bg-green-500 mr-3 rounded-md hover:bg-blue-500'>Decrement 5</button>
            </div>
        </div>
    );
};

export default CounterView;
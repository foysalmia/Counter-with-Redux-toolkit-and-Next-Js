import Image from 'next/image'
import CounterView from './components/counterView';

export default function Home() {
  return (
    <main className="text-center">
      <h1 className='text-bold text-7xl'>Welcome to the Counter App</h1>
      <CounterView />
    </main>
  )
}

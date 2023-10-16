import React from 'react'
import { Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul className='flex flex-col gap-y-8 mt-9'>
            <li className=''>
                <Link to="rasht" className='font-bold border-b-2 border-slate-400 p-3'>Rasht</Link>
            </li>
            <li>
                <Link to="tehran" className='font-bold border-b-2 border-slate-400 p-3'>Tehran</Link>
            </li>
            <li>
                <Link to="johorbahru" className='font-bold border-b-2 border-slate-400 p-3'>Johor Bahru</Link>
            </li>
            <li>
                <Link to="newyork" className='font-bold border-b-2 border-slate-400 p-3'>NewYork</Link>
            </li>
            <li>
                <Link to="ottawa" className='font-bold border-b-2 border-slate-400 p-3'>Ottawa</Link>
            </li>
            <li>
                <Link to="sydney" className='font-bold border-b-2 border-slate-400 p-3'>Sydney</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav
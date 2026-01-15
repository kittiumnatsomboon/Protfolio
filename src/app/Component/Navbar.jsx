import React from 'react'
import Link from 'next/link';
import { Navbarmenu } from '../data/Navbarmenu';

function Navbar() {
  return (
    <div>
        {Navbarmenu.map((item) => (
          <li key={item.id}> {/* key prop สำคัญมาก! */}
            <Link href={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
    </div>
  )
}

export default Navbar
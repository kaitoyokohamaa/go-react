import {Sidebar} from '../../components/sidebar'
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function byCategory() {
  const router = useRouter()

  return (
    <Sidebar>
      <h2> Categories</h2>
      <ul>
        <li>
          <Link href={`${router.asPath}/comedy`}>
            <a>Comedy</a>
          </Link>
        </li>
        <li>
          <Link href={`${router.asPath}/drama`}>
            <a>Drama</a>
          </Link>
        </li>
      </ul>
    </Sidebar>
  )
}

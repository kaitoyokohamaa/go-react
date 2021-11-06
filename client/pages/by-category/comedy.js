import {Sidebar} from '../../components/sidebar'
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function comedy() {
  const router = useRouter()

  return (
    <Sidebar>
      <h2>comedy</h2>
    </Sidebar>
  )
}

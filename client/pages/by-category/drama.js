import {Sidebar} from '../../components/sidebar'
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function drama() {
  const router = useRouter()

  return (
    <Sidebar>
      <h2>drama</h2>
    </Sidebar>
  )
}

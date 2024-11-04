import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
          <h1>CSCI 331 Homework 8: NextJS </h1>
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
        </nav>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Welcome, insert name here
      <br/><br/>
      <Link href="/about">About</Link>

  </div>
  )
}

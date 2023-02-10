import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-3xl font-bold underline'>
      Welcome, insert name here
      <br/><br/>
      <Link href="/about">About</Link>
      <br/><br/>
      <Link href="/contacts">Contacts</Link>

  </div>
  )
}

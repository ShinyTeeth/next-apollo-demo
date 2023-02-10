import ContactGrid from '@/components/ContactGrid'
import Link from 'next/link'

export default () => (
  <div>
    Contacts Page
    <br/><br/>
    <ContactGrid />
    <br/><br/>
    <Link href="/">Go Back</Link>
  </div>
)

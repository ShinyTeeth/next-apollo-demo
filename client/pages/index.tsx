import ContactGrid from '../components/ContactGrid'
import { gql } from '@apollo/client';
import client from '../apollo-client';

export default function Home({ contacts }) {
  return (
    <div className='font-sans'>
      <h1 className='text-3xl'>Contacts</h1>
      <ContactGrid contacts={contacts}/>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Contacts {
        contacts {
          name
          address
          phone
        }
      }
    `,
  });

  return {
    props: {
      contacts: data.contacts,
    }
  };
}
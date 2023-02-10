import { Contact } from './Contact';

const ContactGrid = () => {

  const data = [
    {
      name: 'Jane Doe',
      address: '1 Infinite Loop, CA',
      phone: '123-456-7890',
    },
    {
      name: 'Mary Sue',
      address: '221B Baker Street, London',
      phone: '098-765-4321',
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 m-4'>
      {data.map((contact) => {
        return <Contact name={contact.name} address={contact.address} phone={contact.phone}/>
      })}
    </div>
  );
};

export default ContactGrid;
import { useState, useEffect } from 'react';
import { Contact } from '../types';
import { ContactCard } from './ContactCard';

interface ContactGridProps {
  contacts: Array<Contact>
}

const ContactGrid: React.FC<ContactGridProps> = ({ contacts }) => {

  const [contactList, setContactList] = useState(contacts.slice(0, 20));

  const onClickHandler = () => {
    setContactList(contacts.slice(0, contactList.length + 20));
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 m-4'>
      {contactList.map((contact, index) => {
        return <ContactCard key={index} name={contact.name} address={contact.address} phone={contact.phone}/>
      })}
      <button onClick={onClickHandler} className='rounded-full bg-indigo-500 text-white'>Load More</button>
    </div>
  );
};

export default ContactGrid;
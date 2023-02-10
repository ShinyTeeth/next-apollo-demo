import { Contact } from '../types';
import { ContactCard } from './ContactCard';

interface ContactGridProps {
  contacts: Array<Contact>
}

const ContactGrid: React.FC<ContactGridProps> = ({ contacts }) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 m-4'>
      {contacts.map((contact, index) => {
        return <ContactCard key={index} name={contact.name} address={contact.address} phone={contact.phone}/>
      })}
    </div>
  );
};

export default ContactGrid;
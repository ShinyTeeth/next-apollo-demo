import casual from 'casual';

interface Contact {
  name: string
  address: string
  phone: string
}

export function generateContacts(count: number): Contact[] {
  const contactList = new Array<Contact>;
  while (count > 0) {
    contactList.push({
      name: casual.full_name,
      address: casual.address,
      phone: casual.phone,
    });
    count--;
  } 
  return contactList;
};
interface ContactProps {
  name: string;
  address: string;
  phone: string;
}

export const Contact: React.FC<ContactProps> = ({ name, address, phone }) => {
  return (
    <div className='text-center rounded border-4 border-indigo-300'>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{phone}</p>
    </div>
  );
}

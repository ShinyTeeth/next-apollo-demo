import { render } from '@testing-library/react';
import { ContactCard } from './ContactCard';

const props = {
  name: 'Jane Doe',
  address: '221B Baker Street',
  phone: '123-456-7890',
};

test('ContactCard component is present', () => {
  const { getByTestId } = render(<ContactCard {...props} />);
  const contactCardElement = getByTestId('contact-card');
  expect(contactCardElement).toBeInTheDocument();
});
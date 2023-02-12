import { render } from '@testing-library/react';
import ContactGrid from './ContactGrid';

const props = {
  contacts: [
    {
      name: 'Jane Doe',
      address: '221B Baker Street',
      phone: '123-456-7890',
    },
  ]
};

test('ContactGrid component is present', () => {
  const { getByTestId } = render(<ContactGrid {...props} />);
  const contactGridElement = getByTestId('contact-grid');
  expect(contactGridElement).toBeInTheDocument();
});
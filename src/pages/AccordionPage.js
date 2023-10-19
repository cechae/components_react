import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'asdfasd',
      label: 'Click here',
      content: 'LOREM IPSUM....',
    },
    {
      id: '23dsadf',
      label: 'Can YOU USE REACT?',
      content: 'YES... YOU CAN ....',
    },
    {
      id: 'aga22',
      label: 'Can YOU USE JavaScript?',
      content: 'YES... YOU CAN ....',
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;

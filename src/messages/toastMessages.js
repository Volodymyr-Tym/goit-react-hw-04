import toast from 'react-hot-toast';

export const emptyFieldMessage = () =>
  toast('Searching field is empty', {
    duration: 4000,
    icon: '🤷‍♂️',
    style: {
      border: '1px solid #713200',
      padding: '8px',
      fontWeight: '500',
      backgroundColor: '#f66060',
    },
  });

export const noMatches = queryText => {
  toast.error(
    `Nothing was found for your request:
      "${queryText}"`,
    {
      style: {
        border: '1px solid #ad0000',
        padding: '8px',
        fontWeight: '500',
        backgroundColor: '#edc939',
      },
    }
  );
};

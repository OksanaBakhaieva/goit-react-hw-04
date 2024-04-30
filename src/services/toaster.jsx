import toast from 'react-hot-toast';

const notify = () =>
  toast.error('Please, input query!');
  

const noquery = () =>
  toast.error('Sorry, there are no images matching your search query. Please try again!');

const errorMes = () => {
  toast.error('An error occurred while fetching images. Please try again later.');
};

export { notify, noquery, errorMes };
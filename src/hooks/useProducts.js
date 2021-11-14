import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/bikes').then(response => {
      console.log(response.data);
      setBikes(response.data);
    });
  }, []);
  return { bikes };
};

export default useProducts;

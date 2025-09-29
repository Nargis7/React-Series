import {useEffect, useState} from 'react'

function useCurrencyInfo(Currency) {
       const [data, setData] = useState({});

  useEffect(() =>{
    fetch(`https://v6.exchangerate-api.com/v6/8a83f95b1f65bd4885568dee/latest/${Currency}`)
    .then((res) => res.json())
    .then((res) => setData(res.conversion_rates))
  }, [Currency])
      console.log(data);
  return data;
}

export default useCurrencyInfo;
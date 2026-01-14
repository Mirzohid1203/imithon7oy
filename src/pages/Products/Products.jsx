import { useEffect, useState } from 'react';
import { Panel } from 'rsuite';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products'));
    setProducts(data);
  }, []);

  return (
    <div className='flex flex-wrap  gap-4'>
      {products.map(item => (
        <Panel className='flex f w-[400px] bg-yellow-400 ' bordered key={item.id}>
          <h2 className='font-bold text-2xl pb-3.5' ><span className='text-2xl text-red-600'>Title: </span>{item.title}</h2>
          <p className='font-bold text-2xl pb-3.5'><span className='text-2xl text-red-600'>Description: </span> {item.description}</p>
          <p className='font-bold text-2xl'><span className='text-2xl text-red-600'>Price: </span> ${item.price}</p>
        </Panel>
      ))}
    </div>
  );
}

export default Products;
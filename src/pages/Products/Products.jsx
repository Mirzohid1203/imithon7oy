import React from 'react';
import useProducts from '../../store/useProduct';
import { Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function Products() {
  const products = useProducts((s) => s.products);

  if (!products.length) return <div>Hech qanday mahsulot yo'q</div>;

  return (
    <div style={{ padding: 16 }}>
      {products.map((p) => (
        <Panel key={p.id} bordered shaded style={{ marginBottom: 12 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div><strong>Price:</strong> {p.price}</div>
        </Panel>
      ))}
    </div>
  );
}

export default Products;

import { useEffect } from 'react';
import { Panel } from 'rsuite';
import useProduct from '../../store/useProduct';

function Products() {
  const products = useProduct((s) => s.products);
  const setProducts = useProduct((s) => s.setProducts);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== 'products') return;
      try {
        const data = e.newValue ? JSON.parse(e.newValue) : [];
        setProducts(Array.isArray(data) ? data : []);
      } catch {
        setProducts([]);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [setProducts]);

  if (!products || products.length === 0) {
    return <div className="p-5 text-sm text-gray-600">Hech qanday mahsulot topilmadi.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {products.map((item) => (
        <Panel
          shaded
          bordered
          key={item?.id ?? Math.random()}
          className="p-4 rounded-lg shadow-sm bg-white border-gray-100"
          style={{ minHeight: 120 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#111827' }}>
                {item?.title || '—'}
              </h4>
              <div style={{ marginTop: 6, fontSize: 13, color: '#6b7280', lineHeight: 1.4, maxHeight: 72, overflow: 'hidden' }}>
                {item?.description || '—'}
              </div>
            </div>

            <div style={{ marginLeft: 12, alignSelf: 'start' }}>
              <div style={{
                background: '#f3f4f6',
                color: '#111827',
                fontWeight: 600,
                padding: '6px 10px',
                borderRadius: 8,
                fontSize: 13
              }}>
                ${item?.price ?? '0'}
              </div>
            </div>
          </div>


        </Panel>
      ))}
    </div>
  );
}

export default Products;

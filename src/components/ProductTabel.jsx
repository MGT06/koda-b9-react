/**
 *  Displays the list of products in a table.
 * @param {Object} props
 * @param {Object[]} props.products
 * @returns 
 */
function ProductTable({ products }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
      <h2 className="font-semibold text-slate-700 mb-3">Daftar Product</h2>

      {products.length === 0 ? (
        <p className="text-sm text-slate-400 italic">
          Belum ada product yang ditambahkan.
        </p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 border-b border-slate-200">
              <th className="py-2">Nama</th>
              <th className="py-2">Harga</th>
              <th className="py-2">Stok</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-slate-100">
                <td className="py-2 text-slate-700">{product.name}</td>
                <td className="py-2 text-slate-700">
                  Rp{Number(product.price || 0).toLocaleString("id-ID")}
                </td>
                <td className="py-2 text-slate-700">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductTable;
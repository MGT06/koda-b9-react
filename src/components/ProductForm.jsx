/**
 * Form for adding a new product (name, price, stock).
 * @param {Object} props
 * @param {String} props.name
 * @param {Number} props.price
 * @param {Number} props.stock
 * @param {import("react").Dispatch<import("react").SetStateAction<String>>} props.onNameChange
 * @param {import("react").Dispatch<import("react").SetStateAction<Number>>} props.onPriceChange
 * @param {import("react").Dispatch<import("react").SetStateAction<Number>>} props.onStockChange
 * @param {import("react").ReactEventHandler} props.onSubmit
 * @returns 
 */

function ProductForm({
  name,
  price,
  stock,
  onNameChange,
  onPriceChange,
  onStockChange,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4"
    >
      <h2 className="font-semibold text-slate-700">Tambah Product</h2>

      <div>
        <label className="text-sm text-slate-600 block mb-1">
          Nama Product
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Contoh: Kaos Polos"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <div className="flex gap-3">
        <div className="flex-1">
          <label className="text-sm text-slate-600 block mb-1">Harga</label>
          <input
            type="number"
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
            placeholder="50000"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm text-slate-600 block mb-1">Stok</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => onStockChange(e.target.value)}
            placeholder="10"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm "
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-2 rounded-lg "
      >
        Simpan Product
      </button>
    </form>
  );
}

export default ProductForm
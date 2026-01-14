import { create } from "zustand";

const STORAGE_KEY = 'products';

const load = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
};

const save = (products) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) { }
};

const useProduct = create((set) => {
    const initial = load();
    return {
        products: initial,
        addProduct: (product) => {
            set((state) => {
                const newProduct = { ...product, id: Date.now().toString() };
                const products = [newProduct, ...state.products];
                save(products);
                return { products };
            });
        },
        setProducts: (products) => {
            save(products);
            set({ products });
        },
    };
});

export default useProduct;
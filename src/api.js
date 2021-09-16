const BASE = 'https://api.b7web.com.br/devsfood/api';

export default {

    getCategories: async () => {
        const res = await fetch(`${BASE}/categories`);
        const json = await res.json();
        return json;
    },
    getProducts: async (param) => {
        const res = await fetch(`${BASE}/products`);
        const json = await res.json();
        return json;
    }

}
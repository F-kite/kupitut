import { create } from 'zustand'

interface CartState {
	cart: { id: number; count: number }[]
	addCart: (id: number) => void
	removeCart: (id: number) => void
	clearCart: (id: number) => void
	resetCart: () => void
	setCart: (cart: { id: number; count: number }[]) => void
}

export const useCartStore = create<CartState>()(set => ({
	cart: [],
	addCart: id =>
		set(state => {
			const item = state.cart.find(item => item.id === id)
			if (item) {
				return {
					cart: [
						...state.cart.filter(item => item.id !== id),
						{ id, count: item.count + 1 },
					],
				}
			}

			return { cart: [...state.cart, { id, count: 1 }] }
		}),
	removeCart: id =>
		set(state => {
			const item = state.cart.find(item => item.id === id)
			if (!item)
				return {
					cart: state.cart,
				}
			const i = state.cart.indexOf(item)

			if (item.count > 1) {
				return {
					cart: [
						...state.cart.slice(0, i),
						{ ...item, count: item.count - 1 },
						...state.cart.slice(i + 1),
					],
				}
			}

			return {
				cart: [...state.cart.slice(0, i), ...state.cart.slice(i + 1)],
			}
		}),
	clearCart: id =>
		set(state => {
			const i = state.cart.findIndex(item => item.id === id)
			return {
				cart: [...state.cart.slice(0, i), ...state.cart.slice(i + 1)],
			}
		}),
	resetCart: () => set({ cart: [] }),
	setCart: cart => set({ cart }),
}))

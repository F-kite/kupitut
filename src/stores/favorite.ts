import { create } from 'zustand'

interface FavoriteState {
	favorites: number[]
	addFavorite: (id: number) => void
	removeFavorite: (id: number) => void
	setFavorite: (favorites: number[]) => void
}

export const useFavoriteStore = create<FavoriteState>()(set => ({
	favorites: [],
	addFavorite: id => set(state => ({ favorites: [...state.favorites, id] })),
	removeFavorite: id =>
		set(state => ({ favorites: state.favorites.filter(i => i !== id) })),
	setFavorite: favorites => set({ favorites }),
}))

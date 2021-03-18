import { atom } from 'jotai'
import cookie from 'react-cookies'

const email = cookie.load('email')
export const filesAtom = atom([])
export const avatarAtom = atom()
export const categoriesAtom = atom([])
export const productsAtom = atom([])
export const paramsAtom = atom({search: '', page: 1, category: '', subcategory: ''})
export const emailAtom = atom(email)
export const pagesAtom = atom(1)
export const userAtom = atom({})

export const addShop = (shop) => {
  return {
    type: "ADD_SHOP",
    value: shop,
  }
}

export const deleteShop = (index) => {
  return {
    type: 'DELETE_SHOP',
    value: index
  }
}

export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user,
  }
}
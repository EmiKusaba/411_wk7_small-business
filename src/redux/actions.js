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
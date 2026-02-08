const WISHLIST_KEY = "wishlist";

export const getWishlist = () => {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
};

export const addToWishlist = product => {
  let wishlist = getWishlist();

  if (!wishlist.find(item => item.id === product.id)) {
    wishlist.push(product);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = id => {
  let wishlist = getWishlist().filter(item => item.id !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

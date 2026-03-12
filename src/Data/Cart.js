const CART_KEY = "cart";

// Get cart from localStorage
export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem(CART_KEY));

  if (!Array.isArray(cart)) return [];

  return cart.map(item => ({
    ...item,
    price: Number(item.price) || 0,
    quantity: Number(item.quantity) || 1
  }));
};

// Save cart
const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add item to cart
export const addToCart = (product, size) => {
  let cart = getCart();

  const index = cart.findIndex(
    item => item.id === product.id && item.size === size
  );

  const price = Number(product.price) || 0;

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: price,
      size: size,
      quantity: 1
    });
  }

  saveCart(cart);
};

// Update quantity
export const updateQuantity = (id, size, type) => {
  let cart = getCart();

  cart = cart.map(item => {
    if (item.id === id && item.size === size) {

      let qty =
        type === "inc"
          ? item.quantity + 1
          : item.quantity - 1;

      if (qty < 1) qty = 1;

      return {
        ...item,
        quantity: qty
      };
    }

    return item;
  });

  saveCart(cart);
};

// Remove item
export const removeFromCart = (id, size) => {
  let cart = getCart();

  cart = cart.filter(
    item => !(item.id === id && item.size === size)
  );

  saveCart(cart);
};

// Clear entire cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
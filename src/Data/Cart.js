const CART_KEY = "cart";

/* ===== GET CART ===== */
export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
};

/* ===== SAVE CART ===== */
const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/* ===== ADD TO CART ===== */
export const addToCart = (product, size) => {
  let cart = getCart();

  // Same product + same size check
  const index = cart.findIndex(
    item => item.id === product.id && item.size === size
  );

  if (index !== -1) {
    cart[index].quantity += 1;
    cart[index].totalPrice =
      cart[index].quantity * cart[index].price;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      size,
      quantity: 1,
      totalPrice: product.price
    });
  }

  saveCart(cart);
};

/* ===== UPDATE QUANTITY ===== */
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
        quantity: qty,
        totalPrice: qty * item.price
      };
    }
    return item;
  });

  saveCart(cart);
};

/* ===== REMOVE ITEM ===== */
export const removeFromCart = (id, size) => {
  let cart = getCart();

  cart = cart.filter(
    item => !(item.id === id && item.size === size)
  );

  saveCart(cart);
};

/* ===== CLEAR CART (OPTIONAL) ===== */
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

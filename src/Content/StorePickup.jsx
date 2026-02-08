import "../style/staticPages.css";

function StorePickup() {
  return (
    <div className="static-page">
      <h1>Store Pickup</h1>

      <p>
        Enjoy the convenience of picking up your order from our physical store.
      </p>

      <h2>How Store Pickup Works</h2>
      <ul>
        <li>Select “Store Pickup” at checkout</li>
        <li>Choose your nearest store</li>
        <li>Receive a pickup confirmation message</li>
      </ul>

      <h2>Pickup Time</h2>
      <p>
        Orders are usually ready within 24–48 hours after confirmation.
      </p>

      <h2>What to Bring</h2>
      <p>
        Please bring your order confirmation and a valid ID.
      </p>
    </div>
  );
}

export default StorePickup;

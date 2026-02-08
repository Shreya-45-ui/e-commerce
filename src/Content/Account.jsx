import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/account.css";

function Account() {
  const [user, setUser] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setPhone(storedUser.phone || "");
      setAddress(storedUser.address || "");
    }
  }, []);

  const handleSave = () => {
   
    if (!phone.trim() || !address.trim()) {
      alert("Please fill all fields before saving.");
      return;
    }

    const updatedUser = {
      ...user,
      phone,
      address
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEdit(false);
    alert("Profile updated successfully");
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="account-container empty">
          <h2>No Account Found</h2>
          <p>Please sign up or log in.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="account-container">
        <h2>My Account</h2>

        <div className="account-card">
          <div className="account-row">
            <span className="label">Username</span>
            <span className="value">{user.username}</span>
          </div>

          <div className="account-row">
            <span className="label">Email</span>
            <span className="value">{user.email}</span>
          </div>

          <div className="account-row">
            <span className="label">Phone</span>
            {isEdit ? (
              <input
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
              />
            ) : (
              <span className="value">{user.phone || "—"}</span>
            )}
          </div>

          <div className="account-row">
            <span className="label">Address</span>
            {isEdit ? (
              <textarea
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            ) : (
              <span className="value">{user.address || "—"}</span>
            )}
          </div>
        </div>

        {!isEdit ? (
          <button className="edit-btn" onClick={() => setIsEdit(true)}>
            Edit Profile
          </button>
        ) : (
          <button className="save-btn" onClick={handleSave}>
            Save Profile
          </button>
        )}

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Account;

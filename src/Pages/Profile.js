import React, { useState } from "react";
import Header from "../Compo/Header";

const ProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [activeMenu, setActiveMenu] = useState('Purchases');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setActiveMenu(menu);

  };
  const purchases = [
    { id: '1C3X222', name: 'Sig; TRS Tag LS t-shirt 01', size: '2', date: '2024-01-20' },
    { id: '4T3X379', name: 'Sig; TRS Tag beanie 01', size: '1', date: '2024-01-18' },
    { id: '2K7J809', name: '1DR-Iconic shoulder bag in nappa leather', size: '1', date: '2024-01-15' },
  ];

    const [paymentData, setPaymentData] = useState({
        creditCard: '**** **** **** 1234',
        expirationDate: '12/24',
        billingAddress: '123 Main Street',
    })

  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123 456 7890',
    profilePicture: null,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [settings, setSettings] = useState({
    EmailNotifications: true,
    TwoFactorAuthentication: true,
    darkMode: false,
    PushNotifications: true,
    NewsletterSubscriptions: false,
  });

  const toggleSetting = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };
  

  const renderContent = () => {
    switch (selectedMenu) {
        case "profile":
            return (
              <div className="p-4">
                <h2 className="text-4xl font-semibold logo_font"> PROFILE</h2>
                <form onSubmit={handleSubmit} className="space-y-4 p-4 mx-48">
                <div className="mt-4">
                    <label className="block text-left text-black" htmlFor="profilePicture"></label>
                    <div className="flex gap-4 items-center">
                        <div className="mt-4">
                        <img
                            src={
                                formData.profilePicture
                                ? URL.createObjectURL(formData.profilePicture)
                                : '/assets/photos/profile-pic.jpeg'
                            }
                            alt="Profile"
                            className="w-24 h-24  object-cover border-2 border-black"
                            />
                        </div>
                        <input
                            type="file"
                            id="profilePicture"
                            name="profilePicture"
                            onChange={handleFileChange}
                            className="mt-1 p-2 w-full h-full border-2 border-black"
                        />
                        {formData.profilePicture && (
                            <div className="mt-4">
                            <p>Selected File: {formData.profilePicture.name}</p>
                        </div>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-left text-black" htmlFor="name">
                    NAME
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-2 border-black "
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-left text-black" htmlFor="email">
                    EMAIL
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  border-2 border-black "
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-left text-black" htmlFor="phone">
                    PHONE
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-2 border-black "
                    />
                </div>
                <div className="mt-4 text-right">
                    <button
                    type="submit"
                    className="bg-blue-800 text-white py-2 px-4 "
                    >
                    SAVE
                    </button>
                </div>
                </form>
              </div>
            );
      case "purchases":
        return (
          <div className=" p-4 mx-28">
            <h2 className="text-4xl font-semibold mb-6 logo_font">Purchases</h2>
            <div className="overflow-x-auto p-4">
                <table className="table-auto w-full border-collapse border-2 border-black">
                <thead className="text-center">
                    <tr className="text-sm">
                    <th className="border-r border-black">ID</th>
                    <th className="border-r border-black">PRODUCT</th>
                    <th className="border-r border-black">SIZE</th>
                    <th className="border-r border-black">DATE</th>
                    </tr>
                </thead>
                <tbody className="border-2 border-black">
                    {purchases.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                        <td className="border border-black px-4 py-2">{item.id}</td>
                        <td className="border border-black px-4 py-2">{item.name}</td>
                        <td className="border border-black px-4 py-2">{item.size}</td>
                        <td className="border border-black px-4 py-2">{item.date}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
          </div>
        );
        case "favorites":
            return (
              <div className="p-4 mx-48">
                <h2 className="text-4xl font-semibold logo_font"> FAVORITES</h2>
                <div className="mt-4">
                  <ul>
                    <li className="flex justify-between py-2">
                      <span>Favorite Product 1</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span>Favorite Product 2</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span>Favorite Product 3</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
        case "paymentMethod":
            return (
                <div>
                   <h2 className="text-4xl font-semibold logo_font p-4 mx-48">PAYMENT METHOD</h2>
                    <form onSubmit={handleSubmit} className="mt-4 mx-48 space-y-4">
                        <div>
                        <label className="block text-black text-left font-medium" htmlFor="creditCard">
                            CREDIT CARD
                        </label>
                        <input
                            type="text"
                            id="creditCard"
                            name="creditCard"
                            value={paymentData.creditCard}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-black "
                        />
                        </div>
                        <div>
                        <label className="block text-black text-left font-medium" htmlFor="expirationDate">
                            EXPIRATION DATE
                        </label>
                        <input
                            type="text"
                            id="expirationDate"
                            name="expirationDate"
                            value={paymentData.expirationDate}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-black "
                            placeholder="MM/YY"
                        />
                        </div>
                        <div>
                        <label className="block text-black text-left font-medium" htmlFor="billingAddress">
                            BILLING ADDRESS
                        </label>
                        <input
                            type="text"
                            id="billingAddress"
                            name="billingAddress"
                            value={paymentData.billingAddress}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-black "
                        />
                        </div>
                        <div className="text-right">
                        <button
                            type="submit"
                            className="bg-blue-800 text-white py-2 px-4 hover:bg-blue-900"
                        >
                            SAVE
                        </button>
                        </div>
                    </form>
                </div>
            );
            
        case "settings":
            return (
                <div>
                    <h2 className="text-4xl font-semibold logo_font">ACCOUNT SETTINGS</h2>
                    <div className="mt-6 space-y-4 p-4 mx-48">
                        {Object.entries(settings).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between border-b border-black py-4">
                            <p style={{ textTransform: 'uppercase' }}>{key.replace(/([A-Z])/g, ' $1')}</p>                            
                            <div className={`relative inline-block w-12 h-6 cursor-pointer ${
                                value ? 'bg-green-500' : 'bg-gray-300'
                                } rounded-full`} onClick={() => toggleSetting(key)}>
                            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all ${
                                value ? 'transform translate-x-6' : ''
                                }`}
                            ></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            );
    }
  };

  return (
    <>
    <Header/>
    <div className="flex h-screen">
      <div className="w-3/4 h-full text-center ml-20 p-4">
        {renderContent()}
      </div>
      <div className="w-1/4 h-full flex flex-col justify-between border border-blue-700 p-4 logo_font">
        <ul>
          <li
            onClick={() => handleMenuClick("profile")}
            className={`cursor-pointer border-b-2 border-black py-2 ${selectedMenu === 'profile' ? 'text-3xl text-blue-800' : 'text-black'}`}
          >
            PROFILE
          </li>
          <li
            onClick={() => handleMenuClick("purchases")}
            className={`cursor-pointer border-b-2 border-black py-2 ${selectedMenu === 'purchases' ? 'text-3xl text-blue-800' : 'text-black'}`}
          >
            PURCHASES
          </li>
          <li
            onClick={() => handleMenuClick("favorites")}
            className={`cursor-pointer border-b-2 border-black py-2 ${selectedMenu === 'favorites' ? 'text-3xl text-blue-800' : 'text-black'}`}
          >
            FAVORITES
          </li>
          <li
            onClick={() => handleMenuClick("paymentMethod")}
            className={`cursor-pointer border-b-2 border-black py-2 ${selectedMenu === 'paymentMethod' ? 'text-3xl text-blue-800' : 'text-black'}`}
          >
            PAYMENT METHOD
          </li>
          <li
            onClick={() => handleMenuClick("settings")}
            className={`cursor-pointer border-b-2 border-black py-2 ${selectedMenu === 'settings' ? 'text-3xl text-blue-800' : 'text-black'}`}
          >
            SETTINGS
          </li>
        </ul>
      </div>
      <div className="absolute bottom-4 left-4 text-5xl text-gray-800 logo_font">
        sumpoo
      </div>
    </div>
    </>
  );
};

export default ProfilePage;

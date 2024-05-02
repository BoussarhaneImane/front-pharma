import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';
function PaymentPage() {
  const location = useLocation();
  const { state: { username, total, cart } } = location;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code pour passer la commande ici
    // Vous pouvez accéder aux données de l'utilisateur, au total et aux produits commandés via les variables username, total et cart
    console.log('Commande passée par:', username);
    console.log('Total:', total);
    console.log('Produits commandés:', cart);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Paiement de votre commande</h1>
      <div className="bg-white p-8  shadow rounded-lg text-gray-900">
        <h2 className="text-lg font-semibold mb-4 text-end mr-5">Récapitulatif de la commande</h2>
        <hr></hr>
             <h3 className="text-lg text-gray-900  text-end mr-5 mt-5">bienvenu notre client<span className='ml-2 text-gray-500 font-medium '>{username}</span></h3>
        
        <h3 className="text-xl text-end text-emerald-500 mr-5">Votre Total: ${total}</h3>
        <h2 className="text-lg font-semibold mb-4 mt-[-166px] pl-7">Produits commandés:</h2>
        <ul className="list-disc pl-6 mb-4 mt-4">
          {cart.map((product) => (
            <li key={product.id} className="text-base mb-4 flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-emerald-500">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label htmlFor="fullName" className="block text-sm font-semibold mb-1">Nom complet:</label>
            <input type="text" className="w-96 px-4 py-2 rounded "  id="inputs"/>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-semibold mb-1">Adresse de livraison:</label>
            <textarea id="inputs" className="w-96 px-4 py-2 rounded"  />
          </div>
          <button type="submit" className="bg-gray-900 text-white py-2 px-6 rounded-lg text-sm font-semibold w-48 hover:bg-gray-950 transition duration-300">Passer la commande</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;

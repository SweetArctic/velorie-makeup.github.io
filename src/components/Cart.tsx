import React, { useState } from 'react';
import { ShoppingCart, X, Minus, Plus, Printer } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';
import { jsPDF } from 'jspdf';
import './Cart.css';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handlePrintReceipt = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.setTextColor(216, 130, 157); // #D8829D
    doc.text('Veloire Beauty & Makeup', 105, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Receipt', 105, 30, { align: 'center' });
    
    // Add date
    const date = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 20, 40);
    
    // Add table header
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Product', 20, 50);
    doc.text('Qty', 130, 50);
    doc.text('Price', 150, 50);
    doc.text('Total', 180, 50);
    
    // Add line
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 52, 190, 52);
    
    // Add items
    let y = 60;
    cartItems.forEach((item: Product) => {
      const quantity = item.quantity || 1;
      const price = parseFloat(item.price.replace('$', ''));
      const total = price * quantity;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      
      // Truncate long product names
      let productName = item.name;
      if (productName.length > 30) {
        productName = productName.substring(0, 27) + '...';
      }
      
      doc.text(productName, 20, y);
      doc.text(quantity.toString(), 130, y);
      doc.text(`$${price.toFixed(2)}`, 150, y);
      doc.text(`$${total.toFixed(2)}`, 180, y);
      
      y += 10;
    });
    
    doc.line(20, y, 190, y);
    y += 10;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', 150, y);
    doc.text(`$${getCartTotal().toFixed(2)}`, 180, y);
    
    y += 20;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for shopping with Veloire!', 105, y, { align: 'center' });
    doc.save('Veloire-receipt.pdf');
  };

  return (
    <>
      <div className="cart-icon" onClick={toggleCart}>
        <ShoppingCart size={24} />
        {getCartCount() > 0 && (
          <span className="cart-count">{getCartCount()}</span>
        )}
      </div>
      
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={toggleCart}>
            <X size={24} />
          </button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      className="quantity-btn"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity">{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="quantity-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button className="print-btn" onClick={handlePrintReceipt}>
              <Printer size={18} />
              <span>Print Receipt</span>
            </button>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
      
      {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </>
  );
};

export default Cart;
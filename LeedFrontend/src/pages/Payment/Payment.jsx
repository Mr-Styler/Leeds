import React from 'react';
import copy from '../../img/copy-solid.svg';
import styles from '../../pages/Payment/Payment.css';
import dashlogo from '../../img/leeds-blue.png';
import profile from '../../img/staff-3.jpg';

const Payment = () => {
  document.querySelectorAll('.copy-link').forEach((copyLinkContainer) => {
    const inputField = copyLinkContainer.querySelector('.copy-link-input');
    const copyButton = copyLinkContainer.querySelector('.copy-link-button');

    inputField.addEventListener('focus', () => inputField.select());

    copyButton.addEventListener('click', () => {
      const text = inputField.value;

      inputField.select();
      navigator.clipboard.writeText(text);
    });
  });

  return (
    <div className="payment-container">
      <div className="payheader">
        <div className="nav">
          <img className="dashlogo" src={dashlogo} />
          <div className="dashlogout">Log Out</div>
        </div>
        <div className="paynav1">
          <img className="dashnav2" src={profile} />
          <div className="dashnav3">DEPOSIT</div>
        </div>
      </div>
      <div className="paysection">
        <div className="pay-copy-link">
          <div className="pay-copylink">
            <div className="payment-bitcoin">DOGE</div>
            <div className="payment-align">
              {' '}
              <input
                type="text"
                className="paycopy-link-input"
                value="DHQu62MsGMwqURohfYoUFzEY4dNHcGGtNA"
                readOnly
              />
              <button type="button" className="copy-link-button">
                <span className="copy">copy</span>
              </button>
            </div>
          </div>
          <div className="pay-copylink">
            <div className="payment-bitcoin">USDT 20</div>
            <div className="payment-align">
              {' '}
              <input
                type="text"
                className="paycopy-link-input"
                value="TVBxmAxQVXVz4NJv9JE5GwCTBKjneXUVS8"
                readOnly
              />
              <button type="button" className="copy-link-button">
                <span className="copy">copy</span>
              </button>
            </div>
          </div>
          <div className="pay-copylink">
            <div className="payment-bitcoin">ETHEREUM</div>
            <div className="payment-align">
              {' '}
              <input
                type="text"
                className="paycopy-link-input"
                value="0x79399EF1eBaa7425C875D39f9fBDBfC79557a2Db"
                readOnly
              />
              <button type="button" className="copy-link-button">
                <span className="copy">copy</span>
              </button>
            </div>
          </div>
          <div className="pay-copylink">
            <div className="payment-bitcoin">BNB</div>
            <div className="payment-align">
              {' '}
              <input
                type="text"
                className="paycopy-link-input"
                value="0x79399EF1eBaa7425C875D39f9fBDBfC79557a2Db"
                readOnly
              />
              <button type="button" className="copy-link-button">
                <span className="copy">copy</span>
              </button>
            </div>
          </div>
          <div className="pay-copylink">
            <div className="payment-bitcoin">LITECOIN</div>
            <div className="payment-align">
              {' '}
              <input
                type="text"
                className="paycopy-link-input"
                value="ltc1qex5maa06h8cqfpy59h59h5frzkhj7klwp0vl4vv9g"
                readOnly
              />
              <button type="button" className="copy-link-button">
                <span className="copy">copy</span>
              </button>
            </div>
          </div>
          <div className="pay-copylink">
            <div className="payment-bitcoin">BTC</div>
            <div className="payment-align"></div>
            <div className="payment-align">
              {' '}
              <input
                type="text"
                className="paycopy-link-input"
                value="bc1qx3vtq5pr230j9hjaq8f2da69u0d7x22ufnrxsj"
                readOnly
              />
              <button type="button" className="copy-link-button">
                <span className="copy">copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

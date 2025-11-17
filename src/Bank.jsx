import React from "react";

const Bank = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Banks in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>AXIS BANK – COOCHBEHAR BRANCH</h3>
            <p>Sunity Road,Cooch Behar-I Block,Cooch Behar, West Bengal</p>
            <p>Email : kochbihar.branchhead@axisbank.com</p>
            <p>Phone : 918001603961</p>
            <p>Website Link : https://www.axisbank.com</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>HDFC BANK – COOCHBEHAR BRANCH</h3>
            <p>
              Nripendra Narayan Road,Old Post Office Para,Cooch Behar-I
              Block,Cooch Behar, West Bengal
            </p>
            <p>Email : biswajit[dot]majumder[at]hdfcbank[dot]com</p>
            <p>Phone : 919830624543</p>
            <p>Website Link : https://www.hdfcbank.com</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>INDIAN BANK – BISWA SINGHA ROAD BRANCH</h3>
            <p>
              Biswa Singh Road,Oppistie Madan Mohan Temple,Cooch Behar-I
              Block,Cooch Behar, West Bengal
            </p>
            <p>Email : br[dot]coochbehar_bsroad[at]allahabadbank[dot]in</p>
            <p>Phone : 919678129219</p>
            <p>Website Link : https://www.indianbank.net.in</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>PUNJAB NATIONAL BANK – COOCHBEHAR BRANCH</h3>
            <p>Sunity Road,Cooch Behar-I Block,Cooch Behar, West Bengal</p>
            <p>Email : bo024020[at]pnb[dot]co[dot]in</p>
            <p>Phone : 919002152844</p>
            <p>Website Link : https://www.pnbindia.in</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>SBI – COOCHBEHAR BAZAR BRANCH</h3>
            <p>
              Nripendra Narayan Road,Cooch Behar-I Block,Cooch Behar, West
              Bengal
            </p>
            <p>Email : sbi[dot]01753[at]sbi[dot]co[dot]in</p>
            <p>Phone : 918001196073</p>
            <p>Website Link : https://www.sbi.co.in</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>SBI – COOCHBEHAR MAIN BRANCH</h3>
            <p>
              Sagardighi Square,Cooch Behar-I Block,Cooch Behar, West Bengal
            </p>
            <p>Email : sbi[dot]00058[at]sbi[dot]co[dot]in</p>
            <p>Phone : 918001196024</p>
            <p>Website Link : https://www.sbi.co.in</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>SBI – KHAGRABARI ADB BRANCH</h3>
            <p>Khagrabari,Cooch Behar-II Block,Cooch Behar, West Bengal</p>
            <p>Email : sbi[dot]04785[at]sbi[dot]co[dot]in</p>
            <p>Phone : 918001196095</p>
            <p>Website Link : https://www.sbi.co.in</p>
            <p>Pincode: 736101</p>
          </div>
        </div>
        <div className="centered">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Bank;

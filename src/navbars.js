import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bankdeposite from "../balanceDropDown/bankDeposite";
import CashBalance from "../balanceDropDown/cashBalance";
import CreditCard from "../balanceDropDown/creditCard";
import "./navBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  function portfolio() {
    navigate("/portfolio");
  }
  function homepage() {
    navigate("/");
  }

  function logIn() {
    navigate("/login");
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img
              className="logo"
              src="https://tvblog-static.tradingview.com/uploads/2017/12/Binance_logo_2-1024x512.png"
            />
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a onClick={homepage} className="btn balancePop">
                    Buy Crypto
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link New  active"
                    aria-current="page"
                    href="#"
                  >
                    EUR
                  </a>
                  <p className="css-17hpqak"></p>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle drop"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Balance
                  </a>
                  <ul className="dropdown-menu lists ">
                    <li>
                      <div className="li1">
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalToggle1"
                          href="#"
                        >
                          Cash Balance
                          <br />
                          <span className="cashtext">
                            Deposite AUD with PayId
                          </span>
                        </a>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="li1">
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                          href="#"
                        >
                          Credit/ Debit Card
                          <span className="cashtext">
                            <br />
                            Buy crypto via card
                          </span>
                        </a>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="li1">
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href="#"
                        >
                          Bank Deposite
                          <span className="cashtext">
                            <br /> Buy crypto with your AUD balance
                          </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a onClick={portfolio} className="btn balancePop">
                    Portfolio
                  </a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link New "> New</a>
                <p className="css-17hpqak"></p>
              </li> */}
              </ul>
              <div className="rightItems">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a onClick={logIn} className="btn login  balancePop">
                      Log In
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="btn  balancePop">ENGLISH | USD | </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Bankdeposite />
      <CreditCard />
      <CashBalance />
    </>
  );
}

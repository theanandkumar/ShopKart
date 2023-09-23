import React from "react";
import { Dropdown } from "../../components/Dropdown";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { TextField } from "../../components/TextField";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap-2">
          <div className="rectangle" />
          <img className="rectangle-2" alt="Rectangle" src="/img/rectangle.png" />
          <div className="group">
            <div className="overlap-group-2">
              <div className="rectangle-3" />
              <img className="star" alt="Star" src="/img/star-3.png" />
              <img
                className="jessica-radanavong"
                alt="Jessica radanavong"
                src="/img/jessica-radanavong-ichpbhfd0pw-unsplash.png"
              />
              <div className="rectangle-4" />
              <img className="star-2" alt="Star" src="/img/star-4.png" />
              <div className="oregon-jacket">OREGON JACKET</div>
              <div className="text-wrapper-7">$124</div>
              <img className="line-2" alt="Line" src="/img/line-23.png" />
            </div>
          </div>
          <div className="lorem-ipsum-dolor">Fresh</div>
          <div className="lorem-ipsum-dolor-2">Look</div>
          <div className="lorem-ipsum-dolor-3">2022</div>
          <div className="rectangle-5" />
          <div className="text-wrapper-8">HOME</div>
          <div className="text-wrapper-9">ABOUT</div>
          <div className="text-wrapper-10">CONTACT US</div>
          <div className="text-wrapper-11">BAG (0)</div>
          <div className="text-wrapper-12">WISHLIST (0)</div>
          <div className="text-wrapper-13">ShopKart</div>
          <div className="text-wrapper-14">Free Delivery</div>
          <div className="text-wrapper-15">Return Policy</div>
          <div className="text-wrapper-16">Login</div>
          <div className="text-wrapper-17">Follow US</div>
          <img className="layer" alt="Layer" src="/img/layer-156.png" />
          <img className="vector-2" alt="Vector" src="/img/vector-3.png" />
          <img className="vector-3" alt="Vector" src="/img/vector-2.png" />
          <img className="vector-4" alt="Vector" src="/img/vector-1.png" />
          <img className="group-2" alt="Group" src="/img/group-6.png" />
          <img className="line-3" alt="Line" src="/img/line-11.png" />
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <img className="line-4" alt="Line" src="/img/line-17.png" />
              <img className="star-3" alt="Star" src="/img/star-1.png" />
            </div>
          </div>
          <PrimaryButton className="primary-button-instance" />
          <Dropdown
            className="dropdown-instance"
            divClassName="design-component-instance-node"
            divClassName1="design-component-instance-node"
            divClassName2="design-component-instance-node"
            divClassNameOverride="design-component-instance-node"
            text="OUR PRODUCTS"
          />
        </div>
        <div className="overlap-4">
          <img className="zam-nungaray" alt="Zam nungaray" src="/img/zam-nungaray-acw3b7q6ys0-unsplash.png" />
          <img className="philipp-arlt" alt="Philipp arlt" src="/img/philipp-arlt-8eyb-rvawty-unsplash.png" />
          <div className="lorem-ipsum-dolor-4">New products</div>
          <div className="text-wrapper-18">Apparel</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <img className="line-5" alt="Line" src="/img/line-18.png" />
              <img className="star-4" alt="Star" src="/img/star-2.png" />
            </div>
          </div>
          <SecondaryButton className="secondary-button-instance" />
          <SecondaryButton className="secondary-button-2" />
        </div>
        <img className="philipp-arlt-2" alt="Philipp arlt" src="/img/philipp-arlt-nmh9a0obon8-unsplash.png" />
        <div className="text-wrapper-19">Accessories</div>
        <div className="text-wrapper-20">Best sellers</div>
        <div className="text-wrapper-21">50% off</div>
        <div className="overlap-5">
          <p className="text-wrapper-22">Copyright 2022 All Right Reserved By SG</p>
        </div>
        <div className="overlap-6">
          <div className="overlap-7">
            <p className="get-news-about">
              <br />
              Get news about articles and updates in your inbox.
            </p>
            <div className="text-wrapper-23">Newslleter</div>
          </div>
          <div className="text-wrapper-24">NAME</div>
          <div className="text-wrapper-25">EMAIL</div>
          <div className="text-wrapper-26">MESSAGE</div>
          <div className="overlap-8">
            <div className="lorem-ipsum-dolor-5">
              GET <br />
              IN TOUCH
            </div>
            <div className="button">
              <div className="overlap-9">
                <div className="text-wrapper-27">SEND</div>
              </div>
            </div>
          </div>
          <img className="line-6" alt="Line" src="/img/line-21.png" />
          <img className="line-7" alt="Line" src="/img/line-21.png" />
          <img className="line-8" alt="Line" src="/img/line-21.png" />
        </div>
        <img className="arrow" alt="Arrow" src="/img/arrow-1.png" />
        <img className="arrow-2" alt="Arrow" src="/img/arrow-2.png" />
        <div className="overlap-10">
          <SecondaryButton className="secondary-button-3" />
          <img className="malicki-m-beser" alt="Malicki m beser" src="/img/malicki-m-beser-pkmvkg7vnuo-unsplash.png" />
          <SecondaryButton className="secondary-button-3" />
        </div>
        <TextField className="text-field-instance" />
        <TextField className="text-field-2" />
        <TextField className="text-field-3" />
        <TextField className="text-field-4" />
      </div>
    </div>
  );
};

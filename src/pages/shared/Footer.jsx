import { CiTwitter } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialFacebook, TiSocialGooglePlus } from "react-icons/ti";
const Footer = () => {
  return (
    <footer className=" p-5 lg:p-10 bg-base-200 text-base-content mt-16">
      <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 footer">
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Policies</a>
          <a className="link link-hover">Terms & Privacy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Discover</h6>
          <a className="link link-hover">Become a Member</a>
          <a className="link link-hover">Properties List</a>
          <a className="link link-hover">Sign In</a>
          <a className="link link-hover">Widgets</a>
          <a className="link link-hover">Components</a>
          <a className="link link-hover">Tables</a>
          <a className="link link-hover">Lists</a>
        </nav>

        <nav>
          <h6 className="footer-title">Get in Touch</h6>
          <span className="link link-hover flex gap-1 items-center">
            <span>
              <FaPhoneAlt />
            </span>
            <span>800 234 67 89</span>
          </span>
          <a className="link link-hover">516 Green St</a>
          <a className="link link-hover">San Francisco, CA 94133</a>
          <a className="link link-hover">United States</a>

          <div className="flex gap-1 lg:text-xl">
            <div className="border  rounded-full p-2 text-black hover:bg-white">
              <a href="">
                <TiSocialFacebook />
              </a>
            </div>
            <div className="border  rounded-full p-2 text-black hover:bg-white">
              <a href="">
                <CiTwitter />
              </a>
            </div>
            <div className="border  rounded-full p-2 text-black hover:bg-white">
              <a href="">
                <TiSocialGooglePlus />
              </a>
            </div>
            <div className="border   rounded-full p-2 text-black hover:bg-white">
              <a href="">
                {" "}
                <MdOutlineEmail />
              </a>
            </div>
          </div>
        </nav>

        <form>
          <div className="mb-5">
            <a className=" text-xl lg:text-2xl font-bold">
              <span className="text-[#38b469]">Pottery</span> Palette
            </a>
          </div>
          <h6 className="footer-title">Subscribe to Our Newsletter</h6>

          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn hidden md:flex lg:flex join-item bg-[#38b469] rounded-r-full">Subscribe</button>
          </div>
        </form>
      </div>
      <hr />
      <p className="opacity-60 text-center mt-8 text-xs">
        &#169; Pottery Palette. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

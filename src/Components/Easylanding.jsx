import logo from "../assets/images/logo.svg";
import back from "../assets/images/image-mockups.png";
import online from "../assets/images/icon-online.svg";
import budget from "../assets/images/icon-budgeting.svg";
import onboard from "../assets/images/icon-onboarding.svg";
import api from "../assets/images/icon-api.svg";
import money from "../assets/images/image-currency.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import confetti from "../assets/images/image-confetti.jpg";
import fb from "../assets/images/icon-facebook.svg";
import utube from "../assets/images/icon-youtube.svg";
import twit from "../assets/images/icon-twitter.svg";
import pinte from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeham from "../assets/images/icon-close.svg";
import { useState } from "react";

export default function Landing() {
  const [isIcon, setIsIcon] = useState(false);

  return (
    <div className="font-work">
      <header className="relative z-10 flex justify-between items-center py-8 md:px-32 px-7 bg-neutral-white ">
        <div>
          <img src={logo} alt="Page Logo"></img>
        </div>

        {/* desktop view */}
        <div className="md:flex space-x-20 items-center hidden ">
          <nav className="">
            <ul className="flex text-neutral-grayishblue text-lg font-semibold">
              <li className="ml-6">
                <a href="">Home </a>
              </li>
              <li className="ml-6">
                <a href="">About</a>
              </li>
              <li className="ml-6">
                <a href="">Contact</a>
              </li>
              <li className="ml-6">
                <a href="">Blog</a>
              </li>
              <li className="ml-6">
                <a href="">Careers</a>
              </li>
            </ul>
          </nav>

          <div>
            <button type="button" className="btn">
              Request Invite
            </button>
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden block">
          <button type="click" onClick={() => setIsIcon(!isIcon)}>
            <img src={isIcon ? closeham : hamburger} alt="" />
          </button>
        </div>

        {isIcon && (
          <nav className="md:hidden absolute bg-neutral-white inset-7 top-24  h-64 flex justify-center items-center rounded-md">
            <ul className="flex-col justify-center items-center space-y-4 text-center text-primary-darkblue text-lg font-medium">
              <li className="">
                <a href="">Home </a>
              </li>
              <li className="">
                <a href="">About</a>
              </li>
              <li className="">
                <a href="">Contact</a>
              </li>
              <li className="">
                <a href="">Blog</a>
              </li>
              <li className="">
                <a href="">Careers</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="w-full ">
        <div className=" bg-neutral-vlightgray md:pl-32 flex md:flex-row flex-col md:gap-56 justify-between items-center">
        <div className="md:hidden block absolute -top-11 px-7 -mx-6 bg-header-mobile  bg-cover ">
            <img className="" src={back} alt="" />
          </div>
          <div className="text-center md:text-start md:px-0 px-7 md:mt-0 mt-80 md:mb-0 mb-10">
            <div>
              <h2 className="text-primary-darkblue md:text-6xl text-2xl font-semibold ">
                Next generation digital banking
              </h2>
              <p className="p">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
            </div>
            <div>
              <button type="button" className="btn">
                Request Invite
              </button>
            </div>
          </div>

          <div className="hidden md:block -mr-20 -mt-20 bg-header-desk bg-center bg-cover">
            <img className="" src={back} alt="" />
          </div>
        </div>

        <div className="bg-neutral-lgrayishblue flex flex-col md:justify-start md:text-start text-center md:items-start md:px-32 px-7 pt-16 pb-12 md:mt-0 mt-12">
          <div>
            <h2 className="text-primary-darkblue md:text-2xl text-xl font-bold">
              Why Choose Easybank?
            </h2>
            <p className="p">
              We leverage Open Banking to turn your bank account into your
              finanacial hub.
              <br />
              Control your finances like nec=ver before.
            </p>
          </div>

          <div className="flex md:flex-row flex-col md:justify-start md:items-start gap-6 mt-8 md:pr-40 space-y-7 md:space-y-0">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={online} alt="" />
              </div>

              <div>
                <h3 className="head">Online Banking</h3>
                <p className="det">
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={budget} alt="" />
              </div>

              <div>
                <h3 className="head">Simple Budgeting</h3>
                <p className="det">
                  See exactly where your money goes eac month. Receive
                  notifications when your&apos;re close to hitting your limits.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={onboard} alt="" />
              </div>

              <div>
                <h3 className="head">Fast Onboarding</h3>
                <p className="det">
                  We don&apos;t do branches. Open your account in minutes online
                  and start taking control of your finances right away.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={api} alt="" />
              </div>

              <div>
                <h3 className="head">Open API</h3>
                <p className="det">
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="bg-neutral-vlightgray py-11 md:px-32 px-7">
          <h2 className="text-primary-darkblue md:text-2xl text-xl text-center md:text-start font-bold md:font-semibold">
            Latest Articles
          </h2>
          <div className="flex md:flex-row flex-col gap-4 md:justify-between  items-center mt-5">
            <div className="bg-neutral-white rounded-lg md:w-64 ">
              <div className=" rounded-lg">
                <img className="w-full md:h-44" src={money} alt="" />
              </div>
              <div className="py-7 px-6">
                <p className="name">By Claire Robinson</p>
                <h2 className="re">
                  Receive money in any currency with no fees
                </h2>
                <p className="de">
                  The world is getting smaller and we&apos;re becoming more
                  mobile. So why should you be forced to only recive moneyin a
                  single...
                </p>
              </div>
            </div>

            <div className="bg-neutral-white rounded-lg md:w-64">
              <div className="w-full rounded-lg">
                <img src={restaurant} alt="" />
              </div>
              <div className="py-7 px-6">
                <p className="name">By Wilson Hutton</p>
                <h2 className="re">
                  Treat yourself without worrying about money
                </h2>
                <p className="de">
                  Our simple budgeting feature allows you you to separate out
                  your spending and set realistic limits each month. That means
                  you...
                </p>
              </div>
            </div>

            <div className="bg-neutral-white rounded-lg md:w-64">
              <div className="w-full rounded-lg">
                <img src={plane} alt="" />
              </div>
              <div className="py-7 px-6">
                <p className="name">By Wilson Hutton</p>
                <h2 className="re">Take your Easybank card wherever you go</h2>
                <p className="de">
                  We want you to enjoy our travels. This is why we dont&apos;t
                  charge any fees on purchaese while you&apos;re abroad.
                  We&apos;ll even show you...
                </p>
              </div>
            </div>

            <div className="bg-neutral-white rounded-lg md:w-64">
              <div className="w-full rounded-lg">
                <img src={confetti} alt="" />
              </div>
              <div className="py-7 px-6">
                <p className="name">By Claire Robinson</p>
                <h2 className="re">
                  Our invite-only Beta accounts are now live!
                </h2>
                <p className="de">
                  After a lot of hard work by the whole team, we&apos;re exited
                  to lauch our closed beta. it&apos;s easy to request an invite
                  through the site...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-32 px-7 py-12 bg-primary-darkblue flex md:flex-row flex-col justify-center items-center text-center md:text-start md:justify-between md:items-start space-y-7 md:space-y-0">
          <div className="flex flex-col md:space-y-10 space-y-7 ">
            <div>
              <img className="bg-neutral-white" src={logo} alt="" />
            </div>

            <div className="flex gap-3">
              <a href="https://www.fb.com">
                <img src={fb} alt="" />
              </a>
              <a href="https://www.youtube.com">
                <img src={utube} alt="" />
              </a>
              <a href="https://www.x.com">
                <img src={twit} alt="" />
              </a>
              <a href="https://www.pinterest.com">
                <img src={pinte} alt="" />
              </a>
              <a href="https://www.instagram.com">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 ">
            <ul className="text-neutral-vlightgray md:text-base text-sm font-light flex flex-col gap-3">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-neutral-vlightgray md:text-base text-sm font-light flex flex-col gap-3">
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <div>
              <button type="button" className="btn">
                Request Invite
              </button>
            </div>

            <div className="text-neutral-vlightgray md:text-sm text-xs font-medium">
              <p>&copy; Easybank. All Rights Reserved.</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

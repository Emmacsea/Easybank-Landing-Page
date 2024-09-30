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
import insta from "../assets/images/icon-instagram.svg"

export default function Landing() {
  return (
    <div className="font-work">
      <header className="flex justify-between items-center py-8 px-32 bg-neutral-white">
        <div>
          <img src={logo} alt="Page Logo"></img>
        </div>

        <nav>
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
      </header>

      <main className=" ">
        <div className=" bg-neutral-vlightgray pl-32 flex gap-56 justify-between items-center">
          <div>
            <div>
              <h2 className="text-primary-darkblue text-6xl font-semibold ">
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

          <div className="  bg-header-desk bg-top bg-cover">
            <img src={back} alt="" />
          </div>
        </div>

        <div className="bg-neutral-lgrayishblue flex flex-col justify-start items-start px-32 pt-16 pb-12">
          <div>
            <h2 className="text-primary-darkblue text-2xl font-bold">
              Why Choose Easybank?
            </h2>
            <p className="p">
              We leverage Open Banking to turn your bank account into your
              finanacial hub.
              <br />
              Control your finances like nec=ver before.
            </p>
          </div>

          <div className="flex justify-start items-start gap-6 mt-8 pr-40 ">
            <div className="flex flex-col justify-start items-start">
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

            <div className="flex flex-col justify-start items-start">
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

            <div className="flex flex-col justify-start items-start">
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

            <div className="flex flex-col justify-start items-start">
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
        <div className="bg-neutral-vlightgray py-11 px-32">
            <h2 className="text-primary-darkblue text-2xl font-semibold">Latest Articles</h2>
            <div className="flex gap-4 justify-between items-center">
                <div className="bg-neutral-white rounded-lg w-64">
                    <div className="w-full rounded-lg" >
                        <img  src={money} alt="" />
                    </div>
                    <div className="py-7 px-6">
                        <p className="name">By Claire Robinson</p>
                        <h2 className="re">Receive money in any currency with no fees</h2>
                        <p className="de">
                            The world is getting smaller and 
                            we&apos;re becoming more mobile. So 
                            why should you be forced to only 
                            recive moneyin a single...
                        </p>

                    </div>

                </div>

                <div className="bg-neutral-white rounded-lg w-64">
                    <div className="w-full rounded-lg" >
                        <img  src={restaurant} alt="" />
                    </div>
                    <div className="py-7 px-6">
                        <p className="name">By Wilson Hutton</p>
                        <h2 className="re">Treat yourself without worrying about money</h2>
                        <p className="de">
                            Our simple budgeting feature allows you 
                            you to separate out your spending 
                            and set realistic limits each month. That means you...
                        </p>

                    </div>

                </div>

                <div className="bg-neutral-white rounded-lg w-64">
                    <div className="w-full rounded-lg" >
                        <img  src={plane} alt="" />
                    </div>
                    <div className="py-7 px-6">
                        <p className="name">By Wilson Hutton</p>
                        <h2 className="re">Take your Easybank card wherever you go</h2>
                        <p className="de">
                            We want you to enjoy our travels. This is why 
                            we dont&apos;t charge any fees on 
                            purchaese while you&apos;re abroad. We&apos;ll even show you...
                        </p>

                    </div>

                </div>

                <div className="bg-neutral-white rounded-lg w-64">
                    <div className="w-full rounded-lg" >
                        <img  src={confetti} alt="" />
                    </div>
                    <div className="py-7 px-6">
                        <p className="name">By Claire Robinson</p>
                        <h2 className="re">Our invite-only Beta accounts are now live!</h2>
                        <p className="de">
                            After a lot of hard work by the whole team, we&apos;re 
                            exited to lauch our closed beta. it&apos;s easy to request 
                            an invite through the site...
                        </p>

                    </div>

                </div>
            </div>
        </div>

        <div className="px-32 py-12 bg-primary-darkblue flex justify-between items-start">
            <div className="flex flex-col gap-12">
                <div>
                    <img className="bg-neutral-white" src={logo} alt="" />
                </div>

                <div className="flex gap-3">
                    <a href="https://www.fb.com"><img src={fb} alt="" /></a>
                    <a href="https://www.youtube.com"><img src={utube} alt="" /></a>
                    <a href="https://www.x.com"><img src={twit} alt="" /></a>
                    <a href="https://www.pinterest.com"><img src={pinte} alt="" /></a>
                    <a href="https://www.instagram.com"><img src={insta} alt="" /></a>

                </div>
            </div>

            <div>
                <ul className="text-neutral-vlightgray text-base font-light flex flex-col gap-3">
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>

            <div>
                <ul className="text-neutral-vlightgray text-base font-light flex flex-col gap-3">
                    <li><a href="">Careers</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-5 items-end">
            <div>
          <button type="button" className="btn">
            Request Invite
          </button>
        </div>

        <div className="text-neutral-vlightgray text-sm font-medium">
            <p>&copy; Easybank. All Rights Reserved.</p>
        </div>

            </div>
            

        </div>

      </footer>
    </div>
  );
}

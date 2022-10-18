import { Fragment, useState } from 'react';
import logo from './assets/rasoi_logo.png';
import { BiInfinite } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
// import hero from './assets/hero_picture.jpg';
// import amritsar from './assets/amrtisar.jpg';
// import delhi from './assets/delhi.jpg';
// import jaipur from './assets/jaipur.jpg';
// import mumbai from './assets/mumbai.jpg';
import chicken from './assets/chicken.jpg';
import dosa from './assets/dosa.jpg'
import fish from './assets/fish.jpg';
import jalebi from './assets/jalebi.jpg';
import kebab from './assets/paneer_kebab.jpg';
import paratha from './assets/paratha.jpg';
import samosa from './assets/samosa.jpg';
import seekh_kebab from './assets/seekh_kebab.jpg';

// breakpoints in tailwind  by default apply as min-width
// sm:bg-blue-500 will apply for screens larger than sm
// 	"sm": "640px",
// 	"md": "768px",
// 	"lg": "1024px",
// 	"xl": "1280px",
// 	"2xl": "1536px",

const App = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleClick = () => {
		setIsNavOpen((prevState) => {
			console.log(prevState);
			return !prevState;
		})
	}
  return (
		<Fragment>
			<header className="relative bg-hero-pattern h-screen bg-fixed bg-cover bg-center">
				<div className={isNavOpen ? "overlay-mobile-menu absolute h-screen w-full top-20 opacity-50 bg-gradient-to-b from-black to-white transition-all ease-in-out delay-150" : "invisible"}></div>
				<nav className="h-20 flex justify-between items-center">
					<img className="logo ml-4 inline-block w-48" src={ logo } alt="Rasoi logo" />
					<div className="nav-elements hidden md:inline-block hide-for-mobile">
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Food Delivery</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">How it Works</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Our Cities</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Reviews</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Sign Up</a>
					</div>
					<div onClick={handleClick} className="hamburger-menu mr-5 md:hidden hide-for-desktop">
						<span className={isNavOpen ? "block w-6 h-0.5 bg-white mb-2 rotate-45 origin-top-left transition-all ease-in-out delay-150" : "block w-6 h-0.5 bg-white mb-1 transition-all ease-in-out delay-150"}></span>
						<span className={isNavOpen ? "block w-6 h-0.5 bg-white mb-1 opacity-0 transition-all ease-in-out delay-150" : "block w-6 h-0.5 bg-white mb-1 transition-all ease-in-out delay-150"}></span>
						<span className={isNavOpen ? "block w-6 h-0.5 bg-white mb-1 -rotate-45 origin-bottom-left transition-all ease-in-out delay-150" : "block w-6 h-0.5 bg-white mb-1 transition-all ease-in-out delay-150"}></span>
					</div>
				</nav>
				<div className={isNavOpen ? "absolute left-0 right-0 mx-auto mt-6 bg-white w-4/5 flex flex-col items-center rounded-lg z-20 transition-all ease-in-out delay-150" : "invisible"}>
					<a className="mt-4 hover:text-primary" href="#">Food Delivery</a>
					<a className="mt-4 hover:text-primary" href="#">How it Works</a>
					<a className="mt-4 hover:text-primary" href="#">Our Cities</a>
					<a className="mt-4 hover:text-primary" href="#">Reviews</a>
					<a className="mt-4 mb-6 hover:text-primary" href="#">Sign Up</a>
				</div>
				<div className="hero text-white absolute text-3xl top-64 left-12 md:top-44 md:left-32 md:text-4xl font-bold">
					<h1 className="mb-4">Goodbye junk food.<br />Hello super healthy food</h1>
					<a className="btn transition ease-in-out delay-75 inline-block bg-primary rounded-full text-xl px-4 py-2 md:text-2xl mr-4 hover:bg-darkprimary h-full" href="#">I'm hungary</a>
					<a className="btn transition ease-in-out delay-75 border border-primary rounded-full text-xl px-4 py-2 md:text-2xl hover:bg-darkprimary" href="#">Show me more</a>
				</div>
			</header>

			<section className="section food_delivery w-4/5">
				<div className="section-heading relative mx-auto">
					<h2 className="">
						Get food fast &mdash; not fast food.
					</h2>
					<p className="section-details">
						Hello, we’re Rasoi, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
					</p>
				</div>
				<div className="section-columns">
					<div className="section-columns-items">
						<BiInfinite />
						<ion-icon className="big-icon" name="infinite-outline"></ion-icon>
						<h3>Up to 365 days/year</h3>
						<p>
							Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
						</p>
					</div>
					<div className="section-columns-items">
						<BiAlarm />
						<ion-icon className="big-icon" name="alarm-outline"></ion-icon>
						<h3>Ready in 20 minutes</h3>
						<p>
							You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
						</p>
					</div>
					<div className="section-columns-items">
						<BiCheckCircle />
						<ion-icon className="big-icon" name="checkmark-circle-outline"></ion-icon>
						<h3>100% organic</h3>
						<p>
							All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
						</p>
					</div>
					<div className="section-columns-items">
						<BiCart />
						<ion-icon className="big-icon" name="file-tray-outline"></ion-icon>
						<h3>Order anything</h3>
						<p>
							We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
						</p>
					</div>
				</div>
			</section>
			<div className="section-meals">
				<figure className="section-meals-photo">
					<img src={chicken} alt="chicken"/>
				</figure>
				<figure className="section-meals-photo">
					<img src={dosa} alt="dosa"/>
				</figure>
				<figure className="section-meals-photo">
					<img src={fish} alt="fish"/>
				</figure>
				<figure className="section-meals-photo">
					<img src={jalebi} alt="jalebi"/>
				</figure>
				<figure className="section-meals-photo">
					<img src={kebab} alt="paneer kebab"/>
				</figure>
				<figure className="section-meals-photo">
					<img src={paratha} alt="paratha"/>
				</figure>
				<figure className="section-meals-photo">
					<img src={samosa} alt="samosa" />
				</figure>
				<figure className="section-meals-photo">
					<img src={seekh_kebab} alt="seekh kebab" />
				</figure>
			</div>

		</Fragment>
  );
}

export default App;

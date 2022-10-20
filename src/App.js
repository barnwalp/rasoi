import { Fragment, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import logo from './assets/rasoi_logo.png';
import locations from './assets/citi-data';
import { BiInfinite } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import chicken from './assets/chicken.jpg';
import dosa from './assets/dosa.jpg'
import fish from './assets/fish.jpg';
import jalebi from './assets/jalebi.jpg';
import kebab from './assets/paneer_kebab.jpg';
import paratha from './assets/paratha.jpg';
import samosa from './assets/samosa.jpg';
import seekh_kebab from './assets/seekh_kebab.jpg';
import menu from './assets/menu-logo.png';
import biryani from './assets/biryani.jpg';
import aparna from './assets/Aparna-Kulkarni.jpg';
import priya from './assets/priya-ranjan.jpg';
import rashmi from './assets/rashmi-jhawar.jpg';
 
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

	const cities = locations.map((city) => {
		return (
			<div className="ml-6">
				<img className="h-48 w-full overflow-hidden" src={ city.url } alt={city.city} />
				<h3 className="text-2xl mt-3 font-light uppercase">{city.city}</h3>
				<div>
					<p className="text-xl font-light mt-1"><BsFillPersonFill className="inline text-primary mr-2"/>{city.noOfCustomers}</p>
					<p className="text-xl font-light mt-1"><AiFillStar className="inline text-primary mr-2" /> {city.noOfChefs}</p>
					<p className="mb-6 text-xl font-light mt-1 text-primary">< AiOutlineTwitter className="inline text-primary mr-2" />{city.twitterHandle}</p>
				</div>
			</div>
		)
	})

  return (
		<Fragment>
			<header className="relative bg-hero-pattern h-screen bg-fixed bg-cover bg-center">
				<div className={isNavOpen ? "absolute h-screen w-full top-20 opacity-50 bg-gradient-to-b from-black to-white transition-all ease-in-out duration-150" : "invisible"}></div>
				<nav className="h-20 flex justify-between items-center">
					<img className="ml-4 inline-block w-48" src={ logo } alt="Rasoi logo" />
					<div className="hidden md:inline-block">
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Food Delivery</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">How it Works</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Our Cities</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Reviews</a>
						<a className="relative mr-5 font-normal text-white text-xl hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-primary hover:after:top-10 hover:after:left-0" href="#">Sign Up</a>
					</div>
					<div onClick={handleClick} className="mr-5 md:hidden">
						<span className={isNavOpen ? "block w-6 h-0.5 bg-white mb-2 rotate-45 origin-top-left transition-all ease-in-out duration-150" : "block w-6 h-0.5 bg-white mb-1 transition-all ease-in-out duration-150"}></span>
						<span className={isNavOpen ? "block w-6 h-0.5 bg-white mb-1 opacity-0 transition-all ease-in-out duration-150" : "block w-6 h-0.5 bg-white mb-1 transition-all ease-in-out duration-150"}></span>
						<span className={isNavOpen ? "block w-6 h-0.5 bg-white mb-1 -rotate-45 origin-bottom-left transition-all ease-in-out duration-150" : "block w-6 h-0.5 bg-white mb-1 transition-all ease-in-out duration-150"}></span>
					</div>
				</nav>
				<div className={isNavOpen ? "absolute left-0 right-0 mx-auto mt-6 bg-white w-4/5 flex flex-col items-center rounded-lg z-20 transition-all ease-in-out delay-150" : "invisible"}>
					<a className="mt-4 hover:text-primary" href="#">Food Delivery</a>
					<a className="mt-4 hover:text-primary" href="#">How it Works</a>
					<a className="mt-4 hover:text-primary" href="#">Our Cities</a>
					<a className="mt-4 hover:text-primary" href="#">Reviews</a>
					<a className="mt-4 mb-6 hover:text-primary" href="#">Sign Up</a>
				</div>
				<div className="text-white absolute text-3xl top-64 left-12 md:top-44 md:left-32 md:text-4xl font-bold">
					<h1 className="mb-4">Goodbye junk food.<br />Hello super healthy food</h1>
					<a className="transition ease-in-out delay-75 inline-block bg-primary rounded-full text-xl px-4 py-2 md:text-2xl mr-4 hover:bg-darkprimary h-full" href="#">I'm hungary</a>
					<a className="transition ease-in-out delay-75 border border-primary rounded-full text-xl px-4 py-2 md:text-2xl hover:bg-darkprimary" href="#">Show me more</a>
				</div>
			</header>
				
			<section className="w-4/5 mx-auto">
				<div className="relative mx-auto">
					<h2 className="uppercase mt-10 font-light text-4xl text-center after:absolute after:content-[''] after:w-20 after:h-1 after:bg-primary after:mx-auto after:left-0 after:right-0 after:top-16">
						Get food fast &mdash; not fast food.
					</h2>
					<p className="mt-12 font-light text-center text-2xl">
						Hello, we’re Rasoi, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
					</p>
				</div>
				<div className="mt-6 grid md:grid-cols-4">
					<div className="pr-3 pl-3 mb-5">
						<BiInfinite className="text-primary text-7xl" />
						<h3 className="font-medium">Up to 365 days/year</h3>
						<p className="mt-1 font-normal text-justify">
							Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
						</p>
					</div>
					<div className="pr-3 pl-3 mb-5">
						<BiAlarm className="text-primary text-7xl" />
						<h3 className="font-medium">Ready in 20 minutes</h3>
						<p className="mt-1 font-normal text-justify">
							You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
						</p>
					</div>
					<div className="pr-3 pl-3 mb-5">
						<BiCheckCircle className="text-primary text-7xl" />
						<h3 className="font-medium">100% organic</h3>
						<p className="mt-1 font-normal text-justify">
							All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
						</p>
					</div>
					<div className="pr-3 pl-3 mb-5">
						<BiCart className="text-primary text-7xl" />
						<h3 className="font-medium">Order anything</h3>
						<p className="mt-1 font-normal text-justify">
							We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
						</p>
					</div>
				</div>
			</section>
			<section>
				<h2 className="relative uppercase mt-10 font-light text-4xl text-center after:absolute after:content-[''] after:w-20 after:h-1 after:bg-primary after:mx-auto after:left-0 after:right-0 after:top-16">
							Most sought Dishes &mdash; at your doorstep.
				</h2>
				<div className="mt-14 md:grid grid-cols-4">
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={chicken} alt="chicken"/>
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={dosa} alt="dosa"/>
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={fish} alt="fish"/>
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={jalebi} alt="jalebi"/>
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={kebab} alt="paneer kebab"/>
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={paratha} alt="paratha"/>
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={samosa} alt="samosa" />
					</figure>
					<figure className="bg-black overflow-hidden">
						<img className="w-full h-full opacity-50 scale-125 transition-all ease-linear duration-300 hover:opacity-100 hover:scale-105"  src={seekh_kebab} alt="seekh kebab" />
					</figure>
				</div>
			</section>
			<section className="mx-auto">
				<h2 className="relative uppercase mt-10 font-light text-4xl text-center after:absolute after:content-[''] after:w-20 after:h-1 after:bg-primary after:mx-auto after:left-0 after:right-0 after:top-16">
							How it works &mdash; Simple as 1, 2, 3.
				</h2>
				<div className="mt-14 grid md:grid-cols-2 mr-5">
					<img src={menu} alt="menu" />
					<div className="ml-8">
						<div className="mt-8 flex">
							<div className="text-primary border-2 px-4 py-1 text-4xl border-primary rounded-full inline-block max-w-max h-14">1</div>
							<p className="inline font-light ml-3 text-xl">Choose the subscription plan that best fits your needs and sign up today.</p>
						</div>
						<div className="mt-8 flex">
							<div className="text-primary border-2 px-4 py-1 text-4xl border-primary rounded-full inline-block max-w-full h-14">2</div>
							<p className="inline font-light ml-3 text-xl">Order your delicious meal using our mobile app or website. Or you can even call us!</p>
						</div>
						<div className="mt-8 flex">
							<div className="text-primary border-2 px-4 py-1 text-4xl border-primary rounded-full inline-block max-w-full h-14">3</div>
							<p className="inline font-light ml-3 text-xl">Enjoy your meal after less than 20 minutes. See you the next time!</p>
						</div>
						<a href="#" className="transition ease-in-out delay-75 inline-block bg-primary rounded-full text-xl px-4 py-2 text-white font-bold mt-8 ml-4 md:text-2xl mr-4 hover:bg-darkprimary">Subscribe</a>
					</div>
				</div>
			</section>

			<section>
				<h2 className="relative mb-14 uppercase mt-10 font-light text-4xl text-center after:absolute after:content-[''] after:w-20 after:h-1 after:bg-primary after:mx-auto after:left-0 after:right-0 after:top-16">
							We're currently in these cities
				</h2>
				<div className="w-5/6 mx-auto grid md:grid-cols-4">
					{cities}
				</div>
			</section>
			
			<section className="text-lightgray bg-biryani h-5/6 bg-fixed bg-cover bg-center">
				<h2 className="relative pt-10 mb-14 uppercase mt-10 font-light text-4xl text-center after:absolute after:content-[''] after:w-20 after:h-1 after:bg-primary after:mx-auto after:left-0 after:right-0 after:top-28">
						Our customers can't live without us
				</h2>
        <div class="w-5/6 mx-auto grid md:grid-cols-3">
					<div class="text-xl italic mr-6 mb-16">
						<blockquote>
							Rasoi is just awesome! I just launched a startup which leaves me with no time for cooking, so Rasoi is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
								<cite className="mt-6 block"><img className="rounded-full w-16 h-16 object-cover inline-block"  src={aparna} alt="Customer_1" />Aparna Kulkarni</cite>
						</blockquote>
					</div>
					<div class="text-xl italic mr-6 mb-16">
						<blockquote>
							Inexpensive, healthy and great meals, delivered right to my home. We have lots of food delivery here in Delhi, but no one comes even close to Rasoi. Me and my family are so in love!
								<cite className="mt-6 block"><img className="rounded-full w-16 h-16 object-cover inline-block"  src={priya} alt="Customer_2" />Priya Ranjan</cite>
						</blockquote>
					</div>
					<div class="text-xl italic mr-6 mb-16">
						<blockquote>
							I was looking for a quick and easy food delivery service in Mumbai. I tried a lot of them and ended up with Rasoi. Best food delivery service in Hiranandani. Keep up the great work!
								<cite className="mt-6 block"><img className="rounded-full w-16 h-16 object-cover inline-block" src={rashmi} alt="Customer_3" />Rashmi Jhawar</cite>
						</blockquote>
					</div>
				</div>
			</section>

		</Fragment>
  );
}

export default App;

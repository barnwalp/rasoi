import { Fragment } from 'react';
import logo from './assets/rasoi_logo.png';
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


const App = () => {
  return (
		<Fragment>
			<header className="relative bg-hero-pattern h-screen bg-fixed bg-cover bg-center">
				<div className="overlay-mobile-menu"></div>
				<nav className="h-20 flex justify-between items-center">
					<img className="logo ml-4 inline-block w-48" src={ logo } alt="Rasoi logo" />
					<div className="nav-elements inline-block hide-for-mobile">
						<a href="#">Food Delivery</a>
						<a href="#">How it Works</a>
						<a href="#">Our Cities</a>
						<a href="#">Reviews</a>
						<a href="#">Sign Up</a>
					</div>
					<div className="hamburger-menu hide-for-desktop">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
				<div className="menu-for-mobile hidden">
					<a href="#">Food Delivery</a>
					<a href="#">How it Works</a>
					<a href="#">Our Cities</a>
					<a href="#">Reviews</a>
					<a href="#">Sign Up</a>
				</div>
				<div className="hero">
					<h1>Goodbye junk food.<br />Hello super healthy food</h1>
					<a className="btn" href="#">I'm hungary</a>
					<a className="btn btn-ghost" href="#">Show me more</a>
				</div>
			</header>

			<section className="section food_delivery">
				<div className="section-heading">
					<h2>Get food fast &mdash; not fast food.</h2>
					<p className="section-details">
						Hello, we’re Rasoi, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
					</p>
				</div>
				<div className="section-columns">
					<div className="section-columns-items">
						<ion-icon className="big-icon" name="infinite-outline"></ion-icon>
						<h3>Up to 365 days/year</h3>
						<p>
							Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
						</p>
					</div>
					<div className="section-columns-items">
						<ion-icon className="big-icon" name="alarm-outline"></ion-icon>
						<h3>Ready in 20 minutes</h3>
						<p>
							You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
						</p>
					</div>
					<div className="section-columns-items">
						<ion-icon className="big-icon" name="checkmark-circle-outline"></ion-icon>
						<h3>100% organic</h3>
						<p>
							All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
						</p>
					</div>
					<div className="section-columns-items">
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

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
				<div class="overlay-mobile-menu"></div>
				<nav className="h-20 flex justify-between items-center">
					<img className="logo ml-4 inline-block w-48" src={ logo } alt="Rasoi logo" />
					<div class="nav-elements hide-for-mobile">
						<a href="#">Food Delivery</a>
						<a href="#">How it Works</a>
						<a href="#">Our Cities</a>
						<a href="#">Reviews</a>
						<a href="#">Sign Up</a>
					</div>
					<div class="hamburger-menu hide-for-desktop">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
				<div class="menu-for-mobile">
					<a href="#">Food Delivery</a>
					<a href="#">How it Works</a>
					<a href="#">Our Cities</a>
					<a href="#">Reviews</a>
					<a href="#">Sign Up</a>
				</div>
				<div class="hero">
					<h1>Goodbye junk food.<br />Hello super healthy food</h1>
					<a class="btn" href="#">I'm hungary</a>
					<a class="btn btn-ghost" href="#">Show me more</a>
				</div>
			</header>

			<section class="section food_delivery">
				<div class="section-heading">
					<h2>Get food fast &mdash; not fast food.</h2>
					<p class="section-details">
						Hello, we’re Rasoi, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
					</p>
				</div>
				<div class="section-columns">
					<div class="section-columns-items">
						<ion-icon class="big-icon" name="infinite-outline"></ion-icon>
						<h3>Up to 365 days/year</h3>
						<p>
							Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
						</p>
					</div>
					<div class="section-columns-items">
						<ion-icon class="big-icon" name="alarm-outline"></ion-icon>
						<h3>Ready in 20 minutes</h3>
						<p>
							You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
						</p>
					</div>
					<div class="section-columns-items">
						<ion-icon class="big-icon" name="checkmark-circle-outline"></ion-icon>
						<h3>100% organic</h3>
						<p>
							All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
						</p>
					</div>
					<div class="section-columns-items">
						<ion-icon class="big-icon" name="file-tray-outline"></ion-icon>
						<h3>Order anything</h3>
						<p>
							We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
						</p>
					</div>
				</div>
			</section>
			<div class="section-meals">
				<figure class="section-meals-photo">
					<img src={chicken} alt="chicken"/>
				</figure>
				<figure class="section-meals-photo">
					<img src={dosa} alt="dosa"/>
				</figure>
				<figure class="section-meals-photo">
					<img src={fish} alt="fish"/>
				</figure>
				<figure class="section-meals-photo">
					<img src={jalebi} alt="jalebi"/>
				</figure>
				<figure class="section-meals-photo">
					<img src={kebab} alt="paneer kebab"/>
				</figure>
				<figure class="section-meals-photo">
					<img src={paratha} alt="paratha"/>
				</figure>
				<figure class="section-meals-photo">
					<img src={samosa} alt="samosa" />
				</figure>
				<figure class="section-meals-photo">
					<img src={seekh_kebab} alt="seekh kebab" />
				</figure>
			</div>

		</Fragment>
  );
}

export default App;

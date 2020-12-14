import './Slide.css';
import './vendor/demo'
import runshit from './vendor/demo3'
import { useEffect } from 'react'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Slide() {
  

  useEffect(() => {
    runshit()
    
  }, [])

  return (
   <>
  
		<main>
			<div class="content content--fixed">
				<header class="codrops-header">
					<div class="codrops-links">
						<a class="codrops-icon codrops-icon--prev" href="/" title="Previous Demo">
             <HomeIcon/>
              </a>
						
					</div>
					<h1 class="codrops-header__title hlc-title">HLC Holiday Game</h1>
				</header>
				
				
			
			</div>
			<div class="slideshow">
				<div class="slides">
					<div class="slide slide--current">
						<div class="slide__img slide__img1"  style={{backgroundImage: `url(${img1})`}} ></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
					<div class="slide">
						<div class="slide__img slide__img2" style={{backgroundImage: `url(${img2})`}}></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
					<div class="slide">
						<div class="slide__img slide__img3" style={{backgroundImage: `url(${img3})`}}></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
					<div class="slide">
						<div class="slide__img slide__img4" style={{backgroundImage: `url(${img4})`}}></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
          <div class="slide">
						<div class="slide__img slide__img5" style={{backgroundImage: `url(${img5})`}}></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
          <div class="slide">
						<div class="slide__img slide__img6" style={{backgroundImage: `url(${img6})`}}></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
          <div class="slide">
						<div class="slide__img slide__img" style={{backgroundImage: `url(${img7})`}}></div>
						<h2 class="slide__title"></h2>
						<p class="slide__desc"></p>
						<a class="slide__link" href="#"></a>
					</div>
				</div>
				<nav class="slidenav">
					<button class="slidenav__item slidenav__item--prev">
          <ArrowBackIosIcon style={{ color: 'red'}}/>
          </button>
				
					<button class="slidenav__item slidenav__item--next">
            <ArrowForwardIosIcon style={{ color: 'green'}}/>
          </button>
				</nav>
			</div>
		</main>
   </>
      
    
  );
}

export default Slide;

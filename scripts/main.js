// Styling

import '/styles/style.css'
import '/styles/modern-normalize.css'
import '/styles/header/header.css'
import '/styles/gallery/gallery.css'
import '/styles/styles.scss'

import { Carousel } from 'bootstrap'
// import * as bootstrap from 'bootstrap'
import '/styles/mobile-nav/mobile-nav.css'



//JavaScript
import observer from './observer'
import image from './image'
import mobile_nav from './mobile_nav'

observer();
image();
mobile_nav();


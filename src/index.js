import './styles/main.scss';
import './input.js';
import './warning.js';

import bgBoostDesktop from './assets/bg-boost-desktop.svg'
import bgBoostMobile from './assets/bg-boost-mobile.svg'
import bgShortenDesktop from './assets/bg-shorten-desktop.svg'
import bgShortenMobile from './assets/bg-shorten-mobile.svg'

import iconBrandRecognition from './assets/icon-brand-recognition.svg'
import iconDetailedRecords from './assets/icon-detailed-records.svg'
import iconFullyCustomizable from './assets/icon-fully-customizable.svg'
import iconFacebook from './assets/icon-facebook.svg'
import iconInstagram from './assets/icon-instagram.svg'
import iconPinterest from './assets/icon-pinterest.svg'
import iconTwitter from './assets/icon-twitter.svg'
import illustrationImport from './assets/illustration-working.svg'
import logoImport from './assets/logo.svg'
import footerLogoImport from './assets/logo copy.svg'


const iconOne = document.querySelector('.iconOne')
iconOne.src = iconBrandRecognition

const iconTwo = document.querySelector('.iconTwo')
iconTwo.src = iconDetailedRecords

const iconThree = document.querySelector('.iconThree')
iconThree.src = iconFullyCustomizable

const facebook = document.querySelector('.facebook')
facebook.src = iconFacebook

const instagram = document.querySelector('.instagram');
instagram.src = iconInstagram

const pinterest = document.querySelector('.pinterest');
pinterest.src = iconPinterest

const twitter = document.querySelector('.twitter')
twitter.src = iconTwitter

const illustration = document.querySelector('.illustration')
illustration.src = illustrationImport

const logo = document.getElementById('logo');
logo.src = logoImport

const footerLogo = document.querySelector('.footerLogo');
footerLogo.src = footerLogoImport


import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing
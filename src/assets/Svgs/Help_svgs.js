import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svg, { Path, Circle, Rect, Defs, Filter, FeBlend, FeComposite, FeGaussianBlur, FeFlood, G, ClipPath, SvgUri } from 'react-native-svg';
var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

const GetHelp_icon = () => {
    const xml = `
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2.61798H21V18.8649H1V2.61798H6" stroke="url(#paint0_linear_125_2545)" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.37695 1H15.6227V4.06569H6.37695V1Z" stroke="#E33895" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9648 8.3479H18.269" stroke="#BD3D97" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9648 10.4951H18.269" stroke="#AE4099" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9648 12.6423H18.269" stroke="#A1419A" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9648 14.7895H16.3103" stroke="#91449B" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.60736 13.5061V14.7895H3.73145V13.5C3.73145 12.6119 4.45529 11.888 5.34337 11.888H5.3677C5.65967 11.888 5.81174 11.5535 5.63534 11.3284C5.33728 10.9391 5.23388 10.4647 5.23388 9.92941C5.23388 8.99875 5.87256 8.3479 6.6694 8.3479C7.46016 8.3479 8.10492 8.99875 8.10492 9.92941C8.10492 10.4586 8.01368 10.9391 7.72171 11.3284C7.54531 11.5596 7.70346 11.888 7.98935 11.888C8.87743 11.888 9.60736 12.618 9.60736 13.5061Z" stroke="url(#paint1_linear_125_2545)" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_125_2545" x1="11" y1="2.61798" x2="11" y2="18.8649" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_125_2545" x1="6.6694" y1="8.3479" x2="6.6694" y2="14.7895" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>      
    `
    return (
        <SvgXml xml={xml} />

    )
}
const Support_request_icon = () => {
    const xml = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11C21 13.9 19.76 16.52 17.79 18.34C16.01 19.99 13.62 21 11 21C8.38 21 5.99 19.99 4.21 18.34C2.24 16.52 1 13.9 1 11C1 5.48 5.48 1 11 1C16.52 1 21 5.48 21 11Z" stroke="url(#paint0_linear_77_2139)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M17.79 18.34C16.01 19.99 13.62 21 11 21C8.37996 21 5.98996 19.99 4.20996 18.34C4.51996 14.86 7.43996 12.14 11 12.14C14.56 12.14 17.48 14.87 17.79 18.34Z" stroke="url(#paint1_linear_77_2139)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M11.0005 12.14C13.0826 12.14 14.7705 10.4521 14.7705 8.37001C14.7705 6.28789 13.0826 4.60001 11.0005 4.60001C8.91836 4.60001 7.23047 6.28789 7.23047 8.37001C7.23047 10.4521 8.91836 12.14 11.0005 12.14Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_77_2139" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_2139" x1="11" y1="12.14" x2="11" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>       
    `
    return (
        <SvgXml xml={xml} />

    )
}
const MyAccount_icon = () => {
    const xml = `
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.561 17.7561C15.3902 19.7683 12.4756 21 9.28048 21C6.08536 21 3.17073 19.7683 1 17.7561C1.37805 13.5122 4.93902 10.1951 9.28048 10.1951C13.6219 10.1951 17.1829 13.5244 17.561 17.7561Z" stroke="url(#paint0_linear_124_2399)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M9.28115 10.1951C11.8203 10.1951 13.8787 8.13672 13.8787 5.59756C13.8787 3.0584 11.8203 1 9.28115 1C6.74199 1 4.68359 3.0584 4.68359 5.59756C4.68359 8.13672 6.74199 10.1951 9.28115 10.1951Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_124_2399" x1="9.28048" y1="10.1951" x2="9.28048" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>    
    `
    return (
        <SvgXml xml={xml} />

    )
}
const Security_icon = () => {
    const xml = `
   <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_125_2487)">
    <path d="M9.99511 22.2829C7.67587 22.2829 5.47487 20.4638 1.97328 16.8713C1.0274 15.8799 0.454408 14.1519 0.445312 13.0514V4.62028C0.445312 3.3106 1.3912 2.0282 2.65541 1.62801C7.38483 0.063666 12.5963 0.054571 17.3439 1.62801C18.5717 2.0191 19.5358 3.32879 19.5358 4.61119V13.0332C19.5267 14.1428 18.9628 15.8709 18.0169 16.8531C14.5244 20.4548 12.3234 22.2829 9.99511 22.2829Z" stroke="url(#paint0_linear_125_2487)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M14.4979 7.27603L9.67755 13.1514C9.43199 13.4425 9.07728 13.6244 8.69529 13.6335C8.6771 13.6335 8.668 13.6335 8.64981 13.6335C8.28601 13.6335 7.9404 13.4879 7.68574 13.2242L5.50293 10.9322" stroke="url(#paint1_linear_125_2487)" stroke-miterlimit="10" stroke-linejoin="round"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_125_2487" x1="9.99056" y1="0.45134" x2="9.99056" y2="22.2829" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_125_2487" x1="10.0004" y1="7.27603" x2="10.0004" y2="13.6335" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <clipPath id="clip0_125_2487">
    <rect width="20" height="22.7376" fill="white"/>
    </clipPath>
    </defs>
    </svg> 
    `
    return (
        <SvgXml xml={xml} />

    )
}
const Payment_icon = () => {
    const xml = `
   <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13.7386C1 15.7386 2.625 17.3636 4.625 17.3636C6.625 17.3636 8.25 15.7386 8.25 13.7386C8.25 11.7386 6.625 10.1136 4.625 10.1136C2.625 10.1136 1 8.48865 1 6.48865C1 4.48865 2.625 2.86365 4.625 2.86365C6.625 2.86365 8.25 4.48865 8.25 6.48865" stroke="url(#paint0_linear_125_2498)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M4.625 2.86364V0" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M4.625 17.3636V20" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_125_2498" x1="4.625" y1="2.86365" x2="4.625" y2="17.3636" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} />

    )
}
const FAQS_icon = () => {
    const xml = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.04785 4.04779V1H20.1609V12.9231H17.3754" stroke="url(#paint0_linear_125_2504)" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 4.07111H17.1131V15.9884H9.10023L4.08275 20.1842V15.9884H1V4.07111Z" stroke="url(#paint1_linear_125_2504)" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_125_2504" x1="12.1044" y1="1" x2="12.1044" y2="12.9231" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_125_2504" x1="9.05653" y1="4.07111" x2="9.05653" y2="20.1842" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg> 
    `
    return (
        <SvgXml xml={xml} />

    )
}


const Dummy5 = () => {
    const xml = `
    
    `
    return (
        <SvgXml xml={xml} />

    )
}
export {
    GetHelp_icon,
    Support_request_icon,
    MyAccount_icon,
    Security_icon,
    Payment_icon,
    FAQS_icon,

};
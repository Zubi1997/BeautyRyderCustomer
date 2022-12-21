import React, {Component} from 'react';
import { Image,Dimensions} from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svg, {Path,Circle, Rect,Defs,Filter,FeBlend,FeComposite,FeGaussianBlur,FeFlood,G,ClipPath,SvgUri} from 'react-native-svg';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

  const Google_icon = ()=>{
    const xml = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="20" height="20" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_13_233" transform="scale(0.03125)"/>
    </pattern>
    <image id="image0_13_233" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARBSURBVFiFzZdbbBRVHMZ/58zutiClN6ClIELblHu8QBMUFCOV0lRMfJAmigZ9IRrRBzAmJpBSJEQNxheNvPCAYmKICZfSQCGFSNMHAQ2JbUoL1EIvUFtYoLS0u3P+PrAts8vMblsg+iWT7Dn/73zfN3P2nDkD/zHUaMiyaJGf7NtLUBQikg8qva0/XKgVNzW0Wxb7J6de+kntY/CRBpDSglyQTaDWAJnOWnNvCHG0LTDJlmrw+9T6rOqLdQ8VQN6cP4G+0A5gPeB348QGcAqPt9RfPp9akV19scvLQ3ual85dQF/oHPCRl3k8CHDHlgV9IbnStSKvbFQBpGT2UrBPAbmjNY5FyEig18ieEQeQ1QVz0HIQSHtY8yGMs9QBr1rUf0BK8pPQ+g9gXhy9OkT2YEkt/aYtGJA027aeCYfMmrtQOmBLqpOc4tf7c45ffMNLzBfVyhvYQMs4L/MeUO+rw+cPxvTfBFqBAwDXivI29YZlR1jEl8gcHE9AzjOJMC00TLjA3uzxhHSBg1ePrV9TRxr/jic2nKh4esbdUPLirJoL1Ym49wPUsxXYAoDBpibzN45lLkAYh6ZQHWpqHIn5mCH1NEs9EnWd0UHZmuW5hB4FVMQ8H2h2qXfQz0y1mNDjCuCLxFjsup0JuxOZp5W3pAVM4HOUSo3Hc0KJGgjb4S97tj/Z7osYzfLg1iYSC5D0CvCp6w14QBB82uoCvtCRHvdNx6IjoZhR1sitHdAqC4Z2QkXYlWQYm/gIICKWM0DQg/fU4wqguOc5NAXnPXhFiYRE5BKMfpUYkQv3AyhOe/DelUZS4gl1b8s569OkDQyGMmIvpXUW0OY2TlnmzD3roTup53eg0Em6i25a1/nsrl+Kzn4z0jtzYsqWzg9AvncptXZVTJ0FSpyv4x+Hw0DPd8GZJ2a0FOUe65/0VWZlccKpiEX25s75IF+71RT8DEoivyOmLSTLHZpOD6a2vXP1ubnddsC5NLuVSFnP69U1IzGfsrntaZQ+CmS5lPtF+3L/KZ9yNSoAwMLDy99rN8m7PXRthAp/kuy8Vlx9x40wY++y9Nu9yzb62z/eCCR76GzrqsjZMtSIPpQKKqNy1RGQlR6DAXoQ9atoTolRV9TtgYViyxwlstwMmnmAClz7NqgGs9Ndxv45Wd9YUl8+f/jY/sCpeOKR4gxfiDpgdpwQwzCd/UjMNqwDae3+lh+mRfeqDsuWFzq357RGcWMFb606el2wVwJjfv+bUHCaSam97Ohq1ZpXY81dAwDcWH38ctjPUpCqMSUQCGfuSgcQ4aQJ+5+/Wj61wY0a/8tIUBmVxeuACmC6G8VtCgDQGKuv7LPrn3y4c2jJjT5ABDNPvJx8qzdprULWCupFHE/ugQB+dQu/VfWEZTZ0vHWyO5H2qD5OATKqSiZqYxYZIV8gXYKDL4G6oTXnDOwLvl3zwDz/r/EvM/OuWFzHrR4AAAAASUVORK5CYII="/>
    </defs>
    </svg>    
    `
      return(
      <SvgXml xml={xml}  />
  
    )}
const Facebook_icon = ()=>{
    const xml = `
    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.34452 10.6103L9.86411 7.19464H6.6187V4.98215C6.6187 4.04547 7.07434 3.1411 8.52118 3.1411H9.99201V0.234169C9.99201 0.234169 8.65707 0 7.3781 0C4.71623 0 2.96563 1.63111 2.96563 4.59456V7.19464H0V10.6103H2.96563V18.8627C3.55715 18.9596 4.17266 19.0081 4.78817 19.0081C5.41167 19.0081 6.01919 18.9596 6.61071 18.8627V10.6103H9.34452Z" fill="#3B5998"/>
    </svg>   
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Apple_icon = ()=>{
    const xml = `
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="19" height="19" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_13_297" transform="scale(0.03125)"/>
    </pattern>
    <image id="image0_13_297" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATcwAAE3MBK5fYhAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH1SURBVFiFtdc7aBZBEAfw3ybGV4jis7BR0oiNIoLWwcrCTgnaibVgYykGe8HKykIsAoKISrCIjZ2VRdDCF4KFDwKGEBRiEM/iLnrfsV72+7I3MHC3ezP//87szs4pikIuxV5cxnOcTrHZIJOEECZwD3uqoQ9JhplWfga/UFT6G1uSbDOA78J8DbzAdLJ9BgI3G+BL2JdqP5Qh/cdrzz9wriiKz8nWGSLwTZnzlzjWt30iSMAO7EeojQ9jAttqYzsxjqPYvi4ClfNHenf4PO5ichUAh3GtikJ9PyzjAc5iJJkANuJ2w1lMV/Al4bsCM9i0JoEq3E8Snfars00SsVNwCafiW3bd8l4ZtX/SWP0oFhNWMojeUtvA0RTgYkfg92PgMQIzHRE4kXQMqxzlBv+aVIpDCMM4IL8stE3WT8GIsrLllp9tk6EKvRBCwHdszUxgWVkxV2KTfyNQlEzeZgaHzXpvzDiBSt50QACmUgm86ojAyRDC1SrNvdI4hkd0UwdW9aHGFR27jN51TGJurctouq/g9i+zPW+RCIzhk25Wv4TdKQ3JZEcErie3ZHiaGXxBpEdsI3BQWUZzEbgySFM6lQn8MYYGIRCUncz/HC/iGT62fDOHsaR+oIXEebyoUjKr7BsP6f1HGMcF3FH+Gb/GDYy2+f8DfZwNQWnG6OgAAAAASUVORK5CYII="/>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Map_tab_icon = ()=>{
    const xml = `
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0003 4.82471L11.4196 15.0939C11.0965 15.8093 11.0965 16.617 11.4196 17.3324L16.0003 27.6132L20.5811 17.3324C20.8926 16.617 20.8926 15.8093 20.5811 15.0939L16.0003 4.82471ZM16.0003 17.9324C15.0426 17.9324 14.2696 17.1593 14.2696 16.2016C14.2696 15.2555 15.0426 14.4709 16.0003 14.4709C16.958 14.4709 17.7311 15.2555 17.7311 16.2016C17.7311 17.1709 16.958 17.9324 16.0003 17.9324Z" stroke="url(#paint0_linear_49_413)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M16 31.2131C24.2843 31.2131 31 24.4974 31 16.2131C31 7.92886 24.2843 1.21313 16 1.21313C7.71573 1.21313 1 7.92886 1 16.2131C1 24.4974 7.71573 31.2131 16 31.2131Z" stroke="url(#paint1_linear_49_413)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_49_413" x1="15.996" y1="4.82471" x2="15.996" y2="27.6132" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_49_413" x1="16" y1="1.21313" x2="16" y2="31.2131" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>   
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Map_tab_grey_icon = ()=>{
    const xml = `
    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.053 13.1606L19.5525 17.1829C18.8182 17.4603 18.247 18.0314 17.9696 18.7657L13.9391 29.2744L24.4478 25.2439C25.174 24.9584 25.7451 24.3872 26.0307 23.6611L30.053 13.1606ZM20.7845 22.4291C20.1073 21.7519 20.1073 20.6586 20.7845 19.9814C21.4535 19.3124 22.555 19.3042 23.2321 19.9814C23.9093 20.6586 23.9012 21.7601 23.2321 22.4291C22.5468 23.1144 21.4617 23.1063 20.7845 22.4291Z" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M11.3934 31.8198C17.2513 37.6777 26.7487 37.6777 32.6066 31.8198C38.4645 25.9619 38.4645 16.4645 32.6066 10.6066C26.7487 4.74874 17.2513 4.74874 11.3934 10.6066C5.53553 16.4645 5.53553 25.9619 11.3934 31.8198Z" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Graph_tab_icon = ()=>{
    const xml = `
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.94629 24.6401V31.0001" stroke="url(#paint0_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M30.6797 3.10474V30.9848" stroke="url(#paint1_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M19.8047 14.8484V30.9846" stroke="url(#paint2_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M1 31V22.3981L12.6675 16.3737L23.0081 1" stroke="url(#paint3_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M15.1992 1.4881L23.0081 1.09155L24.9603 8.25983" stroke="url(#paint4_linear_52_608)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_52_608" x1="9.44629" y1="24.6401" x2="9.44629" y2="31.0001" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_52_608" x1="31.1797" y1="3.10474" x2="31.1797" y2="30.9848" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint2_linear_52_608" x1="20.3047" y1="14.8484" x2="20.3047" y2="30.9846" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint3_linear_52_608" x1="12.0041" y1="1" x2="12.0041" y2="31" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint4_linear_52_608" x1="20.0797" y1="1.09155" x2="20.0797" y2="8.25983" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Graph_tab_grey_icon = ()=>{
    const xml = `
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.94629 24.6401V31.0001" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M30.6797 3.10474V30.9848" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M19.8047 14.8484V30.9846" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M1 31V22.3981L12.6675 16.3737L23.0081 1" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M15.1992 1.4881L23.0081 1.09155L24.9603 8.25983" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}


const Setting_tab_icon = ()=>{
    const xml = `
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.2252 17.9632L27.0436 17.8654C26.3729 17.4881 25.9677 16.7755 25.9677 16.021V15.993C25.9677 15.2245 26.3729 14.5119 27.0436 14.1486L27.2252 14.0508C28.8461 13.1425 29.419 11.1025 28.5108 9.4816L27.6025 7.86074C26.6943 6.23987 24.6542 5.66698 23.0334 6.57522L22.8657 6.67303C22.195 7.0503 21.3845 7.03633 20.7278 6.64509C20.5881 6.56125 20.4483 6.47741 20.3086 6.40755C19.6519 6.04425 19.2327 5.3456 19.2327 4.59106V4.35352C19.2327 2.49511 17.7236 1 15.8792 1H14.0208C12.1624 1 10.6673 2.49511 10.6673 4.35352V4.57708C10.6673 5.33163 10.2481 6.03028 9.59134 6.39357C9.45161 6.47741 9.31188 6.54728 9.17215 6.63111C8.54336 7.03633 7.73293 7.03633 7.06223 6.67303L6.89455 6.57522C5.28766 5.66698 3.23363 6.23987 2.33936 7.86074L1.43112 9.4816C0.522871 11.1025 1.09576 13.1425 2.71663 14.0508L2.89828 14.1486C3.56898 14.5259 3.9742 15.2385 3.9742 15.993V16.021C3.9742 16.7895 3.56898 17.5021 2.89828 17.8654L2.71663 17.9632C1.09576 18.8714 0.522871 20.9115 1.43112 22.5324L2.33936 24.1532C3.2476 25.7741 5.28766 26.347 6.90853 25.4388L7.0762 25.3409C7.7469 24.9637 8.55734 24.9776 9.21407 25.3689C9.3538 25.4527 9.49353 25.5366 9.63326 25.6064C10.29 25.9697 10.7092 26.6684 10.7092 27.4229V27.6465C10.7092 29.5049 12.2043 31 14.0627 31H15.9211C17.7795 31 19.2746 29.5049 19.2746 27.6465V27.4229C19.2746 26.6684 19.6938 25.9697 20.3505 25.6064C20.4903 25.5226 20.63 25.4527 20.7697 25.3689C21.4125 24.9637 22.2369 24.9637 22.9076 25.3409L23.0753 25.4388C24.6961 26.347 26.7362 25.7741 27.6444 24.1532L28.5527 22.5324C29.419 20.9255 28.8461 18.8714 27.2252 17.9632ZM14.9709 20.2687C12.6235 20.2687 10.7092 18.3684 10.7092 16.007C10.7092 13.6595 12.6095 11.7452 14.9709 11.7452C17.3324 11.7452 19.2327 13.6456 19.2327 16.007C19.2327 18.3544 17.3184 20.2687 14.9709 20.2687Z" stroke="url(#paint0_linear_78_1596)" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_78_1596" x1="14.9776" y1="1" x2="14.9776" y2="31" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}

    const LeftIcon = ()=>{
        const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
        <path d="M8.72114 16.6021L1 8.67318L8.72114 1" stroke="#79489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.1652 13.469L8.49738 8.67323L13.1812 4.02136" stroke="#79489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.49738 8.67322H23.0444" stroke="#79489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
            return(
            <SvgXml xml={xml}  />
        
        )}
    
    const Setting_tab_grey_icon = ()=>{
    const xml = `
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.2252 17.9632L27.0436 17.8654C26.3729 17.4881 25.9677 16.7755 25.9677 16.021V15.993C25.9677 15.2245 26.3729 14.5119 27.0436 14.1486L27.2252 14.0508C28.8461 13.1425 29.419 11.1025 28.5108 9.4816L27.6025 7.86074C26.6943 6.23987 24.6542 5.66698 23.0334 6.57522L22.8657 6.67303C22.195 7.0503 21.3845 7.03633 20.7278 6.64509C20.5881 6.56125 20.4483 6.47741 20.3086 6.40755C19.6519 6.04425 19.2327 5.3456 19.2327 4.59106V4.35352C19.2327 2.49511 17.7236 1 15.8792 1H14.0208C12.1624 1 10.6673 2.49511 10.6673 4.35352V4.57708C10.6673 5.33163 10.2481 6.03028 9.59134 6.39357C9.45161 6.47741 9.31188 6.54728 9.17215 6.63111C8.54336 7.03633 7.73293 7.03633 7.06223 6.67303L6.89455 6.57522C5.28766 5.66698 3.23363 6.23987 2.33936 7.86074L1.43112 9.4816C0.522871 11.1025 1.09576 13.1425 2.71663 14.0508L2.89828 14.1486C3.56898 14.5259 3.9742 15.2385 3.9742 15.993V16.021C3.9742 16.7895 3.56898 17.5021 2.89828 17.8654L2.71663 17.9632C1.09576 18.8714 0.522871 20.9115 1.43112 22.5324L2.33936 24.1532C3.2476 25.7741 5.28766 26.347 6.90853 25.4388L7.0762 25.3409C7.7469 24.9637 8.55734 24.9776 9.21407 25.3689C9.3538 25.4527 9.49353 25.5366 9.63326 25.6064C10.29 25.9697 10.7092 26.6684 10.7092 27.4229V27.6465C10.7092 29.5049 12.2043 31 14.0627 31H15.9211C17.7795 31 19.2746 29.5049 19.2746 27.6465V27.4229C19.2746 26.6684 19.6938 25.9697 20.3505 25.6064C20.4903 25.5226 20.63 25.4527 20.7697 25.3689C21.4125 24.9637 22.2369 24.9637 22.9076 25.3409L23.0753 25.4388C24.6961 26.347 26.7362 25.7741 27.6444 24.1532L28.5527 22.5324C29.419 20.9255 28.8461 18.8714 27.2252 17.9632ZM14.9709 20.2687C12.6235 20.2687 10.7092 18.3684 10.7092 16.007C10.7092 13.6595 12.6095 11.7452 14.9709 11.7452C17.3324 11.7452 19.2327 13.6456 19.2327 16.007C19.2327 18.3544 17.3184 20.2687 14.9709 20.2687Z" stroke="#B6B6B6" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}

  
const Logout_icon = ()=>{
    const xml = `
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_77_827)">
    <path d="M11.71 3C13.4 4.28 14.5 6.31 14.5 8.59C14.5 10.62 13.63 12.45 12.25 13.73C11 14.89 9.33 15.59 7.5 15.59C5.67 15.59 4 14.88 2.75 13.73C1.37 12.45 0.5 10.63 0.5 8.59C0.5 6.31 1.59 4.28 3.29 3" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M7.5 0V8.88" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_77_827">
    <rect width="15" height="16.09" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
        return(
        <SvgXml xml={xml}  />
    
    )}

    const RightIcon = ()=>{
        const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
        <path d="M15.5222 0.999982L23.2433 8.92893L15.5222 16.6021" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.0781 4.13315L15.746 8.92888L11.0621 13.5807" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.746 8.92889L1.1989 8.9289" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
        )}

    const HeartIcon = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
            <path d="M14.7143 4.61867C14.7143 7.72038 10.7143 11.856 7.85714 11.856C5 11.856 1 7.72038 1 4.61867C1 2.61806 2.78857 1 5 1C6.12 1 7.13714 1.41873 7.85714 2.09077C8.57714 1.41873 9.59429 1 10.7143 1C12.9257 1 14.7143 2.61806 14.7143 4.61867Z" stroke="#9D9B9B" stroke-miterlimit="10"/>
            <path d="M9.57141 3.58478C10.8343 3.58478 11.8571 4.51012 11.8571 5.65259" stroke="#9D9B9B" stroke-miterlimit="10"/>
            </svg>`
            return(
            <SvgXml xml={xml}  />
        
    )}

    const RoboIcon = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_62_362)"/>
        <path d="M18.9368 19.9555H10.4888C9.95109 19.9555 9.5682 19.4801 9.73113 19.0158L10.5295 16.7606C10.7087 16.2557 10.8024 15.7288 10.8024 15.1981V14.0447C10.8024 12.1396 12.5376 10.7356 14.7128 10.7356C16.9939 10.7356 18.6232 12.1396 18.6232 14.0447V15.1981C18.6232 15.7288 18.7169 16.2557 18.8961 16.7606L19.6945 19.0158C19.8574 19.4801 19.4745 19.9555 18.9368 19.9555Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.7128 10.7356V9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.3952 19.9555C16.3952 20.8989 15.5479 21.6653 14.5051 21.6653C13.4624 21.6653 12.6151 20.8989 12.6151 19.9555" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.60896 16.1047C8.70061 16.0015 8 15.3014 8 14.4575C8 13.6099 8.70061 12.9098 9.60896 12.8103" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.8126 16.1047C20.721 16.0015 21.4216 15.3014 21.4216 14.4575C21.4216 13.6099 20.721 12.9098 19.8126 12.8103" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_62_362" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E33895"/>
        <stop offset="1" stop-color="#79489D"/>
        </linearGradient>
        </defs>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
    )}

    const Stripe = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
        <g clip-path="url(#clip0_62_385)">
        <path d="M5.76473 19.4118C4.03532 19.4118 2.48237 18.8941 1.01179 17.8353C0.741198 17.6471 0.588257 17.3294 0.588257 17V4.70589C0.588257 4.31765 0.800022 3.96471 1.15296 3.78824C1.49414 3.62354 1.9059 3.64707 2.21179 3.87059C3.32943 4.67059 4.49414 5.05883 5.76473 5.05883C7.89414 5.05883 10.0824 4.02354 12.4 2.91765C14.8236 1.76471 17.3294 0.576477 19.9177 0.576477C21.6471 0.576477 23.2 1.09412 24.6706 2.15295C24.9412 2.35295 25.1059 2.67059 25.1059 3.00001V15.2941C25.1059 15.6824 24.8941 16.0353 24.5412 16.2118C24.2 16.3882 23.7883 16.3529 23.4706 16.1294C22.3647 15.3294 21.2 14.9412 19.9177 14.9412C17.7883 14.9412 15.6 15.9765 13.2824 17.0824C10.8706 18.2235 8.36473 19.4118 5.76473 19.4118Z" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.81184 8.2706C7.31772 8.83531 6.0236 9.10589 4.8236 9.10589C4.29419 9.10589 3.78831 9.05883 3.29419 8.95295" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.48242 15.2353C4.91772 15.5412 6.50595 15.3412 8.48242 14.6" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2 4.76471C20.7647 4.45882 19.1765 4.65882 17.2 5.4C17.1412 5.42353 17.0941 5.43529 17.0353 5.43529" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2 11.9765C20.7647 11.6706 19.1764 11.8824 17.2 12.6118" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.7295 11.3883C11.7295 12.2824 12.4589 13.0118 13.353 13.0118C14.2471 13.0118 14.9766 12.2824 14.9766 11.3883C14.9766 10.4941 14.2589 9.76473 13.3648 9.76473C12.4707 9.76473 11.7295 9.03532 11.7295 8.1412C11.7295 7.24708 12.4589 6.51767 13.353 6.51767C14.2471 6.51767 14.9766 7.24708 14.9766 8.1412" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3647 6.5059V5.03531" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3647 14.4941V13.0118" stroke="#79489D" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_62_385">
        <rect width="25.6941" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
    )}

    const RightBlack = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
        <path d="M13.8524 1L20.7807 8.11475L13.8524 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.85041 3.81152L14.0533 8.1148M14.0533 8.1148L9.85041 12.289M14.0533 8.1148H1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
    )}

    
    const LeftBlack = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
        <path d="M7.92828 15L1 7.88525L7.92828 1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9159 12.1885L7.72742 7.88524L11.9303 3.71106" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.72742 7.88525H25.084" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
    )}

    const Option = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
        <path d="M6.96836 8.59761C9.06638 8.59761 10.7672 6.89683 10.7672 4.79881C10.7672 2.70078 9.06638 1 6.96836 1C4.87034 1 3.16956 2.70078 3.16956 4.79881C3.16956 6.89683 4.87034 8.59761 6.96836 8.59761Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 4.79883H3.16954" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.7672 4.79883H29.8288" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.7218 25C15.8198 25 17.5206 23.2992 17.5206 21.2012C17.5206 19.1032 15.8198 17.4024 13.7218 17.4024C11.6238 17.4024 9.92297 19.1032 9.92297 21.2012C9.92297 23.2992 11.6238 25 13.7218 25Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 21.2012H9.92297" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5206 21.2012H29.8288" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.852 16.5582C25.95 16.5582 27.6508 14.8575 27.6508 12.7594C27.6508 10.6614 25.95 8.96063 23.852 8.96063C21.754 8.96063 20.0532 10.6614 20.0532 12.7594C20.0532 14.8575 21.754 16.5582 23.852 16.5582Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.8287 12.7595H27.6508" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.0531 12.7595H1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
    )}


    const Location = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
        <path d="M5.1632 1C2.8665 1 1 2.97749 1 5.41075C1 7.26327 3.42159 10.1376 4.57341 11.402C4.89953 11.7549 5.43381 11.7549 5.75992 11.402C6.91174 10.145 9.33333 7.27062 9.33333 5.41075C9.3264 2.97749 7.46683 1 5.1632 1ZM5.1632 6.881C4.39994 6.881 3.77547 6.21939 3.77547 5.41075C3.77547 4.60211 4.39994 3.9405 5.1632 3.9405C5.93339 3.9405 6.55093 4.60211 6.55093 5.41075C6.55093 6.21939 5.93339 6.881 5.1632 6.881Z" stroke="#B0B0B0"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}


    const HeartColor = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M12.4286 4.55556C12.4286 7.60317 9.09524 11.6667 6.71429 11.6667C4.33333 11.6667 1 7.60317 1 4.55556C1 2.58984 2.49048 1 4.33333 1C5.26667 1 6.11429 1.41143 6.71429 2.07175C7.31429 1.41143 8.1619 1 9.09524 1C10.9381 1 12.4286 2.58984 12.4286 4.55556Z" stroke="#E33895" stroke-miterlimit="10"/>
        <path d="M8.14282 3.53967C9.1952 3.53967 10.0476 4.44888 10.0476 5.57142" stroke="#E33895" stroke-miterlimit="10"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const Upload = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M10.5368 6.52225V9.97366C10.5368 10.5113 10.1281 10.9473 9.62398 10.9473H1.91281C1.40872 10.9473 1 10.5113 1 9.97366V6.52225" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M2.68933 4.29155L5.76835 1.00726L8.84737 4.29155" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M5.76843 1V8.56403" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const LinearCross = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_68_3454)"/>
        <g clip-path="url(#clip0_68_3454)">
        <path d="M32.0711 31.6274L17.929 17.4853" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.071 17.4853L17.9289 31.6274" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_68_3454" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E33895"/>
        <stop offset="1" stop-color="#79489D"/>
        </linearGradient>
        <clipPath id="clip0_68_3454">
        <rect width="22" height="22" fill="white" transform="translate(25 9) rotate(45)"/>
        </clipPath>
        </defs>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const RadioActive = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="#E33895"/>
        <rect x="3.7002" y="3.69995" width="8.6" height="8.6" rx="4.3" fill="#E33895" stroke="#E33895"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const RadioInactive = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="#E2E9EE"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const GreyStar = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <path d="M9.19741 11.6667C9.11147 11.6667 9.02553 11.6405 8.95186 11.5815L6.22013 9.46L3.48839 11.5815C3.34106 11.6929 3.14462 11.6929 3.00343 11.5815C2.8561 11.4702 2.80085 11.2672 2.84996 11.0904L3.89355 7.6593L1.16181 5.53775C1.01448 5.42644 0.959231 5.22345 1.00834 5.04665C1.06359 4.86331 1.2232 4.7389 1.40122 4.7389H4.78366L5.82725 1.30776C5.8825 1.12441 6.0421 1 6.22013 1C6.39815 1 6.55776 1.12441 6.61301 1.30776L7.65659 4.7389H11.039C11.2171 4.7389 11.3767 4.86331 11.4319 5.04665C11.4872 5.23 11.4258 5.42644 11.2846 5.53775L8.55285 7.6593L9.59643 11.0904C9.65168 11.2738 9.59029 11.4702 9.44296 11.5815C9.3693 11.6339 9.28336 11.6667 9.19741 11.6667Z" fill="white" stroke="#E2E9EE"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const Call = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2.85558 1.54889L3.40937 1L6.84976 4.44039C7.19772 4.78835 7.19772 5.34704 6.84976 5.695L5.58534 6.95942C5.23738 7.30737 5.23738 7.86607 5.58534 8.21403L9.79026 12.4189C10.1382 12.7669 10.6969 12.7669 11.0449 12.4189L12.3093 11.1545C12.6572 10.8066 13.2159 10.8066 13.5639 11.1545L16.8475 14.4381L16.0388 15.2467C13.7011 17.5844 9.91278 17.5844 7.57998 15.2467L2.86048 10.5272C0.380658 8.0474 0.380657 4.02872 2.85558 1.54889Z" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const Fav = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
        <path d="M18.1429 6.33333C18.1429 10.9048 13.1429 17 9.57143 17C6 17 1 10.9048 1 6.33333C1 3.38476 3.23571 1 6 1C7.4 1 8.67143 1.61714 9.57143 2.60762C10.4714 1.61714 11.7429 1 13.1429 1C15.9071 1 18.1429 3.38476 18.1429 6.33333Z" stroke="#333333" stroke-miterlimit="10"/>
        <path d="M11.7144 4.80954C13.2929 4.80954 14.5715 6.17335 14.5715 7.85716" stroke="#333333" stroke-miterlimit="10"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const UploadBlack = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
        <path d="M16.3397 9.88239V15.4339C16.3397 16.2987 15.6822 17 14.8714 17H2.46822C1.65741 17 1 16.2987 1 15.4339V9.88239" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M3.71753 6.29438L8.67005 1.01169L13.6226 6.29438" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M8.66968 1V13.1665" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const LocationBlack = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
        <path d="M7.2448 1C3.79975 1 1 3.96623 1 7.61613C1 10.3949 4.63239 14.7064 6.36012 16.603C6.84929 17.1323 7.65071 17.1323 8.13988 16.603C9.86761 14.7174 13.5 10.4059 13.5 7.61613C13.4896 3.96623 10.7003 1 7.2448 1ZM7.2448 9.8215C6.09992 9.8215 5.1632 8.82908 5.1632 7.61613C5.1632 6.40317 6.09992 5.41075 7.2448 5.41075C8.40008 5.41075 9.3264 6.40317 9.3264 7.61613C9.3264 8.82908 8.40008 9.8215 7.2448 9.8215Z" stroke="#333333"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const Down = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
        <path d="M11 1L6 6.01L1 1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const Up = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
        <path d="M1 6.01001L6 1.00001L11 6.01001" stroke="#E33895" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

    const Info = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0C1.78857 0 0 1.78857 0 4C0 6.21143 1.78857 8 4 8C6.21143 8 8 6.21143 8 4C8 1.78857 6.21143 0 4 0ZM4.57143 6.25714C4.57143 6.57143 4.31429 6.82857 4 6.82857C3.68571 6.82857 3.42857 6.57143 3.42857 6.25714V3.95429C3.42857 3.64 3.68571 3.38286 4 3.38286C4.31429 3.38286 4.57143 3.64 4.57143 3.95429V6.25714ZM4 2.88571C3.52571 2.88571 3.14286 2.49714 3.14286 2.02857C3.14286 1.55429 3.52571 1.17143 4 1.17143C4.47429 1.17143 4.85714 1.55429 4.85714 2.02857C4.85714 2.49714 4.47429 2.88571 4 2.88571Z" fill="#B0B0B0"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
    )}

const ViewList = ()=>{
    const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="30" viewBox="0 0 90 30" fill="none">
        <path d="M0 15C0 6.71573 6.71573 0 15 0H90V30H15C6.71573 30 0 23.2843 0 15Z" fill="white"/>
        <path d="M17.1699 15H29.1699" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M17.1699 10H29.1699" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M29.1699 20H17.1699" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M14 15H16" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M14 10H16" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M16 20H14" stroke="#333333" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M41.6179 12.03L38.9879 19H37.9379L35.3079 12.03H36.2779L38.4679 18.04L40.6579 12.03H41.6179ZM43.5257 12.03V19H42.6157V12.03H43.5257ZM45.9866 12.77V15.1H48.5266V15.85H45.9866V18.25H48.8266V19H45.0766V12.02H48.8266V12.77H45.9866ZM58.9636 12.03L56.9436 19H55.9236L54.3036 13.39L52.6236 19L51.6136 19.01L49.6636 12.03H50.6336L52.1536 17.94L53.8336 12.03H54.8536L56.4536 17.92L57.9836 12.03H58.9636ZM63.5355 18.26H65.9755V19H62.6255V12.03H63.5355V18.26ZM67.8519 12.03V19H66.9419V12.03H67.8519ZM71.6128 19.07C71.1528 19.07 70.7395 18.99 70.3728 18.83C70.0128 18.6633 69.7295 18.4367 69.5228 18.15C69.3161 17.8567 69.2095 17.52 69.2028 17.14H70.1728C70.2061 17.4667 70.3395 17.7433 70.5728 17.97C70.8128 18.19 71.1595 18.3 71.6128 18.3C72.0461 18.3 72.3861 18.1933 72.6328 17.98C72.8861 17.76 73.0128 17.48 73.0128 17.14C73.0128 16.8733 72.9395 16.6567 72.7928 16.49C72.6461 16.3233 72.4628 16.1967 72.2428 16.11C72.0228 16.0233 71.7261 15.93 71.3528 15.83C70.8928 15.71 70.5228 15.59 70.2428 15.47C69.9695 15.35 69.7328 15.1633 69.5328 14.91C69.3395 14.65 69.2428 14.3033 69.2428 13.87C69.2428 13.49 69.3395 13.1533 69.5328 12.86C69.7261 12.5667 69.9961 12.34 70.3428 12.18C70.6961 12.02 71.0995 11.94 71.5528 11.94C72.2061 11.94 72.7395 12.1033 73.1528 12.43C73.5728 12.7567 73.8095 13.19 73.8628 13.73H72.8628C72.8295 13.4633 72.6895 13.23 72.4428 13.03C72.1961 12.8233 71.8695 12.72 71.4628 12.72C71.0828 12.72 70.7728 12.82 70.5328 13.02C70.2928 13.2133 70.1728 13.4867 70.1728 13.84C70.1728 14.0933 70.2428 14.3 70.3828 14.46C70.5295 14.62 70.7061 14.7433 70.9128 14.83C71.1261 14.91 71.4228 15.0033 71.8028 15.11C72.2628 15.2367 72.6328 15.3633 72.9128 15.49C73.1928 15.61 73.4328 15.8 73.6328 16.06C73.8328 16.3133 73.9328 16.66 73.9328 17.1C73.9328 17.44 73.8428 17.76 73.6628 18.06C73.4828 18.36 73.2161 18.6033 72.8628 18.79C72.5095 18.9767 72.0928 19.07 71.6128 19.07ZM79.562 12.03V12.77H77.662V19H76.752V12.77H74.842V12.03H79.562Z" fill="#333333"/>
        </svg>
    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}

    const Calendar = ()=>{
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
        <path d="M13.64 12H1.588C1.264 12 1 11.736 1 11.412V1.82403C1 1.50003 1.264 1.23603 1.588 1.23603H13.64C13.964 1.23603 14.228 1.50003 14.228 1.82403V11.412C14.228 11.736 13.968 12 13.64 12Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M11.9766 0V2.544" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M3.31641 2.544V0" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M1.01416 4.70004H14.2222" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M3.65965 6.92403H2.74365V7.84003H3.65965V6.92403Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M6.60106 6.92404H5.68506V7.84004H6.60106V6.92404Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M9.54393 6.92404H8.62793V7.84004H9.54393V6.92404Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M12.4839 6.92404H11.5679V7.84004H12.4839V6.92404Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M3.65965 9.26799H2.74365V10.184H3.65965V9.26799Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M6.60106 9.26799H5.68506V10.184H6.60106V9.26799Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M9.54393 9.26799H8.62793V10.184H9.54393V9.26799Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M12.4839 9.26799H11.5679V10.184H12.4839V9.26799Z" stroke="white" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>`
            return(
            <SvgXml xml={xml}  />
        
        )}
  
    
        const Wallet = ()=>{
            const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
            <path d="M1 14.3044V13.4975" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M18.7061 16.5185V19.8196C18.7061 20.4732 18.1725 21 17.5257 21H2.18723C1.53368 21 1.00684 20.4665 1.00684 19.8196V15.2714" stroke="url(#paint0_linear_120_1425)" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M1 12.4838V8.12238C1 7.46883 1.53351 6.94199 2.18039 6.94199H17.5188C17.7923 6.94199 18.0457 7.03535 18.2457 7.1954C18.3124 7.24875 18.3724 7.30878 18.4325 7.37546C18.5992 7.5822 18.7059 7.84229 18.7059 8.12905V11.3501" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M18.2451 7.19539C18.045 7.03534 17.7916 6.94198 17.5182 6.94198H6.08105L10.3158 2.59386L11.8696 1L18.2451 7.19539Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M10.3159 2.59386L6.08114 6.94198H2.92676L8.72202 1L10.3159 2.59386Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M12.2369 11.3501C11.5234 11.3501 10.8765 11.6369 10.4097 12.1104C9.94284 12.5772 9.64941 13.2241 9.64941 13.9377C9.64941 15.3648 10.8098 16.5252 12.2369 16.5252H20.3196V11.3501H12.2369V11.3501ZM12.1569 14.7046C11.7301 14.7046 11.39 14.3578 11.39 13.9377C11.39 13.5175 11.7368 13.1707 12.1569 13.1707C12.5837 13.1707 12.9238 13.5175 12.9238 13.9377C12.9238 14.3578 12.5771 14.7046 12.1569 14.7046Z" stroke="url(#paint1_linear_120_1425)" stroke-miterlimit="10" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_120_1425" x1="9.85645" y1="15.2714" x2="9.85645" y2="21" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E33895"/>
            <stop offset="1" stop-color="#79489D"/>
            </linearGradient>
            <linearGradient id="paint1_linear_120_1425" x1="14.9845" y1="11.3501" x2="14.9845" y2="16.5252" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E33895"/>
            <stop offset="1" stop-color="#79489D"/>
            </linearGradient>
            </defs>
            </svg>`
                return(
                <SvgXml xml={xml}  />
            
        )}

        const GradientPlus = ()=>{
            const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1V9" stroke="url(#paint0_linear_120_1468)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 5H9" stroke="url(#paint1_linear_120_1468)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_120_1468" x1="5.5" y1="1" x2="5.5" y2="9" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E33895"/>
            <stop offset="1" stop-color="#79489D"/>
            </linearGradient>
            <linearGradient id="paint1_linear_120_1468" x1="5" y1="4" x2="5" y2="6" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E33895"/>
            <stop offset="1" stop-color="#79489D"/>
            </linearGradient>
            </defs>
            </svg>`
                return(
                <SvgXml xml={xml}  />
            
        )}

        export  {
            Google_icon,
            Facebook_icon,
            Apple_icon,
            Map_tab_icon,
            Map_tab_grey_icon,
            Graph_tab_icon,
            Graph_tab_grey_icon,
            Setting_tab_icon,
            Setting_tab_grey_icon,
            Logout_icon,
            LeftIcon,
            RightIcon,
            HeartIcon,
            RoboIcon,
            Stripe,
            RightBlack,
            LeftBlack,
            Option,
            Location,
            HeartColor,
            Upload,
            LinearCross,
            RadioActive,
            RadioInactive,
            GreyStar,
            Call,
            Fav,
            UploadBlack,
            LocationBlack,
            Down,Up,Info,ViewList,
            Calendar,Wallet,GradientPlus
        };
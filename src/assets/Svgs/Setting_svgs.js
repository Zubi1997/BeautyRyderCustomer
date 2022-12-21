import React, {Component} from 'react';
import { Image,Dimensions} from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svg, {Path,Circle, Rect,Defs,Filter,FeBlend,FeComposite,FeGaussianBlur,FeFlood,G,ClipPath,SvgUri} from 'react-native-svg';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

  const Personal_info_icon = ()=>{
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
      return(
      <SvgXml xml={xml}  />
  
    )}
const Message_icon = ()=>{
    const xml = `
    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9682 6.83997H21.7581C22.8781 6.83997 23.7881 7.74995 23.7881 8.86993V20.7097C23.7881 20.9597 23.4981 21.0897 23.3181 20.9297L19.8382 18.0598C19.5082 17.8398 19.1082 17.7198 18.7082 17.7198H9.84833C8.72835 17.7198 7.81836 16.8098 7.81836 15.6898V14.4498" stroke="url(#paint0_linear_77_2004)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M16.9697 3.02997V10.4098C16.9697 11.5298 16.0598 12.4398 14.9398 12.4398H6.07992C5.67993 12.4398 5.28993 12.5598 4.94994 12.7798L1.46999 15.6498C1.29 15.8098 1 15.6798 1 15.4298V3.02997C1 1.90999 1.90999 1 3.02997 1H14.9298C16.0598 1 16.9697 1.90999 16.9697 3.02997Z" stroke="url(#paint1_linear_77_2004)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M4.2207 5.0799H13.7506" stroke="url(#paint2_linear_77_2004)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M4.2207 8.35992H13.7506" stroke="url(#paint3_linear_77_2004)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_77_2004" x1="15.8032" y1="6.83997" x2="15.8032" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_2004" x1="8.98487" y1="1" x2="8.98487" y2="15.7201" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint2_linear_77_2004" x1="8.98563" y1="5.0799" x2="8.98563" y2="6.0799" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint3_linear_77_2004" x1="8.98563" y1="8.35992" x2="8.98563" y2="9.35992" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>     
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Payment_icon = ()=>{
    const xml = `
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 14.3044V13.4975" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M18.7061 16.5185V19.8196C18.7061 20.4732 18.1725 21 17.5257 21H2.18723C1.53368 21 1.00684 20.4665 1.00684 19.8196V15.2714" stroke="url(#paint0_linear_77_2265)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M1 12.4838V8.12238C1 7.46883 1.53351 6.94199 2.18039 6.94199H17.5188C17.7923 6.94199 18.0457 7.03535 18.2457 7.1954C18.3124 7.24875 18.3724 7.30878 18.4325 7.37546C18.5992 7.5822 18.7059 7.84229 18.7059 8.12905V11.3501" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M18.2451 7.19539C18.045 7.03534 17.7916 6.94198 17.5182 6.94198H6.08105L10.3158 2.59386L11.8696 1L18.2451 7.19539Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M10.3159 2.59386L6.08114 6.94198H2.92676L8.72202 1L10.3159 2.59386Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M12.2369 11.3501C11.5234 11.3501 10.8765 11.6369 10.4097 12.1104C9.94284 12.5772 9.64941 13.2241 9.64941 13.9377C9.64941 15.3648 10.8098 16.5252 12.2369 16.5252H20.3196V11.3501H12.2369V11.3501ZM12.1569 14.7046C11.7301 14.7046 11.39 14.3578 11.39 13.9377C11.39 13.5175 11.7368 13.1707 12.1569 13.1707C12.5837 13.1707 12.9238 13.5175 12.9238 13.9377C12.9238 14.3578 12.5771 14.7046 12.1569 14.7046Z" stroke="url(#paint1_linear_77_2265)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_77_2265" x1="9.85645" y1="15.2714" x2="9.85645" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_2265" x1="14.9845" y1="11.3501" x2="14.9845" y2="16.5252" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>      
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Setting_icon = ()=>{
    const xml = `
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7894 2.61053C17.5368 1.12632 16.2526 0 14.7052 0C12.9789 0 11.5684 1.4 11.5684 3.13684C11.5684 4.87368 12.9789 6.27368 14.7052 6.27368C16.2526 6.27368 17.5368 5.14737 17.7894 3.66316H20.6526V2.61053H17.7894ZM14.7052 5.21053C13.5578 5.21053 12.621 4.27368 12.621 3.12632C12.621 1.97895 13.5578 1.04211 14.7052 1.04211C15.8526 1.04211 16.7894 1.97895 16.7894 3.12632C16.7894 4.28421 15.8526 5.21053 14.7052 5.21053Z" fill="url(#paint0_linear_77_2014)"/>
    <path d="M9.90526 2.61053H0V3.66317H9.90526V2.61053Z" fill="url(#paint1_linear_77_2014)"/>
    <path d="M5.94737 6.86316C4.4 6.86316 3.11579 8 2.86316 9.47369H0V10.5263H2.86316C3.11579 12 4.4 13.1368 5.94737 13.1368C7.67368 13.1368 9.08421 11.7368 9.08421 10C9.08421 8.26316 7.67368 6.86316 5.94737 6.86316ZM5.94737 12.0842C4.8 12.0842 3.86316 11.1474 3.86316 10C3.86316 8.85263 4.8 7.91579 5.94737 7.91579C7.09474 7.91579 8.03158 8.85263 8.03158 10C8.03158 11.1474 7.09474 12.0842 5.94737 12.0842Z" fill="url(#paint2_linear_77_2014)"/>
    <path d="M20.6523 9.47368H10.7471V10.5263H20.6523V9.47368Z" fill="url(#paint3_linear_77_2014)"/>
    <path d="M12.1583 13.7368C10.432 13.7368 9.02148 15.1474 9.02148 16.8737C9.02148 18.6 10.432 20 12.1583 20C13.7057 20 14.9899 18.8737 15.2425 17.3895H20.6531V16.3368H15.2425C14.9899 14.8632 13.7162 13.7368 12.1583 13.7368ZM12.1583 18.9474C11.011 18.9474 10.0741 18.0105 10.0741 16.8632C10.0741 15.7158 11.011 14.779 12.1583 14.779C13.3057 14.779 14.2425 15.7158 14.2425 16.8632C14.2425 18.0105 13.3162 18.9474 12.1583 18.9474Z" fill="url(#paint4_linear_77_2014)"/>
    <path d="M7.35789 16.3369H0V17.3895H7.35789V16.3369Z" fill="url(#paint5_linear_77_2014)"/>
    <defs>
    <linearGradient id="paint0_linear_77_2014" x1="16.1105" y1="0" x2="16.1105" y2="6.27368" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_2014" x1="4.95263" y1="2.61053" x2="4.95263" y2="3.66317" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint2_linear_77_2014" x1="4.54211" y1="6.86316" x2="4.54211" y2="13.1368" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint3_linear_77_2014" x1="15.6997" y1="9.47368" x2="15.6997" y2="10.5263" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint4_linear_77_2014" x1="14.8373" y1="13.7368" x2="14.8373" y2="20" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint5_linear_77_2014" x1="3.67895" y1="16.3369" x2="3.67895" y2="17.3895" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>     
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Favourites_icon = ()=>{
    const xml = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12.6193H21.4" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M1 7.78027V18.6534C1 19.6778 1.82927 20.512 2.85854 20.512H19.5463C20.5707 20.512 21.4049 19.6827 21.4049 18.6534V7.78027H1ZM19.7707 18.8778H14.078V17.0437H19.7707V18.8778Z" stroke="url(#paint0_linear_77_2251)" stroke-miterlimit="22.9256"/>
    <path d="M7.78512 5.59979C7.78512 5.62418 7.78512 5.64857 7.78512 5.66808L7.6778 7.78028H2.74609C2.80463 5.80467 4.42414 4.22418 6.40951 4.22418C7.17048 4.22418 7.78512 4.84369 7.78512 5.59979Z" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M13.5902 6.27786L12.7561 7.7803H9.00488L10.7268 4.68274L11.2 4.94615L13.1171 6.01445L13.5902 6.27786Z" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M13.6929 4.97539L13.1173 6.00953L11.2002 4.94124L12.3514 2.86807C12.4782 2.6388 12.7904 2.59002 12.9807 2.77051L13.4246 3.1949C13.9075 3.65832 14.0197 4.39002 13.6929 4.97539Z" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M21.093 3.99005C20.7759 4.82419 19.6832 5.20956 18.5027 4.97541C18.293 4.93639 18.0832 4.87297 17.8735 4.79493C17.3954 4.61444 16.9857 4.35102 16.6637 4.04858C16.0393 3.45834 15.7515 2.70224 16.0003 2.05346C16.371 1.07297 17.8149 0.711999 19.2198 1.24858C20.6247 1.78029 21.4637 3.00956 21.093 3.99005Z" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M18.4973 4.97541L17.029 7.78029H14.707L16.6631 4.04858C16.9851 4.35102 17.3948 4.61444 17.8729 4.79493C18.0826 4.87297 18.2924 4.93151 18.4973 4.97541Z" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M17.2783 4.4925L17.4344 3.37543" stroke="#E33895" stroke-miterlimit="22.9256" stroke-linecap="round"/>
    <path d="M19.7707 10.351H14.9902" stroke="#E33895" stroke-miterlimit="22.9256"/>
    <path d="M17.873 4.79495L18.6243 4.13641" stroke="#E33895" stroke-miterlimit="22.9256" stroke-linecap="round"/>
    <defs>
    <linearGradient id="paint0_linear_77_2251" x1="11.2024" y1="7.78027" x2="11.2024" y2="20.512" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const ReferEarn_icon = ()=>{
    const xml = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.76 13.68C19.47 13.07 18.79 12.76 18.14 12.94L13.16 14.28L8.35 11.53C7.94 11.28 7.42 11.24 6.97 11.41L3.1 12.93L2.92 12.51C2.87 12.39 2.77 12.29 2.65 12.24C2.53 12.19 2.39 12.19 2.27 12.24L0 13.2L0.39 14.12L2.19 13.36L4.22 18.21L2.25 19.09L2.66 20L5.08 18.92C5.33 18.81 5.44 18.52 5.34 18.27L5.13 17.78L6.12 17.31C6.31 17.22 6.52 17.22 6.71 17.3L10.16 18.78C10.46 18.91 10.78 18.97 11.1 18.97C11.44 18.97 11.79 18.9 12.1 18.75L19.07 15.54C19.41 15.38 19.67 15.1 19.79 14.75C19.94 14.39 19.92 14.01 19.76 13.68ZM18.87 14.4C18.83 14.5 18.76 14.58 18.67 14.62L11.7 17.83C11.34 18 10.92 18 10.56 17.85L7.11 16.37C6.65 16.17 6.14 16.19 5.69 16.4L4.74 16.85L3.49 13.86L7.34 12.35C7.5 12.29 7.69 12.3 7.84 12.4L12.49 15.06C12.29 15.44 11.84 15.6 11.45 15.43L9.55 14.59L9.14 15.51L11.04 16.35C11.28 16.46 11.53 16.51 11.78 16.51C12.45 16.51 13.09 16.14 13.4 15.5C13.44 15.42 13.45 15.33 13.47 15.25L18.39 13.93C18.57 13.88 18.76 13.96 18.84 14.13C18.9 14.2 18.9 14.31 18.87 14.4Z" fill="url(#paint0_linear_77_1947)"/>
    <path d="M12.9204 9.06001H13.0804V10.12H14.0804V9.06001H14.2404C15.0804 9.06001 15.7604 8.38001 15.7604 7.54001V7.23001C15.7604 6.39001 15.0804 5.71001 14.2404 5.71001H12.9104C12.6204 5.71001 12.3904 5.48001 12.3904 5.19001V4.87001C12.3904 4.58001 12.6204 4.35001 12.9104 4.35001H14.2404C14.5304 4.35001 14.7604 4.58001 14.7604 4.87001V5.37001H15.7604V4.87001C15.7604 4.03001 15.0804 3.35001 14.2404 3.35001H14.0804V2.29001H13.0804V3.35001H12.9204C12.0804 3.35001 11.4004 4.03001 11.4004 4.87001V5.18001C11.4004 6.02001 12.0804 6.70001 12.9204 6.70001H14.2504C14.5404 6.70001 14.7704 6.93001 14.7704 7.22001V7.53001C14.7704 7.82001 14.5404 8.05001 14.2504 8.05001H12.9204C12.6304 8.05001 12.4004 7.82001 12.4004 7.53001V7.03001H11.4004V7.53001C11.4004 8.38001 12.0804 9.06001 12.9204 9.06001Z" fill="url(#paint1_linear_77_1947)"/>
    <path d="M13.5799 12.41C16.9999 12.41 19.7799 9.63 19.7799 6.2C19.7799 2.78 16.9999 0 13.5799 0C10.1599 0 7.37988 2.78 7.37988 6.2C7.37988 9.63 10.1599 12.41 13.5799 12.41ZM13.5799 1C16.4499 1 18.7799 3.33 18.7799 6.2C18.7799 9.07 16.4499 11.4 13.5799 11.4C10.7099 11.4 8.37988 9.07 8.37988 6.2C8.37988 3.33 10.7099 1 13.5799 1Z" fill="url(#paint2_linear_77_1947)"/>
    <defs>
    <linearGradient id="paint0_linear_77_1947" x1="9.946" y1="11.3068" x2="9.946" y2="20" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_1947" x1="13.5804" y1="2.29001" x2="13.5804" y2="10.12" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint2_linear_77_1947" x1="13.5799" y1="0" x2="13.5799" y2="12.41" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
const Legal_icon = ()=>{
    const xml = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="url(#paint0_linear_77_2021)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M11.001 16.6526V9.46317" stroke="url(#paint1_linear_77_2021)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.7167 6.06316C11.7167 6.45264 11.4009 6.77895 11.0009 6.77895C10.6115 6.77895 10.2852 6.46316 10.2852 6.06316C10.2852 5.67369 10.6009 5.34737 11.0009 5.34737C11.3904 5.34737 11.7167 5.67369 11.7167 6.06316Z" fill="url(#paint2_linear_77_2021)" stroke="url(#paint3_linear_77_2021)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_77_2021" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_2021" x1="11.501" y1="9.46317" x2="11.501" y2="16.6526" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint2_linear_77_2021" x1="11.0009" y1="5.34737" x2="11.0009" y2="6.77895" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint3_linear_77_2021" x1="11.0009" y1="5.34737" x2="11.0009" y2="6.77895" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}


const Help_icon = ()=>{
    const xml = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.92676 3.92664L7.52009 7.51997" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M14.4805 14.48L18.0738 18.0733" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M3.92676 18.0733L7.52009 14.48" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M14.4805 7.51997L18.0738 3.92664" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M11.0001 15.92C13.7173 15.92 15.9201 13.7173 15.9201 11C15.9201 8.28278 13.7173 6.08002 11.0001 6.08002C8.28284 6.08002 6.08008 8.28278 6.08008 11C6.08008 13.7173 8.28284 15.92 11.0001 15.92Z" stroke="url(#paint0_linear_77_2305)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M6.35275 2.14003C5.47942 2.60003 4.65942 3.19336 3.92608 3.92669C3.19275 4.66003 2.59942 5.48003 2.13942 6.35336C1.02608 5.18669 1.04608 3.34003 2.19275 2.19336C3.33942 1.04669 5.18608 1.02669 6.35275 2.14003Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M19.86 15.6467C20.9733 16.8133 20.96 18.66 19.8133 19.8067C18.6667 20.9533 16.82 20.9667 15.6533 19.8533C16.5267 19.3933 17.3467 18.8 18.0733 18.0667C18.8 17.3333 19.4 16.52 19.86 15.6467Z" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M3.92641 18.0733C4.65975 18.8067 5.47975 19.4 6.34641 19.86C5.17975 20.9733 3.33308 20.96 2.18641 19.8133C1.03975 18.6667 1.02641 16.82 2.13975 15.6533C2.59975 16.52 3.19308 17.34 3.92641 18.0733Z" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M19.8065 2.19334C20.9532 3.34001 20.9665 5.18667 19.8532 6.35334C19.3932 5.48001 18.7998 4.66001 18.0665 3.93334C17.3332 3.20001 16.5132 2.60667 15.6465 2.14667C16.8132 1.02667 18.6665 1.04667 19.8065 2.19334Z" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="url(#paint1_linear_77_2305)" stroke-miterlimit="10" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_77_2305" x1="11.0001" y1="6.08002" x2="11.0001" y2="15.92" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    <linearGradient id="paint1_linear_77_2305" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E33895"/>
    <stop offset="1" stop-color="#79489D"/>
    </linearGradient>
    </defs>
    </svg>    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}

    const Vouchers_icon = ()=>{
        const xml = `
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.96 7.55998L21 1.46998C21 0.929984 20.57 0.489984 20.03 0.499984L13.94 0.539984C13.07 0.549984 12.24 0.889984 11.62 1.50998L1.57 11.55C0.81 12.31 0.81 13.54 1.57 14.31L7.19 19.93C7.95 20.69 9.18 20.69 9.95 19.93L20 9.87998C20.61 9.26998 20.96 8.42998 20.96 7.55998ZM17.54 3.95998C17.11 3.52998 17.11 2.82998 17.54 2.39998C17.97 1.96998 18.67 1.96998 19.1 2.39998C19.53 2.82998 19.53 3.52998 19.1 3.95998C18.67 4.38998 17.97 4.38998 17.54 3.95998Z" stroke="url(#paint0_linear_115_560)" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M9.13988 9.41001C9.69769 9.41001 10.1499 8.95782 10.1499 8.40001C10.1499 7.84221 9.69769 7.39001 9.13988 7.39001C8.58208 7.39001 8.12988 7.84221 8.12988 8.40001C8.12988 8.95782 8.58208 9.41001 9.13988 9.41001Z" stroke="url(#paint1_linear_115_560)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.7405 13.01C13.2983 13.01 13.7505 12.5578 13.7505 12C13.7505 11.4422 13.2983 10.99 12.7405 10.99C12.1827 10.99 11.7305 11.4422 11.7305 12C11.7305 12.5578 12.1827 13.01 12.7405 13.01Z" stroke="url(#paint2_linear_115_560)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.35 6.62L9.79004 13.29" stroke="url(#paint3_linear_115_560)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.0898 2.70001L13.8698 3.48001" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M14.3203 3.93001L15.1103 4.71001" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M15.5498 5.16002L16.3398 5.95002" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M16.79 6.39001L17.57 7.18001" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M18.0195 7.63L18.7995 8.41" stroke="#E33895" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M3.62012 12.18L4.40012 12.96" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M4.85059 13.41L5.63059 14.19" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M6.08008 14.64L6.86008 15.42" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M7.31055 15.87L8.09055 16.65" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M8.54004 17.1L9.32004 17.88" stroke="#79489D" stroke-miterlimit="10" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_115_560" x1="11" y1="0.499817" x2="11" y2="20.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E33895"/>
        <stop offset="1" stop-color="#79489D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_115_560" x1="9.13988" y1="7.39001" x2="9.13988" y2="9.41001" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E33895"/>
        <stop offset="1" stop-color="#79489D"/>
        </linearGradient>
        <linearGradient id="paint2_linear_115_560" x1="12.7405" y1="10.99" x2="12.7405" y2="13.01" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E33895"/>
        <stop offset="1" stop-color="#79489D"/>
        </linearGradient>
        <linearGradient id="paint3_linear_115_560" x1="11.07" y1="6.62" x2="11.07" y2="13.29" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E33895"/>
        <stop offset="1" stop-color="#79489D"/>
        </linearGradient>
        </defs>
        </svg>        
        `
            return(
            <SvgXml xml={xml}  />
        
        )}
    

const Dummy5 = ()=>{
    const xml = `
    
    `
        return(
        <SvgXml xml={xml}  />
    
    )}
        export  {
            Personal_info_icon,
            Message_icon,
            Payment_icon,
            Setting_icon,
            Favourites_icon,
            ReferEarn_icon,
            Legal_icon,
            Help_icon,
            Vouchers_icon,
            
        };
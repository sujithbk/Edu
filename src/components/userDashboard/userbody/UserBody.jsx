
import React ,{ useState, useEffect, useRef } from 'react'
import { FaHome, FaUser, FaCog, FaBell, FaSearch} from 'react-icons/fa';
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandGithubFilled } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { TbMessageLanguage } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdOutlineDomainAdd } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


import styled from 'styled-components';
import card from '../../../assets/card.jpeg'
import card2 from '../../../assets/card2.jpeg'

const Profile = ()=> <div>Im self taught web developer </div>
const Acadamics = ()=> <div >  &nbsp; MSCA </div>
const Skills = ()=> <diV> &nbsp; js , java , c , python , node  </diV>
const Languages = ()=> <div> &nbsp; English , Malayalam ,Tamil , Hindi </div>
const Soon = ()=> <div> &nbsp; Comming Soon</div>
function UserBody() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref to track the dropdown container
    const [activateContent , setAcctivateContent] = useState('Skills')

    const renderContent = ()=>{
      switch(activateContent){
        case 'Profile' :
        return <Profile/>
        case 'Skills':
          return <Skills/>
          case 'Acadamics':
            return <Acadamics/>
            case 'Languages':
              return <Languages/>
              case'Soon':
              return <Soon/>
            default :
            return null
      }
    }
    // Toggle dropdown visibility
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      // Add event listener
      document.addEventListener('mousedown', handleClickOutside);
  
      // Cleanup
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
        

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center justify-between px-6 z-10">
          <div className="text-xl font-bold text-blue-600">Dashboard</div>
          
          <div className="flex items-center space-x-4">
          <Link to="/">Home</Link>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <FaBell className="text-gray-600 hover:text-blue-600 cursor-pointer" size={20} />
            <div className="flex items-center space-x-2">
              <img 
                src={card2} 
                alt="User" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium">Rishi</span>
            </div>
          </div>
        </nav>
  
        {/* Main Content Area */}
        <div className="flex -mt-1 w-full">
          {/* Sidebar (27% width) */}
          <div className="w-1/4 bg-white shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg">
                <FaHome />
                <span className='text-blue-600'>Dashboard</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
                <FaUser />
                <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={()=>{  toggleDropdown(), setAcctivateContent('Profile')}}
        className=" space-x-3  text-blue-600 p-3 rounded-lg"
      >
        Profile
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute -right-30 mt-4 w-58 bg-white rounded-md shadow-lg">
     <StyledWrappere>
      <div className="card">
        <div className="top-section">
          <div className="border" /> <h1 className='text-white text-xs mt-2'>  &nbsp;  &nbsp; 
        <span className='text-base font-medium'> {renderContent()} </span>
         <br/>
         </h1>
          <div className="icons">
          <h1 className='text-white mt-1 ml-2'>  &nbsp;  &nbsp; RISHI</h1>
            <div className="social-media">
            <TiSocialLinkedin /> 
            <TbBrandGithubFilled />
          
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <span className="title">CONTACT ME</span>
          <div className="row row1">
            <div className="item">
              <span className="big-text">Email</span>
              <span className="regular-text">rishi@gmail.com</span>
            </div>
            <div className="item">
              <span className="big-text">Phone</span>
              <span className="regular-text">8129504156</span>
            </div>
            <div className="item">
              <span className="big-text">Country</span>
              <span className="regular-text">India</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrappere>
        </div>
      )}
    </div>
                
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
              <GiSkills />
                      <button
              onClick={()=>{  toggleDropdown(), setAcctivateContent('Skills')}}
              className=" space-x-3 text-blue-600 p-3 rounded-lg"
            >
             Skills
            </button>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
              <HiAcademicCap />
                      <button
              onClick={()=>{  toggleDropdown(), setAcctivateContent('Acadamics')}}
              className=" space-x-3 text-blue-600 p-3 rounded-lg"
            >
             Academics Status
            </button>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
              <TbMessageLanguage />
                      <button
              onClick={()=>{  toggleDropdown(), setAcctivateContent('Languages')}}
              className=" space-x-3 text-blue-600 p-3 rounded-lg"
            >
             Langauge's
            </button>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
              <RiUserCommunityFill />
                      <button
              onClick={()=>{  toggleDropdown(), setAcctivateContent('Soon')}}
              className=" space-x-3 text-blue-600 p-3 rounded-lg"
            >
             Join Community
            </button>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
              <MdOutlineDomainAdd />
                      <button
              onClick={()=>{  toggleDropdown(), setAcctivateContent('Soon')}}
              className=" space-x-3 text-blue-600 p-3 rounded-lg"
            >
             Create Community
            </button>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-1 rounded-lg">
              <RiSettings3Fill />
                      <button
              onClick={()=>{  toggleDropdown(), setAcctivateContent('Soon')}}
              className=" space-x-3 text-blue-600 p-3 rounded-lg"
            >
             Settings
            </button>
              </div>
            </div>
          </div>
  
          {/* Main Content (73% width) */}
          <div className=' mt-7 ml-60'>
            <StyledWrapper>
              <div className="card">
                <button className="mail">
                  <svg className="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                    <rect rx={2} y={4} x={2} height={16} width={20} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </button>
                <div 
                  className="profile-pic" 
                  style={{
                    backgroundImage: `url(${card})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="bottom">
                  <div className="content">
                    
                    <span className="name">Ryshy</span>
                    <span className="about-me">Im self taught developer
                    </span>
                  </div>
                  <div className="bottom-bottom">
                    <div className="social-links-container">
                      <svg viewBox="0 0 16 15.999" height="15.999" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(6 598)" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" data-name="Subtraction 4" id="Subtraction_4" />
                      </svg>
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                      <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </div>
                    <button className="button">Contact Me</button>
                  </div>
                </div>
              </div>
            </StyledWrapper>
          </div>
        </div>
      </div>
  );
}

const StyledWrappere = styled.div`
.card {
  width: 230px;
  border-radius: 20px;
  background: #141414;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg,rgb(0, 75, 213) 0%,rgb(58, 82, 203) 100%);
  position: relative;
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #141414;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #141414;
}

.card .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  background: rgba(255, 255, 255, 0);
  border-top-left-radius: 10px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0);
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section .icons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.card .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}

.card .top-section .icons .social-media {
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;
}

.card .top-section .icons .social-media .svg {
  height: 100%;
  fill: #1b233d;
}

.card .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: #fff;
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}`; 
       

const StyledWrapper = styled.div`
.card {
  width: 420px;
  height: 420px;
  background: white;
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: #604b4a30 0px 70px 30px -50px;
  transition: all 0.5s ease-in-out;
}

.card .mail {
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  background: transparent;
  border: none;
}

.card .mail svg {
  stroke:hsl(224, 91.80%, 61.80%);
  stroke-width: 3px;
}

.card .mail svg:hover {
  stroke:rgb(83, 83, 230);
}

.card .profile-pic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  z-index: 1;
  border: 0px solidrgb(61, 101, 208);
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.card .profile-pic img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transition: all 0.5s ease-in-out 0s;
}

.card .profile-pic svg {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transform-origin: 45% 20%;
  transition: all 0.5s ease-in-out 0s;
}

.card .bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background:rgb(61, 90, 176);
  top: 80%;
  border-radius: 29px;
  z-index: 2;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card .bottom .content {
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 160px;
}

.card .bottom .content .name {
  display: block;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}

.card .bottom .content .about-me {
  display: block;
  font-size: 0.9rem;
  color: white;
  margin-top: 1rem;
}

.card .bottom .bottom-bottom {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card .bottom .bottom-bottom .social-links-container {
  display: flex;
  gap: 1rem;
}

.card .bottom .bottom-bottom .social-links-container svg {
  height: 20px;
  fill: white;
  filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
}



.card .bottom .bottom-bottom .button {
  background: white;
  color:rgb(7, 7, 7);
  border: none;
  border-radius: 20px;
  font-size: 0.6rem;
  padding: 0.4rem 0.6rem;
  box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
}



.card:hover {
  border-top-left-radius: 55px;
}

.card:hover .bottom {
  top: 20%;
  border-radius: 80px 29px 29px 29px;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.card:hover .profile-pic {
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  z-index: 3;
  border: 7px rgb(86, 176, 245);
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
  transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.card:hover .profile-pic:hover {
  transform: scale(1.3);
  border-radius: 0px;
}

.card:hover .profile-pic img {
  transform: scale(2.5);
  -o-object-position: 0px 25px;
  object-position: 0px 25px;
  transition: all 0.5s ease-in-out 0.5s;
}

.card:hover .profile-pic svg {
  transform: scale(2.5);
  transition: all 0.5s ease-in-out 0.5s;
}`;

      

export default UserBody








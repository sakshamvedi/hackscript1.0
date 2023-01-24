import {React,useRef,useState , useEffect} from 'react'
import "./Body.css"
 // requires a loader
 import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
 import 'pure-react-carousel/dist/react-carousel.es.css';
import TextTransition, { presets } from "react-text-transition";
import {BsCalendarCheckFill, BsCalendarDate, BsWhatsapp} from "react-icons/bs";
const TEXTS = [
    "Inspire",
    "Learn",
    "Code",
    "Deploy",
  ];

function Body() {

    const [index, setIndex] = useState(0);
   
    useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        2000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);




    const myDiv = useRef(null);
    const myDiv2 = useRef(null);
    const handleClick = () => {
        myDiv.current.scrollIntoView({ behavior: 'smooth' });
      };
      const handleClick2 = () => {
        myDiv2.current.scrollIntoView({ behavior: 'smooth' });
      };
  return (
 <>
 
<div className="maincontainer">
    <div className="dummy">
    {/* <div className="navbar" id = "navbar">
        <img src='pics.png'/>
        
        <div className="menu" id = "menu" >
            <a onClick={handleClick}>ABOUT</a>
            <a onClick={handleClick2}>GALLERY</a>
            <a href='#'>THEMES</a>
            <a href='#'>PRIZES</a>
            <a href='#'>SCHEDULE</a>
            <a href='#'>SPONSORS</a>
            <a href='#'>FAQ</a>
        </div>
    </div> */}

    <header   className="text-gray-100 body-font cursor-pointer">
  <div   className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav   className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    </nav>
    <a   className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <img src='https://upload.wikimedia.org/wikipedia/en/3/30/Dr._Ram_Manohar_Lohia_Avadh_University_logo.png' style={{marginLeft :"10px"}}/>
    <img src='savish.png' className='rounded-full'/>
    <img src='pics.png'/>
    
      <span   className="ml-3 text-xl text-gray-100"></span>
    </a>
    <div   className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button   className="inline-flex items-center bg-gray-900 border-0 py-3 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
       Take a View
      </button>
    </div>
  </div>
</header>

    {/* <div className="bodytitle">
        <h1>HackScript
        <span>1.0</span>
        </h1>
        <TextTransition springConfig={presets.wobbly} className = "trans">
        {TEXTS[index % TEXTS.length]}
      </TextTransition>

      <h2>
        <BsCalendarCheckFill/>  <pre>  </pre>21 / JANUARY / 2023 
      </h2>

      <span>
        <button className='btn1'>Register For Hack</button>
        <button className='btn2'> <BsWhatsapp/>  Join Group</button>
      </span>
    </div> */}

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-3 py-14 items-center justify-center flex-col">
   
    <div className="text-center lg:w-2/3 w-full ">
      <h1 className="font-extrabold   sm:text-5xl text-4xl mb-2 font-medium text-gray-100">
      Hackathon : <span    className="font-extrabold  text-transparent   sm:text-5xl text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">  The Developers Battle </span>
      </h1>
      <TextTransition springConfig={presets.wobbly} className = " sm:text-3xl text-xs  mt-4 font-medium text-gray-100 mb-8 leading-relaxed">
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      <p className="mb-8 leading-relaxed text-gray-100">HackScript is a high-intensity, fast-paced coding battle where participants are challenged to come up with innovative solutions to complex problems in a limited amount of time. Just as a battle requires a clear strategy and a well-trained team Are you ready ? for battle with many people like you ..?
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
         Register 
        </button>
        <a href='https://chat.whatsapp.com/BY4gjCclIR6GCk93ZeQvJ8'>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Join Group
        </button>
        </a>

      </div>
    </div>
  </div>
</section>
</div>
</div>

<div className="empty">
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/11/05/Pictures/_1745ea02-c210-11e7-922e-12a52d781256.jpg"
      />
    
    </div>
    <div className="empty"></div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About the
        Event
      </h1>
      <p className="mb-8 leading-relaxed">
      Join us for HackScript, the ultimate coding challenge at IET Ayodhya! Put your skills to the test as you compete against the best and brightest minds in the field. With prizes and recognition on the line, this is a hackathon you won't want to miss. Come with your ideas and leave with a sense of accomplishment. See you at HackScript!"
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Learn More
        </button>
       
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       Benifits of Joining Hackathons
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Joining a hackathon can provide a variety of benefits, including the opportunity to network with other like-minded individuals, gain hands-on experience in problem-solving and teamwork, develop new skills and knowledge, and potentially win prizes or secure job opportunities. Additionally, hackathons can give participants the chance to work on real-world problems and create innovative solutions, while also providing a platform to showcase their talents and ideas to potential employers or investors.
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="text-red-500 w-12 h-12 mb-3 inline-block">
  <path    strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

      
          <p className="leading-relaxed">Problem Solving Skills</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx={9} cy={7} r={4} />
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
          </svg>
         
          <p className="leading-relaxed">Networking</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
      
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"   className="text-black-500 w-12 h-12 mb-3 inline-block">
  <path    strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

         
          <p className="leading-relaxed">Extreme Productivity</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
     

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="text-yellow-500 w-12 h-12 mb-3 inline-block">
  <path    strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
</svg>

         
          <p     className="leading-relaxed">Prizes</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       Themes
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      We have a vast variety of themes choose any one and make the Imagination into reality
      </p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
          Real Life Problems
            </h2>
          
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
            Healthcare and Medical Technology
            </h2>
          
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
            AI and Machine Learning
            </h2>
           
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">AR/VR</h2>
           
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
             E-Library
            </h2>
          
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
              Smart Hostel Allocations
            </h2>
           
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
              Social Media
            </h2>
           
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">Mental Health</h2>
          
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-red-100 ">
                  <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium ">
            Web Accessibility 
            </h2>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
         Some Problem Statments For You
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
     
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxob3N0ZWx8ZW58MHx8fHwxNjc0NTU1OTE0&ixlib=rb-4.0.3&q=80&w=1080"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            P_S-01
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
           Smart Hostel Allocation
          </h2>
          <p className="leading-relaxed text-base">
            Make a website of hostels , in which if a person search for Room . 309 than he get all details (who is currenly living to all the appliances in the room )
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxib29rJTIwc3RvcmV8ZW58MHx8fHwxNjc0NTU2MDg5&ixlib=rb-4.0.3&q=80&w=1080"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            P_S-02
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Book Store
          </h2>
          <p className="leading-relaxed text-base">
           Make a website or app to maintain books , sample paper and all the study material and other notices that is important for our university 
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://images.unsplash.com/photo-1616094620696-15a31bf047ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxub3RpZnl8ZW58MHx8fHwxNjc0NTU2MjEx&ixlib=rb-4.0.3&q=80&w=1080"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
           P_S-03
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            University Notifier
          </h2>
          <p className="leading-relaxed text-base">
            It Notifies all the working professional as well as the student  regarding events , any notice with a priority side notification 
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://images.unsplash.com/photo-1613638377394-281765460baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwyfHxjYWJ8ZW58MHx8fHwxNjc0NTU2Mzkz&ixlib=rb-4.0.3&q=80&w=1080"
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            P_S-04
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
           University Auto
          </h2>
          <p className="leading-relaxed text-base">
            As most of the students living far away from a college so , a ubiversity auto application thorugh which student and cab drivers get benifit.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<footer className="text-gray-600 body-font bg-gray-200">
 
  <div className="bg-gray-200">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src='https://upload.wikimedia.org/wikipedia/en/3/30/Dr._Ram_Manohar_Lohia_Avadh_University_logo.png' style={{height : "50px" , marginLeft :"10px"}}/>
      <img src='pics.png'  style = {{height : "50px"}}/>
      <img src='savish.png' style = {{height : "50px"}} className='rounded-full'/>
        <span className="ml-3 text-xl">Hackscript Hackathon</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2023 Hackscript  in collabaration with savishkar & awadh university 
      
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


 </>
  )
}

export default Body
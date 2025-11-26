import React, {useState} from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'
import profile from  "./components/profile.jpg";
function Navbar({mode,setMode}){
  const loc = useLocation()
  const nav = [
    {to:'/',label:'Home'},{to:'/education',label:'Education'}, {to:'/skills',label:'Skills'},
    {to:'/achievements',label:'Achievements'}, {to:'/projects',label:'Projects'},
    {to:'/contact',label:'Contact'}
  ]
  return (
    <header className="sticky top-0 z-40 bg-black/40 backdrop-blur border-b border-white/5">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-indigo-400">Tejaswini <span className="text-indigo-400">B</span></div>
          <div className="text-m text-slate-200  md:block font-16">• Tech Learner </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {nav.map(n=>(
            <Link key={n.to} to={n.to} className={'text-sm '+(loc.pathname===n.to?'text-indigo-300 underline':'text-slate-200 hover:text-indigo-300')}>{n.label}</Link>
          ))}
         
          {/*<button onClick={()=>setMode(mode==='dark'?'light':'dark')} className="p-2 rounded bg-white/5 ml-2">
            {mode==='dark'?<Sun size={16}/>:<Moon size={16}/>}
          </button>*/}
        </nav>
        <div className="md:hidden">
          <details className="text-slate-200">
            <summary className="cursor-pointer">Menu</summary>
            <div className="flex flex-col mt-2 gap-2">
            
              <a href="/public/assets/Resume copy.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-3 bg-indigo-600  text-white text-sm rounded-md shadow-md  ">View Resume</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

/* Pages   <a href="/public/assets/resume.pdf" target="_blank" rel="noreferrer" className="ml-2 px-3 py-1 rounded bg-pink-400 text-slate-900 font-semibold">View Resume</a>*/
function Home(){ 
  return (
    <main>
      <section className="min-h-[70vh] flex items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">Hi, I'm <span className='text-indigo-300'>Tejaswini B</span></h1>
            <p className="mt-4 text-slate-300 max-w-xl"> A passionate full-stack developer & ML enthusiast building intuitive web apps and prototypes. Current BE student focused on web development, model prototyping, and user-centered design.
        </p>
            <div className="mt-6 flex gap-3">
              <a href="/public/assets/Resume copy.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-400 text-slate-900 rounded-md font-semibold">View Resume</a>
              <Link to="/contact" className="px-4 py-2 border border-slate-600 rounded-md text-slate-200">Contact Me</Link>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com/tejaswinib-dev" className="p-2 rounded bg-white/5"><Github/></a>
              <a href="https://www.linkedin.com/in/tejaswini-b-5106092ba" className="p-2 rounded bg-white/5"><Linkedin/></a>
              <a href="mailto:tejaswinigowda192005@gmail.com" className="p-2 rounded bg-white/5"><Mail/></a>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-pink-400 glow">
          <img src={profile} alt="Tejaswini Profile" className="w-full h-full rounded-full bg-slate-1200 border-4 border-slate-800 flex items-center justify-center text-slate-400"/>
          </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6 glow">
          <h3 className="text-xl font-semibold text-indigo-300">About Me</h3>
          <p className="mt-2 text-slate-300">I am Tejaswini B, pursuing a specialization in Artificial Intelligence and Data Science. I am passionate about creating intelligent, data-driven solutions and building robust, user-centric web applications. I have experienced in applying Machine Learning and predictive analytics to solve real-world problems. I develop interactive dashboards and visualizations to make complex data actionable. My goal is to deliver efficent, innovative, and impactful solutions that address real-world challenges.</p>
          <div className="mt-4"><Link to="/contact" className="text-indigo-200 underline">Get in touch →</Link></div>
        </div>
        <div className="card p-6 glow">
          <h3 className="text-xl font-semibold text-indigo-300">Featured Areas</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>• AI & Machine Learning — Predictive models & NLP</li>
            <li>• Problem Solving & Innovation — designing intelligent solutions for real-world challenges </li>
            <li>• Data Science & Analytics — transforming complex data into actionable Intelligence</li>
               <li>• Full-Stack Development  — building robust, scalable, and user-centric web applications </li>
            <li>• Data Visualization & Dashboards — creating interactive and insightful visual representations</li>
          </ul>
        </div>
      </section>

      <section className="container mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6 glow">
          <h3 className="text-xl font-semibold text-indigo-300">Professional Philosophy</h3>
          <ol className="mt-3 text-slate-300 space-y-2">
            <li><strong>💡Innovative Solutions:</strong> I focus on clean and efficient solutions for every project, combining creativity with technical precision.</li>
            <li><strong>🤝Collaboration:</strong> Communication and teamwork are key. I value working closely with clients and colleagues to achieve the best results.</li>
            <li><strong>📚Continuous Learning: </strong>I constantly learn and adapt to new technologies, ensuring my skills are up-to-date.</li>
              <li><strong>⚡Efficiency:</strong> Delivering high-quality results on time is my priority. I streamline workflows for maximum impact.</li>
              <li><strong>🎯Goal-Oriented:</strong> Every task I take on is aligned with clear objectives, ensuring tangible value.</li>
          </ol>
          </div>
        

        <div className="card p-6 glow">
          <h3 className="text-xl font-semibold text-indigo-300">Recent Highlights</h3>
          <ol className="mt-3 text-slate-300 space-y-2">
            <li>2025 — Built AI Clue Organizer for Cold Case System, Participated in IBM Z DATATHON</li>
            <li>2024 — Took part in SAP HackFest,creating and presenting a working project model</li>
            <li>2023 — Earned professional certfications, expanding knowledge in key technical domains</li>
          </ol>
        </div>
      </section>

      <section className="container mt-8 mb-16">
        <div className="card p-6 glow">
          <h3 className="text-xl font-semibold text-indigo-300">Let&apos;s collaborate</h3>
          <p className="mt-2 text-slate-300">Interested in working together? I&apos;m open to collaborations, internships, and freelance work.</p>
          <div className="mt-4"><Link to="/contact" className="px-4 py-2 bg-indigo-500 rounded">Contact Me</Link></div>
        </div>
      </section>
    </main>
  )
}
function Education() {
  const educationData = [
    {
      degree: "B.E. in Artificial Intelligence and Data Science",
      college: "Global Academy of Technology",
      year: "2023 – 2027",cgpa:"CGPA:   9.7"
    },
    {
      degree: "PUC – Science (PCMC)",
      college: "BMS PU College for Women",
      year: "2021 – 2023"
    },
    {
      degree: "SSLC",
      college: "Martin Luther English School",
      year: "2020 – 2021"
    }
  ];

  return (
    <section className="py-10  text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-300 mb-6 text-left">
          Education
        </h2>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className=" card p-5 glow  p-4 rounded-lg border border-indigo-400/20"
            >
              <div className="flex justify-between items-center ">
                <h3 className="text-lg font-semibold text-amber-300">{edu.degree}</h3>
                <span className="text-sm text-slate-300">{edu.year}</span>
              </div><div className="flex justify-between items-center ">
              <p className="text-slate-300 text-sm">{edu.college}</p> 
              <span className="text-sm text-slate-300 text-center">{edu.cgpa}</span>
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Skills(){
  const groups = [
       {title:'Programming ', items:['React.js','Java','Python','C','HTML & CSS','Rest API','SQL']},
    {title:' Tools', items:['React','JavaScript','Node.js','MySQL','Windows','VS Code']},
    {title:'AI ', items:['Machine Learning','NLP','Pandas','scikit-learn','Clustering techniques','TF-IDF']},
    {title:'Design & Visualization', items:['Tailwind CSS','Chart.js','Google Maps API','UI']},
    {title:'Soft Skills', items:['Communication','Leadership','Problem Solving']}
  ]
  return (
    <main className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-indigo-300 mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map(g=>(
            <div key={g.title} className="card p-5 glow">
              <h4 className="font-semibold text-amber-300">{g.title}</h4>
              <ul className="mt-3 text-slate-300">{g.items.map(i=> <li key={i}>• {i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

function Achievements(){
  const items = [
    {title:'NPTEL- Inroduction to C Programming', desc:'Completed certification demonstrating strong fundamentals in C programming', img:'/certi/C.jpg'}, 
    {title:'Infosys Springboard- Machine Learning', desc:'Acquired core understanding of machine learning principles and algorithms', img:'/certi/ml.jpg'},
    {title:'Great Learning- Generative AI', desc:'Developed hands-on experience in building generative AI models using Python', img:'/certi/AI.jpg'},
      {title:'PROTATVA_2025', desc:'Presented an innovative project at a state-level technical event', img:'/certi/protatva.jpg'},
        {title:'Simplilearn- Python Programming', desc:'Strengthened Python skills through structured training in logic and programming', img:'/certi/python.jpg'},
          {title:'GeeksforGeeks- JAVA ', desc:'Enhanced Java expertise covering OOP\'s concepts and application development', img:'/certi/java.jpg'},
            {title:'IBM Z DATATHON-2025', desc:'Engaged in a data-driven problem-sloving datathon focused on analytics', img:'/certi/ibm.jpg'}, 
          {title:'Udemy- Apache Spark for Java Developers', desc:'GAined hands-on experience in building distributed data processing applications using Spark\'s core API\'s with Java', img:'/certi/apache.jpg'}, 
          {title:'Mastering Full Stack Devlopment USing MERN', desc:'Completed an industry-focused program covering full-stack web development using MongoDB,Express.js,React.js,Node.js with hands-on experience at Vtricks Technologies', img:'/certi/mern_stack.jpg'}, 
                    ]
  return (
    <main className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-indigo-300 mb-6">Achievements & Certificates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(it=>(
            <div key={it.title} className="card p-4 glow flex gap-4 items-center">
              <div className="w-28 h-20 bg-slate-800 rounded-md flex items-center justify-center text-slate-400">Cert</div>
              <div>
                <h4 className="font-semibold text-amber-300">{it.title}</h4>
                <p className="text-slate-300 text-sm">{it.desc}</p>
                <div className="mt-4 flex gap-2">
                 <a href={it.img} target="_blank" rel="noreferrer" className="px-1 py-1 bg-sky-600 rounded text-white text-sm">View Certificate</a>
                 </div>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

function Projects(){
  const projects = [
    {title:'AI Clue Organizer for Cold cases',desc:'AI  based system that analyze crime cases descriptions,extract key clues across pre-crime,crime and post-crime phases , helps generate investigate leads using NLP and data driven pattern Mapping.',tech:['Python','NLP','Machine Learning','Visualization'],img:''},
    {title:'Traffic Monitoring System',desc:'It is a smart platform desgined to analyze ana manage real-time traffic conditions using data from sensors,user inputs,and machine learning models.It helps predict congestion levels,suggest optimal routes, and improve traffic flow efficiency.',tech:['Python','HTML&CSS','MySQL'],img:''},
    {title:'Face Shield- Secure Image Protection System for Social Platforms',desc:'FaceShield is an intelligent image-security system designed to protect users from AI-based image morphing, misuse, and identity manipulation on social media platforms. The System works by generating a pixel-shifted public version of every uploaded image while secureloy storing the original image in an encrypted vault.',tech:['Python PIL/Pillow','Pixel-Shift','AWS S3','HTML&CSS'],img:''},
  ]
  return (
    <main className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-indigo-300 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p=>(
            <article key={p.title} className="card p-4 glow">
              <h3 className="font-semibold text-amber-300">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
              <div className="mt-3 flex gap-2">{p.tech.map(t=> <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">{t}</span>)}</div>
              {/*<div className="mt-4 flex gap-2">
                <a className="px-3 py-1 bg-sky-600 rounded text-white text-sm">Demo</a>
           
              </div>*/}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

{/*function Contact(){
  const handleSend=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const message=e.target.message.value;
    const mailtoLinl='mailto:tejaswinigowda192005@gmail.com?subject=Messagefrom ${name}&body=Email:A${email}%0D%0A%0D%0A${message}';
    window.location.href=mailtoLink;
  };
  return(
    <main className="py-12">
    <div className="text-center container max-w-xl mx-auto">
      <h2 className="text-4xl font-bold py-4 text-left">Contact</h2>
      <form onSubmit={handleSend}className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded"required/>
        <input type="email" name="email" placeholder="Email" className="w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded"required/>
        <textarea name="message" placeholder="Message" className="w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded" rows="4"required/>
        <button type="submit" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded">Send</button>      </form>
        </div>
        </main>
  );
}*/}
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form)
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        alert("Something went wrong!");
      });
  };

  return (
    <section style={{ padding: "2rem" }}>
          <main className="py-12">
    <div className="text-center container max-w-xl mx-auto">
      <h1 className="text-4xl font-bold py-4 text-left">Contact Me</h1>

      <form onSubmit={handleSubmit}className="space-y-4">
        <input type="hidden" name="access_key" value="3386ae7d-994b-48bb-9a2e-223beb302b71" />

        <input type="text" name="name" placeholder="Your Name" className="w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded"required></textarea>

        <button type="submit" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded ">Send Message</button>
      </form></div></main>
    </section>
  );
}


export default function App(){
  const [mode,setMode] = useState('dark')
  return (
    <div className="min-h-screen">
      <Navbar mode={mode} setMode={setMode}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <footer className="mt-12">
        <div className="container text-center text-slate-400 py-6">© 2025 Tejaswini B • Built with ❤️</div>
      </footer>
    </div>
  )
}

// ---------- particles ----------
const pWrap = document.getElementById('particles');
if (pWrap) {
  for(let i=0;i<28;i++){
    const p = document.createElement('div');
    p.className='particle';
    p.style.left = Math.random()*100+'vw';
    p.style.top = 100+Math.random()*20+'vh';
    p.style.animationDuration = (8+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*8)+'s';
    pWrap.appendChild(p);
  }
}

// ---------- orb orbit particles ----------
const orbP = document.getElementById('orbParticles');
if (orbP) {
  for(let i=0;i<6;i++){
    const d = document.createElement('div');
    d.className='orb-particle';
    d.style.top='50%'; d.style.left='50%';
    d.style.animationDuration = (10+i*3)+'s';
    d.style.animationDelay = (i*-2)+'s';
    orbP.appendChild(d);
  }
}

// ---------- orb mouse-tilt ----------
const orbCore = document.getElementById('orbCore');
const orbStage = document.getElementById('orbStage');
if (orbStage && orbCore) {
  orbStage.addEventListener('mousemove', (e)=>{
    const rect = orbStage.getBoundingClientRect();
    const px = (e.clientX - rect.left)/rect.width - 0.5;
    const py = (e.clientY - rect.top)/rect.height - 0.5;
    orbCore.style.transform = `rotateY(${px*22}deg) rotateX(${-py*22}deg)`;
  });
  orbStage.addEventListener('mouseleave', ()=>{
    orbCore.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
}

// ---------- cursor glow ----------
const glow = document.getElementById('cursorGlow');
if (glow) {
  document.addEventListener('mousemove', e=>{
    glow.style.opacity=1;
    glow.style.left = e.clientX+'px';
    glow.style.top = e.clientY+'px';
  });
  document.addEventListener('mouseleave', ()=> glow.style.opacity=0);
}

// ---------- reveal on scroll ----------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ---------- typing effect ----------
const typedEl = document.getElementById('typedName');
if (typedEl) {
  const fullText = "Kashaf Batool";
  typedEl.textContent='';
  let ti=0;
  function typeLoop(){
    if(ti<=fullText.length){
      typedEl.textContent = fullText.slice(0,ti);
      typedEl.classList.add('typed-cursor');
      ti++;
      setTimeout(typeLoop, 90);
    } else {
      setTimeout(()=>typedEl.classList.remove('typed-cursor'), 900);
    }
  }
  setTimeout(typeLoop, 550);
}

// ---------- CV download ----------
const cvBtn = document.getElementById('cvBtn');
if (cvBtn) {
  cvBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Add your CV file link here — this button is ready to point to it.');
  });
}

// ---------- DESIGNS DATA ----------
const designs = [
  {title:"Bespoke", cat:"Logo Design", tag:"logo",  img:"asset/bespoke monogram.jpg",grad:"linear-gradient(160deg,#1a1330,#2d1b4d)", link:"https://www.instagram.com/p/Da0GHH8iHy4/?img_index=1"},
  {title:"Cafeteria", cat:"Logo Design", tag:"logo",  img:"asset/cafeteria.webp",grad:"linear-gradient(160deg,#e9e2d5,#cabf9e)", dark:true, link:"https://www.instagram.com/p/DBK1NE4oJLX/"},
  {title:"Creative Concept", cat:"Logo Design", tag:"logo", img:"asset/creative.jpg", grad:"linear-gradient(160deg,#1c1f18,#33402a)", link:"https://www.instagram.com/p/C-JIbpEIOhp/"},
  {title:"Crown Music", cat:"Logo Design", tag:"logo", img:"asset/crown music.jpg", grad:"linear-gradient(160deg,#6d28d9,#a855f7)", link:"https://www.instagram.com/p/C-s8Uhlhoht/"},
  {title:"EcoFusion", cat:"Logo Design", tag:"logo", img:"asset/EcoFusion.jpg", grad:"linear-gradient(160deg,#e5ded0,#c9bfa4)", dark:true, link:"https://www.instagram.com/p/DE5jd22IYIJ/"},
  {title:"Empowering Innovation", cat:"Logo Design", tag:"logo", img:"asset/Empowering innovation.jpg", grad:"linear-gradient(160deg,#141110,#2b211a)", link:"https://www.instagram.com/p/DFGcxXhoO0y/"},
  {title:"Innovation Hub", cat:"Logo Design", tag:"logo", img:"asset/innotech.jpg", grad:"linear-gradient(160deg,#141428,#232f72)", link:"https://www.instagram.com/p/C-GrG_sI8nv/"},
  {title:"Kings ", cat:"Logo Design", tag:"logo", img:"asset/kings.jpg", grad:"linear-gradient(160deg,#e7e2d2,#cdd9c1)", dark:true, link:"https://www.instagram.com/p/C-s5A0SoO4L/"},
  {title:"Mandala", cat:"Logo Design", tag:"logo", img:"asset/mandala-inspired monogram.jpg", grad:"linear-gradient(160deg,#101820,#1c2b3d)", link:"https://www.instagram.com/p/DbDNekoCO1r/?img_index=1"},
  {title:"Monogram Exploration", cat:"Logo Design", tag:"logo", img:"asset/monogram logo explorations.jpg", grad:"linear-gradient(160deg,#1e1023,#3d1a45)", link:"https://www.instagram.com/p/DaKqXHmCKnN/?img_index=1"},
  {title:"Nova Vibe", cat:"Logo Design", tag:"logo", img:"asset/NovaVibe.jpg", grad:"linear-gradient(160deg,#0e1a1c,#193a3d)", link:"https://www.instagram.com/p/DODcbZMDC-H/"},
  {title:"Pixel Perfect", cat:"Logo Design", tag:"logo", img:"asset/pixel.jpg", grad:"linear-gradient(160deg,#241414,#452323)", link:"https://www.instagram.com/p/C-QKvC2or0z/"},
];

const galleryGrid = document.getElementById('galleryGrid');
function renderDesigns(){
  if (!galleryGrid) return;
  galleryGrid.innerHTML = designs.map(d => `
    <div class="proj-card" data-tag="${d.tag}" data-title="${d.title.toLowerCase()}" onclick="window.open('${d.link}', '_blank')">
      <div class="proj-thumb" style="background-image:url('${d.img}'); background-size:cover; background-position:center;">
        ${!d.img ? `<span style="${d.dark ? 'color:#2a2a2a;' : ''}">${d.title}</span>` : ''}
      </div>
      <div class="proj-info">
        <div class="p-title">${d.title}</div>
        <div class="p-cat">${d.cat}</div>
      </div>
    </div>
  `).join('');
}
renderDesigns();

let activeDesignFilter='all', designQuery='';
function applyDesignFilter(){
  document.querySelectorAll('#galleryGrid .proj-card').forEach(card=>{
    const matchesFilter = activeDesignFilter==='all' || card.dataset.tag===activeDesignFilter;
    const matchesSearch = card.dataset.title.includes(designQuery);
    card.classList.toggle('hidden', !(matchesFilter && matchesSearch));
  });
}
const designFilters = document.getElementById('designFilters');
if (designFilters) {
  designFilters.addEventListener('click', e=>{
    const btn = e.target.closest('.filter-chip'); if(!btn) return;
    document.querySelectorAll('#designFilters .filter-chip').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    activeDesignFilter = btn.dataset.filter;
    applyDesignFilter();
  });
}
const designSearch = document.getElementById('designSearch');
if (designSearch) {
  designSearch.addEventListener('input', e=>{
    designQuery = e.target.value.toLowerCase();
    applyDesignFilter();
  });
}
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function(){
    this.textContent='All designs shown ✓';
    this.style.opacity='0.6'; this.style.pointerEvents='none';
  });
}

// ---------- STUDY MATERIAL DATA ----------
const materials = [
  {title:"Python for AI Beginners", sub:"Complete notes for Python basics to AI by MAM SHARDHA", color:"#8b5cf6", link:"https://drive.google.com/drive/folders/1LahwPSc6f9nkxBiRrz6LFUzkrg-Kzvov?usp=drive_link"},
  {title:"Data Structures in JAVA", sub:"Important notes for DS in JS by MRCET", color:"#38bdf8", link:"https://mrcet.com/downloads/digital_notes/CSE/II%20Year/CS/OBJECT%20ORIENTED%20PROGRAMMING%20THROUGH%20JAVA.pdf"},
  {title:"OPP notes in C++", sub:"Handwritten notes for Object-Oriented Programming in C++", color:"#34d399", link:"https://drive.google.com/file/d/1kVpWEamxeUE8HP277NMIP7a3o_QDLQgI/view"},
  {title:"ALL Basic Coding Notes Pack", sub:"Short notes (os, dbms,html & more)by Decodeleox ", color:"#fbbf24", link:"https://drive.google.com/drive/u/0/folders/1iZ8FOf8ve71wfFn-wvr-eA_6_hX72JTb"},
  {title:"SQL Handwritten Notes", sub:"Complete notes for SQL basics By Decodeleox", color:"#f87171", link:"https://drive.google.com/file/d/1W6MWFM0IOaYguINHndER-wGrjA7W1zwe/view"},
  {title:"Calculus Cheat Sheet", sub:"Comprehensive cheat sheet for calculus concepts", color:"#ec4899" , link:"https://drive.google.com/drive/u/0/folders/1maFI6BPhObzmMAylF1PtFimhgYxJzL29"},
  {title:"Calculus Semester Pack", sub:"Full semester calculus notes By Alsa Malik (IBA _Maths & Economics Student)", color:"#fbbf24", link:"https://drive.google.com/drive/folders/1hRPQj-989-K5vzwPcyF3I2Jg-qtUr74S?usp=drive_link"},
  {title:"Internet & its Protocols", sub:"various internet protocols", color:"#fb76", link:"https://drive.google.com/file/d/11PUlMuAy0VCSils0cexsqUQnxWov3vXy/view"},
  {title:"Data Communication", sub:"data communication concepts", color:"#fbb8", link:"https://drive.google.com/file/d/1ACy9LVSxAdp9YovutCyV8FTXnbTm8weC/view"},
  {title:"Application of ICT", sub:" Application of Information and Communication Technologies", color:"rgb(91, 110, 45)", link:"https://drive.google.com/file/d/1bdHFP1XKGzr_kyWBi5h8GcQ1EbpbJWTb/view"},
  {title:"Memory devices", sub:" learning resources", color:"rgb(177, 103, 173)", link:"https://drive.google.com/file/d/1m4Dh3bkqMhSGxKWGU_2qn4RETT-5G58A/view"},
  {title:"Internet ", sub:"Learn Internet", color:"rgb(94, 117, 151)", link:"https://drive.google.com/file/d/1IwLW9r6yeUsfedBNXbORzulFLt_udrNG/view"},
  {title:"Computer history ", sub:"One shot history ", color:"rgb(50, 139, 125)", link:"https://drive.google.com/file/d/1p2l0DbNXRDaREUxhVTRd2xm92xPcPdJd/view"},
  {title:"Blockchain Roadmap", sub:" 60 days blockchain learning", color:"rgb(50, 19, 59)", link:"https://docs.google.com/document/d/1s0QlxsH8_STDIiC-IzR10AlZnYclx61nJDBK1BCy7N0/edit?tab=t.0"},
  {title:"Python Basics Cheat Sheet", sub:" Basic Python concepts cheat sheet", color:"rgb(207, 185, 61)", link:"https://drive.google.com/file/d/15Csr6yANr0CDwQRha7W_FpWPxBPjxMO1/view"},
];

const materialList = document.getElementById('materialList');
function renderMaterials(){
  if (!materialList) return;
  materialList.innerHTML = materials.map(m=>`
    <div class="table-row" data-title="${m.title.toLowerCase()}">
      <div class="mat-title-cell">
        <div class="mat-icon" style="background:${m.color};"></div>
        <div><div class="mat-title">${m.title}</div><div class="mat-sub">${m.sub}</div></div>
      </div>
      <div><a href="${m.link}" target="_blank" class="dl-btn" style="text-decoration:none; display:inline-block;">Open File ↗</a></div>
    </div>
  `).join('');
}
renderMaterials();

let activeStudyFilter='all', studyQuery='';
function applyStudyFilter(){
  document.querySelectorAll('#materialList .table-row').forEach(row=>{
    const matchesFilter = activeStudyFilter==='all' || row.dataset.tag===activeStudyFilter;
    const matchesSearch = row.dataset.title.includes(studyQuery);
    row.classList.toggle('hidden', !(matchesFilter && matchesSearch));
  });
}
const studyFilters = document.getElementById('studyFilters');
if (studyFilters) {
  studyFilters.addEventListener('click', e=>{
    const btn = e.target.closest('.filter-chip'); if(!btn) return;
    document.querySelectorAll('#studyFilters .filter-chip').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    activeStudyFilter = btn.dataset.filter;
    applyStudyFilter();
  });
}
const studySearch = document.getElementById('studySearch');
if (studySearch) {
  studySearch.addEventListener('input', e=>{
    studyQuery = e.target.value.toLowerCase();
    applyStudyFilter();
  });
}
if (materialList) {
  materialList.addEventListener('click', e=>{
    if(e.target.classList.contains('dl-btn')){
      e.target.textContent='Downloaded ✓';
      setTimeout(()=>{e.target.textContent='Download ⬇';}, 1600);
    }
  });
}

// ---------- STATS COUNTER ANIMATION ----------
const stats = document.querySelectorAll('.stat .num');
let counted = false;

function animateStats() {
  if (counted) return;
  const section = document.querySelector('.stats-row');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    counted = true;
    stats.forEach(stat => {
      const text = stat.textContent;
      if (text === '∞') return;
      const target = parseInt(text.replace('+', ''));
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          stat.textContent = target + '+';
        } else {
          stat.textContent = current + '+';
        }
      }, 30);
    });
  }
}

window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// ---------- FLIP CARDS ON SCROLL ----------
const featureCards = document.querySelectorAll('.feature-card');
let cardsFlipped = false;

function flipCards() {
  if (cardsFlipped) return;
  const section = document.querySelector('.what-i-do');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    cardsFlipped = true;
    featureCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('flipped');
      }, index * 200);
    });
  }
}

window.addEventListener('scroll', flipCards);
window.addEventListener('load', flipCards);

// ============ PROJECTS SECTION ============
const projects = [
  {
    title: "AI Detection System",
    desc: "Python-based ML project that identifies AI-generated vs human-written text using NLP.",
    tech: ["Python", "Machine Learning", "NLP"],
    img: "asset/detector.jpg",
    link: "https://github.com/kbcreator-official/AI-detection-",
    tag: "Python"
  },
  {
    title: "Blood Bank Management System",
    desc: "C++ project to manage donor records, blood stock, and patient requests with file handling.",
    tech: ["C++", "OOP", "File Handling"],
    img: "asset/blood bank.jpg",
    link: "https://github.com/kbcreator-official/1st-semester-project",
    tag: "C++"
  },
  {
    title: "Robotics & Automation Internship",
    desc: "4 projects: Robotic Arm Kinematics, Quality Inspection, AMR Navigation, and PLC Conveyor Sorting.",
    tech: ["ROS2", "Python", "OpenCV", "A* Algorithm"],
    img: "asset/robotic.avif",
    link: "https://github.com/kbcreator-official/DecodeLabs-Internship",
    tag: "Robotics"
  },
  {
    title: "Web Development Internship",
    desc: "4-week internship at QWETRUM TECHNOLOGIES — built responsive landing pages, APIs, quiz apps, and a complete e-commerce website.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST APIs"],
    img: "asset/web-d.jpg",
    link: "https://github.com/kbcreator-official/QWETRUM-TECHNOLOGIES-internship-workspace",
    tag: "Web Dev"
  },
    {
    title: "SEO Analysis Dashboard",
    desc: "A web-based dashboard that analyzes website SEO metrics, keyword rankings, and traffic insights using REST APIs.",
    tech: ["HTML", "CSS", "JavaScript", "REST APIs", "Chart.js"],
    img: "asset/dashboard.jpg",
    link: "https://github.com/kbcreator-official/seo-analytics-dashboard",
    tag: "SEO Analysis"
  }
];

const projectsGrid = document.getElementById('projectsGrid');

function renderProjects() {
  if (!projectsGrid) {
    console.warn("projectsGrid element not found!");
    return;
  }
  projectsGrid.innerHTML = projects.map(p => `
    <div class="project-card" onclick="window.open('${p.link}', '_blank')">
      <div class="project-thumb" style="
        background-image: url('${p.img}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      ">
        <div class="project-overlay">
          <span class="project-tag">${p.tag}</span>
        </div>
      </div>
      <div class="project-info">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-link-icon">↗</div>
    </div>
  `).join('');
}

renderProjects();

// Scroll animation for project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, { threshold: 0.1 });

projectCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
  projectObserver.observe(card);
});
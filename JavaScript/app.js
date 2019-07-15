// Selectors
const nextBtn = document.querySelector('.next-btn');
const header = document.querySelector('.header-text');
const projectsBtn = document.querySelector('.projectsBtn');
const aboutBtn = document.querySelector('.aboutBtn');

// Listeners
nextBtn.addEventListener('click', lookingFor);

// ================ FUNCTIONS ==================

// Index Three
function lookingFor() {
  header.innerHTML =
    `  <div class="component">
         <h1>
           What are you looking for?
         </h1>
         <div class="buttons">
           <a href="/cv-eng.pdf" download>CV</a>
           <a class="prjectsBtn"
           onclick="projectPage()" href="#"> Projects </a>
           <a class="aboutBtn" onclick="aboutPage()" href="#">About</a>
         </div>
         <div
         class="back"><a href="index.html"
         class="back-btn">Back</a></div>
        </div>`;
}

// About page
function aboutPage() {
  header.innerHTML =
    `  <div class="component">
         <h1>
           About
         </h1>
         <div class="text">
          <ul>
             <li>I'm Italian.</li> 
             <li>I was an online poker player.</li> 
             <li>I lived in Malta, Mexico, Australia.</li> 
             <li>I live in Barcelona.</li> 
             <li>I love studying</li>
          </ul>
         </div>
         <div class="mail">
          <h5>Contact Me</h5>
          <a class="mail-address" href="mailto:leonardotononi@gmail.com">leonardotononi@gmail.com</a>
          <div class="social">
            <a href="https://github.com/Easaaa?tab=repositories" target="_blank">
             <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/leonardo-tononi/" target="_blank">
             <i class="fab fa-linkedin"></i>
            </a>
            <a href="https:/www.instagram.com/leonardo.tononi/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
           </div>
          </div>
         <div class="back">
           <a href="#" onclick="back(lookingFor)" class="back-btn">Back</a>
         </div>
        </div>`;
}

// Projects page
function projectPage() {
  header.innerHTML =
    `  <div class="component">
         <h1>
           Project
         </h1>
         <div class="text">
           <ul>
              <li></li>
              <li></li>
              <li></li>
           </ul>
         </div>
         <div class="back">
           <a href="#" onclick="back(lookingFor)" class="back-btn">Back</a>
         </div>
        </div>`;
}

// Back 
function back(page) {
  page();
}
let currentLanguage = localStorage.getItem("nammaFolsomLanguage") === "en" ? "en" : "kn";

const copy = {
kn: {
navBrand:"ನಮ್ಮ ಫೋಲ್ಸಮ್", navEvents:"ಕಾರ್ಯಕ್ರಮಗಳು", heroBrand:"ನಮ್ಮ ಫೋಲ್ಸಮ್", heroKicker:"ಫಾಲ್ಸಮ್ ಕನ್ನಡ ಕುಟುಂಬಗಳು",
heroTitle:"ನಮ್ಮ ಸಂಸ್ಕೃತಿ, ನಮ್ಮ ಭಾಷೆ, ನಮ್ಮ ಜನ — ಎಲ್ಲರೂ ಒಟ್ಟಾಗಿ!",
heroDescription:"ಕರ್ನಾಟಕದ ಹಬ್ಬಗಳನ್ನು ಒಟ್ಟಾಗಿ ಆಚರಿಸಲು, ಕನ್ನಡ ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸಲು, ಮತ್ತು ಫಾಲ್ಸಮ್‌ನ ಕನ್ನಡ ಕುಟುಂಬಗಳನ್ನು ಒಂದೇ ಸಮುದಾಯವಾಗಿ ಬೆಸೆಯಲು ನಿರ್ಮಿಸಿದ ನಮ್ಮ ವೇದಿಕೆ.",
explore:"ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಿ ↓", welcomeEyebrow:"ನಮ್ಮ ಸಮುದಾಯ", welcomeTitle:"ನಮಸ್ಕಾರ ಎಲ್ಲರಿಗೂ 🙏",
welcomeOne:"ನಮ್ಮ ಫೋಲ್ಸಮ್ ಕುಟುಂಬಗಳು ಕರ್ನಾಟಕದ ಹಬ್ಬಗಳನ್ನು ಒಟ್ಟಾಗಿ ಆಚರಿಸಲು, ಕನ್ನಡ ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸಲು, ಮತ್ತು ಫಾಲ್ಸಮ್ ಹಾಗೂ ಸುತ್ತಮುತ್ತಲಿನ ಕನ್ನಡ ಕುಟುಂಬಗಳನ್ನು ಒಂದೇ ಸಮುದಾಯವಾಗಿ ಬೆಸೆಯಲು ನಿರ್ಮಿಸಿದ ವೇದಿಕೆ.",
purposeEyebrow:"ನಮ್ಮ ಉದ್ದೇಶ", purposeTitle:"ಒಟ್ಟಾಗಿ ಉಳಿಸೋಣ, ಆಚರಿಸೋಣ, ಬೆಳೆಸೋಣ",
purposeItems:[
{icon:"🎉",title:"ಒಟ್ಟಾಗಿ ಹಬ್ಬಗಳನ್ನು ಆಚರಿಸೋಣ",text:"ಕರ್ನಾಟಕದ ಹಬ್ಬಗಳನ್ನು ಹೊರಾಂಗಣ ಮತ್ತು ಒಳಾಂಗಣ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಕುಟುಂಬವಾಗಿ ಒಂದಾಗಿ ಆಚರಿಸುವುದು."},
{icon:"🎭",title:"ಕನ್ನಡ ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಬೆಳೆಸೋಣ",text:"ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆ, ಜಾನಪದ ಕಲೆ, ಬಾಲ್ಯದ ಆಟಗಳು ಮತ್ತು ನಮ್ಮ ಕನ್ನಡ ಸಂಸ್ಕೃತಿಯನ್ನು ಉಳಿಸಿ ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಕೊಂಡೊಯ್ಯುವುದು."},
{icon:"🤝",title:"ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಬೆಳೆಸೋಣ",text:"ಫಾಲ್ಸಮ್ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಇನ್ನಷ್ಟು ಕನ್ನಡ ಕುಟುಂಬಗಳನ್ನು ಪರಿಚಯಿಸಿ, ಎಲ್ಲರನ್ನೂ ಒಂದೇ ಸಮುದಾಯವಾಗಿ ಬೆಸೆಯುವುದು."}],
invite:"ನಿಮಗೆ ಗೊತ್ತಿರುವ ಕನ್ನಡ ಕುಟುಂಬಗಳನ್ನು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಸಿ. ನಮ್ಮ ಸಂಸ್ಕೃತಿ, ನಮ್ಮ ಭಾಷೆ ಮತ್ತು ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಒಟ್ಟಾಗಿ ಬೆಳೆಸೋಣ. 🙏",
calendarEyebrow:"ಸಮುದಾಯದ ಕ್ಯಾಲೆಂಡರ್",calendarTitle:"ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳು",calendarText:"ಫಾಲ್ಸಮ್ ಪ್ರದೇಶದ ಕನ್ನಡ ಕುಟುಂಬಗಳೊಂದಿಗೆ ವರ್ಷಪೂರ್ತಿ ನಡೆಯುವ ಹಬ್ಬಗಳು, ಕುಟುಂಬ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮುದಾಯ ಕೂಟಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ.",
completed:"ಪೂರ್ಣಗೊಂಡಿದೆ",planning:"ಯೋಜನೆಯಲ್ಲಿದೆ",viewEvent:"ಕಾರ್ಯಕ್ರಮ ನೋಡಿ →",comingSoon:"ದಿನಾಂಕ ಮತ್ತು ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ",
dateLabel:"ದಿನಾಂಕ:",locationLabel:"ಸ್ಥಳ:",aboutLabel:"ಕಾರ್ಯಕ್ರಮದ ಬಗ್ಗೆ",highlightsLabel:"ಮುಖ್ಯಾಂಶಗಳು",fullDetails:"ಪೂರ್ಣ ವಿವರಗಳನ್ನು ನೋಡಿ →",rsvp:"ಆಸಕ್ತಿ ತಿಳಿಸಿ",
footer:"ನಮ್ಮ ಸಂಸ್ಕೃತಿ, ನಮ್ಮ ಭಾಷೆ, ನಮ್ಮ ಜನ — ಎಲ್ಲರೂ ಒಟ್ಟಾಗಿ!"
},
en: {
navBrand:"Namma Folsom",navEvents:"Events",heroBrand:"Namma Folsom",heroKicker:"Kannada Families of Folsom",
heroTitle:"Our culture. Our language. Our community — together.",
heroDescription:"Namma Folsom brings Kannada families together to celebrate Karnataka's festivals, preserve and share Kannada culture, and build lasting connections among families in and around Folsom.",
explore:"Explore Events ↓",welcomeEyebrow:"Our Community",welcomeTitle:"Welcome to Namma Folsom",
welcomeOne:"Namma Folsom is a community created to bring Kannada families together through our festivals, culture, traditions, friendships, and shared experiences.",
purposeEyebrow:"Our Purpose",purposeTitle:"Celebrate, preserve, and grow together",
purposeItems:[
{icon:"🎉",title:"Celebrate together",text:"Bring families together for Karnataka's festivals through both outdoor and indoor community gatherings."},
{icon:"🎭",title:"Preserve Kannada culture",text:"Share spiritual traditions, folk arts, childhood games, and Kannada culture with our families and future generations."},
{icon:"🤝",title:"Grow our community",text:"Connect more Kannada families in Folsom and surrounding areas and build a welcoming community together."}],
invite:"Know another Kannada family in the area? Invite them to join us as we grow our culture, language, and community together. 🙏",
calendarEyebrow:"Community Calendar",calendarTitle:"Our Events",calendarText:"Join Kannada families across the Folsom area for celebrations, family gatherings, and community events throughout the year.",
completed:"Completed",planning:"Planning",viewEvent:"View Event →",comingSoon:"Date & details coming soon",
dateLabel:"Date:",locationLabel:"Location:",aboutLabel:"About This Event",highlightsLabel:"Event Highlights",fullDetails:"View Full Event Details →",rsvp:"RSVP Interest",
footer:"Celebrating Kannada culture and community in Folsom, California."
}};

const events = [
{icon:"🍂",title:{kn:"ಶರತ್ಕಾಲದ ಪಿಕ್ನಿಕ್ 2026",en:"Fall Day Picnic 2026"},date:{kn:"ಶನಿವಾರ, ಸೆಪ್ಟೆಂಬರ್ 12, 2026",en:"Saturday, September 12, 2026"},location:{kn:"ಹೆನ್ನಿಂಗ್ಸನ್ ಲೋಟಸ್ ಪಾರ್ಕ್",en:"Henningsen Lotus Park"},description:{kn:"ನಮ್ಮ ಫೋಲ್ಸಮ್ ಕುಟುಂಬಗಳು ನೇರ ಅಡುಗೆ, ಕುಟುಂಬದ ಆಟೋಟಗಳು ಮತ್ತು ಒಟ್ಟಿನ ಸಂಭ್ರಮದೊಂದಿಗೆ ಸುಂದರವಾದ ಶರತ್ಕಾಲದ ದಿನವನ್ನು ಆಚರಿಸಿದವು.",en:"Namma Folsom families gathered for a beautiful Fall Day Picnic with live outdoor cooking, family activities, games, and community bonding."},details:{kn:["🍳 ನೇರ ಅಡುಗೆ","🎯 ಕುಟುಂಬದ ಆಟಗಳು","🧒 ಮಕ್ಕಳ ಚಟುವಟಿಕೆಗಳು","📸 ಸಮುದಾಯದ ಗ್ರೂಪ್ ಫೋಟೋ"],en:["🍳 Live outdoor cooking","🎯 Family games","🧒 Kids activities","📸 Community group photo"]},link:"events/fall-2026.html",completed:true,featured:true},
{icon:"🪔",title:{kn:"ದೀಪಾವಳಿ 2026",en:"Deepavali 2026"},date:{kn:"ಶರತ್ಕಾಲ 2026",en:"Fall 2026"},location:{kn:"ಫಾಲ್ಸಮ್, ಕ್ಯಾಲಿಫೋರ್ನಿಯಾ",en:"Folsom, California"},description:{kn:"ಆಹಾರ, ಹಬ್ಬದ ಸಂಭ್ರಮ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಮುದಾಯದೊಂದಿಗೆ ನಮ್ಮ ಫೋಲ್ಸಮ್ ಕುಟುಂಬಗಳ ದೀಪಾವಳಿ ಆಚರಣೆ.",en:"Celebrate Deepavali with Namma Folsom through food, festivities, culture, and time together as a community."},details:{kn:["🪔 ದೀಪಾವಳಿ ಆಚರಣೆ","🍽️ ಸಮುದಾಯದ ಊಟ","🎉 ಕುಟುಂಬದ ಚಟುವಟಿಕೆಗಳು","✨ ಸಾಂಸ್ಕೃತಿಕ ಸಂಭ್ರಮ"],en:["🪔 Deepavali celebration","🍽️ Community food","🎉 Family activities","✨ Cultural festivities"]}},
{icon:"🌾",title:{kn:"ಸಂಕ್ರಾಂತಿ 2027",en:"Sankranthi 2027"},date:{kn:"ಜನವರಿ 2027",en:"January 2027"},location:{kn:"ಫಾಲ್ಸಮ್, ಕ್ಯಾಲಿಫೋರ್ನಿಯಾ",en:"Folsom, California"},description:{kn:"ಕನ್ನಡ ಸಂಪ್ರದಾಯಗಳು, ಆಹಾರ ಮತ್ತು ಕುಟುಂಬದ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಸುಗ್ಗಿಯ ಹಬ್ಬ ಸಂಕ್ರಾಂತಿಯನ್ನು ಒಟ್ಟಾಗಿ ಸ್ವಾಗತಿಸೋಣ.",en:"Welcome the harvest season together with Kannada traditions, food, activities, and family celebrations."},details:{kn:["🌾 ಸಂಕ್ರಾಂತಿ ಸಂಪ್ರದಾಯಗಳು","🍽️ ಸಮುದಾಯದ ಊಟ","👨‍👩‍👧‍👦 ಕುಟುಂಬದ ಕೂಟ","🎯 ಆಟಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು"],en:["🌾 Sankranthi traditions","🍽️ Community meal","👨‍👩‍👧‍👦 Family gathering","🎯 Activities and games"]}},
{icon:"🌸",title:{kn:"ಯುಗಾದಿ 2027",en:"Ugadi 2027"},date:{kn:"ವಸಂತ 2027",en:"Spring 2027"},location:{kn:"ಫಾಲ್ಸಮ್, ಕ್ಯಾಲಿಫೋರ್ನಿಯಾ",en:"Folsom, California"},description:{kn:"ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ, ಕನ್ನಡ ಸಂಸ್ಕೃತಿ, ಕುಟುಂಬದ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಸಮುದಾಯದೊಂದಿಗೆ ಕನ್ನಡ ಹೊಸ ವರ್ಷ ಯುಗಾದಿಯನ್ನು ಆಚರಿಸೋಣ.",en:"Celebrate the Kannada New Year with traditional food, culture, family activities, and community."},details:{kn:["🌸 ಕನ್ನಡ ಹೊಸ ವರ್ಷದ ಆಚರಣೆ","🍽️ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ","🎉 ಕುಟುಂಬದ ಚಟುವಟಿಕೆಗಳು","🤝 ಸಮುದಾಯದ ಕೂಟ"],en:["🌸 Kannada New Year celebration","🍽️ Traditional food","🎉 Family activities","🤝 Community gathering"]}}
];

function val(e,f){return e[f]&&typeof e[f]==="object"?e[f][currentLanguage]:e[f];}

function renderNavigation(){
    const list = document.getElementById("eventList");
    list.innerHTML = "";

    const upcoming = events
        .map((event, index) => ({event, index}))
        .filter(item => !item.event.completed);

    const completed = events
        .map((event, index) => ({event, index}))
        .filter(item => item.event.completed);

    function addGroup(title, items, statusText, statusClass) {
        if (!items.length) return;

        const heading = document.createElement("li");
        heading.className = "sidebar-group-title";
        heading.textContent = title;
        list.appendChild(heading);

        items.forEach(({event, index}) => {
            const li = document.createElement("li");
            li.className = "sidebar-event-item";

            const name = document.createElement("span");
            name.className = "sidebar-event-name";
            name.textContent = `${event.icon} ${val(event, "title")}`;

            const status = document.createElement("span");
            status.className = `sidebar-status ${statusClass}`;
            status.textContent = statusText;

            li.appendChild(name);
            li.appendChild(status);

            li.onclick = () => {
                showEvent(index);
                closeSidebar();
            };

            list.appendChild(li);
        });
    }

    if (currentLanguage === "kn") {
        addGroup("ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು", upcoming, "ಯೋಜನೆಯಲ್ಲಿದೆ", "planning");
        addGroup("ಪೂರ್ಣಗೊಂಡ ಕಾರ್ಯಕ್ರಮಗಳು", completed, "ಪೂರ್ಣಗೊಂಡಿದೆ", "completed");
    } else {
        addGroup("UPCOMING", upcoming, "IN PLANNING", "planning");
        addGroup("COMPLETED", completed, "COMPLETED", "completed");
    }
}

function renderStaticCopy(){const t=copy[currentLanguage];document.documentElement.lang=currentLanguage;document.body.classList.toggle("kannada-mode",currentLanguage==="kn");["navBrandText","navEventsLabel","heroBrand","heroKicker","heroTitle","heroDescription","exploreButton","footerBrand","footerText"].forEach(()=>{});document.getElementById("navBrandText").textContent=t.navBrand;document.getElementById("navEventsLabel").textContent=t.navEvents;document.getElementById("heroBrand").textContent=t.heroBrand;document.getElementById("heroKicker").textContent=t.heroKicker;document.getElementById("heroTitle").textContent=t.heroTitle;document.getElementById("heroDescription").textContent=t.heroDescription;document.getElementById("exploreButton").textContent=t.explore;document.getElementById("footerBrand").textContent=t.navBrand;document.getElementById("footerSubbrand").textContent=currentLanguage==="kn"?"Namma Folsom":"ನಮ್ಮ ಫೋಲ್ಸಮ್";document.getElementById("footerText").textContent=t.footer;document.getElementById("kannadaButton").classList.toggle("active",currentLanguage==="kn");document.getElementById("englishButton").classList.toggle("active",currentLanguage==="en");}
function purposeHTML(items){return items.map(x=>`<article class="purpose-card"><div class="purpose-icon">${x.icon}</div><h3>${x.title}</h3><p>${x.text}</p></article>`).join("");}
function eventCardsHTML(){const t=copy[currentLanguage];return events.map((e,i)=>`<article class="calendar-card${e.featured?" featured-event":""}"><div class="event-icon">${e.icon}</div><span class="event-status${e.completed?"":" planning"}">${e.completed?t.completed:t.planning}</span><h3>${val(e,"title")}</h3><p class="event-date">${val(e,"date")}</p><p>${val(e,"description")}</p>${e.link?`<a href="${e.link}" class="event-link">${t.viewEvent}</a>`:`<button class="text-link" type="button" onclick="showEvent(${i})">${t.comingSoon} →</button>`}</article>`).join("");}
function showHome(){const t=copy[currentLanguage];document.getElementById("eventContent").innerHTML=`<section class="welcome-section"><span class="eyebrow">${t.welcomeEyebrow}</span><h2>${t.welcomeTitle}</h2><p>${t.welcomeOne}</p></section><section class="purpose-section"><div class="section-heading"><span class="eyebrow">${t.purposeEyebrow}</span><h2>${t.purposeTitle}</h2></div><div class="purpose-grid">${purposeHTML(t.purposeItems)}</div><div class="community-invite">${t.invite}</div></section><section class="upcoming-events" id="events"><div class="section-heading"><span class="eyebrow">${t.calendarEyebrow}</span><h2>${t.calendarTitle}</h2><p>${t.calendarText}</p></div><div class="event-grid">${eventCardsHTML()}</div></section>`;}


function showEvent(i){
    const e = events[i],
          t = copy[currentLanguage],
          d = val(e,"details") || [];

    const statusText = e.completed ? t.completed : t.planning;
    const statusClass = e.completed ? "completed" : "planning";

    document.getElementById("eventContent").innerHTML =
        `<div class="event-card">
            <div class="event-icon">${e.icon}</div>
            <span class="event-status ${statusClass}">${statusText}</span>
            <h2>${val(e,"title")}</h2>
            <p><strong>${t.dateLabel}</strong> ${val(e,"date")}</p>
            <p><strong>${t.locationLabel}</strong> ${val(e,"location")}</p>
            <h3>${t.aboutLabel}</h3>
            <p>${val(e,"description")}</p>
            ${d.length ? `<h3>${t.highlightsLabel}</h3><ul>${d.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
            ${e.link ? `<a href="${e.link}" class="event-link">${t.fullDetails}</a>` : ""}
            ${e.rsvp ? `<a href="${e.rsvp}" class="rsvp-btn">${t.rsvp}</a>` : ""}
        </div>`;

    document.getElementById("community-content")
        .scrollIntoView({behavior:"smooth"});
}

function setLanguage(l){currentLanguage=l;localStorage.setItem("nammaFolsomLanguage",l);renderStaticCopy();renderNavigation();showHome();}
function closeSidebar(){document.getElementById("eventSidebar").classList.remove("open");document.getElementById("sidebarOverlay").classList.remove("show");document.getElementById("sidebarToggle").setAttribute("aria-expanded","false");}function toggleSidebar(){const s=document.getElementById("eventSidebar"),open=!s.classList.contains("open");s.classList.toggle("open",open);document.getElementById("sidebarOverlay").classList.toggle("show",open);document.getElementById("sidebarToggle").setAttribute("aria-expanded",String(open));}window.onload=function(){document.getElementById("homeLink").onclick=()=>{showHome();closeSidebar();};document.getElementById("homeLink").onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();showHome();closeSidebar();}};document.getElementById("kannadaButton").onclick=()=>setLanguage("kn");document.getElementById("englishButton").onclick=()=>setLanguage("en");document.getElementById("exploreButton").onclick=()=>document.getElementById("events").scrollIntoView({behavior:"smooth"});document.getElementById("sidebarToggle").onclick=toggleSidebar;document.getElementById("sidebarOverlay").onclick=closeSidebar;renderStaticCopy();renderNavigation();showHome();};

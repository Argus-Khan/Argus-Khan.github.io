(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();document.querySelector("#navB").innerHTML=`
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20">
                <div class="flex items-center">
                    <a href="#" class="flex-shrink-0 flex items-center z-10">
                        <img class="h-10 w-auto" src="resources/1024px-Video-Game-Controller-Icon-IDV-green.svg.png" alt="Logo">
                        <!-- <span class="ml-2 text-xl font-bold text-white">Packits</span> -->
                    </a>
                </div>
                <div class="flex items-center">
                                  <div class="hidden md:ml-10 md:flex md:space-x-5 text-[#94e2d5]">
                       
                        <a href="#" class=" hover:text-gray-200 px-3 py-2 text-sm font-medium">
                            Projects
                        </a>
                       
                        <a href="#" class="hover:text-gray-200 px-3 py-2 text-sm font-medium">
                            Contact
                        </a>
                    </div>
      
              <div class="hidden md:ml-4 md:flex md:items-center md:space-x-4">
                        
                        <a href="#" class="nerd-font text-indigo-600 py-1 px-3 rounded-full text-3xl">󰞦</a>
                    </div>
                    <div class="flex items-center md:hidden" x-data="{navExpand: false}">
                        <button id="navToggle" type="button" class="z-10 inline-flex items-center justify-center p-2 rounded-full text-[#b4befe] hover:text-[#b4befe] hover:bg-gray-700 shadow-lg shadow-[#89dceb]/50" aria-expanded="false" x-on:click="navExpand = ! navExpand">
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                
                <div x-show="navExpand" id="mobile-menu">

            <div id="dropdownNav" class="px-5 pt-25 pb-10 space-y-1 absolute top-0 left-0 w-screen border-b-2 border-[#74c7ec] rounded-b-2xl dropdownNav shadow-lg shadow-[#89dceb]/50 text-center z-5">
                <a href="#" class="text-gray-300 hover:text-white hover:bg-[#45475a] block px-3 py-2 rounded-md text-base font-medium">
                    About
                </a>
                <a href="#" class="text-gray-300 hover:text-white hover:bg-[#45475a] block px-3 py-2 rounded-md text-base font-medium">
                    Projects
                </a>
                <a href="#" class="text-gray-300 hover:text-white hover:bg-[#45475a] block px-3 py-2 rounded-md text-base font-medium">
                    Contact Me
                </a>
            </div>
        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <!-- Mobile menu, show/hide based on menu state -->
      </nav>
`;document.querySelector("#intro").innerHTML=`
    <div class="text-left nerd-font pt-25 px-10 xl:px-50 sm:px-10 md:px-25 w-screen fixed sm:top-10 md:top-10 lg:top-15 xl:top-60" x-data="{ mesg: false }">
      <h1 class="text-4xl text-[#f5c2e7] ">Hey there! I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-wiggle">Argus</span>.</h1>
      <p class="text-[#cba6f7] mt-5">I am a Computer Science student (final year) with brief professional experience as a Junior Front-End Developer, and an occasional Indie Game Developer.

        <span x-show="mesg" x-transition> Currently I'm pursuing my DevOps certifications as well as Full-Stack Dev Certifications.
<br>
Outside of making Linux tools and trinkets or spending days configuring my Arch installation,
I enjoy writing stories and poetry in addition to enjoying cooking, baking and learning to play
a guitar.</span><br>
        <button @click="mesg = ! mesg" class="text-[#cdd6f4] rounded-lg animate-wiggle "> <p x-show="!mesg" x-transition>more...</p> <p x-show="mesg" x-transition>...less</p>
        </button>
<br>     
</p> 
      <h1 id="typewriter" class="text-[#a6e3a1] mt-5 text-3xl fixed bottom-20 sm:bottom-10 md:bottom-20 lg:bottom-25 xl:bottom-90 animate-blinking" ></h1>
</div>
`;const l=a=>new Promise(s=>setTimeout(s,a)),p=" +    +    = 󱅾 Coding...";let o=0,n="",i=!1;async function c(){n=p,i?(document.querySelector("#typewriter").textContent=n.substring(0,o-1),o--,o==0&&(await l(1e3),i=!1)):(document.querySelector("#typewriter").textContent=n.substring(0,o+1),o++,o==n.length&&(await l(3e3),i=!0)),setTimeout(c,30)}c();

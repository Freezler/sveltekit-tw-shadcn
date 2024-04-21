<script lang="ts">
  import Button from "../../button/button.svelte";

  let showMenu = false;

  function toggleNavbar() {
    if(!showMenu) {
      showMenu = true;
    } else {
      showMenu = false;
    }
  }

  function closeNavbar() {
    showMenu = false;
    
  }
 

  const bodyClick = (e: Event) => {
    
    if(showMenu) {
      showMenu = false;
    }
  }
  
</script>

<div class="fixed top-0 left-0 z-50 w-full header" on:change={closeNavbar}>
  <div class="w-screen bg-transparent">
    <nav
      class="px-6 py-8 mx-auto md:flex md:justify-between md:items-end">
      <div class="flex items-center justify-between">
        <a
          class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
          href="/home"
          >mijnProject
        </a>
        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden z-1000">
          <Button
            on:click={toggleNavbar}
            type="button"
            class="flex text-white button-one md:hidden focus:outline-none focus:text-gray-400"
            aria-controls="primary-navigation"
            aria-pressed="true">
            <svg
              class="hb"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              stroke="#eee"
              stroke-width=".8"
              fill="rgba(0,0,0,0)"
              stroke-linecap="round"
              style="cursor: pointer">
              <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                <animate
                  dur="0.3s"
                  attributeName="d"
                  values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                  fill="freeze"
                  begin="start.begin" />
                <animate
                  dur="0.3s"
                  attributeName="d"
                  values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                  fill="freeze"
                  begin="reverse.begin" />
              </path>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="1s"
                  id="reverse"
                  attributeName="width"
                  begin="click" />
              </rect>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="0.5s"
                  id="start"
                  attributeName="width"
                  values="10;0"
                  fill="freeze"
                  begin="click" />
                <animate
                  dur="0.5s"
                  attributeName="width"
                  values="0;10"
                  fill="freeze"
                  begin="reverse.begin"
                  direction="both" />
                  
              </rect>
            </svg>
          </Button>
        </div>
      </div>

      <div
        class="absolute md:top-0 left-0 z-100 right-0 flex-col grid place-items-center justify-center items-center bg-blue-00/60 h-2/3  md:h-full md:bg-transparent md:flex md:flex-row md:items-center md:justify-center space-x-0 md:space-x-4 md:mx-auto {showMenu
          ? 'flex'
          : 'hidden'}">
        <div
          class="font-larger flex flex-col py-6 w-[80vw] h-[content] items-center justify-center md:flex-row bg-stone-900/60 md:bg-transparent md:space-x-4 rounded-xl">
          <a class="text-white hover:text-blue-400" href="/" 
            >Home</a>
          <a class="text-white hover:text-blue-400" href="/blogs"
            >Blog</a>
          <a
            class="text-white hover:text-blue-400"
            href="/contact">Contact</a>
          <a class="text-white hover:text-blue-400" href="/about"
            >About me</a>
          <a
            class="px-3 py-1 text-sm text-white border-2 rounded-md md:absolute bg-fuchsia-500/50 right-4 hover:text-blue-400"
            href="/login-create"
            ><button type="submit">Log in-or-sign up</button></a>
        </div>
      </div>
    </nav>
  </div>
</div>

<style>
  .hb {
    width: 40px;
    height: 40px;
    z-index: 1000;
  }
  .header {
    view-transition-name: header;
  }
</style>

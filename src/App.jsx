
import './App.css'

function App() {
  return (
    <>
      <header class="fixed top-0 mt-10 mb-5 w-full p-2 flex justify-around z-100">
        <a href="#" class="text-3xl mx-[-450px] font-extrabold cursor-pointer transition-transform duration-500 hover:scale-110">My Portfolio</a>
        <nav class='size-7 mx-[-150px] text-white font-medium flex gap-10 mr-10'>
            <a href="#" CLASS='text-3xl transition-all duration-500 hover:scale-110'>Home</a>
            <a href="#" CLASS='text-3xl transition-all duration-500 hover:scale-110'>About</a>
            <a href="#" CLASS='text-3xl transition-all duration-500 hover:scale-110'>Skills</a>
            <a href="#" CLASS='text-3xl transition-all duration-500 hover:scale-110'>Projects</a>
            <a href="#" CLASS='text-3xl transition-all duration-500 hover:scale-110'>Contacts</a>
        </nav>
    </header>
    <section class="home flex justify-center items-center mx-60 ">
        <div>
            <img src="/homepic.jpg" alt="Home Page Picture" class="rounded-full shadow-lg w-[28vw] mx-12"></img>
        </div>
        <div class="home-content text-center">
            <h1 class="text-6xl font-bold leading-tight">Hello! It's <span class="text-slategray">Adrian <br />Adora</span></h1>
            <h3 class="typing-text text-3xl font-semibold">I'm a <span></span></h3>
            <div class="social-icons flex center justify-center mt-5">
                <a href="#" class="text-2xl mx-2"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="text-2xl mx-2"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="text-2xl mx-2"><i class="fa-brands fa-discord"></i></a>
                <a href="#" class="text-2xl mx-2"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </section>
    </>
  )
}

export default App

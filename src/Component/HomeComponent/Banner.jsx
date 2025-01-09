import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="lg:py-16 py-6 relative">
      <div className="container mx-auto">
    <div className="absolute inset-0 blur-[60px] bg-gradient-to-l from-orange-600/20 via-orange-600/5 to-orange-600/0"></div>
    <div className="container relative">
        <div className="grid lg:grid-cols-2 items-center">
            <div className="py-20 ">
                <div className="flex items-center justify-center lg:justify-start order-last lg:order-first z-10">
                    <div className="text-center lg:text-start">
                        <h1 className="lg:text-6xl/normal md:text-5xl/snug text-3xl font-bold text-default-950 capitalize mb-5">We Offer
                            <span className="inline-flex relative">
                                <span>Delicious</span>
                                <img src="" />
                            </span>
                            <span className="text-primary">Food</span> And Quick Service
                        </h1>
                        <p className="text-lg text-default-700 font-medium mb-8 md:max-w-md lg:mx-0 mx-auto">
                          Imagine you don’t need a diet because we provide healthy and delicious food for you!.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-5 mt-10">
                            <Link to={'/shop'}  className="py-3 px-10 font-medium text-white bg-button_Color rounded-full hover:bg-orange-400 transition-all cursor-pointer shadow-lg shadow-slate-200">
                                Order Now
                            </Link>
                            <a href="javascript:void(0)" className="text-primary flex items-center">
                                <span className="h-14 w-14 rounded-full border-2 border-e-transparent border-yellow-400 flex items-center justify-center me-2 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="play" className="lucide lucide-play h-6 w-6 fill-primary"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </span>
                                <span className="font-semibold">How to Order</span>
                            </a>
                        </div>
                        {/* <div className="mt-14">
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <div className="flex items-center -space-x-1">
                                    <div className="h-12 w-12">
                                        <img className="h-full w-full rounded-full object-cover object-center ring ring-default-50" src="./Yum - Multipurpose Food Tailwind CSS Template_files/avatar1-25906796.png" />
                                    </div>
                                    <div className="h-12 w-12">
                                        <img className="h-full w-full rounded-full object-cover object-center ring ring-default-50" src="./Yum - Multipurpose Food Tailwind CSS Template_files/avatar2-189b0d01.png" />
                                    </div>
                                    <div className="h-12 w-12">
                                        <img className="h-full w-full rounded-full object-cover object-center ring ring-default-50" src="./Yum - Multipurpose Food Tailwind CSS Template_files/avatar3-2bbdc0fd.png" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-base font-medium text-default-800">Our Happy Customer</h1>
                                    <p className="text-base text-default-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" className="lucide lucide-star h-4 w-4 inline text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 4.7 <span className="text-default-500 text-sm">(13.7k Reviews)</span></p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-center py-20">
                <span className="absolute top-0 start-0 text-3xl -rotate-[40deg]">🔥</span>
                <span className="absolute top-0 end-[10%] -rotate-12 h-14 w-14 inline-flex items-center justify-center bg-yellow-400 text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock-3" className="lucide lucide-clock-3 h-6 w-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16.5 12"></polyline></svg>
                </span>
                <span className="absolute top-1/4 end-0 -rotate-12 h-4 w-4 inline-flex items-center justify-center bg-primary text-white rounded"></span>
                <div className="absolute bottom-1/4 -end-0 2xl:-end-24 hidden md:block lg:hidden xl:block">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAACpCAMAAACCueo0AAAAQlBMVEUAAAD/xwD/xwD/ywD/xwD/xgD/xwD/xwD/xgD/xgD/xwD/xwD/xwD/xwD/xQD/wwD/xwD/xwD/xwD/yAD/xgD/xwBcJNpgAAAAFXRSTlMAIN8Q72C/nzCQcFDPQIBAgI+vf6De6s6XAAADjklEQVRo3u2a626jMBCFPb7hGzQhnfd/1XUEuwQoWzscS6ma86eVqn6ZwZ5rEEKJBuqkgzMNM18VGioz1Quw6JO5E3CZoMRPUidvcCbdbwGcmjI1EZrqM1XCqZdM1R9oatQZG9FUki0CgZKO4rfLjVc81LY4rsAtqJcfRr01oRo49RNfD7MG/7NKVwuFq4IzI7OFQ/ulxoKva4BTPzPVoaEqMUv4YZFudVgfcOoF/1SzYi9+uz4inkmnw1U5Y4Kaf51+ulP3SoVR8l2juEsya3uNTownAuvGk+YKrXiWzFAenoTKO0GnsZvdvyTN/6TpOWiQNmz+VfWDzWT7TIel/nsOvVH3HGBsMnX9fvi+GbxLFmNddtB/nwS9rMCSLJmhFAky5dixYi7L2KLCZeoK0SVjU8ntHOoWDzIWGFrqfJdMeRk2xclKP1pjxKHI2tJcoR+TlQEN85fHWI2gYb7P/qv1MA+otHKVrHsNGQ38OpxJfk0lm1yV/1JsqfsEF6vypMoOqy3V76eQutnGstx5SntoXYyqWHCnJyhA7aEGMjCHFOFQ2hRwd8+4Fbp+1VUpuW7ila6DMvNXQbEpMdHTeajwS6qpFy1xunsAw4nkZw+nGHr+Bo5F6yylqnLfcDxwrRJNqFkzfxwW0G51U3XNQvz4j9saWZ5Pu+IaaYtNNar041vMtJ8Fplb346RBa3PJdvVUZUG/na7fJwb1ELkFUJLftrF25TF5B+jht71GkZ3sYNuxhWmKG9hF5nronStgzsG5ZrjjZ6YyU5uyfON2gaXDUcxJ91yr7zKVuy+NpUCl6TbuT2OLVTdTdUdGv3fT36npXyQHC1hLzld8nqtnGcRyb3BTxE2yUUC/ltGpMy+xl29hhAGvcJfch1YCV7sl9cO070te+yuMv+3by5+TanROVsDlpRNvvbrcQHAmyQb36cacGhjKpoGhEm4oNzC0a2MoPuk1eStIsyY4NHbvN42Aoi4A4jEe7L5PqN9syq7MTIB4DJvvLwdE7KR1F+8BLdgmyp2FZCN8G6J5MRX5YjH8LeBxgmoF7RVnDWjv0UdlZ6YmZCWaFRp4303bBaj3Uk3rH2mA3pMQYcYbAnk/CLL8V/J2Epvm9z6C5kd1dNp76ezCOx+0foLqDVKfslTyXtr36uQ4tydC0vMiuRBB3ttLLxDqF2IgXKs8ExW2rdUWvVDzL7Kie+utt36V/gAoj0UJQoRlYQAAAABJRU5ErkJggg==" />
                    <div className="flex items-center gap-2 p-2 pe-6 bg-default-50 rounded-full shadow-lg" >
                        <img src="./Yum - Multipurpose Food Tailwind CSS Template_files/avatar1-25906796.png" className="h-16 w-16 rounded-full" />
                        <div className="">
                            <h6 className="text-sm font-medium text-default-900">Jakob Culhane</h6>
                            <p className="text-[10px] font-medium text-default-900">Healthy and Delicious Food</p>
                            <span className="inline-flex gap-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-default-200 fill-default-200"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </span>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-0 end-0 -rotate-12 h-4 w-4 inline-flex items-center justify-center bg-primary text-white rounded-full"></span>
                <span className="absolute -bottom-16 end-1/3 text-3xl">🔥</span>
                <div className="absolute bottom-0 start-0">
                    <div className="flex items-center gap-2 p-2 pe-6 bg-default-50 rounded-full shadow-lg">
                        <span className="inline-flex items-center justify-center h-16 w-16 bg-primary/20 rounded-full">
                        <img src="./Yum - Multipurpose Food Tailwind CSS Template_files/burger-1-0c3ba5a6.svg" className="h-10 w-10 rounded-full" />
                        </span>
                        <div className="">
                            <h6 className="text-sm font-medium text-default-900">MCD Veg Burger</h6>
                            <span className="inline-flex gap-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-yellow-400 fill-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3 w-3 text-default-200 fill-default-200"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </span>
                            <h6 className="text-sm font-medium text-default-900"><span className="text-sm text-primary">$</span> 8.14</h6>
                        </div>
                    </div>
                </div>
                

                <img src="./Yum - Multipurpose Food Tailwind CSS Template_files/hero-f578fbc8.png" className="mx-auto" />
            </div>
        </div>
    </div>
</div>
</section>
  );
};

export default Banner;
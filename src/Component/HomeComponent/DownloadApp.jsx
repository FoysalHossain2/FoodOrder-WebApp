import App from '../../assets/App.png'

const DownloadApp = () => {
  return (
 
 <section className="lg:py-16 py-6">
    <div className="container mx-auto">
        <div className="bg-primary/10 rounded-lg bg-orange-100">
            <div className="grid lg:grid-cols-2 items-center gap-6">
                <div className="relative lg:p-20 p-6 h-full">
                    <span className="absolute end-16 top-1/3 text-xl rotate-45">😃</span>
                    <span className="absolute end-0 top-1/2 text-xl rotate-45">🔥</span>
                    <span className="absolute bottom-40 end-40 h-2 w-2 inline-flex items-center justify-center bg-primary text-white rounded-full"></span>
                    <div className="hidden sm:block absolute -bottom-10 lg:bottom-10 lg:end-0 end-10">
                        <div className="bg-default-50 rounded-full p-2 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full overflow-hidden">
                                    <img src="./Yum - Multipurpose Food Tailwind CSS Template_files/avatar4-85475652.png"/>
                                </div>
                                <div className="">
                                    <h6 className="text-base font-medium text-default-900 mb-1">Richard Watson</h6>
                                    <p className="text-sm font-medium text-default-500">Food Courier</p>
                                </div>
                                <div className="h-14 w-14 inline-flex items-center justify-center rounded-full bg-primary text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">Download App</span>
                    <h2 className="text-3xl/relaxed font-semibold text-default-900 max-w-sm mb-6">Get Started With Us Today!</h2>
                    <p className="text-default-900 text-base max-w-md mb-10">Discover food wherever and whenever and get your food delivered quickly.</p>
                    <a href="javascript:void(0)" className="inline-flex py-4 px-10 font-medium text-white bg-primary rounded-full hover:bg-primary-500 transition-all">Get started</a>
                </div>
                <div className="relative pt-20 px-20">
                    <span className="absolute end-10 bottom-28 text-3xl -rotate-45">🔥</span>
                    <span className="absolute bottom-10 end-20 h-3 w-3 inline-flex items-center justify-center bg-primary text-white rounded-full"></span>
                    <span className="absolute top-1/4 end-10 h-2.5 w-2.5 inline-flex items-center justify-center bg-yellow-400 text-white rounded-full"></span>
                    <span className="absolute end-1/4 top-12 text-xl -rotate-45">😋</span>
                    <span className="absolute start-10 top-12 h-2 w-2 inline-flex items-center justify-center bg-primary text-white rounded-full"></span>
                    <img src={App} className="max-w-full max-h-full"/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default DownloadApp
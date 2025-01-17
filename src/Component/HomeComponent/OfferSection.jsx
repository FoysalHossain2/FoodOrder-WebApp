const OfferSection = () => {
  return (
    <div> 
     <section className="lg:py-28 py-10 relative bg-no-repeat bg-cover bg-[url(../images/home/offer-bg.png)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container">
            <div className="relative lg:w-1/2 w-full">
                <h4 className="font-handrawn text-2xl text-yellow-500 mb-6">Special Combo Offer</h4>
                <h2 className="text-4xl font-semibold text-white mb-8">We make best Food in your town</h2>
                <p className="text-base text-white/75 max-w-2xl mb-10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className="inline-flex flex-wrap items-center justify-center gap-4">
                    <a href="javascript:void(0)" className="py-4 px-10 font-medium text-white bg-primary rounded-full hover:bg-primary-500 transition-all">Get started</a>
                    <h4 className="text-yellow-400 font-medium text-2xl">$23.47 <span className="text-lg line-through text-white/75">$44.99</span></h4>
                </div>

                <div className="absolute end-0 lg:-bottom-16 bottom-10">
                    <img src="./Yum - Multipurpose Food Tailwind CSS Template_files/offer-popup-78034aee.svg" className="lg:w-auto w-20" />
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default OfferSection
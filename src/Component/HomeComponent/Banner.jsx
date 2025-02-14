import { Link } from "react-router-dom";
import BannerCart from '../HomeComponent/BannerCart'
import { motion } from "framer-motion";
import BannerGrid from '../CommonComponent/common/BannerGrid'

const Banner = () => {
  return (
    <section className="lg:py-10 py-6 relative">
    <div className="absolute inset-0 blur-[60px] bg-gradient-to-l from-orange-600/20 via-orange-600/5 to-orange-600/0"></div>
      <div className="container mx-auto">
    <div className="container relative">
        <div className="grid lg:grid-cols-1 items-center">
            <div className="py-10 ">
                <div className="flex items-center justify-center  order-last lg:order-first z-10">
                    <div className="text-center ">
                        <h1 className="lg:text-4xl/normal md:text-4xl/snug text-3xl font-bold text-default-950 capitalize mb-5">We Offer
                            <span className="inline-flex relative">
                                <span>Delicious </span>
                                <img src="" />
                            </span>
                            <span className="text-primary">Food </span> And Quick Service
                        </h1>
                        <p className="text-center text-lg text-default-700 font-medium mb-8 md:max-w-md  mx-auto">
                          Imagine you don’t need a diet because we provide healthy and delicious food for you!.
                        </p>
                        <div className="flex flex-wrap items-center justify-center  gap-5 mt-10">
                                <Link to={'/shop'} >
                            <motion.button
                                className="py-3 px-10 font-medium text-white bg-button_Color rounded-full hover:bg-orange-400 transition-all cursor-pointer shadow-lg shadow-slate-200"
                                whileTap={{ scale: 0.8, transition: { yoyo: Infinity } }}
                            >
                                Order Now
                            </motion.button>
                                </Link>
                            <a  className="text-primary flex items-center">
                                <motion.button
                                    className="h-14 w-14 rounded-full border-2 border-e-transparent border-yellow-400 flex items-center justify-center me-2 shadow-lg"
                                    whileTap={{ scale: 0.8, transition: { yoyo: Infinity } }}
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="play" className="lucide lucide-play h-6 w-6 fill-primary"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </motion.button>
                                <span className="font-semibold">How to Order</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      
           <BannerGrid />

        </div>
    </div>
</div>
</section>
  );
};

export default Banner;
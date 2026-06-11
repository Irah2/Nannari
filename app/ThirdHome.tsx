import Card from "./Components";

export default function ThirdHome() {
    return(//#da5400
        <div>

  {/* Added min-h-screen to give the hero section space, you can remove this if you have specific height constraints */}
            <div className="w-full min-h-screen bg-[#e7db7a] flex items-center justify-center pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">


                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                        Your Perfect Summer <br />
                    </h1>

                    {/* Subtext */}

                <div className="flex flex-col items-center justify-center gap-6 mb-12">
                    {/* Massive, Centered Image */}
                    <div className="w-full max-w-5xl mb-12 flex justify-center">
                        <img
                            src="/Images_Svgs/Logo.svg"
                            alt="Refreshing Glass of Soda"

                            className="h-auto w-full max-w-3xl object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Pricing & CTA - Pushed to the bottom of the stack */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <p className="text-sm font-semibold text-gray-400">Kit Price</p>
                            <span className="text-4xl font-black text-gray-900">₹150</span>
                        </div>
                        <button className="bg-[#da5400] hover:bg-[#c24800] text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:shadow-xl active:scale-95 w-full sm:w-auto">
                            Grab Your Bottle
                        </button>
                    </div>
                </div>



                </div>
            </div>
        
            <div className="bg-[#e7db7a] flex items-start justify-center gap-12 w-full h-1/2 mx-auto ">
                <div className="mx-auto my-auto">
                    <div className="flex flex-col items-center justify-center mt-10 p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Ready to make your own?
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Get your syrup bottle today
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-extrabold text-gray-900">₹150</span>
                            <button className="bg-[#da5400] hover:bg-[#c24800] text-white font-semibold py-3 px-8 rounded-full shadow-md
                            transition-all duration-200 ease-in-out hover:cursor-pointer
                            transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/Images_Svgs/Logo.svg" alt="Glass with Soda" />
                </div>

            </div>

            <div className="p-12 outline outline-1 w-7/8 rounded-[32px] mx-auto mt-12">
                <h1 className="font-bold text-3xl ">What is Nannari?</h1>
                <p>Nannari, also known as Indian sarsaparilla, is a popular herbal drink in South India. It is made from the
                   roots of the nannari plant and is known 
                   for its refreshing taste and potential health benefits.
                   Nannari syrup is often mixed with water or soda to create a cooling beverage,
                   especially during hot weather. It is believed to have properties that can help with digestion, 
                   reduce body heat, and provide relief from certain ailments.
                </p>
            </div>

            <h1 className="font-bold text-3xl mx-auto p-12 text-center">Benefits of Nannari</h1>

            <div className="flex flex-wrap justify-center gap-2 my-auto mx-auto">
                <div className="bg-[#e7db7a] w-60 h-60 flex flex-col items-center justify-center gap-2 p-8 rounded-[32px] mx-auto my-2">
                    <img className="w-1/2 h-1/2 mx-auto" src="/Images_Svgs/refreshingFace.svg" alt="Pouring Syrup" />
                    <p className="text-center">Refreshing</p>
                </div>

                <Card imgSrc="/Images_Svgs/stomach.svg"
                imgAlt="Stomach"
                text="Aids digestion"
                />

                <Card imgSrc="/Images_Svgs/BodyHeat.svg"
                imgAlt="BodyHeat"
                text="Regulates Body Heat"
                />
           
            </div>

            <h1 className="font-bold text-3xl mx-auto p-12 text-center">How to make Nannari juice?</h1>

            <div className="grid grid-cols-2 w-fit mx-auto gap-4 ">
                <Card imgSrc="/Images_Svgs/pouring.svg"
                imgAlt="Pouring Syrup"
                text="Pour the syrup in a glass"
                />
                
                <Card imgSrc="/Images_Svgs/pouringWater.svg"
                imgAlt="Water"
                text="Add water or soda and mix it well"
                />  
                <Card imgSrc="/Images_Svgs/LemonAndIce(1).svg"
                imgAlt="Lemon"
                text="Add lemon and ice"
                />  
                <Card imgSrc="/Images_Svgs/FinishedJuice.svg"
                imgAlt="Enjoy"
                text="Enjoy!"
                />  

            </div>

            <div className="flex flex-col items-center justify-center mt-10 p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Ready to make your own?
                </h3>
                <p className="text-gray-500 mb-6">
                    Get the premium syrup bottle today and start mixing refreshing drinks at home.
                </p>

                <div className="flex items-center gap-4">
                    <span className="text-3xl font-extrabold text-gray-900">₹150</span>
                    <button className="bg-[#da5400] hover:bg-[#c24800] text-white font-semibold py-3 px-8 rounded-full shadow-md
                            transition-all duration-200 ease-in-out hover:cursor-pointer
                            transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                        Buy Now
                    </button>
                </div>
            </div>

        


            <footer className="w-full border-t border-gray-100 bg-[#e7db7a] mt-16 pt-8 pb-6 text-center">
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6 mb-4 text-4xl font-medium text-black">
                        <span className="cursor-pointer hover:text-amber-500 transition-colors duration-200">
                            Contact Us
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm font-medium text-black">
                        <h1 className="text-2xl mx-auto my-4" >Ph: 89XXXXXXXX</h1>
                        <h1 className="text-2xl mx-auto my-4" >Ph: 99XXXXXXXX</h1>
                    </div>
                    {/* Copyright Section */}
                    <p className="text-black-400 text-sm">
                        &copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.
                    </p>

                </div>
            </footer>



        </div>
    );
}
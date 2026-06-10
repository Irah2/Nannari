import Card from "./Components";
import card from "./Components";

export default function ThirdHome() {
    return(//#da5400
        <div>
        
            <div className="bg-[#e7db7a] flex items-start justify-center gap-12 w-full h-1/2 mx-auto ">
                <div>
                    <img src="/Images_Svgs/pouring.svg" alt="Pouring Syrup" />
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

            <div className="flex flex-wrap justify-center gap-2">
                <div className="bg-[#e7db7a] w-60 h-60 flex flex-col items-center justify-center gap-2 p-8 rounded-[32px] mx-auto my-12">
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

        </div>
    );
}
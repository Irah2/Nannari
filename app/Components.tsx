
interface cardProp{
    imgSrc: string;
    imgAlt: string;
    text: string;
}


export default function Card({ imgSrc, imgAlt, text }: cardProp) {
    return (
        <div className="bg-[#e7db7a] w-fit flex-col items-center justify-center gap-32 p-8 rounded-[32px] mx-auto my-12">
            <img className="w-1/2 h-1/2 mx-auto" src={imgSrc} alt={imgAlt} />
            <p className="text-center">{text}</p>
        </div>
    );
}
import Image from "next/image";

interface AppStoreButtonProps {
    icon: string; 
    platform: string; 
    description: string; 
}

const AppStoreButton = ({ icon, platform, description }: AppStoreButtonProps) => (
    <button className="px-6 py-3 rounded-md font-bold h-[70px] w-full border border-[#A6A6A6] flex items-center tablet:justify-between justify-center gap-3 z-20">
        <Image src={icon} width={32} height={32} alt={`${platform} icon`} />
        <div className="flex items-center justify-between tablet:text-xl text-base gap-2">
            <p className="text-[#111827B2]">{platform}</p>
            <div className="h-[40px] w-[2px] bg-[#00000094]" />
            <p>{description}</p>
        </div>
    </button>
);

export default AppStoreButton;
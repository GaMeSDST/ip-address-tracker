import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="relative">
                <div className="absolute w-full h-[15.625rem]">
                    <Image
                        alt="pattern background"
                        className="-z-0 bg-no-repeat bg-cover bg-[url(../../public/pattern-bg-desktop.png)] max-[650px]:bg-[url(../../public/pattern-bg-mobile.png)]"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        layout="fill"
                        loading="eager"
                    />
                </div>
                <div className="absolute w-full flex flex-col items-center">
                    <p className="font-semibold text-[2rem] mt-4 text-white">IP Address Tracker</p>
                    <div className="relative flex mt-[1rem]">
                        <input
                            placeholder="Search for any IP address or domain"
                            className="max-w-[30rem] min-w-[20rem] min-h-[3rem] text-black px-4 text-sm rounded-xl"
                        ></input>
                        <button
                            type="button"
                            className="rounded-r-xl right-0 flex flex-col justify-center items-center absolute w-12 h-12 hover:bg-[#3f3f3f] bg-black"
                        >
                            <div className="bg-center bg-[url(../../public/icon-arrow.svg)] w-[0.6875rem] h-[0875rem] bg-no-repeat"></div>
                        </button>
                    </div>
                    <div className="flex flex-col gap-5 justify-center w-[20rem] h-[19rem] rounded-lg relative top-[1.5rem] bg-white text-[#2e2e2e]">
                        <div className="text-center">
                            <p className="uppercase font-semibold text-xs text-[#959595] mb-1">ip address</p>
                            <p className="text-xl font-medium ">192.212.174.101</p>
                        </div>
                        <div className="text-center">
                            <p className="uppercase font-semibold text-xs text-[#959595] mb-1">Location</p>
                            <p className="text-xl font-medium ">Brooklyn, NY 10001</p>
                        </div>
                        <div className="text-center">
                            <p className="uppercase font-semibold text-xs text-[#959595] mb-1">Timezone</p>
                            <p className="text-xl font-medium ">UTC -05:00</p>
                        </div>
                        <div className="text-center">
                            <p className="uppercase font-semibold text-xs text-[#959595] mb-1">ISP</p>
                            <p className="text-xl font-medium ">SpaceX Starlink</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

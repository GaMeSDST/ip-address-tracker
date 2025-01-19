"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

async function handleApi(ip) {
    let address = "https://geo.ipify.org/api/v2/country,city?apiKey=at_L7N7sgsqXrUHO33BrspgYqkpvBS91";
    if (typeof ip[0] == "number") {
        address += "&ipAddress=" + ip;
    } else if (typeof ip[0] == "string") {
        address += "&domain=" + ip;
    }
    let value = await fetch(address);
    if (!value.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    let response = await value.json();
    return response;
}

function handleMap(data) {
    document.getElementById("ip-value").innerHTML = data["ip"];
    document.getElementById("location-value").innerHTML = data["location"]["region"];
    document.getElementById("timezone-value").innerHTML = data["location"]["timezone"];
    document.getElementById("isp-value").innerHTML = data["isp"];
    let map = L.map("map", { zoomControl: false }).setView([data["location"]["lat"], data["location"]["lng"]], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    let icon = L.icon({
        iconUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        iconSize: [46, 56],
        className: "bg-[url(../../public/icon-location.svg)]",
    });
    let marker = L.marker([data["location"]["lat"], data["location"]["lng"]], { icon: icon }).addTo(map);
}

export default function Home() {
    const [search, setSearch] = useState("");

    useEffect(() => {
        handleApi(search)
            .then((result) => {
                handleMap(result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [search]);

    return (
        <>
            <div className="relative h-[15.625rem]">
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
                            id="search-value"
                            placeholder="Search for any IP address or domain"
                            className="max-w-[30rem] min-w-[20rem] lg:min-w-[33rem] lg:text-base min-h-[3rem] text-black px-4 text-sm rounded-xl"
                        ></input>
                        <button
                            onClick={() => {
                                let cloned = document.getElementById("map").cloneNode();
                                if (L.DomUtil.get("map") != undefined) {
                                    L.DomUtil.get("map").remove();
                                    document.body.appendChild(cloned);
                                } else {
                                    document.body.appendChild(cloned);
                                }
                                setSearch(document.getElementById("search-value").value);
                            }}
                            type="button"
                            className="rounded-r-xl right-0 flex flex-col justify-center items-center absolute w-12 h-12 hover:bg-[#3f3f3f] bg-black"
                        >
                            <div className="bg-center bg-[url(../../public/icon-arrow.svg)] w-[0.6875rem] h-[0875rem] bg-no-repeat"></div>
                        </button>
                    </div>
                    <div className="z-[2] flex flex-col gap-5 lg:w-[63rem] lg:h-[10rem] lg:flex-row lg:gap-[2rem] lg:items-start lg:pt-[2rem] lg:justify-start lg:pl-[3rem] justify-center w-[20rem] h-[18rem] rounded-lg relative top-[1.5rem] bg-white text-[#2e2e2e]">
                        <div className="lg:min-h-[6rem] text-center">
                            <p className="lg:text-start uppercase font-semibold text-xs text-[#959595] mb-1">ip address</p>
                            <p id="ip-value" className="text-xl lg:text-2xl font-medium "></p>
                        </div>
                        <div className="lg:min-h-[6rem] lg:pl-8 lg:border-l-2 border-[#d9d9d9] text-center">
                            <p className="lg:text-start uppercase font-semibold text-xs text-[#959595] mb-1">Location</p>
                            <p id="location-value" className="lg:text-start text-xl lg:text-2xl font-medium lg:max-w-[14ch] lg:break-words"></p>
                        </div>
                        <div className="lg:min-h-[6rem] lg:pl-8 lg:border-l-2 border-[#d9d9d9] text-center">
                            <p className="lg:text-start uppercase font-semibold text-xs text-[#959595] mb-1">Timezone</p>
                            <p id="timezone-value" className="text-xl font-medium lg:text-2xl"></p>
                        </div>
                        <div className="lg:min-h-[6rem] text-center lg:pl-8 lg:border-l-2 border-[#d9d9d9]">
                            <p className="lg:text-start uppercase font-semibold text-xs text-[#959595] mb-1">ISP</p>
                            <p id="isp-value" className="text-xl font-medium lg:text-2xl"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map" className={`z-[1] w-full h-[calc(100vh-250px)]`}></div>
        </>
    );
}

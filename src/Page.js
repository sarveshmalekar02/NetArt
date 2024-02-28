import React from "react";
import award from "./image/1.png";
import guest from "./image/2.png";
import equipments from "./image/3.png";

function Page() {
  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, white, rgba(255, 200, 0, 0.5))' }}>
        <div className="flex flex-col lg:flex-row mt-2">
          <div className="ml-10">
            <img
              src={award}
              alt="award"
              className="h-auto max-w-96  lg:h-auto"
            />
          </div>

          <div className="mt-4 lg:mt-0 lg:w-3/4">
            <h1 className="font-bold">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h1>
            <div className="pl-1 mt-2">
              <ol className="list-disc text-sm pl-8 font-semibold mb-5 mr-6">
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ol>
              <img
                src={guest}
                alt="guest"
                className="w-full h-auto lg:max-w-full lg:h-auto"
              />
            </div>
            <div className="font-semibold text-sm">
              <p className="mr-6">
                Government of India has awarded the{" "}
                <span className="font-bold">
                  "National Energy Conservation Award 2018"
                </span>
                . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
                received the award from Smt. Sumitra Mahajan, Speaker of Lok
                Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-6 font-semibold text-sm mt-14">
          <h1>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </h1>
          <img
            src={equipments}
            alt="equipments"
            width={1000}
            height={200}
            className=" h-auto max-w-full  mt-3 mx-auto"
          ></img>
          <span className=" flex justify-center mt-5">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </span>
        </div>

        <div
          style={{
            borderBottom: "3px solid red",
            width: "calc(100% - 16px)",
            paddingTop: "14px",
            marginLeft: "8px",
            marginBottom: "14px",
          }}
        ></div>

        <div className="space-y-4 pb-8">
          <h1 className="font-bold justify-center flex ">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h1>
          <div className=" px-5 text-sm">
            <h1 className="font-semibold">
              CHEMICALS & PROCESS{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              POWER <span style={{ color: "red", marginRight: "4px" }}>|</span>
              WATER & WASTE WATER{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              OILS & GAS{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              PHARMA <span style={{ color: "red", marginRight: "4px" }}>|</span>
              SUGARS & DISTILLERIES{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              PAPER & PULP{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              MARINE & DEFENCE{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              METAL & MINING{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              FOOD & BEVERAGE{" "}
              <span style={{ color: "red", marginRight: "4px" }}>|</span>
              <div className="flex justify-center space-x-1">
                PETROCHEMICAL & REFINERIES{" "}
                <span style={{ color: "red", marginRight: "4px" }}>|</span>
                SOLAR BUILDING{" "}
                <span style={{ color: "red", marginRight: "4px" }}>|</span>
                HVAC <span style={{ color: "red", marginRight: "4px" }}>|</span>
                FIRE FIGHTING{" "}
                <span style={{ color: "red", marginRight: "4px" }}>|</span>
                AGRICULTURE & RESIDENTIAL{" "}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

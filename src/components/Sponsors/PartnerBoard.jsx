import partnerlogo from "../../assets/logos/mlh-yEbPA3jb.png"
const PartnerBox=()=>{
    return(
        <div className="flex flex-wrap items-center justify-center gap-2 bg-bd w-1/4 mb-4 mt-0  h-28 xl:mb-8 lg:mb-2 md:mb-4 rounded-lg xl:h-40 lg:h-32 sm:min-h-28 sm:mb-6  "  >
             <img
            src={partnerlogo.src}
            alt="Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 xl:w-40 xl:h-36 xl:p-2 lg:p-1 md:p-1 bg-transparent"
          />
        </div>
    )
}


export default PartnerBox;
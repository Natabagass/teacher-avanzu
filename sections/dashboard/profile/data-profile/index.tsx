// "use client"

// import Text from "@components/text";
// // import { profileStep } from "data/models/profile-step";
// import { useState } from "react";
// import ProfilChange from "../step/step1";
// import PasswordChange from "../step/step2";
// import SocialMediaChange from "../step/step3";
// // import { useProfile } from "@context/auth";

// const ProgressBarProfile = () => {
//     const [active, setActive] = useState(1)
//     const { userInfo } = useProfile()

//     return (
//         <>
//             <div className="flex flex-col w-full mt-8">
//                 <div className="flex flex-row w-full gap-5">
//                     {
//                         profileStep.map((item, index) => (
//                             <div key={item.id} onClick={() => setActive(item.id)} className="flex flex-col w-[10%] text-center gap-3 cursor-pointer">
//                                 <Text weight="font-normal" color={`${active === item.id ? 'text-purple-blue-500' : 'text-content-secondary'}`} variant="subTitle-sub" size="p3">{item.name}</Text>
//                                 <div className={`${active === item.id ? 'bg-purple-blue-500 z-20' : 'bg-stroke-primary'} w-full h-[2px]`} />
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className="w-full -mt-[2px] h-[2px] bg-stroke-primary" />
//             </div>
//             <div className="w-full h-full">
//                 {
//                     active === 1 ?
//                         <ProfilChange data={userInfo} />
//                         :
//                         active === 2 ?
//                             <PasswordChange />
//                             :
//                             <SocialMediaChange />
//                 }
//             </div>
//         </>
//     );
// }

// export default ProgressBarProfile;
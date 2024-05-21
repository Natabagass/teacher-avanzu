// import Text from "@components/text";
// // import { pricingTypes } from "data/types/interface/landing/pricing/pricingTypes";

// const CardPricing = ({
//     payPer,
//     title,
//     price,
//     popular,
//     plus
// }: pricingTypes) => {
//     return (
//         <>
//             <div className={`${popular === true ? 'gradient-background-purple' : ''} border border-white/20 p-6 min-h-[400px] w-full flex flex-col items-center rounded-3xl`}>
//                 {
//                     popular === true ?
//                         <div className="absolute -mt-12 border rounded-3xl bg-[#342F3E] border-purple-main p-2">
//                             <Text size="p2" color='text-purple-secondary' weight="font-medium">Más popular</Text>
//                         </div>
//                         :
//                         null
//                 }
//                 <Text variant="subTitle" size="h3" color="text-white" weight="font-medium" className={`${popular === true ? 'mt-6' : 'mt-0'}`}>{title}</Text>
//                 <Text variant="title" size="h1" weight="font-bold" color="text-white" className="mt-2 font-bold">
//                     {price} <span className="text-2xl text-content-secondary">{payPer}</span>
//                 </Text>
//                 <div className={`${popular === true ? 'gradient-border-purple' : 'gradient-border'} w-full h-full rounded-full my-6`} />
//                 <div className="lw-full flex gap-4 flex-col px-6">
//                     {
//                         plus.map((item, index) => (
//                             <ul key={index} className="text-white">
//                                 <li key={index} className="p2 font-medium list-disc">
//                                     {item.item}
//                                 </li>
//                             </ul>
//                         ))
//                     }
//                 </div>
//             </div>
//         </>
//     );
// }

// export default CardPricing;
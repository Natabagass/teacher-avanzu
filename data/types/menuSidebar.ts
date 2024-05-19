import { BsChat } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoBookmarksOutline, IoLogOutOutline, IoSpeedometerOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import { TbBook2, TbCashBanknote, TbCheckupList, TbMedal2, TbMessageCircleQuestion, TbPercentage, TbShoppingCart, TbStars } from "react-icons/tb";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export const menuSidebar = [
    {
        name: 'Escritorio',
        path: 'hogar',
        icon: IoSpeedometerOutline
    },
    {
        name: 'Promoción de banner',
        path: 'promocion-de-banner',
        icon: TbPercentage
    },
    // {
    //     name: 'Ventas',
    //     path: 'ventas',
    //     icon: BsChat
    // },
    {
        name: 'Confirmación del curso',
        path: 'confirmacion-del-curso',
        icon: TbBook2
    },
    // {
    //     name: 'Retiro',
    //     path: 'retiro',
    //     icon: TbCashBanknote
    // },
    // {
    //     name: 'Reclamo de reembolso',
    //     path: 'reclamo-de-reembolso',
    //     icon: TbStars
    // },
    {
        name: 'Notificación de inserción',
        path: 'notificacion-de-insercion',
        icon: TbCashBanknote
    },
    {
        name: 'Preguntas más frecuentes',
        path: 'preguntas-mas-frecuentes',
        icon: IoIosHelpCircleOutline
    },
    {
        name: 'Lines',
        path: '',
        icon: TfiLayoutLineSolid
    },
    {
        name: 'Salir',
        path: '',
        icon: IoLogOutOutline
    }
]
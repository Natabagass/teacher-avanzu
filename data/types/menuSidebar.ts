import { BsChat, BsListStars } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoBookmarksOutline, IoChatbubbleOutline, IoLogOutOutline, IoSpeedometerOutline } from "react-icons/io5";
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
        name: 'Mi curso',
        path: 'mi-curso',
        icon: TbBook2
    },
    {
        name: 'Communicacion',
        path: 'comunicacion',
        icon: IoChatbubbleOutline
    },
    {
        name: 'Calificacion De Los Cursos',
        path: 'calificacion-de-los-cursos',
        icon: BsListStars
    },
    {
        name: 'Revision y calificaciones',
        path: 'revision-y-calificaciones',
        icon: TbStars
    },
    {
        name: 'Intento de prueba',
        path: 'intento-de-prueba',
        icon: TbCheckupList
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
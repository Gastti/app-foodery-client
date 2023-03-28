import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const SUBSCRIPTION_CARD_TEXT_ES = {
    title: 'Hazte miembro',
    message: 'Hazte miembro para obtener todos nuestros servicios',
    button_placeholder: 'Suscribirse'
}

export const FOOTER_CONTENT_ES = {
    about: {
        slogan: 'Foodery es un servicio de delivery de comida rapida',
        socials: [
            { name: 'Facebook', href: 'https://facebook.com/' },
            { name: 'Twitter', href: 'https://twitter.com/' },
            { name: 'Instagram', href: 'https://instagram.com/' }
        ]
    },
    pages: {
        title: 'Paginas',
        links: [
            { name: 'Producto', href: '/product' },
            { name: 'Carrera', href: '/career' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Blog', href: '/blog' }
        ]
    },
    services: {
        title: 'Nuestro Servicio',
        links: [
            { name: 'Transacción', href: '/transaction' },
            { name: 'Centro de Ayuda', href: '/helpcenter' },
            { name: 'Reparto', href: '/delivery' }
        ]
    }
}

export const USER_NAVIGATION_OPTIONS_ES = [
    { label: 'Configuración de la Cuenta', to: '/account/settings', icon: SettingsIcon },
    { label: 'Modo Oscuro', to: false, icon: DarkModeIcon },
    { label: 'Reportar un Problema', to: '/report', icon: ReportOutlinedIcon },
    { label: 'Cerrar Sesión', to: false, icon: LogoutIcon }
]
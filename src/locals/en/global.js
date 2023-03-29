import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

export const SUBSCRIPTION_CARD_TEXT_EN = {
    title: 'Become a member',
    message: 'Become a &member& and get all our &services&',
    button_placeholder: 'Subscribe Now'
}

export const FOOTER_CONTENT_EN = {
    about: {
        slogan: 'Foodery is fast food delivery service'
    },
    pages: {
        title: 'Pages',
        links: [
            { name: 'Product', href: '/product' },
            { name: 'Career', href: '/career' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Blog', href: '/blog' }
        ]
    },
    services: {
        title: 'Our Service',
        links: [
            { name: 'Transaction', href: '/transaction' },
            { name: 'Help Center', href: '/helpcenter' },
            { name: 'Delivery', href: '/delivery' }
        ]
    }
}

export const USER_NAVIGATION_OPTIONS_EN = [
    { label: 'Account Settings', to: '/account/settings', icon: SettingsIcon },
    { label: 'Dark Mode', to: false, icon: DarkModeIcon },
    { label: 'Report an Issue', to: '/report', icon: ReportOutlinedIcon }
]
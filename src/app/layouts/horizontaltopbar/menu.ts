import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.SERVICEAFFILIATION.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.SERVICEAFFILIATION.LIST.NEWSERVICE',
                link: '/service-affiliation/new-service',
                parentId: 1
            },
            {
                id: 3,
                label: 'MENUITEMS.SERVICEAFFILIATION.LIST.UPDATESERVICE',
                link: '/#',
                parentId: 1
            }
        ]
    },
    {
        id: 4,
        label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 5,
                label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.DOWNLOADTEMPLATE',
                link: '/#',
                parentId: 4
            },
            {
                id: 6,
                label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.GENERATETEXTFILE',
                link: '/#',
                parentId: 4
            },
            {
                id: 7,
                label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.UPLOADTEXTFILE',
                link: '/#',
                parentId: 4
            }
        ]
    }
];


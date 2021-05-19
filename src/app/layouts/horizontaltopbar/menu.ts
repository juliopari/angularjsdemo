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
                link: '/service-affiliation/services-list',
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
                label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.DOWNLOADTEMPLATE.TEXT',
                subItems:[
                    {
                        id: 6,
                        label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.DOWNLOADTEMPLATE.LIST.PARTIALDATA',
                        link: '/#',
                        parentId: 5
                    },
                    {
                        id: 7,
                        label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.DOWNLOADTEMPLATE.LIST.COMPLETEDATA',
                        link: '/#',
                        parentId: 5
                    }
                ]
            },
            {
                id: 8,
                label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.GENERATETEXTFILE',
                link: '/collection-base-management/generate-text-file',
                parentId: 4
            },
            {
                id: 9,
                label: 'MENUITEMS.COLLECTIONBASEMANAGEMENT.LIST.UPLOADTEXTFILE',
                link: '/collection-base-management/upload-text-file',
                parentId: 4
            }
        ]
    },
    {
        id: 10,
        label: 'MENUITEMS.REPORTS.TEXT',
        icon: 'bxs-report',
        subItems: [
            {
                id: 11,
                label: 'MENUITEMS.REPORTS.LIST.TRANSACTIONDETAIL-EMP',
                link: '/reports/transaction-detail-emp',
                parentId: 10
            },
            {
                id: 12,
                label: 'MENUITEMS.REPORTS.LIST.TRANSACTIONDETAIL-NBZ',
                link: '/reports/transaction-detail-nbz',
                parentId: 10
            },
            {
                id: 13,
                label: 'MENUITEMS.REPORTS.LIST.TRADEBASE',
                link: '/reports/trade-base',
                parentId: 10
            },
            {
                id: 14,
                label: 'MENUITEMS.REPORTS.LIST.COMMISSIONREPORT',
                link: '/reports/commission-report',
                parentId: 10
            },
            {
                id: 15,
                label: 'MENUITEMS.REPORTS.LIST.TRANSACTIONSUMMARY',
                link: '/reports/transaction-summary',
                parentId: 10
            },
            {
                id: 16,
                label: 'MENUITEMS.REPORTS.LIST.RECONCILIATIONSUMMARY',
                link: '/reports/reconciliation-summary',
                parentId: 10
            },
            {
                id: 17,
                label: 'MENUITEMS.REPORTS.LIST.RECONCILIATIONDETAIL',
                link: '/reports/reconciliation-detail',
                parentId: 10
            }
        ]
    },
    {
        id: 18,
        label: 'MENUITEMS.INTERNALUSERCREATION.TEXT',
        icon: 'bxs-user-pin',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.INTERNALUSERCREATION.LIST.INTERNALUSERSCREATION',
                link: '/internal-user-creation/internal-users-creation',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.INTERNALUSERCREATION.LIST.INTERNALUSERSMODIFICATION',
                link: '/internal-user-creation/internal-users-modification',
                parentId: 18
            }
        ]
    }
];


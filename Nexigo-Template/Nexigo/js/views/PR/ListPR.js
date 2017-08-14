var sampleData = [{
    ProcessID: 4606479,
    BPMPRNo: 41085,
    SAPPRNo: 0 ,
    "Requester":'Purcahse Requisition',
    "BudgetID": '000000201346 E&I PM June 2017',
    "Currency": 'IDR',
    Total: 660000,
    ExpectedDate: '2017-07-29',
    CreationDate: '2017-07-24',
    "Status": 'Hierarchy Approval',
    Action: 'data/action/1'
},
{
    ProcessID: 4606479,
    BPMPRNo: 41085,
    SAPPRNo: 0,
    "Requester": 'Purcahse Requisition',
    "BudgetID": '000000201346 E&I PM June 2017',
    "Currency": 'IDR',
    Total: 660000,
    ExpectedDate: '29-07-2017',
    CreationDate: '24-07-2017',
    "Status": 'Hierarchy Approval',
    Action: 'data/action/2'
}]

nexigo.widget({
    name: 'test',
    type: 'panel',
    text: 'List Purchase Requestion',
    toolbars: [
        //{ text: 'Login', action: 'login', icon: 'fa-login' }
    ],
    views: [
        {
            type: 'row',
            panels: [
                {
                    name: 'Panel1',
                    inline: true,
                    cols: 6,
                    fields: [{
                    type: 'panel',
                    fields: [
                        { name: 'text_1', text: 'BPM PR No', type: 'text' , cols:8},
                        { name: 'text_2', text: 'SAP PR No', type: 'text', cols: 8 },
                        { name: 'text_3', text: 'Old SAP PR No', type: 'text', cols: 8 },
                        { name: 'text_4', text: 'Budget Source ID', type: 'text', cols:8},
                    ]
                    }]
                },
                {
                    name: 'Panel1',
                    cols: 6,
                    inline: true,
                    fields: [{
                        type: 'panel',
                        fields: [
                    {
                        type: 'fieldRow',
                        fields: [
                            { name: 'text_11', text: 'Requester', type: 'text', cols: 8 },
                            {
                                name: 'button...', type: 'button', text: '...', stretch: true, cols: 2, cssClass: 'xg-btn-success',
                            },
                            {
                                name: 'buttonreset', type: 'button', text: 'Reset', stretch: true, cols: 2, cssClass: 'xg-btn-success',
                                action: function () {
                                    alert('Action fired')
                                }
                            }
                        ]
                    },
                    { name: 'text_12', text: 'Approver', type: 'text', cols: 8 },
                    { name: 'text_13', text: 'Process ID', type: 'text', cols: 8 },
                    {
                        type: 'fieldRow',
                        fields: [
                            {
                                name: 'formatPicker',
                                text: 'Periode From',
                                type: 'picker',
                                cols: 8,
                                placeholder: 'Pick a date...',
                            },
                            {
                                name: 'buttonreset', type: 'button', text: 'Reset', stretch: true, cols: 2, cssClass: 'xg-btn-success',
                                action: function () {
                                    alert('Action fired')
                                }
                            },
                        ]
                    },
                    {
                        type: 'fieldRow',
                        fields: [
                            {
                                name: 'formatPicker',
                                text: 'Periode To',
                                type: 'picker',
                                cols: 8,
                                placeholder: 'Pick a date...',
                            },
                            {
                                name: 'buttonreset', type: 'button', text: 'Reset', stretch: true, cols: 2, cssClass: 'xg-btn-success',
                                action: function () {
                                    alert('Action fired')
                                }
                            }
                        ]
                    }
                ]
                    }]
                }
            ]
        },
        {
            name: 'Search',
            cols: 6,
            offset: 5,
            fields: [
                {
                    name: 'button1', type: 'button', text: 'Search', action: 'search', icon: 'fa-login',
                    cssClass: 'xg-btn-success',
                    //action: function () {
                    //    //alert('Action fired');
                    //}
                },
            ]
        },
        {
            fields: [{
                type: 'tab',
                name: 'GroupTab',
                activeTab: 'tab2',
                tabs: [
                    {
                        name: 'tab3',
                        text: 'List Request',
                        contents: [{
                            fields: [{
                                type: 'grid',
                                name: 'sampleGrid',
                                data: sampleData,
                                option: {
                                    // pageSize: 15,
                                    sortable: true,
                                    // pageable: false,
                                    showAggregates: true,
                                    selectionMode: 'singlerow',
                                    freezeColumn: ['ProcessID']
                                },
                                fields: [{
                                    name: 'ProcessID',
                                    text: 'Process ID',
                                    type: 'numeric'
                                }, {
                                    name: 'BPMPRNo',
                                    text: 'BPM PR No',
                                    type: 'numeric',
                                }, {
                                    name: 'SAPPRNo',
                                    text: 'SAP PR No',
                                    type: 'numeric',
                                },
                                {
                                    name: 'Requester',
                                    text: 'Requester',
                                    type:'string'
                                },
                                {
                                    name: 'BudgetID',
                                    text: 'Budget ID',
                                    type: 'string'
                                },
                                {
                                    name: 'Currency',
                                    text: 'Currency',
                                    type: 'string'
                                },
                                {
                                    name: 'Total',
                                    text: 'Total',
                                    type: 'numeric',
                                    aggregates: [{
                                        'Total': function (total, currentValue) {
                                            return total + currentValue;
                                        }
                                    }]
                                },
                                {
                                    name: 'ExpectedDate',
                                    text: 'Expected Date',
                                    type: 'date',
                                    format: 'DD MMMM YYYY'
                                },
                                {
                                    name: 'CreationDate',
                                    text: 'Creation Date',
                                    type: 'date',
                                    format: 'DD MMMM YYYY'
                                },
                                {
                                    name: 'Status',
                                    text: 'Status',
                                    type: 'string'
                                },
                                {
                                    name: 'Action',
                                    text: 'Action',
                                    type: 'link',
                                    onClick: 'Log'
                                }]
                            }]
                        }]
                    }],
                onChange: function (newTab) {
                    xg.call('Log', new Date() + ' Tab change: ' + newTab);
                }
            }]
        }
    ],
    functions: {
        Log: function (data) {
            $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
        }
    }
});
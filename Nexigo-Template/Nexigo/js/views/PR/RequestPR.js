var sampleData = [{
    "No": '1',
    "ItemDetail": 'Printer',
    EstPrice: 100000,
    Qty: 5,
    "Unit": 'Printer',
    SubTotal: 500000,
    ActionLink: 'data/action/1'
},
{
    "No": '2',
    "ItemDetail": 'Catridge',
    EstPrice: 400000,
    Qty: 5,
    "Unit": 'Catridge',
    SubTotal: 2000000,
    ActionLink: 'data/action/2'
},
]

nexigo.widget({
    name: 'test',type: 'panel',
    views: [
        {
            name: 'requestpanel', type: 'panel', text: 'REQUESTER INFORMATION', inline: true,
            fields: [{
                type: 'row',
                panels: [
                    {
                        inline: true, cols: 6,
                        fields: [{
                            type: 'panel',
                            fields: [
                                { name: 'Requester_Name', text: 'Requester Name', type: 'text', cols: 7, readonly:true },
                                { name: 'Requester_Position', text: 'Requester Position', type: 'text', cols: 8, readonly: true },
                                { name: 'textBPM', text: 'BPM PR Number', type: 'text', cols: 8 ,readonly: true},
                                { name: 'textDiv', text: 'Division', type: 'text', cols: 6, readonly: true},
                                { name: 'textCurr', text: 'Currency', type: 'text', cols: 6, readonly: true, data:'IDR' },
                                { name: 'formatPicker', text: 'Expected Date', type: 'picker', cols: 8, format: 'DD MMMM YYYY' },
                            ]
                        }]
                    },
                    {
                        name: 'requestpanel2', cols: 6, inline: true,
                        fields: [{
                            type: 'panel',
                            fields: [
                                { name: 'textPay', text: 'Payroll Number', type: 'text', cols: 8 },
                                { name: 'textLoc', text: 'Propose Receiving Material Location', type: 'select', cols: 8 },
                                { name: 'textBudget', text: 'Budget Source', type: 'select', cols: 6, tooltip: 'Media list', data:'http://localhost:31604/api/user/BudgetSourceList' },
                            ]
                        }]
                    }]
            }]
        },
        {
            name: 'test',type: 'panel',text: 'HEADER INFORMATION',inline: true,
            fields: [
                { name: 'textJust', text: 'Justification', type: 'textarea' },
            ]
        },
        {
            name: 'iteminformation', type: 'panel', text: 'ITEM INFORMATION', inline: true,
            fields: [
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'textItem', text: 'Item Text', type: 'text', cols: 2 },
                        { name: 'textItem', type: 'text', cols: 3 },
                        { name: 'button...', type: 'button', text: '...', stretch: true, cols: 1, cssClass: 'xg-btn-success' },
                    ]
                },
                { name: 'textMaterial', text: 'Material Group', type: 'select', cols: 4 },
                { name: 'textDescription', text: 'Description', type: 'text', cols: 11 },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'textQuality', text: 'Quality', type: 'text', cols: 2 },
                        { name: 'text_11', type: 'select', cols: 2 },
                    ]
                },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'textEstimate', text: 'Estimate Price', type: 'text', cols: 2 },
                        { name: 'textEstimate', type: 'select', cols: 2 },
                    ]
                },
                { name: 'textTotal', text: 'Total Estimate Price', cols: 4},
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'textBudgetSource', text: 'Budget Source', type: 'text', cols: 3 },
                        { name: 'button...', type: 'button', text: '...', stretch: true, cols: 1, cssClass: 'xg-btn-success' },
                        { name: 'textBudgetSource', type: 'text', cols: 2 },
                    ]
                },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'text_11', text: 'Material Picture', type: 'text', cols: 10 },
                        {
                            name: 'ButtonUpload', type: 'button', icon: 'fa-upload', cssClass: 'xg-btn-success', cols: 1,
                            text: 'Browse',
                            action: function () {
                                xg.uploader.upload({
                                    data: {
                                        type: 'aaaaa'
                                    },
                                    //url: 'http://localhost:2662/api/Hello/SaveAttachment'
                                }, function (data) {
                                    xg.message('File uploaded');
                                    console.log(data);
                                    });
                            }
                        }
                    ]
                },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'button1', type: 'button', text: 'Add', action: 'search', cssClass: 'xg-btn-success', cols: 1, offset: 7,stretch: true},
                        { name: 'button1', type: 'button', text: 'Reset', action: 'search', cssClass: 'xg-btn-success', cols: 1, stretch: true},
                        //{ name: 'button1', type: 'button', text: 'Upload', action: 'search', cssClass: 'xg-btn-success', cols: 1, stretch: true },
                        {
                            name: 'ButtonUpload', type: 'button', cssClass: 'xg-btn-success', cols: 1,
                            text: 'Upload',
                            action: function () {
                                xg.uploader.upload({
                                    data: {
                                        type: 'aaaaa'
                                    },
                                    //url: 'http://localhost:2662/api/Hello/SaveAttachment'
                                }, function (data) {
                                    xg.message('File uploaded');
                                    console.log(data);
                                });
                            }
                        }
                    ]
                },
                { name: 'button1', type: 'button', text: 'Material Stock Info', action: 'search', cssClass: 'xg-btn-success' },
                {
                        type: 'tab',
                        name: 'GroupTab',
                        //cols: 10,
                        activeTab: 'tab2',
                        tabs: [
                            {
                                name: 'tab3',
                                text: 'Item Request',
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
                                            freezeColumn: ['No']
                                        },
                                        fields: [{
                                            name: 'No',
                                            text: 'No',
                                            type: 'numeric'
                                        }, {
                                            name: 'ItemDetail',
                                            text: 'Item Detail',
                                            type: 'string',
                                        }, {
                                            name: 'EstPrice',
                                            text: 'Est.Price',
                                            type: 'numeric',
                                            aggregates: [{
                                                'Total': function (total, currentValue) {
                                                    return total + currentValue;
                                                }
                                            }]
                                        }, {
                                            name: 'Qty',
                                            text: 'Quality',
                                            headerAlignment: 'center',
                                            alignment: 'center',
                                            type: 'numeric',
                                            aggregates: [{
                                                'Total': function (total, currentValue) {
                                                    return total + currentValue;
                                                }
                                            }]
                                        }, {
                                            name: 'Unit',
                                            text: 'Unit',
                                            type: 'string'
                                        },
                                        {
                                            name: 'SubTotal',
                                            text: 'Sub Total',
                                            type: 'numeric',
                                            aggregates: [{
                                                'Total': function (total, currentValue) {
                                                    return total + currentValue;
                                                }
                                            }]
                                        },
                                        {
                                            name: 'ActionLink',
                                            text: 'Action Link',
                                            type: 'link',
                                            onClick: 'Log'
                                        }]
                                    }]
                                }]
                            }],
                        onChange: function (newTab) {
                            xg.call('Log', new Date() + ' Tab change: ' + newTab);
                        }
                },
                //{
                //    name: 'panel2',
                //    text: 'My Document',
                //    type: 'panel',
                //    fields: [
                //        {
                //            type: 'grid',
                //            text: 'Grid',
                //            name: 'gridMyDocument',
                //            onDblClick: 'doubleClick',
                //            options: {
                //                selectable: 'single'
                //            },
                //            fields: [
                //                {
                //                    name: 'ProcessId',
                //                    text: 'Process Id',
                //                    type: 'text',
                //                },
                //                {
                //                    name: 'CreatedBy',
                //                    text: 'Created By',
                //                    type: 'text',
                //                }
                //            ],
                //            data: []
                //        },
                //    ]
                //}
            ]
        },
        {
            name: 'test', type: 'panel', text: 'COMMENTS HISTORY', inline: true,
            fields: [
                {
                    name: 'test', type: 'panel', text: 'Write Your Comment', inline: true,
                    fields: [{
                        type: 'row',
                        panels: [
                            {
                                inline: true, cols: 2,
                                //align: 'center',
                                fields: [
                                    {
                                        type: 'content',
                                        content: [
                                            '<div style="width: 100px; height: 100px; border: 2px solid #f00; text-align: center; vertical-align: middle; line-height: 100px;">Box</div>',
                                        ]
                                    },
                                ]
                            },
                            {
                                //name: 'panel1', type: 'panel', text: 'Write Your Comment ',
                                /*name: 'Panel1',*/
                                cols: 10, inline: true,
                                fields: [
                                    {
                                    type: 'panel',
                                    fields: [
                                        { name: 'text_1',type: 'textarea'},
                                    ]
                                    },
                                    {
                                        type: 'fieldRow',
                                        fields: [
                                            { name: 'text_11', text: 'Attachment', type: 'text', cols: 8, offset: 2 },
                                            {
                                                name: 'ButtonUpload', type: 'button', icon: 'fa-upload', cssClass: 'xg-btn-success', cols: 1,
                                                text: 'Browse',
                                                action: function () {
                                                    xg.uploader.upload({
                                                        data: {
                                                            type: 'aaaaa'
                                                        },
                                                        //url: 'http://localhost:2662/api/Hello/SaveAttachment'
                                                    }, function (data) {
                                                        xg.message('File uploaded');
                                                        console.log(data);
                                                    });
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }]
                    }]
                }]
        }],
    functions: {
        init: function (xg, callback) {
            if ((window.StaffID) === '' || (window.StaffID) === null) {
                xg.navigate('PR/Login');
            }
            else {
                xg.ajax(
                    {
                        url: 'http://localhost:31604/api/user/GetUserName',
                        data: window.StaffID,
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        success: function (res) {
                            console.log(res);
                            xg.populate({ Requester_Name: res });
                    },
                        complete: function () {
                            console.log("Complete");
                            xg.loading.hide();
                        }
                    },
                    {
                        url: 'http://localhost:31604/api/user/GetUserPosition',
                        data: window.StaffID,
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        success: function (res) {
                            console.log(res);
                            xg.populate({ Requester_Position: res });
                        },
                        complete: function () {
                            console.log("Complete");
                            xg.loading.hide();
                        }
                    }
                );
            }
            xg.loading.hide();
            callback();
        }

    }
});



  //Log: function (data) {
        //    $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
        //},
//{ name: 'text_1', text: 'Comment', type: 'textarea' },
//{
//    type: 'fieldRow',
//        fields: [
//            { name: 'text_11', text: 'Attachment', type: 'text', cols: 8, offset: 2 },
//            {
//                name: 'ButtonUpload', type: 'button', icon: 'fa-upload', cssClass: 'xg-btn-success', cols: 1,
//                text: 'Browse',
//                action: function () {
//                    xg.uploader.upload({
//                        data: {
//                            type: 'aaaaa'
//                        },
//                        url: 
//                    }, function (data) {
//                        xg.message('File uploaded');
//                        console.log(data);
//                    });
//                }
//            }
//        ]
//},


//var data = [{
//    Objective: '.... ',
//    KPI: '...',
//    Target: '...',
//    Weight: 50,
//    Activity: '...',
//    Timing: new Date()
//}]


//nexigo.widget({
//    text: 'Table Template',
//    views: [{
//        name: 'panelTable',
//        type: 'panel',
//        fields: [
//            {
//                type: 'table',
//                name: 'table1',
//                cssClass: 'custom-table singleline',
//                fields: [{
//                    type: 'text',
//                    name: 'Objective',
//                    text: 'Objective',
//                    renderer: function (col, value) {
//                        return '<textarea>' + value + '</textarea> '
//                    },
//                    serializer: function (el) {
//                        return $(el).find('textarea').html()
//                    }
//                }, {
//                    type: 'text',
//                    name: 'KPI',
//                    text: 'KPI',
//                    renderer: function (col, value) {
//                        return '<textarea>' + value + '</textarea> '
//                    },
//                    serializer: function (el) {
//                        return $(el).find('textarea').html()
//                    }
//                }, {
//                    type: 'text',
//                    name: 'Target',
//                    text: 'Target',
//                    renderer: function (col, value) {
//                        return '<textarea>' + value + '</textarea> '
//                    },
//                    serializer: function (el) {
//                        return $(el).find('textarea').html()
//                    }
//                }, {
//                    type: 'text',
//                    name: 'Activity',
//                    text: 'Activity',
//                    renderer: function (col, value) {
//                        return '<textarea>' + value + '</textarea> '
//                    },
//                    serializer: function (el) {
//                        return $(el).find('textarea').html();
//                    }
//                }, {
//                    type: 'numeric',
//                    name: 'Weight',
//                    text: 'Weight',
//                    width: 50,
//                    renderer: function (col, value) {
//                        return '<input type="text"  value="' + value + '"/>'
//                    },
//                    serializer: function (el) {
//                        return parseInt($(el).find('input').val());
//                    }
//                }, {
//                    type: 'date',
//                    name: 'Timing',
//                    text: 'Timing',
//                    width: 120,
//                    format: 'YYYY-MM-DD',
//                    renderer: function (col, value, options) {
//                        return '<input class="datetime" value="' + value + '" type="text"/>'
//                    },
//                    serializer: function (el) {
//                        return (new moment($(el).find('input').val())).toDate();
//                    }
//                }, {
//                    type: 'button',
//                    name: 'ActionEdit',
//                    text: '',
//                    cssClass: 'action edit',
//                    align: 'center',
//                    width: 24,
//                    icon: 'fa-edit',
//                    buttonType: 'success'
//                }, {
//                    type: 'button',
//                    name: 'ActionRemove',
//                    text: '',
//                    cssClass: 'action delete',
//                    align: 'center',
//                    width: 24,
//                    icon: 'fa-trash',
//                    buttonType: 'danger'
//                },

//                ],
//                data: data,
//                onDataBound: function () {
//                    $('textarea').autogrow();
//                    var format = xg.page.fields['table1'].fields[5].format;
//                    $('.datetime').datetimepicker({
//                        format: format
//                    });
//                }
//            }]
//    }]
//});


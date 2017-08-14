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
                                { name: 'Divison', text: 'Division', type: 'text', cols: 6, readonly: true},
                                { name: 'Currency', text: 'Currency', type: 'text', cols: 6, readonly: true, data: 'http://localhost:31604/api/request/GetText',/* placeholder: 'IDR',*/ },
                                { name: 'Expected_Date', text: 'Expected date', type: 'picker', cols: 8, placeholder: 'Pick a date...' },
                            ]
                        }]
                    },
                    {
                        name: 'requestpanel2', cols: 6, inline: true,
                        fields: [{
                            type: 'panel',
                            fields: [
                                { name: 'Location', text: 'Propose Receiving Material Location', type: 'select', cols: 8, tooltip: 'Media list', data:'http://localhost:31604/api/request/GetLocation' },
                                {
                                    name: 'BudgetSource', text: 'Budget Source',
                                    type: 'select', cols: 6, tooltip: 'Media list', data: 'http://localhost:31604/api/user/BudgetSourceList',
                                    onChange: function (value, text) {
                                        xg.call('BudgetSource', text);
                                    }
                                },
                            ]
                        }]
                    }]
            }]
        },
        {
            name: 'test',type: 'panel',text: 'HEADER INFORMATION',inline: true,
            fields: [
                { name: 'Justification', text: 'Justification', type: 'textarea' },
            ]
        },
        {
            name: 'iteminformation', type: 'panel', text: 'ITEM INFORMATION', inline: true,
            fields: [
                {
                    name: 'Material_Group', text: 'Material Group', type: 'select', cols: 4, tooltip: 'Media list',
                    data: 'http://localhost:31604/api/request/MaterialGroupList',
                    onChange: function (value, text) {
                        //xg.ajax({
                        //    url: 'http://localhost:31604/api/request/MaterialListItem?name=' + text,
                        //    type: 'GET',
                        //    data: {},
                        //    contentType: "application/json; charset=utf-8",
                        //    success: function (data) {
                        //        console.log(data);
                        //    //$('[xg-field="Item"]').val(data)
                        //        xg.populate({ Item: data.Item_Name });
                        //    },
                        //    complete: function () {
                        //        console.log("complete");
                        //    }
                        //});
                    }
                    //onChange: function (value, text) {
                    //    xg.call('Material_Group', text);
                    //}
                },
                {
                    type: 'fieldRow',
                    fields: [
                        {
                            name: 'Item', type: 'text', cols: 3, text: 'Item', tooltip: 'Media list',
                            data: 'http://localhost:31604/api/request/ItemList'
                        },
                    ]
                },
                { name: 'Description', text: 'Description', type: 'text', cols: 11 },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'Quantity', text: 'Quantity', type: 'text', cols: 4 },
                    ]
                },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'Estimate_Price', text: 'Estimate Price', type: 'text', cols: 4 },
                    ]
                },
                { name: 'Total_Estimate_Price', text: 'Total Estimate Price', cols: 4},
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'BudgetSources', text: 'Budget Sources', type: 'text', cols: 3 },
                    ]
                },
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'MaterialPicture', text: 'Material Picture', type: 'text', cols: 10 },
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
                        { name: 'save', type: 'button', text: 'Add', action: 'save', cssClass: 'xg-btn-success', cols: 1, offset: 7,stretch: true},
                        { name: 'button1', type: 'button', text: 'Reset', action: 'search', cssClass: 'xg-btn-success', cols: 1, stretch: true},
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
                {
                    type: 'panel',//text: 'Grid Panel',
                    fields: [
                        {
                            type: 'grid',text: 'Table',name: 'grid',dblClick: 'doubleClick',
                            fields: [
                                { name: 'Id', text: 'No', type: 'text', },
                                { name: 'Material_Group', text: 'Material', type: 'text' },
                                { name: 'Item', text: 'Item', type: 'text' },
                                { name: 'Description', text: 'Description', type: 'text' },
                                { name: 'Quantity', text: 'Quantity', type: 'text' },
                                { name: 'Estimate_Price', text: 'Estimate Price', type: 'text' },
                                { name: 'Total_Estimate_Price', text: 'Total', type: 'text' },
                                { name: 'BudgetSources', text: 'Budget Source', type: 'text' },
                            ],
                            url: 'http://localhost:31604/api/Request/ReadAllItem',
                        }
                    ]
                },
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
            //if ((window.StaffID) === '' || (window.StaffID) === null) {
            //    xg.navigate('PR/Login');
            //}
            //else {
                //untuk nama
                xg.ajax({
                        url: 'http://localhost:31604/api/user/GetUserName',
                        data: window.StaffID,
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        success: function (result) {
                            //if (res === null) {
                            //    xg.navigate('PR/Login');
                            //}
                            xg.populate({ Requester_Name: result });
                            
                        },
                        complete: function () {
                            console.log("Complete");
                            xg.loading.hide();
                        }
                    });
                //Untuk Position
                xg.ajax({
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
                });

                //Untuk Divisi
                xg.ajax({
                    url: 'http://localhost:31604/api/user/GetUserDivision',
                    data: window.StaffID,
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    success: function (res) {
                        console.log(res);
                        xg.populate({ Divison: res });
                    },
                    complete: function () {
                        console.log("Complete");
                        xg.loading.hide();
                    }
                });

                //Untuk IDR
                xg.ajax({
                    url: 'http://localhost:31604/api/request/GetText',
                    type: 'GET',
                    data: 'text'
                }).done(function (resp, status, xhr) {
                    xg.populate({ Currency: resp})
                }).fail(function (err) {
                    console.error(err);
                    });  
            //}
            xg.loading.hide();
            callback();
        },
        //Material: function (data)
        //{
        //    //alert(data);
        //    var material = xg.serialize(data);
        //    window.Id = data;
        //    window.Name = material.Name;
        //},
        BudgetSource: function (data)
        {
            $('[xg-field="BudgetSources"]').val(data)
        },
        //Material_Group: function (data) {
            
        //},
        save: function () {
            var req = xg.serialize();
            xg.ajax({
                url: 'http://localhost:31604/api/request/CreateItem',
                type: 'POST',
                data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log(data);
                },
                complete: function () {
                    console.log("complete");
                }
            });
        },
        
    }
});


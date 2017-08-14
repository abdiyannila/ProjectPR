nexigo.widget({
    text: 'CRUD',
    toolbars: [
    ],
    views: [
        {
            name: 'panel1',
            text: 'Contact Form',
            inline: true,
            fields: [
                { name: 'Material_Group', text: 'Material', cols: 5 },
                { name: 'Item', text: 'Item', cols: 5 },
                { name: 'Descripion', text: 'Description', cols: 5 },
                { name: 'Quantity', text: 'Quantity', cols: 5 },
                { name: 'Estimate_Price', text: 'Estimate Price', cols: 5 },
                { name: 'Total_Estimate_Price', text: 'Total', cols: 5 },
                { name: 'Sources', text: 'Budget Source', cols: 5 },
                {
                    type: 'buttons',
                    buttons: [
                        { name: 'save', text: 'Create', icon: 'fa-save', cssClass: 'xg-btn-info', action: 'save' },
                        { name: 'update', text: 'Update', icon: 'fa-save', cssClass: 'xg-btn-success', action: 'update' },
                        { name: 'delete', text: 'Delete', icon: 'fa-save', cssClass: 'xg-btn-danger', action: 'delete' },
                        { name: 'undo', text: 'Cancel', icon: 'fa-undo', cssClass: 'xg-btn-warning' },
                    ]
                },
            ]
        },

        {
            type: 'panel',
            text: 'Grid Panel',
            fields: [
                {
                    type: 'grid',
                    text: 'Table',
                    name: 'grid',
                    dblClick: 'doubleClick',
                    option: {
                        sortable: true,
                        showAggregates: true,
                        selectionMode: 'singlerow',
                        freezeColumn: ['No']
                    },
                    fields: [
                        {name: 'Id',text: 'No',type: 'text',},
                        { name: 'Material_Group', text: 'Material',  type:'text' },
                        { name: 'Item', text: 'Item', type: 'text' },
                        { name: 'Descripion', text: 'Description', type: 'text' },
                        { name: 'Quantity', text: 'Quantity', type: 'text'},
                        { name: 'Estimate_Price', text: 'Estimate Price', type: 'text'},
                        { name: 'Total_Estimate_Price', text: 'Total', type: 'text' },
                        { name: 'Sources', text: 'Budget Source', type: 'text' },
                    ],
                    url: 'http://localhost:31604/api/Request/ReadItemAll',
                    //data: [
                    //    {
                    //        Name: 'Alfa',
                    //        Address: 'Jalan-jalan'
                    //    },
                    //    {
                    //        Name: 'Indo',
                    //        Address: 'Kuda-kuda'
                    //    }
                    //]
                }
            ]
        },
    ],
    functions: {
        save: function () {
            var req = xg.serialize();
            xg.ajax({
                url: 'http://localhost:31604/api/request/Create',
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

        update: function () {
            var req = xg.serialize();
            xg.ajax({
                url: 'http://localhost:31604/api/request/UpdateData',
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
        delete: function () {
            var req = xg.serialize();
            var Nama = req.Nama;
            xg.ajax({
                url: 'http://localhost:31602/api/request/DeleteData?Nama=' + Nama,
                type: 'POST',
                //data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    alert("sukses");
                    console.log(data);
                },
                complete: function () {
                    console.log("complete");
                }
            });
        },
        init: function (xg, callback) {
            callback();
        }
    }
});
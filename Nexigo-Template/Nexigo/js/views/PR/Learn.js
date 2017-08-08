nexigo.widget({
    name: 'test',
    type: 'panel',
    views: [
        {
            name: 'panel1',
            type: 'panel',
            fields: [
                { name: 'Requester_Name', text: 'Requester_Name', cols: 5, readonly: true },
                { name: 'Requester_Position', text: 'Requester_Position', cols: 5, readonly: true }
            ]
        }],
    functions: {
        init: function (xg, callback) {
            if ((window.StaffID) === '' || (window.StaffID)=== null) {
                xg.navigate('PR/Login');
            } else {
                xg.ajax({
                    url: 'http://localhost:31604/api/user/GetUserName',
                    data: window.StaffID,
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    success: function (res) {
                        console.log(res);
                        xg.populate({ Requester_Position: res });
                    },
                    complete: function () {
                        console.log("complete");
                        xg.loading.hide();
                    }
                });
            }
            xg.loading.hide();
            callback();
        }
    }
});
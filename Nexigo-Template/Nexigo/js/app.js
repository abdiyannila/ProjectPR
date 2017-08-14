var db = {
    menu: [
        {
            text: 'List PR',
            icon: 'fa-home',
            link: 'PR/ListPR'
        },
        {
            text: 'Request PR',
            icon: 'fa-home',
            link: 'PR/RequestPR'
        },
        {
            text: 'Login',
            icon: 'fa-sign-in',
            link: 'PR/Login'
        },
        {
            text: 'Learn',
            link: 'PR/Learn',
        },
        {
            text: 'tabel',
            link: 'PR/tabel'
        }
        //{
        //    link: 'showcode',
        //    hidelink: true,
        //    text: 'Show Code',
        //    clas: 'right',
        //    icon: 'fa-code'
        //}
    ]
};

(function() {
    nexigo.config.widgetView = '[data-name=content]';
    nexigo.config.toolbarView = '#side-toolbar';
    nexigo.config.kendolibbase = 'libs/kendo/';
    nexigo.config.viewBasePath = '';
    nexigo.config.viewDefault = 'home';
    nexigo.config.errorMessage = {
        required: 'This Field Cannot be Empty'
    };
    nexigo.menu('[class="sg-header-menu"]',
    {
        theme: 'ccai',
        data: db.menu,
        onClick: function(name, link) {
            if (link === 'showcode') {
                var url = window.location.hash.substr(1) || 'text';
                $("#code-title").html("");
                $('.content-editor-wrapper').show();
                $.ajax({
                    url: 'js/views/' + url + '.js',
                    success: function(r) {
                        $('#code-title').html(url);
                        ace.edit('code-editor').getSession().setValue(r);
                    },
                    error: function(r, errStatus) {
                        if (errStatus === 'parsererror') { //ignore javascript parse error
                            $('#code-title').html(url);
                            ace.edit('code-editor').getSession().setValue(r.responseText);
                        }
                    }
                });
            } else {
                xg.navigate(link);
            }
        }
    });

    nexigo.loading
        .template =
        '<div class="ccai-loading"><div class="spinner"><img class="logo"  src="images/spinner-logo.png"/></div></div>';

    nexigo.on('widgetInit',
        function(a) {
            nexigo.extension.navigator.init('#side-navigation');
            $('.m-toolbar-icon').off();
            $('.m-toolbar-icon, .xg-toolbar').removeClass('active');
            $('.m-toolbar-icon')
                .on('click',
                    function() {
                        $('.m-toolbar-icon, .xg-toolbar').toggleClass('active');
                    });
            $('.xg-toolbar button')
                .on('click',
                    function() {
                        $('.m-toolbar-icon, .xg-toolbar').removeClass('active');
                    });
        });

    var url = window.location.hash.substr(1) || nexigo.config.viewDefault || 'home';
    //if (url !== 'showcode') {
    //    if (window.location.hash.substr(1) === url) xg.loadPage(url);
    //    else xg.navigate(url);
    //};

}());



//{
//    text: 'Layout',
//        icon: 'fa-columns',
//            menus: [
//                {
//                    link: 'demo/panel',
//                    text: 'Panel'
//                }
//            ]
//}, {
//    text: 'Text',
//        icon: 'fa-edit',
//            menus: [
//                {
//                    link: 'demo/text',
//                    text: 'Text Input'
//                }, {
//                    link: 'demo/email',
//                    text: 'Text Email'
//                }, {
//                    link: 'demo/password',
//                    text: 'Text Password'
//                }, {
//                    link: 'demo/textarea',
//                    text: 'Text Area'
//                }, {
//                    link: 'demo/numeric',
//                    text: 'Text Numeric'
//                }, {
//                    link: 'demo/tooltip',
//                    text: 'Text Tooltip and Info'
//                }
//            ]
//}, {
//    text: 'Picker',
//        icon: 'fa-calendar',
//            menus: [
//                {
//                    link: 'demo/datepicker',
//                    text: 'Datepicker'
//                }
//            ]
//}, {
//    text: 'Check & Radio',
//        icon: 'fa-check',
//            menus: [
//                {
//                    link: 'demo/checkbox',
//                    text: 'Checkbox'
//                }, {
//                    link: 'demo/radio',
//                    text: 'Radio'
//                }
//            ]
//}, {
//    text: 'Collection',
//        icon: 'fa-list',
//            menus: [
//                {
//                    link: 'demo/select',
//                    text: 'Select'
//                }, {
//                    link: 'demo/list',
//                    text: 'List'
//                }, {
//                    link: 'demo/autocomplete',
//                    text: 'Auto Complete'
//                }
//            ]
//}, {
//    text: 'Grid',
//        icon: 'fa-table',
//            menus: [
//                {
//                    link: 'demo/grid/grid_basic',
//                    text: 'Basic'
//                },
//                {
//                    link: 'demo/grid/table',
//                    text: 'Table'
//                }
//            ]
//}, {
//    text: 'Tools',
//        icon: 'fa-wrench',
//            menus: [
//                {
//                    link: 'demo/popup',
//                    text: 'Modal popup'
//                }, {
//                    link: 'demo/dialog',
//                    text: 'Message Dialog'
//                }, {
//                    link: 'demo/content',
//                    text: 'Hide Show Content'
//                }, {
//                    link: 'demo/tab',
//                    text: 'Tab'
//                }, {
//                    link: 'demo/toolbar',
//                    text: 'Toolbar',
//                },
//                {
//                    link: 'demo/file',
//                    text: 'File Upload',
//                }, {
//                    link: 'demo/approvalflow',
//                    text: 'Approval Flow',
//                }
//            ]
//},

//{
//    text: 'Labs4',
//        icon: 'fa-edit',
//            menus: [
//                //{
//                //    link: 'demo/labs/lab1',
//                //    text: 'Lab 01'
//                //},

//                {
//                    link: 'demo/labs/lab2',
//                    text: 'Lab 02'
//                }, {
//                    link: 'demo/labs/lab3',
//                    text: 'Lab 03'
//                }, {
//                    link: 'demo/labs/lab4',
//                    text: 'Lab 04'
//                },
//                {
//                    link: 'demo/labs/lab-ccai',
//                    text: 'Lab 05'
//                }
//            ]
//},
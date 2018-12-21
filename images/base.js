$().ready(function(){
	prettyPrint();
   
   //初始化menu
    var menu1 = $(".js_menu_link1").oMenu({
        menu: ".js_menu1",
        linkage: true, //是否连动
        zztop:50,
        openfn: function() {
            //打开menu其他事件
            var windowH = $(window).height();
            $(".js_userMenu").height(windowH);
            $("body,html").css("overflow", "hidden");
        },
        closefn:function(){
            //关闭menu其他事件
            $("body,html").attr("style", "");
        }
    });

    //menulink
    var menulistS='[{"name":"框架基础","link":"index.html"},{"name":"Grid / 格子","link":"oGrid.html"},{"name":"button / 按钮","link":"oButton.html"},{"name":"form / 表单相关","link":"form.html"},{"name":"oTab / 切换标签","link":"oTab.html"},{"name":"oTouch / 触摸事件","link":"oTouch.html"},{"name":"oScrollFn / 滚轮事件","link":"oScrollFn.html"},{"name":"oScrollBar / 自定义滚动条","link":"oScrollBar.html"},{"name":"oHoverMove / hover移动事件","link":"oHoverMove.html"},{"name":"oBrowser / 浏览器判断","link":"oBroswer.html"},{"name":"XSS / 前端处理","link":"XSS.html"},{"name":"oHrel / 高度跟随","link":"oHrel.html"},{"name":"oBoxCenter / 居中布局","link":"oBoxCenter.html"},{"name":"oBgCover / 背景最大居中","link":"oBgCover.html"},{"name":"oScale / 比例大小","link":"oScale.html"},{"name":"oToggle / 切换门","link":"oToggle.html"},{"name":"布局-自适应高","link":"obox_index_autoH.html"},{"name":"布局-自适应宽","link":"obox_index_autoW.html"},{"name":"基础字体图标","link":"o_iconfont_base.html"},{"name":"自定义字体图标","link":"o_iconfont.html"},{"name":"oCountTo / 计数","link":"oCountTo.html"},{"name":"oSlider / 滑动轮播","link":"oSlider.html"},{"name":"oMenu / 响应式导航","link":"oMenu.html"},{"name":"oCutText / 文本裁剪","link":"oCutText.html"},{"name":"oHoverMove / hover移动事件","link":"oHoverMove.html"},{"name":"oLoading / 加载","link":"oLoading.html"},{"name":"oPictur / 响应式图片","link":"oPictur.html"},{"name":"oPopup / 弹层","link":"oPopup.html"},{"name":"oPopupFn / 方法弹层","link":"oPopupFn.html"},{"name":"oAlert / 信息弹层","link":"oAlert.html"},{"name":"oConfirm / 信息弹层","link":"oConfirm.html"},{"name":"oSelect / 下拉菜单","link":"oSelect.html"},{"name":"oSelectClean / 下拉菜单(干净)","link":"oSelectClean.html"},{"name":"oPager / 分页","link":"oPager.html"},{"name":"oScrollLoad / 滚动加载","link":"oScrollLoad.html"},{"name":"oFullPage / 全屏滚动","link":"oFullPage.html"}]'
    var menulist=JSON.parse(menulistS);

    for(var i=0 ;i<menulist.length;i++){
        var $li=$("<li/>"),
            $a=$("<a/>");
        $a.attr("href",menulist[i].link).html(menulist[i].name);
        $li.append($a);
        $(".js_menu1 ul").append($li);
    }

    // function clearmenu(){
    //     var $li=$("<li>"),
    //           $a=$("<a>"),
    //           $ul=$(".js_menu1 ul");
    //    for(var o in menulist){
    //         var aa=$a.clone(),
    //               li=$li.clone();

    //         //aa.html(menulist.o[0]).attr("href",menulist[o][1]);
    //        li.append(aa);
    //        $ul.append(li);
    //    }
    // };
    // clearmenu();
});
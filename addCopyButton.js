$(document).ready(function() {
    var codeblocks = $("pre");

    codeblocks.each(function() {
        //显示 复制代码 按钮
        $(this).css("position", "relative");
        var copy = $("<div>复制</div>").css({
            "position": "absolute",
            "right": "4px",
            "top": "0px",
            "background-color": "#f7f7f7",
            "padding": "2px 8px",
            "margin": "8px",
            "border-radius": "4px",
            "cursor": "pointer",
            "box-shadow": "0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)",
            "visibility": "hidden"
        });
        $(this).append(copy);

        //鼠标移到代码块，就显示按钮
        $(this).on("mouseover", function() {
            $(this).find("div").css({
                "visibility": "visible",
                "z-index": "999"
            });
        });

        //执行 复制代码 功能
        copy.on("click", function() {
            var code = $(this).siblings("code")[0];
            navigator.clipboard.writeText(code.textContent)
                .then(function() {
                    $(this).html("复制成功");
                    setTimeout(function() {
                        copy.html("复制");
                    }, 1000);
                })
                .catch(function() {
                    console.error("Failed to copy text: ", err);
                });
        });

        //鼠标从代码块移开 则不显示复制代码按钮
        $(this).on("mouseout", function() {
            $(this).find("div").css("visibility", "hidden");
        });
    });
});

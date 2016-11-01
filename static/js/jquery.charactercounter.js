/**
 * Character Counter Plugin for jQuery
 *
 * @version: v0.01
 * @author: serdar ozturk
 * @kokulusilgi
 */
function GetCharLength(str)
{
    var iLength = 0;
    for(var i = 0;i<str.length;i++)
    {
        if(str.charCodeAt(i) >255)
        {
            iLength += 2;
        }
        else
        {
            iLength += 1;
        }
    }
    return iLength;
}
(function($) {
    $.fn.extend( {
        characterCounter: function(limit) {
            $(this).parent().css('position','relative');
            ccinputLineHeight = parseInt($(this).css('line-height').replace('px',''))+parseInt($(this).css('padding-top').replace('px',''))+parseInt($(this).css('padding-bottom').replace('px',''));
            ccinputWidth = $(this).innerWidth();
            ccinputHeight = $(this).innerHeight();
            ccinputPos = $(this).position();
            var the_h=ccinputHeight-ccinputLineHeight-10;
            $(this).parent().append('<div class="ccinput-counter" style="position:absolute; visibility: hidden; color:#000; z-index:911; text-align: right; top:'+ccinputPos.top+'px; margin-top:'+the_h+'px;height:'+ccinputHeight+'px; line-height:'+ccinputLineHeight+'px;">'+limit+'</div>');
            var ccinputEl = $('.ccinput-counter',$(this).parent());
            ccinputElWidth = ccinputEl.innerWidth();

            ccinputPosLeft = ccinputWidth-5-ccinputElWidth;
            ccinputEl.css('left', ccinputPosLeft+'px');

            $(this).on("focus", function() {
                $('.ccinput-counter',$(this).parent()).css('visibility','visible');
            });
         /*   $(this).on("blur", function() {
                $('.ccinput-counter',$(this).parent()).css('visibility','hidden');
            });*/

            var bind_name = 'input';
            if (navigator.userAgent.indexOf("MSIE") != -1){
                bind_name = 'propertychange';
            }
            $(this).bind(bind_name, function(){
                countString($(this));
            });



            function countString(src) {
                var chars =GetCharLength(src.val());
                if (chars > limit) {
                    src.val(src.val().substr(0, limit));
                    chars = limit;
                }
                ccinputPercent = parseFloat((chars / limit));
                ccinputPercent = ccinputPercent.toFixed(2);
                $('.ccinput-counter', src.parent()).text(limit - chars);
            }
        }
    });
})(jQuery);
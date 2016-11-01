/**
 * Created by coder on 16-10-30.
 */
var test=async (ctx,next)=> {
    ctx.response.body={
        "types": [
            "table",
            "introduction"
        ],
        //这个应该与下面的名字一致  随便琦
        "table": {
            "context": [
                {
                    "name": "FPGA",
                    "number": "0001",
                    "status": "使用中",
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "FPGA",
                    "number": "0001",
                    "status": "使用中",
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "FPGA",
                    "number": "0001",
                    "status": "使用中",
                    "url": "http://www.baidu.com"
                }
            ]
            //数组里一个大括号代表表格的一行  第一个即索引0可以做成表头  这个你选择
        },
        "introduction": {
            "context": [
                {
                    "url": "images/Cyclone%20IV%20GX.jpg",
                    "sketch_heder": "FPGA",
                    "sketch": "FPGA（Field－Programmable Gate Array），即现场可编程门阵列，它是在PAL、GAL、CPLD等可编程器件的基础上进一步发展的产物。它是作为专用集成电路（ASIC）领域中的一种半定制电路而出现的，既解决了定制电路的不足，又克服了原有可编程器件门电路数有限的缺点。",
                    "video_url":"http://www.baidu.com",
                    "detail_url":"http://www.baidu.com"
                },
                {
                    "url": "images/Cyclone%20IV%20GX.jpg",
                    "sketch_heder": "FPGA",
                    "sketch": "FPGA（Field－Programmable Gate Array），即现场可编程门阵列，它是在PAL、GAL、CPLD等可编程器件的基础上进一步发展的产物。它是作为专用集成电路（ASIC）领域中的一种半定制电路而出现的，既解决了定制电路的不足，又克服了原有可编程器件门电路数有限的缺点。",
                    "video_url":"http://www.baidu.com",
                    "detail_url":"http://www.baidu.com"
                },
                {
                    "url": "images/Cyclone%20IV%20GX.jpg",
                    "sketch_heder": "FPGA",
                    "sketch": "FPGA（Field－Programmable Gate Array），即现场可编程门阵列，它是在PAL、GAL、CPLD等可编程器件的基础上进一步发展的产物。它是作为专用集成电路（ASIC）领域中的一种半定制电路而出现的，既解决了定制电路的不足，又克服了原有可编程器件门电路数有限的缺点。",
                    "video_url":"http://www.baidu.com",
                    "detail_url":"http://www.baidu.com"
                }
            ]
            //第一个时URL  第二个是正文内容
        }
    }
    ctx.response.type = 'json';
    await  next();
};


module.exports={
    "POST /test":test
}
var test = (function () {
    function test() {
        var _this = this;
        this.aaaa = "aaaaaa";
        this.Getaaaa = function () { return _this.aaaa; };
    }
    return test;
}());
var score;
$(function () {
    var obj = new test();
    console.log(obj.Getaaaa());
    var button = $("#button1");
    var button2 = $("#button2");
    var textArea = $("#textInputArea");
    score = new Score("drawing");
    var drawing = $("#drawing");
    var drawing2 = $("#drawing2");
    button.on("click", function () {
        //alert(obj.Getaaaa());
        score.Clear();
        score.DrawFrame();
        score.DrawStaff(0);
        score.DrawStaff(1);
        score.DrawStaff(2);
        var text = textArea.val();
        score.ParseAndDraw(text);
        score.DrawClef(0);
        score.DrawClef(1);
        score.DrawClef(2);
        var val = $("#drawing");
    });
    // window.addEventListener('click',(eve)=>{
    // },false);
    // window.addEventListener('keyup',(eve)=>{
    // });
});
//# sourceMappingURL=index.js.map
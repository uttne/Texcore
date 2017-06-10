
class test {
    public aaaa: string = "aaaaaa";
    public Getaaaa = () => this.aaaa;
}

var score: Score;

$(() => {
    let obj = new test();

    console.log(obj.Getaaaa());

    let button = $("#button1");
    let button2 = $("#button2");

    let textArea = $("#textInputArea");

    score = new Score("drawing");

let drawing = $("#drawing");
let drawing2 = $("#drawing2");

    button.on("click", () => {
        //alert(obj.Getaaaa());
        score.Clear();

        score.DrawFrame();

        score.DrawStaff(0);

        score.DrawStaff(1);

        score.DrawStaff(2);

        let text = textArea.val();

        score.ParseAndDraw(text);

        score.DrawClef(0);
        score.DrawClef(1);

var val = $("#drawing");
    });
    // window.addEventListener('click',(eve)=>{

    // },false);

    // window.addEventListener('keyup',(eve)=>{

    // });

});


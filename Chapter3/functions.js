const isAmstrong = function(x) {
    let orig_num = x;
    let total = 0;
    while(x != 0) {
        total += (x%10)**3;
        x = Math.floor(x/10);
    };
    if (total == orig_num) {
        alert("Yaay Juute!! "+orig_num+" is an Amstrong number");
    }
    else {
        alert("Alas Ann'Thamma ! "+orig_num+" is not an Amstrong number");
    }
};
let x = Number(prompt("Enter a number"));
while(Number.isNaN(x)) {
    x = Number(prompt("I ain't joking bi**h, enter a real NUMBER if you don't want your house bombed"));
}
isAmstrong(x);
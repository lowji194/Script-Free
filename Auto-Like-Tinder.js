javascript:x = document.getElementsByClassName('Pos(r) Py(12px) Py(16px)--ml Px(4px) Px(8px)--ml D(f) Jc(sb) Ai(c) Maw(375px)--m Mx(a) Pe(n)');
total = 0;
setTimeout(function loop() {
name = document.getElementsByClassName('Ov(h) Ws(nw) As(b) Ell')[1].innerText;
x[0].lastChild.previousElementSibling.lastChild.click();
if (block = document.getElementsByClassName('Bdrs(8px) Ov(h) Ta(c) Bgc(#fff) M(10px) W(100%) Miw(300px) W(400px)--ml Mah(100%)--xs Ovy(s)--xs Ovs(touch)--xs Ovsby(n)--xs').length == 1) {
return console.warn('Đã hết lượt thả ❤️');
} else { console.log(`Đã Thả ❤️ ${name} - Total: ${++total}`);}
setTimeout(loop, 1000);
},1000)

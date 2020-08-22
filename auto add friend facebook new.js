
let speed = 10; // thời gian nghỉ
let totalFriendRequestsSent = 1000; // Số yêu cầu muốn gửi
let timePerAction = speed*1000;

// Don't modify code below
(() => {
  console.log("\x1b[34m%s\x1b[0m", "*Code by JayremntB, 2020*");
  console.log("\x1b[34m%s\x1b[0m", "additional features By Lowji194");
  console.log("\x1b[32m%s\x1b[0m", "Nếu bạn gặp lỗi, chỉ cần tải lại trang, đợi 3 giây và chạy lại Script");
  console.log("-----------------------");
  console.log("\x1b[31m%s\x1b[0m",`Thời gian chờ là ${speed} Giây`);
  console.log("\x1b[31m%s\x1b[0m",`Tổng số yêu cầu muốn gửi: ${totalFriendRequestsSent}`);
  if(speed < 1) return console.error("speed phải >= 1 Giây");
  // close popup notification error
  ! function() {
    "use strict";
    var e = 1;
    var l = setInterval(function() {
            var e, l = document.getElementsByClassName("oajrlxb2 s1i5eluu qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x cxgpxx05 d1544ag0 sj5x9vvc tw6a2znq oqcyycmt esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l ehryuci6 bp9cbjyn beltcj47 p86d2i9g aot14ch1 kzx2olss rt8b4zig n8ej3o3l agehan2d sk4xxmp2 lrazzd5p gigivrx4 sf5mxxl7 g0qnabr5 lrwzeq9o iqfcb0g7 lsqurvkf id6903cd jq4qci2q m5l1wtfr taijpn5t sn7ne77z oqhjfihn bwm1u5wc");
			var e, l = document.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr lrazzd5p bwm1u5wc ni8dbmo4 stjgntxs ltmttdrg g0qnabr5");
            for (e = 0; e < l.length; ++e) l[e].click()
        }, 2000),
        t = setInterval(function() {
        }, 1e3)
}();
//
  // add friends in group
  if(window.location.href.includes("groups")) {
    if(document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329').length === 0) return console.warn("Not found any users");
    let AddFriendButtonIndex = 0;
    //
    setTimeout(function continuousWhenPageLoad() {
      let listUsers = document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
      if(listUsers.length === 0 || AddFriendButtonIndex > listUsers.length - 1) return console.warn("You have reached the end of list friends");
      // click Add Friend buttons
      setTimeout(function clickNextAddFriendButton() {
        if(totalFriendRequestsSent === 0) return console.warn(`Process ended`);
        // if reach end page
        if(AddFriendButtonIndex + 8 > listUsers.length - 1) {
          window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
          setTimeout(continuousWhenPageLoad, 5000);
          return;
        }
        // get user's name
        const userName = listUsers[AddFriendButtonIndex].parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.firstChild.firstChild.textContent
        // in case not Add Friend Button
        let label = listUsers[AddFriendButtonIndex].getAttribute('aria-label');
        if(!label || (label && (label.toLowerCase() !== 'thêm bạn bè' && label.toLowerCase() !== "add friend"))) {
            console.log(`Bỏ qua ${userName}`);
            AddFriendButtonIndex ++;
            setTimeout(clickNextAddFriendButton, 0);
            return;
        }
        // click Add Friend Button
        listUsers[AddFriendButtonIndex].click();
        console.log(`Đã gửi yêu cầu tới ${userName} - Còn lại ${--totalFriendRequestsSent}...`);
        // click next Add Friend button
        AddFriendButtonIndex ++;
        setTimeout(clickNextAddFriendButton, timePerAction);
      }, 0);
    }, 0);
  }
  // add friends in list friends
  else {
    if(document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr').length === 0) return console.warn("Not found any users");
    let AddFriendButtonIndex = 0;
    //
    setTimeout(function continuousWhenPageLoad() {
      let listUsers = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
      if(listUsers.length === 0 || AddFriendButtonIndex > listUsers.length - 1) return console.warn("You have reached the end of list friends");
      // click Add Friend buttons
      setTimeout(function clickNextAddFriendButton() {
        if(totalFriendRequestsSent === 0) return console.warn(`Process ended`);
        // if reach end page
        if(AddFriendButtonIndex + 8 > listUsers.length - 1) {
          window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
          setTimeout(continuousWhenPageLoad, 3000);
          return;
        }
        // get user's name
        const userName = listUsers[AddFriendButtonIndex].firstChild.nextSibling.firstChild.textContent;
        // in case not Add Friend Button
        let label = listUsers[AddFriendButtonIndex].lastChild.firstChild.firstChild.firstChild.getAttribute('aria-label');
        if(!label || (label.toLowerCase() !== 'thêm bạn bè' && label.toLowerCase() !== "add friend")) {
            console.log(`Bỏ qua ${userName}`);
            AddFriendButtonIndex ++;
            setTimeout(clickNextAddFriendButton, 0);
            return;
        }
        // click Add Friend Button
        listUsers[AddFriendButtonIndex].lastChild.firstChild.firstChild.firstChild.click();
        console.log(`Đã gửi yêu cầu tới ${userName} - Còn lại ${--totalFriendRequestsSent}...`);
        // click next Add Friend button
        AddFriendButtonIndex ++;
        setTimeout(clickNextAddFriendButton, timePerAction);
      }, 0);
    }, 0);
  }
})();
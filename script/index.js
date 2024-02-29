document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('open');
})

let menu_links_mobile = document.querySelector('.menu_buttons_mobile'),
    menu_links_mobile_button_open = document.querySelector('#menu_links_button_1'),
    menu_links_mobile_button_close = document.querySelector('#menu_links_button_2');

document.querySelector('#menu_links_button_1').onclick = function(){
    menu_links_mobile.classList.remove('d-none')
    menu_links_mobile_button_open.classList.add('d-none')
    menu_links_mobile_button_close.classList.remove('d-none')
}

document.querySelector('#menu_links_button_2').onclick = function(){
    menu_links_mobile.classList.add('d-none')
    menu_links_mobile_button_open.classList.remove('d-none')
    menu_links_mobile_button_close.classList.add('d-none')
}

let cards_number_1 = document.querySelector('.cards_number_1'),
    cards_number_2 = document.querySelector('.cards_number_2'),
    cards_number_3 = document.querySelector('.cards_number_3'),
    cards_number_4 = document.querySelector('.cards_number_4'),
    cards_number_5 = document.querySelector('.cards_number_5'),
    cards_number_6 = document.querySelector('.cards_number_6'),
    cards_number_7 = document.querySelector('.cards_number_7'),
    cards_number_8 = document.querySelector('.cards_number_8'),
    cards_number_9 = document.querySelector('.cards_number_9'),
    cards_number_10 = document.querySelector('.cards_number_10'),
    cards_number_11 = document.querySelector('.cards_number_11'),
    cards_number_12 = document.querySelector('.cards_number_12');
    

let link_submit_1 = document.querySelector('.submit_1'),
    link_submit_2 = document.querySelector('.submit_2'),
    link_submit_3 = document.querySelector('.submit_3'),
    link_submit_4 = document.querySelector('.submit_4'),
    link_submit_5 = document.querySelector('.submit_5'),
    link_submit_6 = document.querySelector('.submit_6'),
    link_submit_7 = document.querySelector('.submit_7'),
    link_submit_8 = document.querySelector('.submit_8'),
    link_submit_9 = document.querySelector('.submit_9'),
    link_submit_10 = document.querySelector('.submit_10'),
    link_submit_11 = document.querySelector('.submit_11'),
    link_submit_12 = document.querySelector('.submit_12');

    let mobile_link_submit_1 = document.querySelector('.mobile_submit_1'),
    mobile_link_submit_2 = document.querySelector('.mobile_submit_2'),
    mobile_link_submit_3 = document.querySelector('.mobile_submit_3'),
    mobile_link_submit_4 = document.querySelector('.mobile_submit_4'),
    mobile_link_submit_5 = document.querySelector('.mobile_submit_5'),
    mobile_link_submit_6 = document.querySelector('.mobile_submit_6'),
    mobile_link_submit_7 = document.querySelector('.mobile_submit_7'),
    mobile_link_submit_8 = document.querySelector('.mobile_submit_8'),
    mobile_link_submit_9 = document.querySelector('.mobile_submit_9'),
    mobile_link_submit_10 = document.querySelector('.mobile_submit_10'),
    mobile_link_submit_11 = document.querySelector('.mobile_submit_11'),
    mobile_link_submit_12 = document.querySelector('.mobile_submit_12');
    

document.querySelector('.submit_1').onclick = function(){
    link_submit_1.classList.add('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.remove('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_2').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.add('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.remove('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_3').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.add('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.remove('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_4').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.add('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.remove('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_5').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.add('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.remove('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_6').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.add('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.remove('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_7').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.add('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.remove('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_8').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.add('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.remove('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_9').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.add('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.remove('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_10').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.add('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.remove('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_11').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.add('underline')
    link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.remove('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.submit_12').onclick = function(){
    link_submit_1.classList.remove('underline')
    link_submit_2.classList.remove('underline')
    link_submit_3.classList.remove('underline')
    link_submit_4.classList.remove('underline')
    link_submit_5.classList.remove('underline')
    link_submit_6.classList.remove('underline')
    link_submit_7.classList.remove('underline')
    link_submit_8.classList.remove('underline')
    link_submit_9.classList.remove('underline')
    link_submit_10.classList.remove('underline')
    link_submit_11.classList.remove('underline')
    link_submit_12.classList.add('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.remove('d-none')
}









document.querySelector('.mobile_submit_1').onclick = function(){
    mobile_link_submit_1.classList.add('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.remove('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_2').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.add('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.remove('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_3').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.add('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.remove('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_4').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.add('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.remove('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_5').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.add('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.remove('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_6').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.add('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.remove('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_7').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.add('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.remove('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_8').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.add('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.remove('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_9').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.add('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.remove('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_10').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.add('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.remove('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_11').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.add('underline')
    mobile_link_submit_12.classList.remove('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.remove('d-none')
    cards_number_12.classList.add('d-none')
}

document.querySelector('.mobile_submit_12').onclick = function(){
    mobile_link_submit_1.classList.remove('underline')
    mobile_link_submit_2.classList.remove('underline')
    mobile_link_submit_3.classList.remove('underline')
    mobile_link_submit_4.classList.remove('underline')
    mobile_link_submit_5.classList.remove('underline')
    mobile_link_submit_6.classList.remove('underline')
    mobile_link_submit_7.classList.remove('underline')
    mobile_link_submit_8.classList.remove('underline')
    mobile_link_submit_9.classList.remove('underline')
    mobile_link_submit_10.classList.remove('underline')
    mobile_link_submit_11.classList.remove('underline')
    mobile_link_submit_12.classList.add('underline')

    cards_number_1.classList.add('d-none')
    cards_number_2.classList.add('d-none')
    cards_number_3.classList.add('d-none')
    cards_number_4.classList.add('d-none')
    cards_number_5.classList.add('d-none')
    cards_number_6.classList.add('d-none')
    cards_number_7.classList.add('d-none')
    cards_number_8.classList.add('d-none')
    cards_number_9.classList.add('d-none')
    cards_number_10.classList.add('d-none')
    cards_number_11.classList.add('d-none')
    cards_number_12.classList.remove('d-none')
}

let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.slot_info').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        });
    });
});










window.onload = function () {
    var box=document.getElementsByClassName('card');
    var btn=document.getElementById('show-more_1');
    for (let i=4;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 4;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('card');
        countD += 10;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "inline-block";
            }
        }

    })
}
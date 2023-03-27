var focusObj;
window.addEventListener('DOMContentLoaded', function(){
    var wrap = document.querySelector('.wrap');
    wrap.style.opacity = '1';
    wrap.style.marginTop = '0';

    document.querySelector('a.sign').addEventListener('click',function(e){
        e.preventDefault();
        var url = this.href;
        wrap.style.opacity = '0';
        wrap.style.marginTop = '-100px';
        setTimeout(function(){
            document.location.href = url;
        },500);

    });

    var pwImg = document.querySelectorAll('.txtPW_box img');
    pwImg.forEach(function(element,index){
        element.addEventListener('click',function(){
            var input = document.querySelectorAll('.txtPW_box input');
            if(input[0].type == 'password'){
                for(i=0;i<pwImg.length;i++){
                    pwImg[i].src = '/web/img/icon_eye_02.png'
                    input[i].type = 'text'
                }
            }else{
                for(i=0;i<pwImg.length;i++){
                    pwImg[i].src = '/web/img/icon_eye_01.png'
                    input[i].type = 'password'
                }
            }
        });
    });
    document.querySelector(".modal .btn_a").addEventListener("click",() => {
        document.querySelector("html").classList.remove("show"); 
        focusObj.focus();
    });
    document.querySelector(".open_nav_cover").addEventListener("click",() => {
        document.querySelector("html").classList.remove("show"); 
    });
    

});
function isEmpty(obj,msg){
    if(obj.value == ""){
        document.querySelector(".modal span").innerHTML = msg;
        document.querySelector("html").classList.add("show"); 
        focusObj = obj;
        }
}
function join(){
    var form = document.joinForm,
    checked = document.querySelector('input[type=radio][name=gender]:checked');
    if(isEmpty(form.txtID,"아이디를 채워주")){return false;}
    if(isEmpty(form.txtNA,"모든 항목을 채워주세요.")){return false;}
    if(isEmpty(form.txtMI,"모든 항목을 채워주세요.")){return false;}
    if(isEmpty(form.txtPW,"모든 항목을 채워주세요.")){return false;}
    if(isEmpty(form.txtCPW,"모든 항목을 채워주세요.")){return false;}
    if(isEmpty(form.txtBD,"모든 항목을 채워주세요.")){return false;}
    if(isEmpty(form.txtPH,"모든 항목을 채워주세요.")){return false;}
    if(checked == null){
        document.querySelector(".modal span").innerHTML = "모든 항목을 채aaa워주세요";
        document.querySelector("html").classList.add("show");
        return false;
    }
}
// 1.알림창 꾸미기 2.확인방법 재구축 3. ajax제이쿼리없이 제설계



//function join(){
//    if(txtID.value == "" || txtMI.value == "" || txtPW.value == ""|| txtBD.value == ""|| $("input:radio[name=gender]").is(":checked")==false || txtPH.value == ""){
//        alert("모든 칸을 채워주세요.");
//    }else if(txtPW.value != txtCPW.value){
//        alert("비밀번호를 다시 확인해주세요.");
//    }else{
//        var data = $("form").serializeArray();
//        var object = {};
//        for (var i = 0; i < data.length; i++){
//            object[data[i]['name']] = data[i]['value'];
//        }
//        var data2 = JSON.stringify(object);
//        console.log(data2);
//        $.ajax({
//            url: "http://localhost:8881/sign/signup",
//            type: "post",
//            data: data2,
//            success: function (data) {
//                alert("성공");						
//                let str = JSON.stringify(data);
//                alert(str); 
//            }
//        })
//    }
//    
//}
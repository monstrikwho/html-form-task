window.onload = function() {

    // Toggle radio button
        var label = document.querySelectorAll('.gender label');
        label.forEach((item, index) => {
            item.addEventListener('click', () => {
                if(index === 0) {
                    label[0].querySelector('input').setAttribute('checked', 'checked');
                    label[1].querySelector('input').removeAttribute('checked');
                } else {
                    label[0].querySelector('input').removeAttribute('checked');
                    label[1].querySelector('input').setAttribute('checked', 'checked');
                }
            });
        });

    // add option for selects
        var selectDay = document.querySelector('select[name="day"');
        var selectMonth = document.querySelector('select[name="month"');
        var selectYear = document.querySelector('select[name="year"');
        
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                
        
        for(let i=1; i < 32; i++) {
            var option = `<option value="${i-1}">${i}</option>`;
            selectDay.insertAdjacentHTML('beforeend', option);
        }

        for(let i=1; i < 13; i++) {
            var option = `<option value="${month[i-1]}">${month[i-1]}</option>`;
            selectMonth.insertAdjacentHTML('beforeend', option);
        }
        
        for(let i=1980; i < 2012; i++) {
            var option = `<option value="${i}">${i}</option>`;
            selectYear.insertAdjacentHTML('beforeend', option);
        }


    // send form
        var button = document.querySelector('.actions button');
        var res = {
            userName: false,
            userLastName: false,
            userEmail: false,
            userPass: false,
            userPassRepeat: false
        };

        button.addEventListener('click', () => {
            checkName();
            checkEmail();
            
            if(res.userName && res.userLastName && res.userEmail && res.userPass && res.userPassRepeat) {
                alert('good');
            }
        });

        
        var userName = document.querySelector('input[name="username"]');
        var userLastName = document.querySelector('input[name="userlastname"]');
        var userEmail = document.querySelector('input[name="email"]');
        var userPass = document.querySelector('input[name="password"]');
        var userPassRepeat = document.querySelector('input[name="repeatpassword"]');


        var checkName = () => {
            if(userName.value.length > 2) {
                userName.parentElement.querySelector('.check').style.display = 'block';
                userName.style.borderBottom = '1px solid #f2f2f2';
                res.userName = true;
            } else {
                userName.style.borderBottom = '1px solid #e32929';
                userName.parentElement.querySelector('.check').style.display = 'none';
                res.userName = false;
            }
            
            if(userLastName.value.length > 2) {
                userLastName.parentElement.querySelector('.check').style.display = 'block';
                userLastName.style.borderBottom = '1px solid #f2f2f2';
                res.userLastName = true;
            } else {
                userLastName.style.borderBottom = '1px solid #e32929';
                userLastName.parentElement.querySelector('.check').style.display = 'none';
                res.userLastName = false;
            }
        }


        var checkEmail = () => {
            var userEmailValue = userEmail.value.split('');
            var j = 2;
            var posS = 0;
            
            for(let i=0; i < userEmailValue.length; i++) {
                if(userEmailValue[i] === '@') {
                    posS = i;
                    j--;
                }
                if(userEmailValue[i] === '.' && i > posS && i !== userEmailValue.length - 1 && posS + 1 !== i) {
                    j--;
                }
            }

            if(j === 0) {
                userEmail.parentElement.querySelector('.check').style.display = 'block';
                userEmail.style.borderBottom = '1px solid #f2f2f2';
                res.userEmail = true;
            } else {
                userEmail.style.borderBottom = '1px solid #e32929';
                userEmail.parentElement.querySelector('.check').style.display = 'none';
                res.userEmail = false;
            }
        }

        var checkPass = () => {
            if(userPass.value.length > 8) {
                userPass.parentElement.querySelector('.check').style.display = 'block';
                userPass.style.borderBottom = '1px solid #f2f2f2';
                res.userPass = true;
            } else {
                userPass.style.borderBottom = '1px solid #e32929';
                userPass.parentElement.querySelector('.check').style.display = 'none';
                res.userPass = false;
            }
            
            if(userPassRepeat.value === userPass.value) {
                userPassRepeat.parentElement.querySelector('.check').style.display = 'block';
                userPassRepeat.style.borderBottom = '1px solid #f2f2f2';
                res.userPassRepeat = true;
            } else {
                userPassRepeat.style.borderBottom = '1px solid #e32929';
                userPassRepeat.parentElement.querySelector('.check').style.display = 'none';
                res.userPassRepeat = false;
            }
        }

        
        // 
            userName.oninput = () => {
                checkName();
            }
            userLastName.oninput = () => {
                checkName();
            }
            userEmail.oninput = () => {
                checkEmail();
            }
            userPass.oninput = () => {
                checkPass();
            }
            userPassRepeat.oninput = () => {
                checkPass();
            }



            
}
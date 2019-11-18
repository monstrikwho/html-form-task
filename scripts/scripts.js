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

}
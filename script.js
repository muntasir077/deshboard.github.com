$('#picker1').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'y-m-d H:i',
    onShow: function (ct) {
        this.setOptions({
            maxDate: $('#picker2').val() ? $('#picker2').val() : false
        })
    }

})
$('#picker2').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'y-m-d H:i',
    onShow: function (ct) {
        this.setOptions({
            minDate: $('#picker1').val() ? $('#picker1').val() : false
        })
    }

})
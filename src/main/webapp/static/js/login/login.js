/**
 * Created by pc on 2017-11-01.
 */
var Login = {
    register : function () {
        $.ajax({
            type: "POST",
            url: "api/v1/login/register.json",
            dataType: "JSON",
            data: {
                userName : '安文轩',
                password : '123456'
            },
            success: function (data) {
                alert(data);
                if (!data.success) {
                    alert(data.message);
                    return;
                }
            },
            error: function (data) {
                alert('意外');
            }
        });
    }
}
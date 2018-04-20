$(document).ready(function (e) {

  var match2= ["image/JPEG;base64","image/PNG;base64","image/JPG;base64"];
  var imagefile;
  var filename;
  var filenameNoEx;
  var exten;

  $("#uploadimage").on('submit',(function(e) {
    e.preventDefault();
    $("#message").empty();
    $('#loading').show();
    $.ajax({
      url: "https://equal-ais.appspot.com",
      type: "POST",
      data: new FormData(this),
      contentType: false,
      responseType: imagefile,
      cache: false,
      processData:false,
      success: function(data, textStatus, jqXHR)
      {
        $('#loading').hide();

        var a = document.createElement("a");
        a.style = "display: none";
        var header = jqXHR.getResponseHeader('content-type');

        if(header==match2[0])
        {
          exten = ".jpeg";
        }
        else if (header==match2[1]) {
          exten = ".png";
        }
        else if (header==match2[2]) {
          exten = ".jpg";
        }

        filenameNoEx = filename.substring(0, filename.lastIndexOf('.'));

        a.href = "data:" + imagefile +";base64," + data;
        a.download = 'equalAIs_' + filenameNoEx + exten;
        a.innerHTML = 'download';
        a.target = '_blank';
        a.className = "downl";
        document.body.appendChild(a);

        if (window.confirm('Click OK to download your equalAIsed picture'))
        {
          $('.downl')[0].click();
        };

      }
    });
  }));

  $(function() {
    $("#file").change(function() {
      var file = this.files[0];
      imagefile = file.type;
      filename = file.name;
      var match= ["image/jpeg","image/png","image/jpg"];
      if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
      {
        alert("Please Select A valid Image File. Only jpeg, jpg and png Images type allowed")
        return false;
      }
      else
      {
        var reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        $('.submit').click();
      }
    });
  });

});

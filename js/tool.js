$(document).ready(function (e) {

  var match2= ["image/JPEG;base64","image/PNG;base64","image/JPG;base64"];
  var imagefile;
  var filename;
  var filenameNoEx;
  var exten;

  // Default Local docker address: "http://0.0.0.0:8080" 

  $("#uploadimage").on('submit',(function(e) {
    e.preventDefault();
    $("#message").empty();
    $('#loading').show();
    $.ajax({
      url: "https://equalais.ue.r.appspot.com",
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

        filenameNoEx = filename.substring(0, filename.lastIndexOf('.'));

        a.href = "data:" + imagefile +";base64," + data;
        a.download =  filenameNoEx + "_equalAIs_app.png";
        a.innerHTML = 'download';
        a.target = '_blank';
        a.className = "downl";
        document.body.appendChild(a);

        if (window.confirm('equalAIs has completed running. Click OK to download your image.'))
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
        alert("Please select a valid image format. Only jpeg, jpg and png image type are allowed.")
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

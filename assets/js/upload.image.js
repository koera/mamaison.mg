import { BASE_URL } from './constant'

const $ = require('jquery')

let imageIndex = $('#image-index').val()

const url = `${BASE_URL}/mon-compte/ajout-propriete/gallery`

function readURL(input) {

    if (input.files && input.files[0]) {
      
    }
}

$('#btn-upload-image').on('change',function(event){
    let file = event.target.files
    let data = new FormData();
    data.append('file',file[0])


    if(typeof imageIndex === 'undefined'){
        imageIndex = 0
    }

    if( imageIndex == 6)
        imageIndex = 0;

    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, 
        contentType: false, 
        success: function(data, textStatus, jqXHR)
        {
            if(typeof data.error === 'undefined')
            {
                var reader = new FileReader();
  
                reader.onload = function(e) {
                    $(`#image-${imageIndex}`).attr('src', e.target.result);
                    $(`#input-image-${imageIndex}`).attr('value', data.gallery_id);
                    imageIndex++;
                }
            
                reader.readAsDataURL(file[0]);
            }
            else
            {
                console.log('ERRORS: ' + data.error);
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log('ERRORS: ' + textStatus);
            console.log('ERRORS: ' + jqXHR);
            console.log('ERRORS: ' + errorThrown);
        }
    });
});



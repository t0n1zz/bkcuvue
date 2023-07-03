
@extends('_layouts.layout')

@section('css')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
@stop
@section('content')

{{-- Loading Modal --}}
<div id="loadingModal" class="modal fade bd-example-modal-lg" data-backdrop="static" data-keyboard="false" tabindex="-1">
  <div class="modal-dialog modal-sm">
      <div class="modal-content" style="width: 48px">
          <span class="fa fa-spinner fa-spin fa-3x"></span>
      </div>
  </div>
</div>

{{-- Message Modal --}}
<div class="modal" id="modalMessage" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title"></h5>
        </div>
        <div class="modal-body" id="modal-body" style="align-self: center">

        </div>
        <div class="modal-footer" style="align-self: center">
          <button type="button" class="btn btn-secondary" id="modalTutup">Tutup</button>
        </div>
      </div>
    </div>
  </div>
<!-- content -->
<section id="content" style="text-align: start;margin-top:10px">
  	
    <div class="col-md-5">
        <form id="login-form" name="login-form" class="nobottommargin" action="#" method="POST">
            @csrf
            <h3>MASUK KE AKUN</h3>

            <div class="col_full">
                <label for="no_ba">No. BA:</label>
                <input type="text" id="no_ba" name="no_ba" value="" class="form-control" placeholder="Masukkan Nomor BA">
            </div>

            <div class="col_full">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="" class="form-control" placeholder="Masukkan Password">
            </div>

            <div class="alert alert-danger" role="alert" id="alert">
              Password dan No. BA Harus Diisi
            </div>
            
            <div class="col_full">
                <button class="button button-3d nomargin" type="button" id="login" name="login">Login</button>
            </div>
        </form>
    </div>
</section>

@stop

@section('js')
<script type="text/javascript">

function submit() {
  $('#alert').hide();
  var no_ba = $('#no_ba').val();
  var password = $('#password').val();
  if(no_ba == '' || password==''){
    $('#alert').show();
  }else{
    $('#loadingModal').show();
    $(".modal-backdrop").show();
    $('#loadingModal').modal('show');
    $.ajax({
              url: "/login",
              cache: false,
              type: 'post',
              dataType: 'json',
              data: {
                  "_token": "{{ csrf_token() }}",
                  "no_ba" : no_ba,
                  "password": password,
              },

      success: function(response){
                if(response.type=='not auth'){
                  $('#modal-body').html(response.message);
                  $('#modal-title').html('Kesalahan');
                  $('#modalMessage').modal('show');
                  $('#loadingModal').hide();
                  $(".modal-backdrop").hide();
                }else{
                    if(response.message=='editpass'){
                      window.location.href = '/editpass';
                    }else{
                      window.location= response.url;
                    }
                }
              },
      error: function(){
  
      }
              });
            }
}
   $(document).ready(function(){

    $('body').keypress(function(e){
      if (e.keyCode == 13)
      {
          submit()
      }
    });
        $('#modalTutup').click(function() {
          $('#modalMessage').modal('hide');
        });

        $("#login").click(function(){
          submit()
        });
   });
</script>

<style>
  .bd-example-modal-lg .modal-dialog{
    display: table;
    position: relative;
    margin: 0 auto;
    top: calc(50% - 24px);
  }
  
  .bd-example-modal-lg .modal-dialog .modal-content{
    background-color: transparent;
    border: none;
  }

  .alert{
    display: none;
  }
</style>
@stop

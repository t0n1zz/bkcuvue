
@extends('_layouts.layout')

@section('css')

@stop
@section('content')

<section id="content" style="text-align: start">
    <div class="col-md-5">
        <form id="form-ubah-password" name="form-ubah-password" class="nobottommargin" action="#" method="post">
            @csrf
            <h3>Ubah Password</h3>

            <div class="col_full">
                <label for="password">Password Baru:</label>
                <input type="password" id="password" name="password" value="" class="form-control" placeholder="Masukkan Password Baru">
                @if($errors->any())
                    <div class="error">{{ $errors->first('firstname') }}</div>
                @endif
            </div>

            <div class="col_full">
                <label for="password_confirmation">Ulangi Password Baru:</label>
                <input type="password" id="password_confirm" name="password_confirmation" value="" class="form-control" placeholder="Masukkan Ulang Password Baru">
                @if($errors->any())
                    <div class="error">{{ $errors->first('firstname') }}</div>
                @endif
            </div>
            
            <div class="col_full">
                <button class="button button-3d nomargin" id="ubah-password" name="ubah-password" value="ubah_password">Ubah Password</button>
            </div>
        </form>
    </div>

</section>

@stop


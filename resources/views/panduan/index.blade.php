@extends('panduan.layout')

@section('content')
  @include('panduan.pengantar')
  @include('panduan.pengenalan')
  @include('panduan.login')
  @include('panduan.dashboard')
  @include('panduan.komponen')
  @include('panduan.profile')
  @include('panduan.artikel')
  @include('panduan.artikelKategori')
  @include('panduan.artikelPenulis')
  @include('panduan.diklatBKCU')
@stop

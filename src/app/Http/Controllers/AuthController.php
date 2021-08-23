<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
 public function login(Request $request) {
  $data = array(
   'title' => 'Login'
  );
  return view('auth.login', $data);
 }

 public function forget_password(Request $request) {
  $data = array(
   'title' => 'Forget Password'
  );

  return view('auth.forget', $data);
 }

 public function register(Request $request) {
  $data = array(
   'title' => 'Register'
  );

  return view('auth.register', $data);
 }
}

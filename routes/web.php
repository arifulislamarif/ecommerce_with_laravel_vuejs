<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Frontend\WebsiteController;

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

// ============= Frontend Routes ===========
Route::get('/', [WebsiteController::class, 'index'])->name('flipmart.index');

<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Frontend\WebsiteController;
use App\Http\Controllers\Backend\BackendController;

Auth::routes();

// ============= Backend Routes ===========
Route::get('/home', [BackendController::class, 'index'])->name('home');

// ============= Frontend Routes ===========
Route::get('/', [WebsiteController::class, 'index'])->name('flipmart.index');

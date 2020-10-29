<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Frontend\WebsiteController;
use App\Http\Controllers\Backend\BackendController;
use App\Http\Controllers\CategoryController;

Auth::routes();

// // ============= Backend Routes ===========
Route::post('/logoutt', function(){
    Auth::logout();
});

Route::middleware(['auth'])->prefix('home')->group(function () {
    Route::get('/', [BackendController::class, 'admin'])->name('home');
});

Route::middleware(['auth'])->group(function () {
    //Category Route
    Route::resource('category', CategoryController::class);
    Route::post('category/inactive/{id}', [CategoryController::class, 'inactive']);
    Route::post('category/active/{id}', [CategoryController::class, 'active']);
});



// // ============= Frontend Routes ===========
// Route::get('/', [WebsiteController::class, 'index'])->name('flipmart.index');


// Route::get('/', function(){
//     return view('welcome');
// });

// Route::get('/{any}',  function(){
//     return view('welcome');
// })->where('any', '^(?!api).*$');

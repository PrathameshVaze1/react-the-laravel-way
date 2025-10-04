<?php

use Inertia\Inertia;
use App\Models\Puppy;
use App\Http\Resources\PuppyResource;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'puppies' => PuppyResource::collection(Puppy::all()->load(['user'])),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

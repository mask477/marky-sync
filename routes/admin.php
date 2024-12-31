<?php

use App\Http\Controllers\UserController;
use Glhd\Gretel\Routing\ResourceBreadcrumbs;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth', 'admin']], function () {

    Route::resource('users', UserController::class)->breadcrumbs(function (ResourceBreadcrumbs $breadcrumbs) {
        $breadcrumbs
            ->index('Users', 'dashboard')
            ->create('New User', '.index')
            ->show('User', '.index');
    });

    Route::get('settings', function () {
        return inertia('Dashboard');
    })->name('settings.index')
        ->breadcrumb("Settings", "dashboard");

    Route::get('logs', function () {

        return inertia('Dashboard');
    })->name('logs.index')
        ->breadcrumb("Logs", "dashboard");
});
